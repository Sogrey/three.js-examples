// Three.js 示例数据
const threejsData = {
    categories: [
        {
            id: "basic",
            name: "基础示例",
            icon: "bi-box",
            subcategories: [
                {
                    id: "basic-geometry",
                    name: "几何体",
                    examples: [
                        {
                            id: "basic-geometry-cube",
                            title: "立方体",
                            description: "创建一个简单的立方体，并添加基本的旋转动画",
                            thumbnail: "images/basic-geometry-cube.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-cube"
                        },
                        {
                            id: "basic-geometry-sphere",
                            title: "球体",
                            description: "创建一个带有纹理的球体，模拟行星效果",
                            thumbnail: "images/basic-geometry-sphere.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-sphere"
                        },
                        {
                            id: "basic-geometry-cylinder",
                            title: "圆柱体",
                            description: "创建一个带有渐变材质的圆柱体，展示不同参数效果",
                            thumbnail: "images/basic-geometry-cylinder.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-cylinder"
                        },
                        {
                            id: "basic-geometry-torus",
                            title: "圆环",
                            description: "创建一个带有金属材质的圆环，展示光照效果",
                            thumbnail: "images/basic-geometry-torus.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-torus"
                        },
                        {
                            id: "basic-geometry-tetrahedron",
                            title: "正四面体",
                            description: "创建一个正四面体，展示基本多面体几何形状",
                            thumbnail: "images/basic-geometry-tetrahedron.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-tetrahedron"
                        },
                        {
                            id: "basic-geometry-octahedron",
                            title: "正八面体",
                            description: "创建一个正八面体，展示对称多面体结构",
                            thumbnail: "images/basic-geometry-octahedron.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-octahedron"
                        },
                        {
                            id: "basic-geometry-dodecahedron",
                            title: "正十二面体",
                            description: "创建一个正十二面体，展示复杂多面体结构",
                            thumbnail: "images/basic-geometry-dodecahedron.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-dodecahedron"
                        },
                        {
                            id: "basic-geometry-icosahedron",
                            title: "正二十面体",
                            description: "创建一个正二十面体，展示高复杂度多面体",
                            thumbnail: "images/basic-geometry-icosahedron.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-icosahedron"
                        },
                        {
                            id: "basic-geometry-ring",
                            title: "环平面",
                            description: "创建一个环形平面，可调整内外半径和分段数",
                            thumbnail: "images/basic-geometry-ring.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-ring"
                        },
                        {
                            id: "basic-geometry-plane",
                            title: "矩形平面",
                            description: "创建一个矩形平面，可调整宽度、高度和分段数",
                            thumbnail: "images/basic-geometry-plane.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-plane"
                        },
                        {
                            id: "basic-geometry-circle",
                            title: "圆平面",
                            description: "创建一个圆形平面，可调整半径、分段数和扇形角度",
                            thumbnail: "images/basic-geometry-circle.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-circle"
                        },
                        {
                            id: "basic-geometry-extrude",
                            title: "拉伸几何体",
                            description: "通过拉伸二维形状创建三维几何体，展示ExtrudeGeometry的用法",
                            thumbnail: "images/basic-geometry-extrude.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-extrude"
                        },
                        {
                            id: "basic-geometry-lathe",
                            title: "旋转几何体",
                            description: "通过旋转轮廓线创建三维几何体，如花瓶或杯子",
                            thumbnail: "images/basic-geometry-lathe.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-lathe"
                        },
                        {
                            id: "basic-geometry-tube",
                            title: "管道几何体",
                            description: "沿着三维路径创建管道几何体，可调整管径和分段数",
                            thumbnail: "images/basic-geometry-tube.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-tube"
                        },
                        {
                            id: "basic-geometry-shape",
                            title: "轮廓填充",
                            description: "创建复杂的二维形状并进行填充，支持内部孔洞",
                            thumbnail: "images/basic-geometry-shape.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-shape"
                        },
                        {
                            id: "basic-geometry-text",
                            title: "文字几何体",
                            description: "创建三维文字几何体，可调整字体、大小和厚度",
                            thumbnail: "images/basic-geometry-text.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-text"
                        },
                        {
                            id: "basic-geometry-parametric",
                            title: "参数化曲面",
                            description: "通过数学函数创建参数化曲面，如波浪、螺旋等",
                            thumbnail: "images/basic-geometry-parametric.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-parametric"
                        },
                        {
                            id: "basic-geometry-cone",
                            title: "圆锥体",
                            description: "创建一个圆锥体，可调整底部半径、高度和分段数",
                            thumbnail: "images/basic-geometry-cone.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-cone"
                        },
                        {
                            id: "basic-geometry-torusknot",
                            title: "环形扭结",
                            description: "创建一个环形扭结，展示复杂的参数化几何体",
                            thumbnail: "images/basic-geometry-torusknot.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-torusknot"
                        },
                        {
                            id: "basic-geometry-polyhedron",
                            title: "多面体",
                            description: "创建一个基于顶点和面的多面体，展示PolyhedronGeometry的用法。",
                            thumbnail: "images/basic-geometry-polyhedron.jpg",
                            version: "r179",
                            url: "examples/basic-geometry-polyhedron"
                        }
                    ]
                },
                {
                    id: "basic-materials",
                    name: "材质",
                    examples: [
                        {
                            id: "basic-materials-mesh",
                            title: "网格材质对比",
                            description: "展示和对比不同类型的网格材质效果",
                            thumbnail: "images/basic-materials-mesh.jpg",
                            version: "r179",
                            url: "examples/basic-materials-mesh"
                        },
                        {
                            id: "basic-materials-points",
                            title: "点材质",
                            description: "展示PointsMaterial的使用方法和效果，创建各种分布的粒子系统",
                            thumbnail: "images/basic-materials-points.jpg",
                            version: "r179",
                            url: "examples/basic-materials-points"
                        },
                        {
                            id: "basic-materials-lines",
                            title: "线材质",
                            description: "展示LineBasicMaterial和LineDashedMaterial的使用方法和效果对比",
                            thumbnail: "images/basic-materials-lines.jpg",
                            version: "r179",
                            url: "examples/basic-materials-lines"
                        },
                        {
                            id: "basic-materials-sprite",
                            title: "精灵材质",
                            description: "展示SpriteMaterial的使用方法和效果，创建各种分布的精灵系统",
                            thumbnail: "images/basic-materials-sprite.jpg",
                            version: "r179",
                            url: "examples/basic-materials-sprite"
                        },
                        {
                            id: "basic-materials-raw-shader",
                            title: "原始着色器材质",
                            description: "使用RawShaderMaterial创建自定义着色器效果，展示GLSL着色器编程的基础知识",
                            thumbnail: "images/basic-materials-raw-shader.jpg",
                            version: "r179",
                            url: "examples/basic-materials-raw-shader"
                        },
                        {
                            id: "basic-materials-shader",
                            title: "着色器材质",
                            description: "使用ShaderMaterial创建自定义着色器效果，展示Three.js内置变量和着色器编程技术",
                            thumbnail: "images/basic-materials-shader.jpg",
                            version: "r179",
                            url: "examples/basic-materials-shader"
                        }
                    ]
                }
            ]
        },
        {
            id: "lighting",
            name: "光照效果",
            icon: "bi-lightbulb",
            subcategories: [
                {
                    id: "lighting-types",
                    name: "光源类型",
                    examples: [
                        {
                            id: "lighting-point",
                            title: "点光源",
                            description: "展示点光源的效果和阴影",
                            thumbnail: "images/lighting-point.jpg",
                            version: "r179",
                            url: "examples/lighting-point"
                        },
                        {
                            id: "lighting-spot",
                            title: "聚光灯",
                            description: "使用聚光灯创建舞台照明效果，展示聚光灯的特性和阴影",
                            thumbnail: "images/lighting-spot.jpg",
                            version: "r179",
                            url: "examples/lighting-spot"
                        },
                        {
                            id: "lighting-directional",
                            title: "平行光",
                            description: "模拟太阳光的平行光效果，展示平行光的特性和阴影",
                            thumbnail: "images/lighting-directional.jpg",
                            version: "r179",
                            url: "examples/lighting-directional"
                        }
                    ]
                },
                {
                    id: "lighting-effects",
                    name: "特殊效果",
                    examples: [
                        {
                            id: "lighting-shadows",
                            title: "阴影效果",
                            description: "展示不同类型的阴影映射技术",
                            thumbnail: "images/lighting-shadows.jpg",
                            version: "r179",
                            url: "examples/lighting-shadows"
                        },
                        {
                            id: "lighting-ambient-occlusion",
                            title: "环境光遮蔽",
                            description: "使用环境光遮蔽增强场景深度感",
                            thumbnail: "images/lighting-ambient-occlusion.jpg",
                            version: "r179",
                            url: "examples/lighting-ambient-occlusion"
                        }
                    ]
                }
            ]
        },
        {
            id: "loaders",
            name: "加载器",
            icon: "bi-cloud-download",
            subcategories: [
                {
                    id: "loaders-model",
                    name: "模型加载器",
                    examples: [
                        {
                            id: "loaders-model-gltf",
                            title: "GLTF 模型加载器",
                            description: "加载和显示 GLTF/GLB 格式的 3D 模型",
                            thumbnail: "images/loaders-model-gltf.jpg",
                            version: "r179",
                            url: "examples/loaders-model-gltf"
                        },
                        {
                            id: "loaders-model-obj",
                            title: "OBJ 模型加载器",
                            description: "加载和显示 OBJ 格式的 3D 模型及其材质",
                            thumbnail: "images/loaders-model-obj.jpg",
                            version: "r179",
                            url: "examples/loaders-model-obj"
                        },
                        {
                            id: "loaders-model-fbx",
                            title: "FBX 模型加载器",
                            description: "加载和显示 FBX 格式的 3D 模型及其动画",
                            thumbnail: "images/loaders-model-fbx.jpg",
                            version: "r179",
                            url: "examples/loaders-model-fbx"
                        },
                        {
                            id: "loaders-model-stl",
                            title: "STL 模型加载器",
                            description: "加载和显示 STL 格式的 3D 模型",
                            thumbnail: "images/loaders-model-stl.jpg",
                            version: "r179",
                            url: "examples/loaders-model-stl"
                        },
                        {
                            id: "loaders-model-dae",
                            title: "DAE/COLLADA 模型加载器",
                            description: "加载和显示 DAE/COLLADA 格式的 3D 模型",
                            thumbnail: "images/loaders-model-dae.jpg",
                            version: "r179",
                            url: "examples/loaders-model-dae"
                        },
                        {
                            id: "loaders-model-vtk",
                            title: "VTK 模型加载器",
                            description: "加载和显示 VTK 格式的 3D 模型",
                            thumbnail: "images/loaders-model-vtk.jpg",
                            version: "r179",
                            url: "examples/loaders-model-vtk"
                        },
                        {
                            id: "loaders-model-pcd",
                            title: "PCD 点云模型加载器",
                            description: "加载和显示 PCD 格式的点云模型",
                            thumbnail: "images/loaders-model-pcd.jpg",
                            version: "r179",
                            url: "examples/loaders-model-pcd"
                        },
                        {
                            id: "loaders-model-3ds",
                            title: "3DS 模型加载器",
                            description: "加载和显示 3DS 格式的 3D 模型",
                            thumbnail: "images/loaders-model-3ds.jpg",
                            version: "r179",
                            url: "examples/loaders-model-3ds"
                        },
                        {
                            id: "loaders-model-amf",
                            title: "AMF 模型加载器",
                            description: "加载和显示 AMF 格式的 3D 模型",
                            thumbnail: "images/loaders-model-amf.jpg",
                            version: "r179",
                            url: "examples/loaders-model-amf"
                        },
                        {
                            id: "loaders-model-gcode",
                            title: "GCODE 模型加载器",
                            description: "加载和显示 GCODE 格式的 3D 打印模型",
                            thumbnail: "images/loaders-model-gcode.jpg",
                            version: "r179",
                            url: "examples/loaders-model-gcode"
                        },
                        {
                            id: "loaders-model-multi",
                            title: "多格式模型加载器",
                            description: "使用统一接口加载多种格式的 3D 模型",
                            thumbnail: "images/loaders-model-multi.jpg",
                            version: "r179",
                            url: "examples/loaders-model-multi"
                        }
                    ]
                },
                {
                    id: "loaders-texture",
                    name: "纹理加载器",
                    examples: [
                        {
                            id: "loaders-texture-basic",
                            title: "基础纹理加载器",
                            description: "加载和应用各种图像格式的纹理",
                            thumbnail: "images/loaders-texture-basic.jpg",
                            version: "r179",
                            url: "examples/loaders-texture-basic"
                        },
                        {
                            id: "loaders-texture-hdr",
                            title: "HDR 纹理加载器",
                            description: "加载和应用高动态范围(HDR)纹理",
                            thumbnail: "images/loaders-texture-hdr.jpg",
                            version: "r179",
                            url: "examples/loaders-texture-hdr"
                        },
                        {
                            id: "loaders-texture-cube",
                            title: "立方体纹理加载器",
                            description: "加载和应用立方体贴图纹理",
                            thumbnail: "images/loaders-texture-cube.jpg",
                            version: "r179",
                            url: "examples/loaders-texture-cube"
                        }
                    ]
                },
                {
                    id: "loaders-other",
                    name: "其他加载器",
                    examples: [
                        {
                            id: "loaders-font",
                            title: "字体加载器",
                            description: "加载和使用 3D 文本字体",
                            thumbnail: "images/loaders-font.jpg",
                            version: "r179",
                            url: "examples/loaders-font"
                        },
                        {
                            id: "loaders-audio",
                            title: "音频加载器",
                            description: "加载和播放 3D 场景中的音频",
                            thumbnail: "images/loaders-audio.jpg",
                            version: "r179",
                            url: "examples/loaders-audio"
                        }
                    ]
                }
            ]
        },
        {
            id: "animation",
            name: "动画与交互",
            icon: "bi-film",
            subcategories: [
                {
                    id: "animation-basics",
                    name: "基础动画",
                    examples: [
                        {
                            id: "animation-keyframes",
                            title: "关键帧动画",
                            description: "使用关键帧创建复杂的动画序列",
                            thumbnail: "images/animation-keyframes.jpg",
                            version: "r179",
                            url: "examples/animation-keyframes"
                        },
                        {
                            id: "animation-morph",
                            title: "变形动画",
                            description: "在不同几何体之间平滑过渡的变形效果",
                            thumbnail: "images/animation-morph.jpg",
                            version: "r179",
                            url: "examples/animation-morph"
                        }
                    ]
                },
                {
                    id: "animation-interaction",
                    name: "交互效果",
                    examples: [
                        {
                            id: "animation-raycaster",
                            title: "射线检测",
                            description: "使用射线检测实现对象选择和交互",
                            thumbnail: "images/animation-raycaster.jpg",
                            version: "r179",
                            url: "examples/animation-raycaster"
                        },
                        {
                            id: "animation-drag",
                            title: "拖拽控制",
                            description: "实现3D对象的拖拽和放置功能",
                            thumbnail: "images/animation-drag.jpg",
                            version: "r179",
                            url: "examples/animation-drag"
                        }
                    ]
                }
            ]
        },
        {
            id: "advanced",
            name: "高级技术",
            icon: "bi-stars",
            subcategories: [
                {
                    id: "advanced-shaders",
                    name: "着色器",
                    examples: [
                        {
                            id: "advanced-custom-shader",
                            title: "自定义着色器",
                            description: "创建自定义着色器实现特殊视觉效果",
                            thumbnail: "images/advanced-custom-shader.jpg",
                            version: "r150",
                            url: "examples/advanced-custom-shader"
                        },
                        {
                            id: "advanced-shader-patterns",
                            title: "着色器图案",
                            description: "使用着色器创建复杂的几何图案和纹理",
                            thumbnail: "images/advanced-shader-patterns.jpg",
                            version: "r150",
                            url: "examples/advanced-shader-patterns"
                        },
                        {
                            id: "advanced-cyberpunk-tunnel",
                            title: "赛博朋克闪电隧道",
                            description: "使用自定义着色器和后处理实现高速飞行的赛博朋克数据隧道效果",
                            thumbnail: "images/advanced-cyberpunk-tunnel.jpg",
                            version: "r179",
                            url: "examples/cyberpunk-lightning-tunnel"
                        },
                        {
                            id: "visualization-custom-shader-lines",
                            title: "自定义shader线元素",
                            description: "使用自定义着色器实现渐变色和流光效果的线元素",
                            thumbnail: "images/visualization-custom-shader-lines.jpg",
                            version: "r179",
                            url: "examples/visualization-custom-shader-lines"
                        },
                        {
                            id: "visualization-neon-flow",
                            title: "流动霓虹效果",
                            description: "炫酷的流动霓虹视觉动画，支持鼠标交互效果",
                            thumbnail: "images/visualization-neon-flow.jpg",
                            version: "r179",
                            url: "examples/visualization-neon-flow"
                        },
                        {
                            id: "shader-abstract-art",
                            title: "抽象艺术动画",
                            description: "动态抽象艺术作品，旋转流动的光影图案，支持鼠标交互",
                            thumbnail: "images/shader-abstract-art.jpg",
                            version: "r179",
                            url: "examples/shader-abstract-art"
                        },
                        {
                            id: "visualization-aurora",
                            title: "星空极光动效",
                            description: "绚丽的极光与星空背景Shader效果，支持多种参数调节",
                            thumbnail: "images/visualization-aurora.jpg",
                            version: "r179",
                            url: "examples/visualization-aurora"
                        },
                    ]
                },
                {
                    id: "advanced-physics",
                    name: "物理引擎",
                    examples: [
                        {
                            id: "advanced-physics-cannon",
                            title: "Cannon.js 物理",
                            description: "使用 Cannon.js 实现物理碰撞和重力效果",
                            thumbnail: "images/advanced-physics-cannon.jpg",
                            version: "r150",
                            url: "examples/advanced-physics-cannon"
                        },
                        {
                            id: "advanced-physics-ammo",
                            title: "Ammo.js 物理",
                            description: "使用 Ammo.js 创建复杂的物理交互场景",
                            thumbnail: "images/advanced-physics-ammo.jpg",
                            version: "r150",
                            url: "examples/advanced-physics-ammo"
                        }
                    ]
                }
            ]
        },
        {
            id: "performance",
            name: "性能优化",
            icon: "bi-speedometer2",
            subcategories: [
                {
                    id: "performance-techniques",
                    name: "优化技术",
                    examples: [
                        {
                            id: "performance-instancing",
                            title: "实例化渲染",
                            description: "使用实例化技术渲染大量相似对象",
                            thumbnail: "images/performance-instancing.jpg",
                            version: "r150",
                            url: "examples/performance-instancing"
                        },
                        {
                            id: "performance-lod",
                            title: "LOD 技术",
                            description: "根据距离使用不同细节级别的模型",
                            thumbnail: "images/performance-lod.jpg",
                            version: "r150",
                            url: "examples/performance-lod"
                        }
                    ]
                }
            ]
        },
        {
            id: "digital-twin",
            name: "数字孪生",
            icon: "bi-diagram-3",
            subcategories: [
                {
                    id: "digital-twin-effects",
                    name: "场景特效",
                    examples: [
                        {
                            id: "digital-twin-particle-system",
                            title: "粒子系统",
                            description: "创建各种粒子特效，如烟雾、火焰、雨雪等环境效果",
                            thumbnail: "images/digital-twin-particle-system.jpg",
                            version: "r179",
                            url: "examples/digital-twin-particle-system"
                        },
                        {
                            id: "digital-twin-water-simulation",
                            title: "水面模拟",
                            description: "模拟真实的水面波动效果，适用于海洋、湖泊场景",
                            thumbnail: "images/digital-twin-water-simulation.jpg",
                            version: "r179",
                            url: "examples/digital-twin-water-simulation"
                        },
                        {
                            id: "digital-twin-fog-atmosphere",
                            title: "雾气大气",
                            description: "创建逼真的雾气和大气散射效果，增强场景真实感",
                            thumbnail: "images/digital-twin-fog-atmosphere.jpg",
                            version: "r179",
                            url: "examples/digital-twin-fog-atmosphere"
                        },
                        {
                            id: "digital-twin-volumetric-lighting",
                            title: "体积光照",
                            description: "实现体积光照效果，如光束、光柱等戏剧性光照",
                            thumbnail: "images/digital-twin-volumetric-lighting.jpg",
                            version: "r179",
                            url: "examples/digital-twin-volumetric-lighting"
                        }
                    ]
                },
                {
                    id: "digital-twin-visualization",
                    name: "数据可视化",
                    examples: [
                        {
                            id: "digital-twin-data-flow",
                            title: "数据流动画",
                            description: "可视化数据在系统中的流动过程，适用于网络拓扑展示",
                            thumbnail: "images/digital-twin-data-flow.jpg",
                            version: "r179",
                            url: "examples/digital-twin-data-flow"
                        },
                        {
                            id: "digital-twin-heatmap",
                            title: "热力图显示",
                            description: "在3D场景中展示热力图数据，如温度分布、人流密度等",
                            thumbnail: "images/digital-twin-heatmap.jpg",
                            version: "r179",
                            url: "examples/digital-twin-heatmap"
                        },
                        {
                            id: "digital-twin-sensor-visualization",
                            title: "传感器可视化",
                            description: "实时显示传感器数据，包括状态指示和数据变化动画",
                            thumbnail: "images/digital-twin-sensor-visualization.jpg",
                            version: "r179",
                            url: "examples/digital-twin-sensor-visualization"
                        },
                        {
                            id: "digital-twin-timeline-animation",
                            title: "时间轴动画",
                            description: "基于时间轴的数据回放和预测动画，展示历史和未来趋势",
                            thumbnail: "images/digital-twin-timeline-animation.jpg",
                            version: "r179",
                            url: "examples/digital-twin-timeline-animation"
                        }
                    ]
                },
                {
                    id: "digital-twin-interaction",
                    name: "交互控制",
                    examples: [
                        {
                            id: "digital-twin-device-control",
                            title: "设备控制面板",
                            description: "3D场景中的设备控制界面，支持实时操作和状态反馈",
                            thumbnail: "images/digital-twin-device-control.jpg",
                            version: "r179",
                            url: "examples/digital-twin-device-control"
                        },
                        {
                            id: "digital-twin-path-planning",
                            title: "路径规划",
                            description: "可视化路径规划算法，适用于机器人导航和物流优化",
                            thumbnail: "images/digital-twin-path-planning.jpg",
                            version: "r179",
                            url: "examples/digital-twin-path-planning"
                        },
                        {
                            id: "digital-twin-alarm-system",
                            title: "报警系统",
                            description: "3D场景中的报警提示和状态指示，包括声光报警效果",
                            thumbnail: "images/digital-twin-alarm-system.jpg",
                            version: "r179",
                            url: "examples/digital-twin-alarm-system"
                        },
                        {
                            id: "digital-twin-virtual-assembly",
                            title: "虚拟装配",
                            description: "模拟产品装配过程，支持拖拽组装和碰撞检测",
                            thumbnail: "images/digital-twin-virtual-assembly.jpg",
                            version: "r179",
                            url: "examples/digital-twin-virtual-assembly"
                        }
                    ]
                },
                {
                    id: "digital-twin-simulation",
                    name: "仿真模拟",
                    examples: [
                        {
                            id: "digital-twin-factory-simulation",
                            title: "工厂仿真",
                            description: "完整的工厂生产线仿真，包括设备运行和产品流转",
                            thumbnail: "images/digital-twin-factory-simulation.jpg",
                            version: "r179",
                            url: "examples/digital-twin-factory-simulation"
                        },
                        {
                            id: "digital-twin-city-simulation",
                            title: "城市仿真",
                            description: "智慧城市场景仿真，包括交通流、人流和基础设施",
                            thumbnail: "images/digital-twin-city-simulation.jpg",
                            version: "r179",
                            url: "examples/digital-twin-city-simulation"
                        },
                        {
                            id: "digital-twin-building-bim",
                            title: "建筑BIM",
                            description: "建筑信息模型展示，支持楼层切换和构件信息查看",
                            thumbnail: "images/digital-twin-building-bim.jpg",
                            version: "r179",
                            url: "examples/digital-twin-building-bim"
                        },
                        {
                            id: "digital-twin-energy-flow",
                            title: "能源流动",
                            description: "可视化能源系统中的电力、热力等能源流动过程",
                            thumbnail: "images/digital-twin-energy-flow.jpg",
                            version: "r179",
                            url: "examples/digital-twin-energy-flow"
                        },
                        {
                            id: "visualization-radar-uv",
                            title: "UV雷达扩散特效",
                            description: "基于UV坐标的雷达扩散波纹动画效果",
                            thumbnail: "images/visualization-radar-uv.jpg",
                            version: "r179",
                            url: "examples/visualization-radar-uv"
                        },
                        {
                            id: "visualization-radar-spread",
                            title: "雷达扩散特效",
                            description: "圆形波纹向外扩散效果，模拟雷达探测波",
                            thumbnail: "images/visualization-radar-spread.jpg",
                            version: "r179",
                            url: "examples/visualization-radar-spread"
                        },
                        {
                            id: "visualization-radar-scan",
                            title: "雷达扫描特效",
                            description: "旋转扫描线效果，带有渐变衰减",
                            thumbnail: "images/visualization-radar-scan.jpg",
                            version: "r179",
                            url: "examples/visualization-radar-scan"
                        },
                        {
                            id: "visualization-earth-sweep",
                            title: "地球渐变扫光",
                            description: "地球表面的渐变扫描光效果",
                            thumbnail: "images/visualization-earth-sweep.jpg",
                            version: "r179",
                            url: "examples/visualization-earth-sweep"
                        },
                        {
                            id: "visualization-earth-spot-sweep",
                            title: "地球斑点扫光",
                            description: "地球表面的斑点状扫描光效果",
                            thumbnail: "images/visualization-earth-spot-sweep.jpg",
                            version: "r179",
                            url: "examples/visualization-earth-spot-sweep"
                        },
                        {
                            id: "visualization-merged-shape-monitor",
                            title: "合并形状监测",
                            description: "使用射线检测合并几何体中的单个形状动作",
                            thumbnail: "images/visualization-merged-shape-monitor.jpg",
                            version: "r179",
                            url: "examples/visualization-merged-shape-monitor"
                        },
                        {
                            id: "visualization-procedural-buildings",
                            title: "程序化生成随机建筑",
                            description: "程序化生成随机建筑模型，俯视视角城市建筑群",
                            thumbnail: "images/visualization-procedural-buildings.jpg",
                            version: "r179",
                            url: "examples/visualization-procedural-buildings"
                        },
                        {
                            id: "visualization-windfield-canvas-texture",
                            title: "Canvas贴图3D风场图",
                            description: "风场流渲染到Canvas并贴图在球体上，支持展开收起动画",
                            thumbnail: "images/visualization-windfield-canvas-texture.jpg",
                            version: "r179",
                            url: "examples/visualization-windfield-canvas-texture"
                        },
                        {
                            id: "visualization-windfield-3d-plane",
                            title: "平面3D风场图",
                            description: "平面上的风场粒子流动效果，带参数控制面板",
                            thumbnail: "images/visualization-windfield-3d-plane.jpg",
                            version: "r179",
                            url: "examples/visualization-windfield-3d-plane"
                        },
                        {
                            id: "visualization-windfield-3d-globe",
                            title: "地球3D风场图",
                            description: "地球上的风场粒子流动效果，带参数控制面板",
                            thumbnail: "images/visualization-windfield-3d-globe.jpg",
                            version: "r179",
                            url: "examples/visualization-windfield-3d-globe"
                        },
                        {
                            id: "visualization-earth-texture",
                            title: "地球贴图",
                            description: "带有纹理贴图的旋转地球",
                            thumbnail: "images/visualization-earth-texture.jpg",
                            version: "r179",
                            url: "examples/visualization-earth-texture"
                        },
                        {
                            id: "visualization-earth-columns",
                            title: "地球柱体",
                            description: "使用InstancedMesh实现的地球柱状图",
                            thumbnail: "images/visualization-earth-columns.jpg",
                            version: "r179",
                            url: "examples/visualization-earth-columns"
                        },
                        {
                            id: "visualization-earth-columns-optimized",
                            title: "地球柱体优化",
                            description: "使用BufferGeometryUtils.mergeGeometries合并优化的地球柱状图",
                            thumbnail: "images/visualization-earth-columns-optimized.jpg",
                            version: "r179",
                            url: "examples/visualization-earth-columns-optimized"
                        },
                        {
                            id: "visualization-earth-columns-animation",
                            title: "地球柱体合并优化动画",
                            description: "带动画效果的地球柱状图，柱体高度随时间波动",
                            thumbnail: "images/visualization-earth-columns-animation.jpg",
                            version: "r179",
                            url: "examples/visualization-earth-columns-animation"
                        },
                        {
                            id: "visualization-gradient-fence",
                            title: "渐变围栏 3D 区块",
                            description: "带渐变色的围栏效果",
                            thumbnail: "images/visualization-gradient-fence.jpg",
                            version: "r179",
                            url: "examples/visualization-gradient-fence"
                        },
                        {
                            id: "visualization-multi-gradient-fence",
                            title: "多重渐变围栏",
                            description: "多层渐变围栏组合效果",
                            thumbnail: "images/visualization-multi-gradient-fence.jpg",
                            version: "r179",
                            url: "examples/visualization-multi-gradient-fence"
                        },
                        {
                            id: "visualization-earth-sweep",
                            title: "地球渐变扫光",
                            description: "地球表面的渐变扫描光效果",
                            thumbnail: "images/visualization-earth-sweep.jpg",
                            version: "r179",
                            url: "examples/visualization-earth-sweep"
                        },
                        {
                            id: "visualization-earth-spot-sweep",
                            title: "地球斑点扫光",
                            description: "地球表面的斑点状扫描光效果",
                            thumbnail: "images/visualization-earth-spot-sweep.jpg",
                            version: "r179",
                            url: "examples/visualization-earth-spot-sweep"
                        },
                        {
                            id: "visualization-windfield-canvas2d",
                            title: "canvas 2D风场图",
                            description: "使用canvas绘制的2D风场流向图",
                            thumbnail: "images/visualization-windfield-canvas2d.jpg",
                            // version: "r179",
                            url: "examples/visualization-windfield-canvas2d"
                        },
                        {
                            id: "visualization-heatmap-2d",
                            title: "2D热力图",
                            description: "平面热力图可视化，支持动态热点",
                            thumbnail: "images/visualization-heatmap-2d.jpg",
                            version: "r179",
                            url: "examples/visualization-heatmap-2d"
                        },
                        {
                            id: "visualization-heatmap-3d-hill",
                            title: "3D热力山丘图",
                            description: "3D热力图山丘可视化，带光照和颜色渐变",
                            thumbnail: "images/visualization-heatmap-3d-hill.jpg",
                            version: "r179",
                            url: "examples/visualization-heatmap-3d-hill"
                        },
                        {
                            id: "visualization-contour-line-3d",
                            title: "纯色3D等高线图",
                            description: "基于热力图数据的3D等高线可视化，纯色线条",
                            thumbnail: "images/visualization-contour-line-3d.jpg",
                            version: "r179",
                            url: "examples/visualization-contour-line-3d"
                        },
                        {
                            id: "visualization-contour-line-3d-colored",
                            title: "彩色3D等高线图",
                            description: "基于热力图数据的3D彩色等高线可视化",
                            thumbnail: "images/visualization-contour-line-3d-colored.jpg",
                            version: "r179",
                            url: "examples/visualization-contour-line-3d-colored"
                        },
                        {
                            id: "visualization-contour-heatmap-3d",
                            title: "3D等高线图+热力图",
                            description: "同时显示等高线和热力渐变效果的3D可视化",
                            thumbnail: "images/visualization-contour-heatmap-3d.jpg",
                            version: "r179",
                            url: "examples/visualization-contour-heatmap-3d"
                        },
                        {
                            id: "visualization-stepped-contour-heatmap-3d",
                            title: "3D断层阶梯热力图",
                            description: "阶梯状热力图可视化，形成断层效果",
                            thumbnail: "images/visualization-stepped-contour-heatmap-3d.jpg",
                            version: "r179",
                            url: "examples/visualization-stepped-contour-heatmap-3d"
                        },
                        {
                            id: "visualization-glow-blocks",
                            title: "泛光3D区块",
                            description: "带泛光效果的发光方块组合",
                            thumbnail: "images/visualization-glow-blocks.jpg",
                            version: "r179",
                            url: "examples/visualization-glow-blocks"
                        },
                        {
                            id: "visualization-glow-blocks-outline",
                            title: "泛光轮廓3D区块",
                            description: "带轮廓描边和泛光效果的3D方块组合",
                            thumbnail: "images/visualization-glow-blocks-outline.jpg",
                            version: "r179",
                            url: "examples/visualization-glow-blocks-outline"
                        },
                        {
                            id: "visualization-framebuffer",
                            title: "帧缓存基础",
                            description: "演示帧缓冲区和后处理技术，包括雾气、暗角、色差、扫描线效果",
                            thumbnail: "images/visualization-framebuffer.jpg",
                            version: "r179",
                            url: "examples/visualization-framebuffer"
                        },
                        {
                            id: "visualization-rain-snow",
                            title: "雨雪雾天气",
                            description: "使用粒子系统实现雨雪天气效果，支持雨、雪、雾三种天气切换",
                            thumbnail: "images/visualization-rain-snow.jpg",
                            version: "r179",
                            url: "examples/visualization-rain-snow"
                        },
                        {
                            id: "visualization-light-beam",
                            title: "基础光束流动",
                            description: "沿直线流动的光束效果，使用TubeGeometry和着色器实现光效动画",
                            thumbnail: "images/visualization-light-beam.jpg",
                            version: "r179",
                            url: "examples/visualization-light-beam"
                        },
                        {
                            id: "visualization-path-beam",
                            title: "波浪路径光束",
                            description: "沿波浪路径流动的光束效果，带有地面波动效果",
                            thumbnail: "images/visualization-path-beam.jpg",
                            version: "r179",
                            url: "examples/visualization-path-beam"
                        },
                        {
                            id: "visualization-heart-beam",
                            title: "心形流动光束",
                            description: "心形路径的流动光效果，带有双色调光效",
                            thumbnail: "images/visualization-heart-beam.jpg",
                            version: "r179",
                            url: "examples/visualization-heart-beam"
                        }
                    ]
                }
            ]
        }
    ]
};