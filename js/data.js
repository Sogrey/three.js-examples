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
                            id: "basic-materials-standard",
                            title: "标准材质",
                            description: "展示 MeshStandardMaterial 的各种属性和效果",
                            thumbnail: "images/basic-materials-standard.jpg",
                            version: "r150",
                            url: "examples/basic-materials-standard"
                        },
                        {
                            id: "basic-materials-physical",
                            title: "物理材质",
                            description: "使用 MeshPhysicalMaterial 创建逼真的金属和玻璃效果",
                            thumbnail: "images/basic-materials-physical.jpg",
                            version: "r150",
                            url: "examples/basic-materials-physical"
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
                            version: "r150",
                            url: "examples/lighting-point"
                        },
                        {
                            id: "lighting-spot",
                            title: "聚光灯",
                            description: "使用聚光灯创建舞台照明效果",
                            thumbnail: "images/lighting-spot.jpg",
                            version: "r150",
                            url: "examples/lighting-spot"
                        },
                        {
                            id: "lighting-directional",
                            title: "平行光",
                            description: "模拟太阳光的平行光效果",
                            thumbnail: "images/lighting-directional.jpg",
                            version: "r150",
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
                            version: "r150",
                            url: "examples/lighting-shadows"
                        },
                        {
                            id: "lighting-ambient-occlusion",
                            title: "环境光遮蔽",
                            description: "使用环境光遮蔽增强场景深度感",
                            thumbnail: "images/lighting-ambient-occlusion.jpg",
                            version: "r150",
                            url: "examples/lighting-ambient-occlusion"
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
                            version: "r150",
                            url: "examples/animation-keyframes"
                        },
                        {
                            id: "animation-morph",
                            title: "变形动画",
                            description: "在不同几何体之间平滑过渡的变形效果",
                            thumbnail: "images/animation-morph.jpg",
                            version: "r150",
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
                            version: "r150",
                            url: "examples/animation-raycaster"
                        },
                        {
                            id: "animation-drag",
                            title: "拖拽控制",
                            description: "实现3D对象的拖拽和放置功能",
                            thumbnail: "images/animation-drag.jpg",
                            version: "r150",
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
                        }
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
        }
    ]
};