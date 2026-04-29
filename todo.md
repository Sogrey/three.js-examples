Three.js 的加载器（Loader）用于将外部资源导入到场景中，根据资源类型可分为以下几类：

---

### 🧊 **一、3D 模型加载器**  
用于加载不同格式的3D模型文件，支持几何体、材质、动画等数据。  
1. **glTF/GLB 格式**  
   - `GLTFLoader`：加载高效紧凑的 `.gltf`/`.glb` 文件（推荐格式，支持PBR材质、动画等）。  
   - `DRACOLoader`：配合 `GLTFLoader` 解压压缩后的 `.glb` 模型。  
2. **通用3D格式**  
   - `OBJLoader`：加载 `.obj` 几何体数据（不支持动画）。  
   - `FBXLoader`：加载 `.fbx` 文件（支持复杂动画、骨骼）。  
   - `ColladaLoader`：加载 `.dae` 格式（支持材质和动画）。  
3. **3D打印/工程格式**  
   - `STLLoader`：加载 3D 打印常用的 `.stl` 文件（仅几何体）。  
   - `3MFLoader`/`AMFLoader`：支持 3D 制造格式 `.3mf`/`.amf`。  
4. **其他模型格式**  
   - `PLYLoader`：加载点云数据 `.ply`。  
   - `TDSLoader`：加载 3ds Max 的 `.3ds` 文件。  
   - `VRMLLoader`：加载旧版 `.wrl` 格式。  

---

### 🖼️ **二、纹理与图像加载器**  
用于加载2D贴图、环境贴图等视觉资源。  
1. **基础纹理**  
   - `TextureLoader`：加载 `.jpg`/`.png` 等图片作为材质贴图。  
   - `TGALoader`/`DDSLoader`：支持 `.tga`/`.dds` 等特殊格式。  
2. **环境贴图**  
   - `CubeTextureLoader`：加载六张图片生成天空盒/环境反射贴图。  
   - `HDRCubeTextureLoader`/`RGBELoader`：支持 HDR 高动态范围贴图（`.hdr`）。  
3. **压缩纹理**  
   - `KTX2Loader`：加载 `.ktx2` 压缩纹理（节省显存）。  

---

### ✏️ **三、字体与文本加载器**  
用于在3D场景中生成文字。  
- `FontLoader`：加载 `.json` 格式字体文件，配合 `TextGeometry` 创建3D文字。  
- `TTFLoader`：直接加载 `.ttf` 字体文件（需转换为JSON）。  

---

### 🔊 **四、音频加载器**  
为场景添加声音效果。  
- `AudioLoader`：加载 `.mp3`/`.wav` 等音频文件，结合 `AudioListener` 实现空间音效。  

---

### ⚙️ **五、特殊数据加载器**  
处理非标准或领域特定格式。  
1. **点云/科学数据**  
   - `PCDLoader`：加载点云数据 `.pcd`。  
   - `VTKLoader`/`NRRDLoader`：支持科学可视化格式（如医学影像）。  
2. **动画/交互**  
   - `LottieLoader`：加载 `.json` 格式的2D动画（如AE动画）。  
   - `MMDLoader`：加载 MikuMikuDance 模型及动画 `.pmd`/`.vmd`。  
3. **材质配置**  
   - `MTLLoader`：加载 `.mtl` 材质文件（需配合 `OBJLoader` 使用）。  

---

### 🧪 **六、其他工具类加载器**  
- `IESLoader`：加载灯光配光曲线数据。  
- `LUTLoader` 系列：加载颜色查找表（`.3dl`/`.cube`）。  
- `GCodeLoader`：解析3D打印指令 `.gcode`。  
