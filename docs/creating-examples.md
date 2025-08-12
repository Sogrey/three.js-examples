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
    <!-- 页面描述，有助于SEO优化 -->
    <meta name="description" content="Three.js示例模板 - 快速开始创建3D场景">
    <!-- Three.js版本信息 -->
    <meta name="three-version" content="r179">
    <title>Three.js 示例 - 模板</title>
    <!-- 引入公共样式表 -->
    <link rel="stylesheet" href="../css/example-common.css">
</head>
<body>
    <!-- 3D场景容器 -->
    <div class="three-container" id="threeContainer"></div>
    
    <!-- 
    使用importmap定义模块导入映射
    这是一种现代化的ES模块导入方式，可以简化导入路径
    通过定义别名，可以使用简短的导入语句，如 import * as THREE from 'three'
    -->
    <script type="importmap">
        {
            "imports": {
                "three": "../libs/three/r179/build/three.module.js",
                "three/addons/": "../libs/three/r179/jsm/"
            }
        }
    </script>
    
    <!-- 示例代码 - 模板 -->
    <script type="module">
        // 导入Three.js核心模块
        import * as THREE from 'three';
        // 导入轨道控制器，用于交互式旋转和缩放场景
        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
        // 导入GUI控制面板，用于调整参数
        import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
        
        // Three.js 核心变量 - 暴露给全局作用域以便截图功能使用
        window.scene = null;     // 场景对象，包含所有3D元素
        window.camera = null;    // 相机对象，定义视角和视野
        window.renderer = null;  // 渲染器对象，将场景渲染到canvas上
        let mesh;               // 3D网格对象
        let controls;           // 轨道控制器对象
        
        // 参数配置对象 - 用于GUI控制面板和创建3D对象
        const params = {
            // 几何体参数 - 可根据需要修改或添加参数
            width: 2,              // 宽度
            height: 2,             // 高度
            depth: 2,              // 深度
            
            // 材质参数
            color: 0x3498db,       // 颜色（蓝色）
            metalness: 0.3,        // 金属度（0-1）
            roughness: 0.4,        // 粗糙度（0-1）
            wireframe: false,      // 是否显示线框模式
            side: THREE.FrontSide, // 渲染面：正面(FrontSide)、背面(BackSide)或双面(DoubleSide)
                        
            // 控制器参数
            autoRotate: true       // 是否自动旋转
        };
        
        /**
         * 初始化Three.js场景、相机、渲染器和控制器
         * 这是整个应用的入口点
         */
        function init() {
            // 创建场景 - 所有3D对象的容器
            window.scene = new THREE.Scene();
            // 设置场景背景色为深蓝灰色
            window.scene.background = new THREE.Color(0x2c3e50);
            
            // 创建透视相机 - 模拟人眼视角
            // 参数：视场角(FOV)，宽高比，近裁剪面，远裁剪面
            window.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            // 设置相机位置，以便能看到场景中的对象
            window.camera.position.z = 5;
            
            // 创建WebGL渲染器 - 将3D场景渲染到canvas上
            window.renderer = new THREE.WebGLRenderer({ antialias: true }); // 启用抗锯齿
            // 设置渲染器尺寸为窗口大小
            window.renderer.setSize(window.innerWidth, window.innerHeight);
            // 设置设备像素比，提高在高DPI设备上的清晰度
            window.renderer.setPixelRatio(window.devicePixelRatio);
            // 将渲染器的canvas添加到DOM中
            document.getElementById('threeContainer').appendChild(window.renderer.domElement);
            
            // 添加轨道控制器 - 允许用户交互式旋转和缩放场景
            controls = new OrbitControls(window.camera, window.renderer.domElement);
            controls.enableDamping = true;       // 启用阻尼效果，使控制更平滑
            controls.dampingFactor = 0.05;       // 阻尼系数
            controls.autoRotate = params.autoRotate; // 设置是否自动旋转
            
            // 创建3D对象
            createMesh();
            
            // 初始化GUI控制面板
            initGUI();
            
            // 添加环境光 - 提供均匀的全局照明
            const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
            window.scene.add(ambientLight);
            
            // 添加方向光 - 模拟太阳光
            const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
            directionalLight.position.set(5, 5, 5); // 设置光源位置
            window.scene.add(directionalLight);
            
            // 监听窗口大小变化，调整场景
            window.addEventListener('resize', onWindowResize);
            
            // 开始动画循环
            animate();
        }
        
        /**
         * 处理窗口大小变化
         * 调整相机和渲染器以适应新的窗口尺寸
         */
        function onWindowResize() {
            // 更新相机宽高比
            window.camera.aspect = window.innerWidth / window.innerHeight;
            // 更新相机投影矩阵
            window.camera.updateProjectionMatrix();
            // 更新渲染器尺寸
            window.renderer.setSize(window.innerWidth, window.innerHeight);
        }
        
        /**
         * 创建3D网格对象
         * 根据当前参数创建或更新3D对象
         * 这个函数可以根据需要修改，创建不同类型的几何体
         */
        function createMesh() {
            // 如果已存在网格对象，则从场景中移除并释放资源
            if (mesh) {
                window.scene.remove(mesh);
                // 释放几何体和材质的内存，避免内存泄漏
                mesh.geometry.dispose();
                mesh.material.dispose();
            }
            
            // 创建几何体 - 这里使用立方体作为示例
            // 可以替换为其他几何体，如球体、圆柱体、圆环等
            const geometry = new THREE.BoxGeometry(
                params.width, 
                params.height, 
                params.depth
            );
            
            // 创建标准材质 - 使用基于物理的渲染(PBR)
            const material = new THREE.MeshStandardMaterial({ 
                color: params.color,        // 材质颜色
                metalness: params.metalness, // 金属度 - 影响反射特性
                roughness: params.roughness, // 粗糙度 - 影响光的散射方式
                wireframe: params.wireframe, // 是否显示线框模式
                side: params.side           // 渲染面：正面、背面或双面
            });
            
            // 创建网格 - 将几何体和材质结合
            mesh = new THREE.Mesh(geometry, material);
            // 将网格添加到场景中
            window.scene.add(mesh);
        }
        
        /**
         * 初始化GUI控制面板
         * 创建用户可交互的控制界面，用于调整参数
         * 可以根据需要添加或修改控制项
         */
        function initGUI() {
            // 创建GUI实例
            const gui = new GUI({ title: '参数控制面板', width: 300 });
            
            // 调整GUI位置，避免与其他UI元素重叠
            gui.domElement.style.position = 'absolute';
            gui.domElement.style.top = '60px';
            gui.domElement.style.right = '10px';
            
            // 确保GUI在所有环境下都可见
            gui.domElement.style.zIndex = '1000';
            gui.domElement.style.maxHeight = '80vh'; // 限制最大高度
            gui.domElement.style.overflowY = 'auto'; // 允许垂直滚动
            
            // 确保GUI在页面加载后立即可见
            setTimeout(() => {
                gui.show();
                // 强制更新GUI
                for (const controller of gui.controllers) {
                    controller.updateDisplay();
                }
            }, 100);
            
            // 几何体参数控制组
            const geometryFolder = gui.addFolder('几何体参数');
            // 添加宽度滑块
            geometryFolder.add(params, 'width', 0.5, 5)
                .onChange(createMesh) // 当值变化时重新创建3D对象
                .name('宽度');
            // 添加高度滑块
            geometryFolder.add(params, 'height', 0.5, 5)
                .onChange(createMesh)
                .name('高度');
            // 添加深度滑块
            geometryFolder.add(params, 'depth', 0.5, 5)
                .onChange(createMesh)
                .name('深度');
            // 默认展开此文件夹
            geometryFolder.open();
            
            // 材质参数控制组
            const materialFolder = gui.addFolder('材质参数');
            // 添加金属度滑块
            materialFolder.add(params, 'metalness', 0, 1)
                .step(0.01) // 设置步长为0.01
                .onChange(value => {
                    // 直接更新材质属性，无需重新创建
                    mesh.material.metalness = value;
                })
                .name('金属度');
            // 添加粗糙度滑块
            materialFolder.add(params, 'roughness', 0, 1)
                .step(0.01)
                .onChange(value => {
                    mesh.material.roughness = value;
                })
                .name('粗糙度');
            // 添加颜色选择器
            materialFolder.addColor(params, 'color')
                .onChange(value => {
                    mesh.material.color.set(value);
                })
                .name('颜色');
            // 添加线框模式切换
            materialFolder.add(params, 'wireframe')
                .onChange(value => {
                    mesh.material.wireframe = value;
                })
                .name('线框模式');
                
            // 添加渲染面选择
            const sideOptions = {
                '正面': THREE.FrontSide,
                '背面': THREE.BackSide,
                '双面': THREE.DoubleSide
            };
            materialFolder.add(params, 'side', sideOptions)
                .onChange(value => {
                    mesh.material.side = value;
                    mesh.material.needsUpdate = true;
                })
                .name('渲染面');
            // 默认展开此文件夹
            materialFolder.open();
            
            // 动画参数控制组
            const animationFolder = gui.addFolder('动画参数');
            // 添加自动旋转切换
            animationFolder.add(params, 'autoRotate')
                .name('自动旋转')
                .onChange(value => {
                    controls.autoRotate = value;
                });
            // 默认展开此文件夹
            animationFolder.open();
        }
        
        /**
         * 动画循环函数
         * 使用requestAnimationFrame实现平滑动画
         * 每帧更新场景并渲染
         */
        function animate() {
            // 请求下一帧动画
            requestAnimationFrame(animate);
            
            // 更新轨道控制器
            // 如果启用了阻尼效果，需要在每帧调用update
            controls.update();
            
            // 此处可以添加自定义的每帧更新逻辑

            // 渲染场景
            window.renderer.render(window.scene, window.camera);
        }
        
        // 初始化应用
        init();
    </script>
    
    <!-- 
    ===================================================
    截图功能脚本 - 请勿修改此部分
    此脚本处理从父窗口发来的截图请求，用于生成示例封面，与示例业务并无关联
    ===================================================
    -->
    <script>
        // 全局变量，用于存储渲染器引用
        let _screenshotRenderer;
        
        // 添加消息监听器，处理截图请求
        window.addEventListener('message', function(event) {
            if (event.data && event.data.type === 'take-screenshot') {
                try {
                    // 获取当前渲染器
                    if (!_screenshotRenderer && window.renderer) {
                        _screenshotRenderer = window.renderer;
                    }
                    
                    // 确保渲染器已经初始化
                    if (!_screenshotRenderer) {
                        throw new Error('渲染器未初始化');
                    }
                    
                    // 强制渲染一帧，确保内容是最新的
                    if (window.scene && window.camera) {
                        _screenshotRenderer.render(window.scene, window.camera);
                    }
                    
                    // 获取canvas的图像数据（使用较低的质量和尺寸以减小文件大小）
                    const quality = event.data.quality || 0.8;
                    const canvas = _screenshotRenderer.domElement;
                    
                    // 创建一个较小尺寸的临时canvas
                    const tempCanvas = document.createElement('canvas');
                    const maxSize = 600; // 最大尺寸为600像素
                    
                    // 计算缩放比例，保持宽高比
                    const scale = Math.min(maxSize / canvas.width, maxSize / canvas.height);
                    tempCanvas.width = Math.floor(canvas.width * scale);
                    tempCanvas.height = Math.floor(canvas.height * scale);
                    
                    // 在临时canvas上绘制缩小的图像
                    const ctx = tempCanvas.getContext('2d');
                    ctx.drawImage(canvas, 0, 0, tempCanvas.width, tempCanvas.height);
                    
                    // 获取缩小后的图像数据
                    const dataUrl = tempCanvas.toDataURL('image/jpeg', quality);
                    
                    // 将图像数据发送回父窗口
                    window.parent.postMessage({
                        type: 'screenshot-data',
                        dataUrl: dataUrl
                    }, '*');
                } catch (error) {
                    console.error('截图失败:', error);
                    // 发送错误信息回父窗口
                    window.parent.postMessage({
                        type: 'screenshot-error',
                        error: error.message
                    }, '*');
                }
            }
        });
    </script>
</body>
</html>
```
