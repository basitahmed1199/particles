// Main Three.js library
import * as THREE from 'https://cdn.skypack.dev/three@0.132.2';

// Three.js examples (using skypack.dev)
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/postprocessing/UnrealBloomPass.js';
import { FontLoader, TextGeometry } from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
  // Particle configurations
  const particlesjsConfig1 = {
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#fa02dc"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "https://res.cloudinary.com/df3z4ndtu/image/upload/v1743520977/ballpoint-isolated-transparent-background_wkpcal.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80.39107415467574,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 48.721863124045896,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };
  
  const particlesjsConfig2 = {
    // Your second config with reduced particle count
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#fa02dc"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "https://res.cloudinary.com/df3z4ndtu/image/upload/v1743520973/8e0171f5ca87e42b364c31a7aff2f5b9_oilaty.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80.39107415467574,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 48.721863124045896,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };
  
  const particlesjsConfig3 = {
    // Your third config with reduced particle count
    "particles": {
      "number": {
        "value": 200,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "image",
        "stroke": {
          "width": 0,
          "color": "#fa02dc"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "https://res.cloudinary.com/df3z4ndtu/image/upload/v1743521814/Pngtree_round_green_bubble_illustration_5447499_zunhlq.png",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80.39107415467574,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 48.721863124045896,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };

class SpineExperience {
  constructor() {

    // Add mobile detection
    this.isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // Setup
    this.container = document.getElementById('canvas-container');
    this.width = window.innerWidth;
    this.height = window.innerHeight;

     // Adjust settings for mobile
     if (this.isMobile) {
      // Reduce particle counts for mobile
      particlesjsConfig1.particles.number.value = 50;
      particlesjsConfig2.particles.number.value = 50;
      particlesjsConfig3.particles.number.value = 50;
      
      // Smaller frame sizes for mobile
      this.mobileFrameScale = 0.7;
    } else {
      this.mobileFrameScale = 1;
    }
    
    
      this.hasShownAllFrames = false;
this.lastFrameIndexShown = -1;

     // New properties for rotation control
     this.frameRotationMultiplier = 0.1; // Default multiplier
     this.spineRotationMultiplier = 1; // Default multiplier

    this.font = null; // Add font loader property
    this.frameTexts = []; // Array to store text meshes

    // Define sample texts in the constructor
    this.frameSampleTexts = [
      "Explore", 
      "Connect", 
      "Discover", 
      "Transform", 
      "Innovate", 
      "Journey", 
      "Evolve", 
      "Imagine", 
      "Create", 
      "Inspire"
    ];

  

    // NEW: Center position tracking
    this.centerPosition = new THREE.Vector3(0, 0, 3); // Center of the scene
    this.centerThreshold = 1.5; // Distance threshold to be considered "at center"
    this.activeFrameIndex = -1; // Current frame at center (-1 means no frame is at center)
    this.onFrameAtCenter = null; // Callback function for when a frame reaches center

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
  
  // NEW: Method to set callback for when a frame reaches center
  setFrameAtCenterCallback(callback) {
    if (typeof callback === 'function') {
      this.onFrameAtCenter = callback;
    }
  }

  createParticleSystem() {
    // Create a container group for all particles
    this.particleSystems = new THREE.Group();
    this.scene.add(this.particleSystems);
  
    // Load all three particle configurations with different tints
    this.loadParticlesFromConfig(particlesjsConfig1, 0x4a90e2); // Blue tint
    this.loadParticlesFromConfig(particlesjsConfig2, 0xe24a90); // Pink tint
    this.loadParticlesFromConfig(particlesjsConfig3, 0x4ae290); // Green tint
  }

loadParticlesFromConfig(config, tintColor) {
  const particlesCount = config.particles.number.value;
  
  // Create texture loader
  const textureLoader = new THREE.TextureLoader();
  
  // Load the particle image
  textureLoader.load(config.particles.shape.image.src, (texture) => {
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const colors = new Float32Array(particlesCount * 3);
    const sizes = new Float32Array(particlesCount);
    
    // Set up particle positions, colors, and sizes
    for (let i = 0; i < particlesCount; i++) {
      // Positions
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Colors
      const color = new THREE.Color(tintColor);
      color.offsetHSL(0, 0, Math.random() * 0.2 - 0.1);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      // Sizes
      sizes[i] = config.particles.size.value * (0.5 + Math.random() * 0.5);
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Create material with texture
    const particlesMaterial = new THREE.PointsMaterial({
      map: texture,
      size: config.particles.size.value * 0.1,
      vertexColors: true,
      transparent: true,
      opacity: config.particles.opacity.value,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      alphaTest: 0.01 // Helps with transparency
    });
    
    // Create particle system
    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    
    // Store movement parameters
    particleSystem.userData = {
      speed: config.particles.move.speed * 0.1,
      direction: config.particles.move.direction,
      random: config.particles.move.random
    };
    
    // Add to the particle systems group
    this.particleSystems.add(particleSystem);
  });
}
  
  // Modify init method to initialize debug visualization
init() {
  // Create scene
  this.scene = new THREE.Scene();
  this.scene.background = new THREE.Color(0x15202a);
   // Adjust camera FOV for mobile
   const fov = this.isMobile ? 40 : 35;
   this.camera = new THREE.PerspectiveCamera(fov, this.width / this.height, 0.1, 1000);
   
   // Position camera further back on mobile for better view
   this.camera.position.z = this.isMobile ? 15 : 12;
   
   // Create renderer with mobile-optimized settings
  // In your SpineExperience constructor:
this.renderer = new THREE.WebGLRenderer({ 
  antialias: !this.isMobile,
  powerPreference: "high-performance",
  precision: this.isMobile ? "lowp" : "highp"
});
  
  // Create camera
  this.camera = new THREE.PerspectiveCamera(35, this.width / this.height, 0.1, 1000);
  this.camera.position.z = 12;
  
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
  this.createParticleSystem();


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
    // const bloomPass = new UnrealBloomPass(
    //   new THREE.Vector2(this.width, this.height),
    //   0.7,  // Reduced strength
    //   0.4,  // Reduced radius
    //   0.3   // Threshold
    // );
    // this.composer.addPass(bloomPass);
  }
  setupLighting() {
    // Keep ambient light for general illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);
    
    // Main directional light - keep this for shading
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.0); // Slightly reduced intensity
    mainLight.position.set(1, 1, 1);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    this.scene.add(mainLight);
    
    // Reduce intensity of accent lights
    const blueLight = new THREE.PointLight(0xf2f2f2, 1.5, 15); // Reduced from 2.5
    blueLight.position.set(-2, 1, 2);
    this.scene.add(blueLight);
    
    const purpleLight = new THREE.PointLight(0xf2f2f2, 1.5, 15); // Reduced from 2.5
    purpleLight.position.set(2, -1, 2);
    this.scene.add(purpleLight);
    
    const rimLight = new THREE.PointLight(0xf2f2f2, 1.0, 15); // Reduced from 2.0
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

  createUnderwaterParticles() {
    const particleCount = 800;
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
      size: 0.1,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending
    });
    
    this.particles = new THREE.Points(particleGeometry, particleMaterial);
    this.scene.add(this.particles);
  }
  
  // Modified to create a circular path that wraps around the spine model
  // Modified to create a circular path that wraps around the spine model
// with frames coming from bottom left instead of bottom right
createCircularPath() {
  // Define points along a circular path that wraps around the spine model
  this.pathPoints = [];
  const totalPoints = 80;
  
  // Create a path that wraps around the spine model
  for (let i = 0; i < totalPoints; i++) {
    const t = i / (totalPoints - 1);
    const angle = t * Math.PI * 4; // 2 full rotations
    
    // Radius is the same
    const radius = 2.8 + Math.sin(t * Math.PI * 2) * 0.3;
    const verticalPosition = -5 + t * 10; // Start below, rise up above
    
    // MODIFIED: Inverse the x position to make frames come from left side
    // Changed sin to -sin to mirror the x coordinates
    const x = -radius * Math.sin(angle);
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

  loadFont() {
    return new Promise((resolve, reject) => {
      const loader = new FontLoader();
      loader.load(
        'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
        (font) => {
          console.log('Font loaded successfully');
          this.font = font;
          resolve(font);
        },
        (progress) => {
          console.log('Font loading progress:', progress);
        },
        (error) => {
          console.error('Error loading font:', error);
          reject(error);
        }
      );
    });
  }

  createFrameText(text, frame, width, height) {
    if (!this.font) return null;
  
    const textGeometry = new TextGeometry(text, {
      font: this.font,
      size: 0.4,  // Smaller text size
      height: 0.05,
      curveSegments: 4,
      bevelEnabled: false
    });
  
    textGeometry.computeBoundingBox();
    textGeometry.center();
  
    const textMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffffff,
      transparent: false,
      opacity: 0.7
    });
  
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  
    // Create a billboard effect - always face the camera
    const billboardMatrix = new THREE.Matrix4();
    billboardMatrix.makeRotationFromQuaternion(
      new THREE.Quaternion().setFromRotationMatrix(
        new THREE.Matrix4().extractRotation(this.camera.matrixWorld)
      )
    );
  
    // Position text slightly in front of the frame
    textMesh.position.copy(frame.position);
    textMesh.position.z -= 0.1;
    
    // Apply billboard rotation
    textMesh.quaternion.setFromRotationMatrix(billboardMatrix);
    
  
    // Reset scale to match frame
    textMesh.scale.set(1, 1, 1);
  
    // Store additional userData for animation
    textMesh.userData = {
      ...frame.userData,
      initialOpacity: 0.7,
      fadeSpeed: 0.03 + Math.random() * 0.02  // Slight variation in fade speed
    };
  
    return textMesh;
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
      const width = (closestPoint.frameWidth || 1.5) * 2.5 * this.mobileFrameScale;
      const height = (closestPoint.frameHeight || 1) * 2.5 * this.mobileFrameScale;
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
        shininess: 10,
        
        emissive: new THREE.Color(0x000000),
        emissiveIntensity: 0,
        // Add a subtle blur effect with displacementMap
        // displacementScale: 0.05,
        // displacementBias: 0.05
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
        isInteractive: true,  // <-- Add this flag
        fixedAngle: skewAngle, // Store the fixed angle
        isAtCenter: false, // NEW: Track if frame is at center
        text: this.frameSampleTexts[i % this.frameSampleTexts.length] // NEW: Store the text
      };
      
      this.framesGroup.add(frame);
      this.videoFrames.push(frame);
    }

    // Modify text addition logic
    this.loadFont().then(() => {
      console.log('Font loaded, creating texts. Total frames:', this.videoFrames.length);
      
      this.videoFrames.forEach((frame, index) => {
        try {
          const text = this.createFrameText(
            this.frameSampleTexts[index % this.frameSampleTexts.length] || `Frame ${index + 1}`, 
            frame, 
            frame.geometry.parameters?.width || 1, 
            frame.geometry.parameters?.height || 1
          );

          if (text) {
            console.log('Text created:', text);
            this.scene.add(text);  // Add directly to scene instead of framesGroup
            this.frameTexts.push(text);
          } else {
            console.warn('Failed to create text for frame', index);
          }
        } catch (error) {
          console.error('Error creating frame text:', error);
        }
      });
    }).catch(error => {
      console.error('Font loading completely failed:', error);
    });
    
  }
  // Add this to your updateScene method to animate particles
updateParticles() {
  if (!this.particleSystems) return;
  
  const time = this.clock.getElapsedTime();
  
  this.particleSystems.children.forEach(particleSystem => {
    const positions = particleSystem.geometry.attributes.position.array;
    const userData = particleSystem.userData;
    
    for (let i = 0; i < positions.length; i += 3) {
      // Apply movement based on configuration
      switch (userData.direction) {
        case 'none':
          // Random movement if enabled
          if (userData.random) {
            positions[i] += (Math.random() - 0.5) * userData.speed;
            positions[i + 1] += (Math.random() - 0.5) * userData.speed;
            positions[i + 2] += (Math.random() - 0.5) * userData.speed;
          }
          break;
        case 'top':
          positions[i + 1] += userData.speed;
          break;
        case 'bottom':
          positions[i + 1] -= userData.speed;
          break;
        // Add other directions as needed
      }
      
      // Boundary check - wrap around if particles go too far
      for (let j = 0; j < 3; j++) {
        if (Math.abs(positions[i + j]) > 15) {
          positions[i + j] = (Math.random() - 0.5) * 10;
        }
      }
      
      // Add subtle swaying motion
      positions[i] += Math.sin(time + i) * 0.01;
      positions[i + 2] += Math.cos(time + i * 1.3) * 0.01;
    }
    
    particleSystem.geometry.attributes.position.needsUpdate = true;
    
    // Optional: Rotate the entire system slowly
    particleSystem.rotation.y = time * 0.05;
  });
}
  
  updateScene() {
    // Time-based animation
    this.time = this.clock.getElapsedTime();
    
    // Calculate scroll velocity - for smoother animations
  const currentTime = performance.now();
  const deltaTime = currentTime - this.lastScrollTime;
  this.lastScrollTime = currentTime;
  this.updateParticles();
  
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
      
      // Only animate if there's a difference
      if (Math.abs(targetScale - currentScale) > 0.001) {
        // Smooth interpolation with damping
        const newScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.2);
        frame.scale.set(newScale, newScale, newScale);
      }
      
      // Visibility logic
      const isBehindSpine = frame.position.z > 3;
      if (isBehindSpine) {
        frame.renderOrder = -1;
        frame.material.opacity = 0.4;
      } else {
        frame.renderOrder = 1;
        frame.material.opacity = 0.5;
      }
    });
    
  this.frameTexts.forEach((textMesh) => {
    const correspondingFrame = this.videoFrames.find(
      frame => frame.userData.index === textMesh.userData.index
    );

    if (correspondingFrame) {
      // 1. Position text relative to frame (with small z-offset)
      textMesh.position.copy(correspondingFrame.position);
      textMesh.position.z -= 0.1;
      textMesh.quaternion.copy(correspondingFrame.quaternion);

      // 2. Determine visibility - BEHIND spine (z > 3)
      const isBehindSpine = correspondingFrame.position.z >= 4;
      
      // 3. Immediate visibility control (no lerp)
      if (isBehindSpine) {
        // Show immediately when behind spine
        if (textMesh.material.opacity < 0.01) {
          textMesh.material.opacity = textMesh.userData.initialOpacity;
        }
      } else {
        // Hide completely when in front
        textMesh.material.opacity = 0;
      }

      // 4. Force render update
      textMesh.material.needsUpdate = true;
      textMesh.visible = textMesh.material.opacity > 0.01;
     
    }
  });
     // Update debug trackers
  if (this.frameTrackers && this.frameTrackers.length > 0) {
    this.videoFrames.forEach((frame, index) => {
      if (index < this.frameTrackers.length) {
        // Update tracker position to match frame's position on curve
        const tracker = this.frameTrackers[index];
        
        // Get current path position
        const pointOnPath = this.framePath.getPoint(frame.userData.currentT || 0);
        tracker.position.copy(pointOnPath);
        
        // Highlight active frame tracker
        if (frame.userData.isAtCenter) {
          tracker.material.color.set(0xffffff);
          tracker.scale.set(1.5, 1.5, 1.5);
        } else {
          tracker.material.color.set(this.frameColors[index % this.frameColors.length]);
          tracker.scale.set(1.0, 1.0, 1.0);
        }
      }
    });
  }
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
          end: "+=500%",
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
      });
    }
  }

  // Method to dynamically adjust rotation
  setRotationMultipliers(frameMultiplier = 1, spineMultiplier = 1) {
    this.frameRotationMultiplier = frameMultiplier;
    this.spineRotationMultiplier = spineMultiplier;
  }


// Update frames on path with current parameters
updateFramesOnPath() {
  this.videoFrames.forEach((frame, index) => {
    // Base offset for frame spacing
    const baseOffset = index / this.totalFrames;
    
    // Reset current position if not set
    if (frame.userData.currentT === undefined) {
      frame.userData.currentT = baseOffset;
    }
    
    // Get point on path for this position value
    const pointOnPath = this.framePath.getPoint(frame.userData.currentT);
    
    // Update frame position
    frame.position.copy(pointOnPath);
    
    // Update rotation
    const lookAtPoint = new THREE.Vector3(0, frame.position.y, 3);
    frame.lookAt(lookAtPoint);
    frame.rotateY(frame.userData.fixedAngle * this.frameRotationMultiplier);
  });
}

updateFramesOnScroll(progress) {
  // Reset all frames' center status
  this.videoFrames.forEach(frame => {
    frame.userData.isAtCenter = false;
  });
  
  // Track the frame closest to center
  let closestFrameToCenter = null;
  let minDistanceToCenter = Infinity;
  
  this.videoFrames.forEach((frame, index) => {
    // Base offset for frame spacing
    const baseOffset = index / this.totalFrames;
    
    // Current path position
    let currentPosition = frame.userData.currentT || baseOffset;
    
    // Calculate target position with wrapping
    let targetPosition = (baseOffset + progress) % 1;
    
    // Handle frame wrapping to prevent sudden jumps
    if (Math.abs(targetPosition - currentPosition) > 0.5) {
      if (targetPosition > currentPosition) {
        targetPosition = 0;
        currentPosition = 0.99;
      } else {
        targetPosition = 0.99;
        currentPosition = 0;
      }
    }
    
    // Use configurable smoothFactor
    const smoothFactor = this.frameSmoothFactor || 0.05;
    let newPosition = currentPosition + (targetPosition - currentPosition) * smoothFactor;
    newPosition = newPosition % 1;
    
    // Store the current position for next frame
    frame.userData.currentT = newPosition;
    
    // Get point on path for this position value
    const pointOnPath = this.framePath.getPoint(newPosition);
    
    // Update frame position
    frame.position.copy(pointOnPath);
    
    // ---- PRESERVE ORIGINAL ROTATION LOGIC ----
    // Apply original rotation with configurable multiplier
    const lookAtPoint = new THREE.Vector3(0, frame.position.y, 3);
    frame.lookAt(lookAtPoint);
    frame.rotateY(frame.userData.fixedAngle * this.frameRotationMultiplier);
    
    // ---- ADD NEW SUPER FAST Y-ROTATION ----
    // Initialize rotation speed if not already set
    if (!frame.userData.superFastRotationSpeed) {
      // Very fast rotation - between 20-30 rotations per second
      frame.userData.superFastRotationSpeed = Math.random() * 10 + 25;
    }
    
    // Apply the super fast rotation (approximate for 60fps)
    const deltaTime = 0.016; 
    frame.rotateY(frame.userData.superFastRotationSpeed * deltaTime * Math.PI * 2);
    
    // Visibility logic
    const isBehindSpine = frame.position.z > 3;
    if (isBehindSpine) {
      frame.renderOrder = -1;
      frame.material.opacity = 0.4;
    } else {
      frame.renderOrder = 1;
      frame.material.opacity = 0.5;
    }
    
    // Calculate distance to center
    const distanceToCenter = new THREE.Vector3(frame.position.x, 0, frame.position.z - 3).length();
    
    // Update closest frame tracking
    if (distanceToCenter < minDistanceToCenter && !isBehindSpine) {
      minDistanceToCenter = distanceToCenter;
      closestFrameToCenter = frame;
    }
  });
    
  // If we found a close frame and it's within threshold distance
  if (closestFrameToCenter && minDistanceToCenter < this.centerThreshold) {
    // Mark this frame as at center
    closestFrameToCenter.userData.isAtCenter = true;
    
    // If this is a different frame than before, trigger callback
    if (this.activeFrameIndex !== closestFrameToCenter.userData.index) {
      this.activeFrameIndex = closestFrameToCenter.userData.index;
      
      // Highlight the active frame
      closestFrameToCenter.material.emissiveIntensity = 0.3; // Increase glow
      closestFrameToCenter.material.opacity = 0.8; // Make more visible
      
      // Scale up the active frame
      closestFrameToCenter.userData.targetScale = 1.2;
      
      // Execute callback if provided
      if (typeof this.onFrameAtCenter === 'function') {
        this.onFrameAtCenter(closestFrameToCenter.userData.index, closestFrameToCenter.userData.text);
      }
      
      // Reset other frames
      this.videoFrames.forEach(otherFrame => {
        if (otherFrame !== closestFrameToCenter) {
          otherFrame.material.emissiveIntensity = 0.15; // Reset glow
          otherFrame.userData.targetScale = 1.0; // Reset scale
        }
      });
    }
  } else {
    // No frame at center
    if (this.activeFrameIndex !== -1) {
      // Reset all frames when leaving center
      this.videoFrames.forEach(frame => {
        frame.material.emissiveIntensity = 0.15;
        frame.userData.targetScale = 1.0;
      });
      
      // Reset active frame index
      this.activeFrameIndex = -1;
      
      // Execute callback with -1 to indicate no frame is at center
      if (typeof this.onFrameAtCenter === 'function') {
        this.onFrameAtCenter(-1, null);
      }
    }
  }
}

setupHoverEffects() {
  // Setup raycaster for frame interaction
  this.raycaster = new THREE.Raycaster();
  this.mouse = new THREE.Vector2();
  
  // Unified pointer move handler for hover effects
  const handlePointerHover = (event) => {
    // Get coordinates
    const rect = this.renderer.domElement.getBoundingClientRect();
    const clientX = event.clientX || (event.touches && event.touches[0].clientX);
    const clientY = event.clientY || (event.touches && event.touches[0].clientY);
    
    if (clientX === undefined || clientY === undefined) return;
    
    this.mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

    // Update raycaster
    this.raycaster.setFromCamera(this.mouse, this.camera);
    
    // Get intersections with ALL frames (remove the filter)
    const intersects = this.raycaster.intersectObjects(this.videoFrames);

    // Reset all frames first
    this.videoFrames.forEach(frame => {
      if (!frame.userData.isAtCenter) { // Don't reset frames at center
        frame.userData.targetScale = 1.0;
      }
    });

    // Handle hover
    if (intersects.length > 0) {
      const hoveredFrame = intersects[0].object;
      hoveredFrame.userData.targetScale = 1.1; // Increase scale more
      this.renderer.domElement.style.cursor = 'pointer';
    } else {
      this.renderer.domElement.style.cursor = '';
    }
  };

  // Add event listeners - use the same handler for both
  this.renderer.domElement.addEventListener('mousemove', handlePointerHover);
  this.renderer.domElement.addEventListener('touchmove', handlePointerHover);
  
  // Reset on leave
  this.renderer.domElement.addEventListener('mouseleave', () => {
    this.videoFrames.forEach(frame => {
      if (!frame.userData.isAtCenter) {
        frame.userData.targetScale = 1.0;
      }
    });
    this.renderer.domElement.style.cursor = '';
  });
}

setupEvents() {
  // Resize event with mobile considerations
  window.addEventListener('resize', () => {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    
    // Adjust camera FOV for mobile on resize
    const fov = this.isMobile ? 45 : 35;
    this.camera.fov = fov;
    
    // Update camera
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
    
    // Update renderer and composer
    this.renderer.setSize(this.width, this.height);
    this.composer.setSize(this.width, this.height);
    
    // Adjust camera position for mobile
    this.camera.position.z = this.isMobile ? 15 : 12;
  });
  
  // Handle device orientation changes
  window.addEventListener('orientationchange', () => {
    // Small delay to ensure dimensions are correct
    setTimeout(() => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
      this.composer.setSize(this.width, this.height);
    }, 100);
  });
  
  // Additional method for frame click handling
  this.onFrameClicked = null;
}

// NEW: Method to set callback for frame clicks
setFrameClickCallback(callback) {
  if (typeof callback === 'function') {
    this.onFrameClicked = callback;
  }
}

animate() {
  requestAnimationFrame(this.animate.bind(this));
  
  // Update scene elements
  this.updateScene();
  
  // Render with post-processing
  this.composer.render();
}

// NEW: Method to programmatically update display
updateContentForFrame(frameIndex) {
  // This method can be called externally to update content
  // when a specific frame index is active
  console.log(`Updating content for frame ${frameIndex}`);
  
  // Implementation would depend on how you want to show/hide content
  // For example:
  document.querySelectorAll('.frame-content').forEach(el => {
    el.style.display = 'none';
  });
  
  const targetContent = document.querySelector(`.frame-content[data-frame="${frameIndex}"]`);
  if (targetContent) {
    targetContent.style.display = 'block';
  }
}

// NEW: Method to programmatically move to a specific frame
goToFrame(frameIndex) {
  if (frameIndex >= 0 && frameIndex < this.totalFrames) {
    // Calculate the scroll position that would put this frame at center
    const targetProgress = (frameIndex / this.totalFrames) % 1;
    
    // If using GSAP ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      const scrollTrigger = ScrollTrigger.getById('spine-scroll');
      if (scrollTrigger) {
        scrollTrigger.scroll(targetProgress);
      }
    } else {
      // Calculate scroll position without GSAP
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const targetScrollY = targetProgress * maxScroll;
      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
    }
  }
}
}

// Usage example for the SpineExperience class
document.addEventListener('DOMContentLoaded', () => {
  const spineExperience = new SpineExperience();
  
  // Set callback for when a frame reaches center
  spineExperience.setFrameAtCenterCallback((frameIndex, frameText) => {
    if (frameIndex >= 0) {
      console.log(`Frame at center: ${frameIndex} - ${frameText}`);
      
      // Update UI based on frame
      document.querySelectorAll('.frame-content').forEach(el => {
        el.classList.remove('active');
      });
      
      const contentElement = document.querySelector(`.frame-content[data-frame="${frameIndex}"]`);
      if (contentElement) {
        contentElement.classList.add('active');
      }
      
      // Update frame info display
      const frameInfoElement = document.getElementById('frame-info');
      if (frameInfoElement) {
        frameInfoElement.textContent = frameText || `Frame ${frameIndex + 1}`;
      }
    } else {
      console.log('No frame at center');
      
      // Hide all content when no frame is at center
      document.querySelectorAll('.frame-content').forEach(el => {
        el.classList.remove('active');
      });
      
      const frameInfoElement = document.getElementById('frame-info');
      if (frameInfoElement) {
        frameInfoElement.textContent = '';
      }
    }
  });
  
  // Set callback for frame clicks
  spineExperience.setFrameClickCallback((frameIndex, frameText) => {
    console.log(`Frame clicked: ${frameIndex} - ${frameText}`);
    
    // Example: Show modal with frame content
    const modal = document.getElementById('frame-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    
    if (modal && modalTitle && modalContent) {
      modalTitle.textContent = frameText || `Frame ${frameIndex + 1}`;
      modalContent.innerHTML = `<p>Content for frame ${frameIndex + 1}</p>`;
      modal.style.display = 'block';
    }
  });
  
  // Example of setting rotation multipliers
  // document.getElementById('speed-slider').addEventListener('input', (e) => {
  //   const value = parseFloat(e.target.value);
  //   spineExperience.setRotationMultipliers(value, value);
  // });
  
  // Close modal functionality
  const closeButtons = document.querySelectorAll('.close-modal');
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.getElementById('frame-modal');
      if (modal) {
        modal.style.display = 'none';
      }
    });
  });
});