# Three.js Showcase Navigator

<p align="center">
    <br> English | <a href="README-zh.md">中文</a>
</p>

Welcome to the Three.js Showcase Navigator—a professional, feature-rich platform offering an extensive array of Three.js examples. These examples span a broad spectrum from foundational concepts, lighting effects, animations, and interactions to advanced techniques and performance optimization. Designed with a modern and intuitive interface, the site promises a seamless browsing and learning experience for all users. Every asset is localized to ensure smooth performance in any network condition. The latest update uses Three.js r179 and incorporates ES module imports for a streamlined experience.

## Latest Updates (August 2025)

### 🎯 Animations & Interactions Series

- **Keyframe Animation**: Explore complex animation sequences using Three.js AnimationMixer, supporting position, rotation, and scale animations.
- **Morph Animation**: Discover smooth vertex interpolation between different geometries for dynamic morphing effects.
- **Raycasting**: Learn mouse and 3D object interaction detection and selection with Raycaster.
- **Drag-and-Drop Control**: Implement a comprehensive 3D object drag-and-drop system.

### 🖼️ Texture Loader Series

- **Basic Texture Loader**: Support for loading and applying textures of various image formats.
- **HDR Texture Loader**: Leverage RGBELoader to integrate high dynamic range environmental mapping.
- **Cubemap Texture Loader**: Create immersive skybox environments for enhanced visual effects.

### 🔤 Font & Audio Loader Optimization

- **Font Loader Improvements**: Fix issues with Chinese font stretching for a 3D text display.
- **Audio Loader**: Integrate a 3D spatial audio system paired with audio visualization effects.

### 🏗️ Model Loader Series

- **Multi-format Model Loader**: Support for loading and displaying various 3D model formats
- **GLTF Model Loader**: Load and display GLTF/GLB format 3D models
- **OBJ Model Loader**: Load and display OBJ format 3D models with materials
- **FBX Model Loader**: Load and display FBX format 3D models with animations
- **STL Model Loader**: Load and display STL format 3D models
- **DAE/COLLADA Model Loader**: Load and display DAE format 3D models
- **VTK Model Loader**: Load and display VTK format 3D models
- **PCD Point Cloud Model Loader**: Load and display PCD format point cloud data
- **3DS Model Loader**: Load and display 3DS format 3D models
- **AMF Model Loader**: Load and display AMF format 3D models
- **GCODE Model Loader**: Load and display GCODE format 3D printing models

### 📚 Documentation and Template Enhancement

- **Example Template Structure**: Strictly follow unified standards for all new examples
- **Creating Examples Guide**: Provide detailed development workflow and best practices
- **Project Review Documentation**: Summarize development experience and technical points

## Features

- **Categorized Navigation**: Easily browse examples through a structured sidebar.
- **Dynamic Display**: Each example is showcased with intuitive visuals and concise descriptions.
- **Search Functionality**: Quickly locate specific examples with built-in search.
- **Responsive Design**: Enjoy optimal viewing across all device sizes.
- **Futuristic Interface**: Modern design with sleek animations and theme.
- **Code Accessibility**: Integrated code viewing with syntax highlighting.
- **Adaptive Backgrounds**: Placeholder thumbnails with harmonious colors and icons.
- **Loading Animations**: Enhance loading phase with engaging animations.
- **Adjustable Dividers**: Resize the view between code and example previews by dragging.
- **404 Optimization**: Clean, simplified 404 pages for non-existent routes.
- **Dynamic Footers**: Auto-updating year range in the footer.
- **Screenshot Feature**: Quickly generate example thumbnails for new demos.
- **Localized Assets**: All third-party libraries and resources are localized for speed.
- **Parameter Tuning Panel**: Real-time adjustment of geometry, materials, and animations parameters.
- **Orbit Controls**: Navigate through scenes with OrbitControls for an enhanced experience.

## Quick Start

1. Open `index.html` to launch the site.
2. Explore categories via the left sidebar.
3. Click example cards for direct viewing.
4. Use the top search bar to find samples.
5. Access complete source code via the "View Source" button.
6. Adjust preview layout with the draggable divider.
7. Return to the home page with the "Back to Home" button.
8. Capture thumbnails using the "Screenshot Cover" button in preview mode.

## Example Categories

The site features a diverse collection of categories:

1. **Basic Examples**
   - Geometries (cube, sphere, cylinder, torus, etc.)
   - Materials (standard materials, physical materials, etc.)

2. **Lighting Effects**
   - Light Types (point light, spotlight, directional light, etc.)
   - Special Effects (shadow effects, ambient occlusion, etc.)

3. **Animations & Interactions**
   - Basic Animations (keyframe animation, morph animation)
   - Interactive Effects (raycasting, drag-and-drop control)

4. **Advanced Techniques**
   - Shaders (custom shaders, shader patterns, etc.)
   - Physics Engines (Cannon.js, Ammo.js, etc.)

5. **Loaders**
   - Model Loaders (GLTF, OBJ, FBX, STL, DAE, VTK, PCD, 3DS, AMF, GCODE, etc.)
   - Texture Loaders (basic textures, HDR textures, cubemap textures, etc.)
   - Other Loaders (fonts, audio, etc.)

6. **Performance Optimization**
   - Optimization Techniques (instanced rendering, LOD techniques, etc.)

## Project Structure

```
/
├── index.html          # Main page
├── css/
│   ├── style.css       # Main stylesheet (includes responsive design and animations)
│   ├── example-viewer.css # Example viewer stylesheet
│   └── example-common.css # Common example page stylesheet
├── js/
│   ├── data.js         # Example data (contains all categories and example information)
│   ├── main.js         # Main script (handles UI interaction and example display)
│   └── example-viewer.js # Example viewer script (handles example page interaction and source code viewing)
├── libs/               # Third-party libraries directory (all resources localized)
│   ├── three/          # Three.js library
│   │   ├── 0.150.0/    # Three.js older version
│   │   │   ├── three.min.js # Three.js minified file
│   │   │   └── three.module.js # Three.js module file
│   │   └── r179/       # Three.js latest version
│   │       ├── build/  # Build files
│   │       │   └── three.module.js # Three.js module file
│   │       └── jsm/    # Extension modules
│   │           ├── controls/ # Controllers
│   │           │   └── OrbitControls.js # Orbit controller
│   │           └── libs/ # Helper libraries
│   │               └── lil-gui.module.min.js # GUI control panel
│   ├── bootstrap-icons/ # Bootstrap Icons library
│   │   └── 1.11.0/     # Bootstrap Icons version
│   │       ├── bootstrap-icons.css # Bootstrap Icons CSS
│   │       └── fonts/   # Bootstrap Icons font files
│   ├── dat.gui/        # dat.GUI library
│   │   └── 0.7.9/      # dat.GUI version
│   │       └── dat.gui.min.js # dat.GUI minified file
│   └── prismjs/        # Prism.js code highlighting library
│       └── 1.24.1/     # Prism.js version
│           ├── prism.min.js # Prism.js core file
│           ├── themes/  # Prism.js themes
│           │   └── prism-tomorrow.min.css # Tomorrow theme
│           └── components/ # Prism.js language components
│               ├── prism-markup.min.js # HTML syntax highlighting
│               ├── prism-javascript.min.js # JavaScript syntax highlighting
│               └── prism-css.min.js # CSS syntax highlighting
├── images/             # Example images directory
├── docs/               # Documentation directory
│   └── creating-examples.md # Creating examples guide
└── examples/           # Example pages directory
    ├── viewer.html     # Example viewer page (for displaying examples and source code)
    ├── template.html   # Example template page (for creating new examples)
    └── ...             # Other example pages
```

## Technical Features

- **Modern UI**: Using CSS variables, Flexbox, and Grid layout for responsive design
- **Dynamic Content Loading**: JavaScript-generated category tree and example cards
- **Interactive Experience**: Example pages support interactive controls and source code viewing
- **Code Highlighting**: Using Prism.js for source code syntax highlighting
- **Elegant Animations**: CSS animations and transitions enhance user experience
- **Modular Structure**: Example code separated from common resources for easy maintenance and extension
- **High-Performance Dragging**: Optimized drag implementation ensures smooth and reliable divider dragging
- **Loading State Feedback**: Loading animations during example loading improve user experience
- **Harmonious Random Colors**: Example cards display harmonious random color backgrounds when no thumbnail is available
- **Smart 404 Handling**: Automatic detection of 404 pages and optimized display
- **Dynamic Year Calculation**: Footer year range automatically updates, no manual maintenance required
- **Encapsulated Screenshot Function**: Built-in screenshot functionality, separated from business code for easy maintenance
- **Resource Localization**: All third-party libraries and resources are localized for faster loading and reliability
- **ES Module Imports**: Using modern ES module import approach for clearer code structure
- **Parameter Debugging Panel**: Integrated lil-gui for real-time adjustment of geometry, material, and animation parameters
- **Orbit Controller**: Integrated OrbitControls for better scene interaction experience

## Project Completion Status

### 📊 Example Statistics
- **Total Examples**: 60+ complete examples
- **Main Categories**: 6 major categories, 15+ subcategories
- **Technology Coverage**: From basic geometries to advanced interactions, comprehensive coverage of Three.js functionality

### 🎯 Core Functionality Completion
- ✅ **Basic Examples Series**: Geometry and material examples complete
- ✅ **Lighting Effects Series**: Various light types and special effects
- ✅ **Loaders Series**: Full coverage of model, texture, font, and audio loaders
- ✅ **Animation & Interaction Series**: Keyframes, morphing, raycasting, drag-and-drop control
- 🔄 **Advanced Techniques Series**: Shaders, physics engines (partially complete)
- 🔄 **Performance Optimization Series**: Instanced rendering, LOD techniques (partially complete)

### 🛠️ Technical Architecture Features
- **Unified Templates**: All examples created based on standard templates, ensuring code consistency
- **Modern Imports**: Using ES modules and importmap for clear code structure
- **Interactive Experience**: Integrated lil-gui and OrbitControls for rich user interaction
- **Complete Documentation**: Detailed comments and development guides
- **Screenshot Functionality**: Built-in screenshot tool for generating example thumbnails

### 🎨 User Experience Optimization
- **Responsive Design**: Adapts to various screen sizes
- **Loading Optimization**: Localized resources, no external dependencies
- **Search Functionality**: Quickly locate needed examples
- **Source Code Viewing**: Code viewing with syntax highlighting
- **Parameter Debugging**: Real-time adjustment of example parameters

## Technology Stack

- HTML5
- CSS3 (variables, Flexbox, Grid, animations)
- JavaScript (ES6+)
- Three.js r179
- ES module imports
- lil-gui (parameter debugging panel)
- OrbitControls (orbit controller)
- Bootstrap Icons (icon library)
- Prism.js (code highlighting)

## Example Creation Guide

To create new Three.js examples, follow these steps:

1. Copy the `examples/template.html` file and name it according to the example content
2. Modify the metadata in the file (title, description, version, etc.)
3. Add information about the new example in the `js/data.js` file
4. Implement the Three.js code for the example
5. Use the built-in screenshot functionality to generate an example thumbnail:
   - Open the example preview page
   - Adjust the example to the best visual effect
   - Click the "Screenshot Cover" button in the top right corner
   - Save the generated image to the `images` directory
   - Reference the image as the example thumbnail in `js/data.js`

For detailed example creation guidelines, please refer to the [docs/creating-examples.md](docs/creating-examples.md) file.

## Extension Suggestions

1. **Content Extension**: Add more Three.js examples covering more advanced features
2. **Feature Enhancement**:
   - Add dark mode toggle
   - Implement online example code editing functionality
   - Add real-time example parameter adjustment functionality
   - Enhance screenshot functionality to support custom sizes and formats
3. **Performance Optimization**:
   - Implement lazy loading for example code
   - Optimize loading performance for large examples
   - Add resource preloading functionality
4. **Community Features**:
   - Add user comments and sharing functionality
   - Implement example rating system
   - Add example collection functionality
5. **Tutorial Integration**:
   - Add detailed tutorial explanations for each example
   - Integrate examples and tutorials for more Three.js extension libraries
   - Add interactive learning paths

## Contribution Guidelines

Contributions to this project are welcome. If you want to contribute new examples or features, please follow these steps:

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Changelog

All updates and changes to the project have been moved to a separate file. Please see the [Changelog](docs/CHANGELOG.md) for detailed information.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.