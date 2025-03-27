import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

class SpineExperience {
  constructor() {
    // Setup
    this.container = document.getElementById('canvas-container');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    
    // Tracking cursor position
    this.cursor = {
      x: 0,
      y: 0
    };
    
    // Timing
    this.clock = new THREE.Clock();
    this.time = 0;
    
    // Scroll tracking
    this.scrollY = 0;
    this.scrollProgress = 0;
    this.lastScrollY = 0;
    this.scrollDirection = 0; // -1: scrolling up, 0: not scrolling, 1: scrolling down
    this.lastScrollTime = 0;
    
    this.init();
    this.setupEvents();
    this.setupGSAP();
  }
  
  init() {
    // Create scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x15202a);
    
    // Create camera
    this.camera = new THREE.PerspectiveCamera(35, this.width / this.height, 0.1, 1000);
    this.camera.position.z = 12; // Moved back to see more of the scene
    
    // Create renderer
    this.renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);
    
    // Post processing with reduced bloom effect
    this.setupPostProcessing();
    
    // Add lighting
    this.setupLighting();
    
    // Load spine model
    this.loadSpineModel();
    
    // Create spiral path and frames
    this.createCircularPath();
    this.createVideoFrames();
    this.createUnderwaterParticles();

    // Setup hover effects (simplified to remove zoom)
    this.setupHoverEffects();
    
    // Start animation loop
    this.animate();
  }
  
  setupPostProcessing() {
    this.composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    this.composer.addPass(renderPass);
    
    // Reduced bloom effect
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(this.width, this.height),
      0.7,  // Reduced strength
      0.4,  // Reduced radius
      0.3   // Threshold
    );
    this.composer.addPass(bloomPass);
  }
  
  setupLighting() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);
    
    // Main directional light
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(1, 1, 1);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    this.scene.add(mainLight);
    
    // Accent lights for glow
    const blueLight = new THREE.PointLight(0xf2f2f2, 2.5, 15);
    blueLight.position.set(-2, 1, 2);
    this.scene.add(blueLight);
    
    const purpleLight = new THREE.PointLight(0xf2f2f2, 2.5, 15);
    purpleLight.position.set(2, -1, 2);
    this.scene.add(purpleLight);
    
    // Add additional rim light
    const rimLight = new THREE.PointLight(0xf2f2f2, 2, 15);
    rimLight.position.set(0, 0, -5);
    this.scene.add(rimLight);
  }
  
  loadSpineModel() {
    // Loading screen/progress
    const loadingManager = new THREE.LoadingManager();
    loadingManager.onProgress = (url, loaded, total) => {
      const percent = Math.round(loaded / total * 100);
      document.querySelector('.loading-progress').style.width = `${percent}%`;
      document.querySelector('.loading-text').textContent = `Loading Experience... ${percent}%`;
    };
    
    loadingManager.onLoad = () => {
      setTimeout(() => {
        document.querySelector('.loading-screen').style.opacity = '0';
        setTimeout(() => {
          document.querySelector('.loading-screen').style.display = 'none';
        }, 1000);
      }, 500);
    };
    
    // Create loader with the loading manager
    const loader = new GLTFLoader(loadingManager);
    
    // Load the spine model - replace with your model path
    loader.load(
      'https://res.cloudinary.com/df3z4ndtu/image/upload/v1742829114/spine_w8mnar.glb',
      (gltf) => {
        this.spineModel = gltf.scene;
        
        const textureLoader = new THREE.TextureLoader();
        // Load different texture maps
        const baseTexture = textureLoader.load('https://res.cloudinary.com/df3z4ndtu/image/upload/v1742858962/cracked_ice_basecolor_ms2i91.png');
        const normalTexture = textureLoader.load('https://res.cloudinary.com/df3z4ndtu/image/upload/v1742858963/alien_cracked_2_normal_ks19pf.png');
        const roughnessTexture = textureLoader.load('https://res.cloudinary.com/df3z4ndtu/image/upload/v1742858962/matcap-test_fp65gy.jpg');
        const emissiveTexture = textureLoader.load('https://res.cloudinary.com/df3z4ndtu/image/upload/v1742858963/cliffs_MRO_o4ieia.png');

        const spineMaterial = new THREE.MeshStandardMaterial({
          map: baseTexture,           // Main texture
          normalMap: normalTexture,   // Depth details
          roughnessMap: roughnessTexture, // Controls roughness
          metalness: 1.4, 
          emissiveMap: emissiveTexture, // Glowing effect
          emissive: new THREE.Color(0xa5a5a5),
          emissiveIntensity: 0.5
        });
        
        this.spineModel.traverse((child) => {
          if (child.isMesh) {
            child.material = spineMaterial;
          }
        });
        
        // Position and scale the model - centered and larger
        this.spineModel.scale.set(25, 10, 18);
        this.spineModel.position.set(0, 0, 3); // Center position
        
        // Add to scene
        this.scene.add(this.spineModel);
      },
      (xhr) => {
        // Progress handled by loadingManager
      },
      (error) => {
        console.error('An error occurred loading the model:', error);
      }
    );
  }

  // Add this method to your class
createUnderwaterParticles() {
  const particleCount = 200;
  const particleGeometry = new THREE.BufferGeometry();
  const particlePositions = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    // Random positions in a wide area around the scene
    particlePositions[i * 3] = (Math.random() - 0.5) * 20;
    particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }
  
  particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  
  const particleMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.05,
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending
  });
  
  this.particles = new THREE.Points(particleGeometry, particleMaterial);
  this.scene.add(this.particles);
}
  
  // Modified to create a circular path that wraps around the spine model
  createCircularPath() {
    // Define points along a circular path that wraps around the spine model
    this.pathPoints = [];
    const totalPoints = 80;
    
    // Create a path that wraps around the spine model
    for (let i = 0; i < totalPoints; i++) {
      const t = i / (totalPoints - 1);
      const angle = t * Math.PI * 4; // 2 full rotations
      
      // MODIFY: Reduce radius to bring frames closer to spine
      const radius = 2.5 + Math.sin(t * Math.PI * 2) * 0.3; // Reduced from 3.2 to 2.5 and reduced variation
      const verticalPosition = -5 + t * 10; // Start below, rise up above
      
      // Calculate position with nice distribution around spine
      const x = radius * Math.sin(angle);
      const y = verticalPosition;
      const z = 3 + radius * Math.cos(angle) * 0.8;
      
      // Determine if this point is in front or behind the spine
      const isFront = z < 3;
      
      this.pathPoints.push({
        x: x,
        y: y,
        z: z,
        frameWidth: 1.2 + Math.random() * 0.3,
        frameHeight: 0.8 + Math.random() * 0.2,
        depthPosition: isFront ? 'front' : 'behind',
        angle: angle
      });
    }
    
    // Create a curve that passes through these points
    const points = this.pathPoints.map(point => 
      new THREE.Vector3(point.x, point.y, point.z)
    );
    this.framePath = new THREE.CatmullRomCurve3(points, true);
  }
  
  createVideoFrames() {
    // Create video frames that will move along the curve
    this.framesGroup = new THREE.Group();
    this.scene.add(this.framesGroup);
    
    // Number of frames to distribute along the curve - increased for more even distribution
    this.totalFrames = 10; // Increased to reduce spacing between frames
    this.videoFrames = [];
    this.frameColors = [
      0x4a90e2, 0xe24a90, 0x4ae290, 
      0xe2e24a, 0x9e4ae2, 0xe29a4a,
      0x4a90e2, 0xa64ae2, 0x4ae2a6,
      0xe24a4a, 0x4ae2e2, 0xe2e24a,
      0x4a90e2, 0xe24a90, 0x4ae290, 
      0xe2e24a, 0x9e4ae2, 0xe29a4a
    ];
    
    // Create the video frames
    for (let i = 0; i < this.totalFrames; i++) {
      // Get position on curve - distribute frames evenly
      const t = i / this.totalFrames;
      
      // Find the point on the curve
      const point = this.framePath.getPoint(t);
      
      // Find closest defined point in pathPoints for dimensions
      let closestPoint = this.pathPoints[0];
      let minDist = Infinity;
      
      this.pathPoints.forEach(pathPoint => {
        const dist = new THREE.Vector3(pathPoint.x, pathPoint.y, pathPoint.z)
          .distanceTo(point);
        if (dist < minDist) {
          minDist = dist;
          closestPoint = pathPoint;
        }
      });
      
      // Create rounded panel with beveled edges
      const shape = new THREE.Shape();
      const width = (closestPoint.frameWidth || 1.5) * 2.5; // Multiplied by 1.5 for 50% larger
const height = (closestPoint.frameHeight || 1) * 2.5; // Multiplied by 1.5 for 50% larger
      const radius = 0.15; // corner radius

      shape.moveTo(0, radius);
      shape.lineTo(0, height - radius);
      shape.quadraticCurveTo(0, height, radius, height);
      shape.lineTo(width - radius, height);
      shape.quadraticCurveTo(width, height, width, height - radius);
      shape.lineTo(width, radius);
      shape.quadraticCurveTo(width, 0, width - radius, 0);
      shape.lineTo(radius, 0);
      shape.quadraticCurveTo(0, 0, 0, radius);

      const extrudeSettings = {
        steps: 1,
        depth: 0.05, // Reduced from 0.1
        bevelEnabled: true,
        bevelThickness: 0.02, // Reduced from 0.05
        bevelSize: 0.02, // Reduced from 0.05
        bevelSegments: 2 // Reduced from 3
    };


      const frameGeometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
      // Center the geometry
      frameGeometry.translate(-width/2, -height/2, 0);

      // Create material with reduced glow
      const frameMaterial = new THREE.MeshPhongMaterial({
        color: this.frameColors[i % this.frameColors.length],
        transparent: true,
        opacity: 0.5,
        shininess: 30,
        emissive: this.frameColors[i % this.frameColors.length],
        emissiveIntensity: 0.15,
        // Add a subtle blur effect with displacementMap
        displacementScale: 0.05,
        displacementBias: 0.05
    });
      const frame = new THREE.Mesh(frameGeometry, frameMaterial);
      
      // Position at point on curve
      frame.position.copy(point);
      
      // Apply fixed 25 degree rotation to frames
      const skewAngle = THREE.MathUtils.degToRad(25);
      
      // Make frame face the center but with fixed skew
      frame.lookAt(new THREE.Vector3(0, point.y, 3)); // Look at spine
      frame.rotateY(skewAngle); // Apply 25-degree rotation
      
      // Store frame data
      frame.userData = {
        index: i,
        initialT: t,
        currentT: t,
        pathPosition: t,
        initialPosition: point.clone(),
        depthPosition: closestPoint.depthPosition,
        fixedAngle: skewAngle // Store the fixed angle
      };
      
      this.framesGroup.add(frame);
      this.videoFrames.push(frame);
    }
  }
  
  updateScene() {
    // Time-based animation
    this.time = this.clock.getElapsedTime();
    
    // Calculate scroll velocity - for smoother animations
    const currentTime = performance.now();
    const deltaTime = currentTime - this.lastScrollTime;
    this.lastScrollTime = currentTime;
    
    // Calculate scroll direction for better movement control
    if (this.scrollProgress > this.lastScrollY) {
      this.scrollDirection = 1; // scrolling down
    } else if (this.scrollProgress < this.lastScrollY) {
      this.scrollDirection = -1; // scrolling up
    } else {
      this.scrollDirection = 0; // not scrolling
    }
    this.lastScrollY = this.scrollProgress;
    
    // Gentle floating animation for spine model
    if (this.spineModel) {
      this.spineModel.position.y = Math.sin(this.time * 0.5) * 0.2;
      
      // Add subtle rotation based on cursor
      if (this.cursor.x !== 0 && this.cursor.y !== 0) {
        this.spineModel.rotation.x += (this.cursor.y * 0.01 - this.spineModel.rotation.x) * 0.02;
        this.spineModel.rotation.z += (this.cursor.x * 0.01 - this.spineModel.rotation.z) * 0.02;
      }
    }
    if (this.particles) {
      // Make particles float slowly upward and sway
      this.particles.rotation.y = this.time * 0.05;
      
      const positions = this.particles.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        // Slow upward movement
        positions[i + 1] += 0.005;
        
        // If a particle goes too high, reset it to the bottom
        if (positions[i + 1] > 10) positions[i + 1] = -10;
        
        // Add some gentle swaying
        positions[i] += Math.sin(this.time + i) * 0.003;
        positions[i + 2] += Math.cos(this.time + i) * 0.003;
      }
      
      this.particles.geometry.attributes.position.needsUpdate = true;
    }

    this.videoFrames.forEach(frame => {
      // Smooth scaling transition
      const currentScale = frame.scale.x;
      const targetScale = frame.userData.targetScale || 1.0;
      
      // Smooth interpolation with a slower transition
      const newScale = currentScale + (targetScale - currentScale) * 0.2;
      
      // Apply the new scale
      frame.scale.set(newScale, newScale, newScale);
      
      // Optional: Add a small threshold to prevent continuous tiny updates
      if (Math.abs(targetScale - newScale) < 0.001) {
        frame.scale.set(targetScale, targetScale, targetScale);
      }
    });
  }
  
  setupGSAP() {
    // Initialize GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      // Create scroll-based animations
      gsap.timeline({
        scrollTrigger: {
          trigger: ".content",
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Increased scrub value for slower, smoother scrolling
          onUpdate: (self) => {
            // Update scroll progress
            this.scrollProgress = self.progress;
            
            // Update spine model rotation based on scroll - full 360 degree rotation
            if (this.spineModel) {
              this.spineModel.rotation.y = this.scrollProgress * Math.PI * 2;
            }
            
            // Update frames position along path
            this.updateFramesOnScroll(this.scrollProgress);
            
            // Camera movement - subtle tilt based on scroll
            // this.camera.position.y = (this.scrollProgress - 0.5) * 1.5;
            // this.camera.rotation.x = (this.scrollProgress - 0.5) * 0.15;
          }
        }
      });
    } else {
      console.warn('GSAP and/or ScrollTrigger not found. Falling back to standard scroll events.');
      // Setup standard scroll events as fallback
      window.addEventListener('scroll', () => {
        // Calculate scroll progress (0 to 1)
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        this.scrollProgress = window.pageYOffset / maxScroll || 0;
        
        // Update spine model rotation based on scroll
        if (this.spineModel) {
          this.spineModel.rotation.y = this.scrollProgress * Math.PI * 2;
        }
        
        // Update frames position along path
        this.updateFramesOnScroll(this.scrollProgress);
        
        // Camera movement - subtle tilt based on scroll
        // this.camera.position.y = (this.scrollProgress - 0.5) * 1.5;
        // this.camera.rotation.x = (this.scrollProgress - 0.5) * 0.15;
      });
    }
  }
  
  // Revised frame movement with constant speed and fixed angle
  updateFramesOnScroll(progress) {
    this.videoFrames.forEach((frame, index) => {
      // Base offset for frame spacing
      const baseOffset = index / this.totalFrames;
      
      // Current path position
      let currentPosition = frame.userData.currentT || baseOffset;
      
      // Calculate target position with wrapping
      let targetPosition = (baseOffset + progress) % 1;
      
      // Handle frame wrapping to prevent sudden jumps
      // If the difference is more than 0.5, it means we're wrapping around
      if (Math.abs(targetPosition - currentPosition) > 0.5) {
        // Adjust position to prevent the jump
        if (targetPosition > currentPosition) {
          // Frame is trying to jump from end to beginning
          targetPosition = 0;
          currentPosition = 0.99; // Place it at the end
        } else {
          // Frame is trying to jump from beginning to end
          targetPosition = 0.99;
          currentPosition = 0; // Place it at the beginning
        }
      }
      
      // Smooth interpolation (lerp) to target position
      const smoothFactor = 0.05; // Lower = smoother but slower
      let newPosition = currentPosition + (targetPosition - currentPosition) * smoothFactor;
      newPosition = newPosition % 1; // Keep within 0-1 range
      
      // Store the current position for next frame
      frame.userData.currentT = newPosition;
      
      // Get point on path for this position value
      const pointOnPath = this.framePath.getPoint(newPosition);
      
      // Update frame position
      frame.position.copy(pointOnPath);
      
      // Rest of your code for facing direction, etc.
      const lookAtPoint = new THREE.Vector3(0, frame.position.y, 3);
      frame.lookAt(lookAtPoint);
      frame.rotateY(frame.userData.fixedAngle);
      
      // Visibility logic
      const isBehindSpine = frame.position.z > 3;
      if (isBehindSpine) {
        frame.renderOrder = -1;
        frame.material.opacity = 0.4; // More ghostly when behind
    } else {
        frame.renderOrder = 1;
        frame.material.opacity = 0.5; // More translucent like in the image
    }
    });
  }
  
  setupHoverEffects() {
    // Create raycaster for hover detection
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    
    // Track which frame is currently hovered
    this.hoveredFrame = null;
    
    // Mouse move event for hover detection
    window.addEventListener('mousemove', (event) => {
      // Update mouse position for raycaster
      this.mouse.x = (event.clientX / this.width) * 2 - 1;
      this.mouse.y = -(event.clientY / this.height) * 2 + 1;
      
      // Update raycaster
      this.raycaster.setFromCamera(this.mouse, this.camera);
      
      // Check for intersections with frames
      const intersects = this.raycaster.intersectObjects(this.videoFrames);
      
      // Reset previous hover state
      this.videoFrames.forEach(frame => {
        // If this frame was previously hovered but isn't now
        if (frame.userData.isHovered && (!intersects.length || intersects[0].object !== frame)) {
          frame.userData.isHovered = false;
          frame.userData.targetScale = 1.0;
          frame.material.emissiveIntensity = 0.15;
        }
      });
      
      // Handle new hover
      if (intersects.length > 0) {
        const hoveredFrame = intersects[0].object;
        hoveredFrame.userData.isHovered = true;
        hoveredFrame.userData.targetScale = 1.1;
        hoveredFrame.material.emissiveIntensity = 0.3;
        document.body.style.cursor = 'pointer';
      } else {
        document.body.style.cursor = 'default';
      }
    });
    
    // Click event for frames
    window.addEventListener('click', (event) => {
      // Update raycaster
      this.raycaster.setFromCamera(this.mouse, this.camera);
      
      // Check for intersections with frames
      const intersects = this.raycaster.intersectObjects(this.videoFrames);
      
      if (intersects.length > 0) {
        const clickedFrame = intersects[0].object;
        // Handle frame click - could open modal, play video, etc.
        console.log("Clicked frame:", clickedFrame.userData.index);
      }
    });
  }

  
  setupEvents() {
    // Resize handler
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      
      // Update camera
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      
      // Update renderer and composer
      this.renderer.setSize(this.width, this.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.composer.setSize(this.width, this.height);
    });
    
    // Mouse move for interactive effects
    window.addEventListener('mousemove', (event) => {
      this.cursor.x = (event.clientX / this.width) * 2 - 1;
      this.cursor.y = -(event.clientY / this.height) * 2 + 1;
    });
    
    // Touch events for mobile
    window.addEventListener('touchmove', (event) => {
      if (event.touches.length > 0) {
        this.cursor.x = (event.touches[0].clientX / this.width) * 2 - 1;
        this.cursor.y = -(event.touches[0].clientY / this.height) * 2 + 1;
      }
    });
  }
  
  animate() {
    requestAnimationFrame(this.animate.bind(this));
    
    // Update scene elements with time-based animations
    this.updateScene();
    
    // Render scene with post-processing
    this.composer.render();
  }
}

// On DOM loaded
window.addEventListener('DOMContentLoaded', () => {
  // Make sure GSAP and ScrollTrigger are loaded
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not found. Please include GSAP in your project.');
    
    // Load GSAP dynamically if needed
    const gsapScript = document.createElement('script');
    gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    document.head.appendChild(gsapScript);
    
    gsapScript.onload = () => {
      const scrollTriggerScript = document.createElement('script');
      scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      document.head.appendChild(scrollTriggerScript);
      
      scrollTriggerScript.onload = () => {
        // Initialize experience after scripts are loaded
        const experience = new SpineExperience();
      };
    };
  } else {
    // Initialize directly if GSAP is already available
    const experience = new SpineExperience();
  }
});