# Three.js Examples Collection

<p align="center">
    <img src="https://threejs.org/files/favicon_white.ico" width="64" height="64" alt="Three.js Logo">
    <br>
    <strong>221+ Three.js Examples</strong>
    <br>
    <br> English | <a href="EXAMPLES_LIST.md">中文示例列表</a>
</p>

---

## 🎯 Overview

A comprehensive collection of **221+ Three.js examples** covering a wide range of topics from basic geometries to advanced shaders, animations, and real-world applications. Built with **Three.js r179** using modern ES module imports.

## 📊 Completion Statistics

| Category | Total | Completed | Status |
|----------|-------|-----------|--------|
| Basic Examples | 36 | 36 | 100% ✅ |
| Post-processing | 9 | 9 | 100% ✅ |
| Particles | 22 | 19 | 86% |
| Shaders | 84 | 71 | 85% |
| Applications | 65 | 59 | 91% |
| Animations | 15 | 13 | 87% |
| Extensions | 11 | 11 | 100% ✅ |
| Games | 3 | 1 | 33% |
| Physics | 2 | 2 | 100% ✅ |
| **Total** | **247** | **221** | **89%** |

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd three.js-examples-2
```

### 2. Start Local Server

```bash
# Using Python
python -m http.server 8000

# Or using Node.js
npx serve
```

### 3. Open in Browser

```
http://localhost:8000
```

## 📁 Project Structure

```
three.js-examples-2/
├── index.html              # Main navigation page
├── EXAMPLES_LIST.md        # Complete example list (中文)
├── examples/z258/          # Example files
│   ├── basic-*.html        # Basic examples (36)
│   ├── animation-*.html    # Animation effects (13)
│   ├── application-*.html  # Application scenarios (59)
│   ├── shader-*.html       # Shaders (71)
│   ├── particle-*.html     # Particles (19)
│   ├── effectComposer-*.html # Post-processing (9)
│   ├── expand-*.html       # Extensions (11)
│   ├── physics-*.html      # Physics (2)
│   ├── game-*.html         # Games (1)
│   └── effect-*.html       # Effects (2)
├── images/                 # Thumbnails
├── libs/                   # Third-party libraries
│   └── three/r179/         # Three.js r179
├── js/
│   └── data.js            # Example data configuration
└── docs/                  # Documentation
    └── creating-examples.md
```

## 🎨 Example Categories

### 1. Basic Examples (36)
- Model loading (GLTF, FBX, OBJ)
- Scene creation and environment
- Camera controls and animations
- Geometry and transformations
- Rendering and effects
- File operations

### 2. Post-processing (9)
- Bloom effects
- Saturation adjustment
- Edge blurring
- Custom mask passes
- UV transformations
- Afterimage effects
- Deferred lighting
- Snow effects

### 3. Particles (19)
- Snow, rain, smoke
- Fire and explosions
- Galaxy and stars
- Earth particles
- Text particles
- Mouse trail particles

### 4. Shaders (71)
- City and architectural effects
- Nature and weather
- Special effects and animations
- Scanning and detection
- Materials and textures
- Dissolve and transform
- Flow and lighting effects

### 5. Applications (59)
- Data visualization
- Interactive roaming
- Building and lines
- Models and effects
- Measurement tools
- Terrain and maps

### 6. Animations (13)
- GSAP animations
- Theatre.js
- Keyframe animations
- Model animations
- Curve animations
- Curl animations

### 7. Extensions (11)
- Local model loading
- IndexedDB usage
- 3D Tiles loading
- 3D maps
- Heatmaps
- Multi-view

### 8. Physics (2)
- Cannon.js physics
- Ammo.js physics

### 9. Games (1)
- 3D Snake

## ✨ Features

- **🎮 Interactive Controls**: lil-gui panels for real-time parameter adjustment
- **📸 Screenshot Support**: Built-in thumbnail generation
- **🌐 ES Modules**: Modern importmap-based module system
- **📱 Responsive Design**: Works on all device sizes
- **🔍 Code Viewer**: Integrated syntax highlighting with Prism.js
- **⚡ Local Assets**: All resources localized for fast loading
- **🎯 OrbitControls**: Smooth camera navigation

## 🛠️ Tech Stack

- **Three.js r179** - Core 3D library
- **lil-gui** - Parameter tuning panels
- **GSAP** - Advanced animations
- **anime.js** - Lightweight animations
- **Cannon.js/Ammo.js** - Physics engines
- **Prism.js** - Code syntax highlighting

## 📝 Documentation

- [Creating Examples Guide](docs/creating-examples.md) - How to create new examples
- [Complete Example List](EXAMPLES_LIST.md) - Full categorized list (中文)

## 🤝 Contributing

1. Follow the [example template](examples/template.html)
2. Include proper comments and documentation
3. Add screenshot support for thumbnails
4. Test across different browsers

## 📄 License

MIT License

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) - The amazing 3D library
- All example authors and contributors
- Open source community

---

<p align="center">
    <strong>⭐ Star this repository if you find it helpful!</strong>
</p>
