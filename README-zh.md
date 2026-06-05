# Three.js 示例集合

<p align="center">
    <img src="https://threejs.org/files/favicon_white.ico" width="64" height="64" alt="Three.js Logo">
    <br>
    <strong>221+ Three.js 示例</strong>
    <br>
    <br> <a href="README.md">English</a> | 中文
</p>

---

## 🎯 项目概述

一个全面的 **221+ Three.js 示例集合**，涵盖从基础几何体到高级着色器、动画和实际应用的广泛主题。基于 **Three.js r179** 构建，使用现代 ES 模块导入方式。

## 📊 完成统计

| 分类 | 总数 | 已完成 | 状态 |
|------|------|--------|--------|
| 基础案例 | 36 | 36 | 100% ✅ |
| 后期处理 | 9 | 9 | 100% ✅ |
| 粒子 | 22 | 19 | 86% |
| 着色器 | 84 | 71 | 85% |
| 应用场景 | 65 | 59 | 91% |
| 动画效果 | 15 | 13 | 87% |
| 扩展功能 | 11 | 11 | 100% ✅ |
| 游戏复刻 | 3 | 1 | 33% |
| 物理应用 | 2 | 2 | 100% ✅ |
| **总计** | **247** | **221** | **89%** |

## 🚀 快速开始

### 1. 克隆仓库

```bash
git clone <repository-url>
cd three.js-examples-2
```

### 2. 启动本地服务器

```bash
# 使用 Python
python -m http.server 8000

# 或使用 Node.js
npx serve
```

### 3. 在浏览器中打开

```
http://localhost:8000
```

## 📁 项目结构

```
three.js-examples-2/
├── index.html              # 主导航页面
├── EXAMPLES_LIST.md        # 完整示例列表
├── examples/z258/          # 示例文件目录
│   ├── basic-*.html        # 基础案例 (36)
│   ├── animation-*.html    # 动画效果 (13)
│   ├── application-*.html  # 应用场景 (59)
│   ├── shader-*.html       # 着色器 (71)
│   ├── particle-*.html     # 粒子 (19)
│   ├── effectComposer-*.html # 后期处理 (9)
│   ├── expand-*.html       # 扩展功能 (11)
│   ├── physics-*.html      # 物理应用 (2)
│   ├── game-*.html         # 游戏复刻 (1)
│   └── effect-*.html       # 特效效果 (2)
├── images/                 # 缩略图目录
├── libs/                   # 第三方库目录
│   └── three/r179/         # Three.js r179
├── js/
│   └── data.js            # 示例数据配置
└── docs/                  # 文档目录
    └── creating-examples.md
```

## 🎨 示例分类

### 1. 基础案例 (36)
- 模型加载 (GLTF, FBX, OBJ)
- 场景创建与环境
- 相机控制与动画
- 几何体与变换
- 渲染与特效
- 文件操作

### 2. 后期处理 (9)
- 辉光效果
- 饱和度调整
- 边缘模糊
- 自定义遮罩通道
- UV 图像变换
- 残影效果
- 延迟光照
- 雪景效果

### 3. 粒子 (19)
- 雪花、雨滴、烟雾
- 火焰与爆炸
- 星系与星空
- 地球粒子
- 文字粒子
- 鼠标轨迹粒子

### 4. 着色器 (71)
- 城市与建筑效果
- 自然与天气
- 特效与动画
- 扫描与检测
- 材质与纹理
- 溶解与变换
- 流动与光效

### 5. 应用场景 (59)
- 数据可视化
- 交互漫游
- 建筑与线条
- 模型与效果
- 测量工具
- 地形与地图

### 6. 动画效果 (13)
- GSAP 动画
- Theatre.js
- 关键帧动画
- 模型动画
- 曲线动画
- 卷曲动画

### 7. 扩展功能 (11)
- 本地模型加载
- IndexedDB 使用
- 3D Tiles 加载
- 3D 地图
- 热力图
- 多视图

### 8. 物理应用 (2)
- Cannon.js 物理引擎
- Ammo.js 物理引擎

### 9. 游戏复刻 (1)
- 3D 贪吃蛇

## ✨ 功能特点

- **🎮 交互控制**：lil-gui 面板实时参数调整
- **📸 截图支持**：内置缩略图生成功能
- **� ES 模块**：现代 importmap 模块系统
- **📱 响应式设计**：适配各种设备尺寸
- **🔍 代码查看器**：集成 Prism.js 语法高亮
- **⚡ 本地资源**：所有资源本地化，加载快速
- **🎯 轨道控制器**：流畅的相机导航

## 🛠️ 技术栈

- **Three.js r179** - 核心 3D 库
- **lil-gui** - 参数调试面板
- **GSAP** - 高级动画
- **anime.js** - 轻量级动画
- **Cannon.js/Ammo.js** - 物理引擎
- **Prism.js** - 代码语法高亮

## 📝 文档

- [创建示例指南](docs/creating-examples.md) - 如何创建新示例
- [完整示例列表](EXAMPLES_LIST.md) - 完整分类列表

## 🤝 贡献指南

1. 遵循 [示例模板](examples/template.html)
2. 包含适当的注释和文档
3. 添加截图支持以生成缩略图
4. 在不同浏览器中测试

## 📄 许可证

MIT 许可证

## 🙏 致谢

- [Three.js](https://threejs.org/) - 强大的 3D 库
- 所有示例作者和贡献者
- 开源社区

---

<p align="center">
    <strong>⭐ 如果这个项目对您有帮助，请给它一个星标！</strong>
</p>
