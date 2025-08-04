# Three.js 示例创建指南

本文档提供了如何使用示例模板创建新的Three.js示例并将其添加到项目中的详细步骤。按照以下流程，您可以轻松地扩展示例库，分享您的Three.js创作。

## 目录

1. [准备工作](#准备工作)
2. [创建新示例](#创建新示例)
3. [添加示例数据](#添加示例数据)
4. [创建缩略图](#创建缩略图)
5. [测试示例](#测试示例)
6. [常见问题](#常见问题)

## 准备工作

在开始创建新示例之前，请确保您已经了解：

- Three.js的基本概念和API
- 项目的目录结构和组织方式
- 示例模板的使用方法

## 创建新示例

### 步骤1：复制示例模板

首先，复制`examples/template.html`文件，并根据您的示例内容命名。例如，如果您要创建一个展示粒子系统的示例，可以命名为`particle-system.html`：

```bash
cp examples/template.html examples/particle-system.html
```

### 步骤2：修改示例元数据

打开新创建的示例文件，修改`<head>`部分的元数据：

```html
<meta name="description" content="这里是示例描述，请修改为您的示例描述">
<meta name="three-version" content="r150">
<title>Three.js 示例 - 示例标题</title>
```

将其更改为：

```html
<meta name="description" content="使用Three.js创建动态粒子系统，展示粒子动画效果">
<meta name="three-version" content="r150">
<title>Three.js 示例 - 粒子系统</title>
```

### 步骤3：实现示例代码

在`<script type="module">`标签内，实现您的Three.js示例代码。模板已经提供了基本的场景设置，您可以在此基础上进行修改：

1. 修改几何体创建部分：
   ```javascript
   // 创建几何体
   // 在此处添加您的几何体代码
   const geometry = new THREE.BoxGeometry(2, 2, 2);
   const material = new THREE.MeshStandardMaterial({ 
       color: 0x3498db,
       metalness: 0.3,
       roughness: 0.4
   });
   mesh = new THREE.Mesh(geometry, material);
   scene.add(mesh);
   ```

2. 修改动画循环部分：
   ```javascript
   // 动画循环
   function animate() {
       requestAnimationFrame(animate);
       
       // 在此处添加您的动画代码
       if (mesh) {
           mesh.rotation.x += 0.01;
           mesh.rotation.y += 0.01;
       }
       
       renderer.render(scene, camera);
   }
   ```

3. 根据需要添加其他功能，如控制器、事件监听器等。

### 步骤4：添加必要的资源

如果您的示例需要额外的资源，如纹理、模型或音频文件，请将它们放在适当的目录中：

- 纹理图像：`images/textures/`
- 3D模型：`models/`
- 音频文件：`audio/`

在代码中引用这些资源时，使用相对路径：

```javascript
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('../images/textures/your-texture.jpg');
```

## 添加示例数据

### 步骤1：确定示例分类

打开`js/data.js`文件，确定您的示例应该属于哪个分类和子分类。现有的分类包括：

- 基础示例（几何体、材质）
- 光照效果（光源类型、特殊效果）
- 动画与交互（基础动画、交互效果）
- 高级技术（着色器、物理引擎）
- 性能优化（优化技术）

如果您的示例不适合现有分类，您可以创建新的分类或子分类。

### 步骤2：添加示例信息

在适当的子分类下，添加您的示例信息：

```javascript
{
    id: "your-example-id",
    title: "您的示例标题",
    description: "您的示例描述",
    thumbnail: "images/your-example-thumbnail.jpg",
    version: "r150",
    url: "examples/your-example-file-name"
}
```

例如，对于粒子系统示例：

```javascript
{
    id: "animation-particles",
    title: "粒子系统",
    description: "使用Three.js创建动态粒子系统，展示粒子动画效果",
    thumbnail: "images/particle-system.jpg",
    version: "r150",
    url: "examples/particle-system"
}
```

注意：
- `id`应该是唯一的，建议使用分类-名称的格式
- `url`是示例文件的路径，不包含`.html`扩展名
- `thumbnail`是缩略图的路径

## 创建缩略图

### 步骤1：使用内置截图功能

项目提供了内置的截图功能，可以轻松创建示例的缩略图：

1. 通过示例查看器打开您的示例：
   ```
   http://localhost:your-port/examples/viewer.html#your-example-file-name
   ```

2. 调整示例到最佳视觉效果（例如，旋转到合适的角度）

3. 点击右上角的"截图封面"按钮

4. 浏览器会自动下载一个以示例名称命名的JPG图像文件（尺寸已自动调整为适合封面使用的大小）

5. 将下载的图像文件移动到`images/`目录中

6. 查看浏览器控制台（按F12打开开发者工具），可以看到截图保存成功的提示信息

### 步骤2：手动创建缩略图（可选）

如果您希望自定义缩略图，也可以使用其他工具：

1. 使用浏览器的截图功能或其他截图工具捕获预览图像
2. 将截图裁剪为合适的尺寸（建议使用正方形或16:9比例）
3. 优化图像大小，确保文件不会太大
4. 将处理后的图像保存为JPG或PNG格式

### 步骤3：添加缩略图

将缩略图保存到`images/`目录，并确保文件名与`data.js`中引用的路径一致。

## 测试示例

### 步骤1：直接访问测试

通过直接访问示例文件URL来测试您的示例是否正常工作：

```
http://localhost:your-port/examples/your-example-file-name.html
```

确保所有功能正常，没有控制台错误。

### 步骤2：通过查看器测试

通过示例查看器访问您的示例，测试在查看器中的显示效果：

```
http://localhost:your-port/examples/viewer.html#your-example-file-name
```

确保：
- 示例正确加载
- 标题和描述正确显示
- 源代码查看功能正常工作

### 步骤3：从首页访问测试

从项目首页导航到您的示例，确保：
- 示例卡片正确显示
- 缩略图正确加载
- 点击卡片可以正确跳转到示例

## 常见问题

### 示例无法在查看器中加载

可能的原因：
- 示例文件名与`data.js`中的`url`不匹配
- 示例文件中存在JavaScript错误
- 资源路径不正确

解决方法：
- 检查文件名和路径是否一致
- 查看浏览器控制台是否有错误信息
- 确保所有资源使用正确的相对路径

### 缩略图不显示

可能的原因：
- 缩略图文件路径不正确
- 缩略图文件不存在
- 缩略图文件格式不支持

解决方法：
- 确保缩略图文件名和路径与`data.js`中的一致
- 检查缩略图文件是否存在于正确的目录中
- 使用支持的图像格式（JPG、PNG）

### 示例在不同浏览器中表现不一致

可能的原因：
- 使用了特定浏览器的API
- WebGL兼容性问题
- CSS兼容性问题

解决方法：
- 使用跨浏览器兼容的API
- 添加浏览器功能检测和回退方案
- 测试并调整CSS以适应不同浏览器

## 总结

创建新的Three.js示例是一个简单的过程，只需要几个步骤：

1. 复制示例模板并修改元数据
2. 实现您的Three.js代码
3. 在`data.js`中添加示例信息
4. 创建并添加缩略图
5. 测试示例的各种访问方式

按照这个流程，您可以轻松地为项目贡献新的示例，丰富Three.js示例库的内容。

## 附录：示例模板结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="这里是示例描述，请修改为您的示例描述">
    <meta name="three-version" content="r150">
    <title>Three.js 示例 - 示例标题</title>
    <link rel="stylesheet" href="../css/example-common.css">
</head>
<body>
    <div class="three-container" id="threeContainer"></div>
    
    <!-- 引入 Three.js -->
    <script src="../libs/three/0.150.0/three.min.js"></script>
    
    <!-- 示例代码 -->
    <script type="module">
        // Three.js 变量
        let scene, camera, renderer;
        let mesh;
        
        // 初始化 Three.js
        function init() {
            // 创建场景
            scene = new THREE.Scene();
            scene.background = new THREE.Color(0x2c3e50);
            
            // 创建相机
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;
            
            // 创建渲染器
            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('threeContainer').appendChild(renderer.domElement);
            
            // 创建几何体
            // 在此处添加您的几何体代码
            const geometry = new THREE.BoxGeometry(2, 2, 2);
            const material = new THREE.MeshStandardMaterial({ 
                color: 0x3498db,
                metalness: 0.3,
                roughness: 0.4
            });
            mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);
            
            // 添加光源
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            scene.add(ambientLight);
            
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(5, 5, 5);
            scene.add(directionalLight);
            
            // 处理窗口大小变化
            window.addEventListener('resize', onWindowResize);
            
            // 开始动画
            animate();
        }
        
        // 窗口大小变化处理
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
        
        // 动画循环
        function animate() {
            requestAnimationFrame(animate);
            
            // 在此处添加您的动画代码
            if (mesh) {
                mesh.rotation.x += 0.01;
                mesh.rotation.y += 0.01;
            }
            
            renderer.render(scene, camera);
        }
        
        // 初始化
        init();
    </script>
</body>
</html>