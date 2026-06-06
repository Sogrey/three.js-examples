# Three.js Examples 完整示例列表

> 基于 Three.js r179 的 221+ 个示例集合
> 最后更新: 2026-06-05

---

## 📊 示例统计

| 分类 | 示例数量 |
|------|----------|
| 基础案例 (Basic) | 36 |
| 后期处理 (EffectComposer) | 9 |
| 粒子 (Particle) | 19 |
| 着色器 (Shader) | 71 |
| 应用场景 (Application) | 59 |
| 动画效果 (Animation) | 13 |
| 扩展功能 (Expand) | 11 |
| 游戏复刻 (Game) | 1 |
| 物理应用 (Physics) | 2 |
| **总计** | **221** |

---

## 🎯 基础案例 (Basic) - 36个

### 模型与加载
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 1 | [basic-modelAnimation.html](examples/z258/basic-modelAnimation.html) | 人物模型动画案例 |
| 2 | [basic-modelLoad.html](examples/z258/basic-modelLoad.html) | GLTF/FBX/OBJ多格式模型加载 |
| 3 | [basic-modelShadow.html](examples/z258/basic-modelShadow.html) | 模型阴影效果 |
| 4 | [basic-modelSky.html](examples/z258/basic-modelSky.html) | 模型天空环境 |
| 5 | [basic-modelAnimates.html](examples/z258/basic-modelAnimates.html) | 单/多模型动画控制 |
| 6 | [basic-gltfOptLoader.html](examples/z258/basic-gltfOptLoader.html) | GLTF Opt解压加载 |
| 7 | [basic-modelExport.html](examples/z258/basic-modelExport.html) | 模型导出功能 |

### 场景与环境
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 8 | [basic-createScene.html](examples/z258/basic-createScene.html) | 创建基础场景 |
| 9 | [basic-skyAndEnv.html](examples/z258/basic-skyAndEnv.html) | 天空盒与环境贴图 |
| 10 | [basic-sceneFog.html](examples/z258/basic-sceneFog.html) | 场景雾化效果 |
| 11 | [basic-loadingAnimate.html](examples/z258/basic-loadingAnimate.html) | 加载动画 |

### 相机与控制
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 12 | [basic-camera-cameraAttribute.html](examples/z258/basic-camera-cameraAttribute.html) | 相机属性设置 |
| 13 | [basic-camera-orbControls.html](examples/z258/basic-camera-orbControls.html) | 轨道控制器 |
| 14 | [basic-cameraAnimate.html](examples/z258/basic-cameraAnimate.html) | 相机动画 |
| 15 | [basic-camera-viewHelper.html](examples/z258/basic-camera-viewHelper.html) | 视图辅助器 |

### 几何与变换
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 16 | [basic-geometry-gradientTriangle.html](examples/z258/basic-geometry-gradientTriangle.html) | 渐变三角形 |
| 17 | [basic-geometry-screenCoord.html](examples/z258/basic-geometry-screenCoord.html) | 三维转屏幕坐标 |
| 18 | [basic-transformObject.html](examples/z258/basic-transformObject.html) | 拖拽控制 |
| 19 | [basic-transformBox3.html](examples/z258/basic-transformBox3.html) | 变换Box3 |
| 20 | [basic-changeMaterial.html](examples/z258/basic-changeMaterial.html) | 材质修改动画 |
| 21 | [basic-diffusionCircle.html](examples/z258/basic-diffusionCircle.html) | 扩散圈效果 |

### 渲染与特效
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 22 | [basic-renderFrame.html](examples/z258/basic-renderFrame.html) | 帧率控制 |
| 23 | [basic-renderTarget.html](examples/z258/basic-renderTarget.html) | 渲染贴图物体 |
| 24 | [basic-screenShot.html](examples/z258/basic-screenShot.html) | 截图功能 |
| 25 | [basic-skeletonBone.html](examples/z258/basic-skeletonBone.html) | 骨骼动画 |
| 26 | [basic-gsapAnimate.html](examples/z258/basic-gsapAnimate.html) | GSAP动画 |

### 文件与数据
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 27 | [basic-fileChunks.html](examples/z258/basic-fileChunks.html) | 文件分片加载 |
| 28 | [basic-domDisplay.html](examples/z258/basic-domDisplay.html) | DOM遮挡检测 |

---

## 🎨 后期处理 (EffectComposer) - 9个

| 序号 | 文件名 | 说明 |
|------|--------|------|
| 1 | [effectComposer-selectBloomPass.html](examples/z258/effectComposer-selectBloomPass.html) | 辉光效果 |
| 2 | [effectComposer-saturationPass.html](examples/z258/effectComposer-saturationPass.html) | 饱和度调整 |
| 3 | [effectComposer-threeSelectBloom.html](examples/z258/effectComposer-threeSelectBloom.html) | 官方选择辉光简化版 |
| 4 | [effectComposer-edgeBlurringEffect.html](examples/z258/effectComposer-edgeBlurringEffect.html) | 边缘模糊效果 |
| 5 | [postprocessing-customMaskPass.html](examples/z258/postprocessing-customMaskPass.html) | 自定义遮罩通道 |
| 6 | [postprocessing-uvTransformation.html](examples/z258/postprocessing-uvTransformation.html) | UV图像变换 |
| 7 | [postprocessing-afterimagePass.html](examples/z258/postprocessing-afterimagePass.html) | 残影效果 |
| 8 | [postprocessing-deferredLighting.html](examples/z258/postprocessing-deferredLighting.html) | 延迟光照 |
| 9 | [postprocessing-sceneSnowEffect.html](examples/z258/postprocessing-sceneSnowEffect.html) | 场景雪效果 |

---

## ✨ 粒子 (Particle) - 19个

| 序号 | 文件名 | 说明 |
|------|--------|------|
| 1 | [particle-snow.html](examples/z258/particle-snow.html) | 雪花粒子 |
| 2 | [particle-scattered.html](examples/z258/particle-scattered.html) | 散射粒子 |
| 3 | [particle-galaxyStar.html](examples/z258/particle-galaxyStar.html) | 星系星空 |
| 4 | [particle-pointsEarth.html](examples/z258/particle-pointsEarth.html) | 点阵地球 |
| 5 | [particle-blendShader.html](examples/z258/particle-blendShader.html) | 混合着色器粒子 |
| 6 | [particle-fireParticles.html](examples/z258/particle-fireParticles.html) | 火焰粒子 |
| 7 | [particle-realFire.html](examples/z258/particle-realFire.html) | 真实火焰 |
| 8 | [particle-globeParticle.html](examples/z258/particle-globeParticle.html) | 地球粒子 |
| 9 | [particle-waterLeakage.html](examples/z258/particle-waterLeakage.html) | 漏水效果 |
| 10 | [particle-steamParticle.html](examples/z258/particle-steamParticle.html) | 蒸汽粒子 |
| 11 | [particle-waterFlow.html](examples/z258/particle-waterFlow.html) | 水流粒子 |
| 12 | [particle-particleFire.html](examples/z258/particle-particleFire.html) | 粒子火焰 |
| 13 | [particle-particleLine.html](examples/z258/particle-particleLine.html) | 粒子线条 |
| 14 | [particle-starrySky.html](examples/z258/particle-starrySky.html) | 星空粒子 |
| 15 | [particle-particleWire.html](examples/z258/particle-particleWire.html) | 粒子线框 |
| 16 | [particle-sphereLine.html](examples/z258/particle-sphereLine.html) | 球体线条 |
| 17 | [particle-waveParticleShader.html](examples/z258/particle-waveParticleShader.html) | 波浪粒子着色器 |
| 18 | [particle-textParticle.html](examples/z258/particle-textParticle.html) | 文字粒子化 |
| 19 | [particle-particlesCursorAnimation.html](examples/z258/particle-particlesCursorAnimation.html) | 鼠标轨迹粒子 |

---

## 🌈 着色器 (Shader) - 71个

### 城市与建筑
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 1 | [shader-cityEffect.html](examples/z258/shader-cityEffect.html) | 城市光效 |
| 2 | [shader-cityBlendLight.html](examples/z258/shader-cityBlendLight.html) | 城市混合扫光 |
| 3 | [shader-chinaFlag.html](examples/z258/shader-chinaFlag.html) | 中国旗帜 |
| 4 | [shader-circleWave.html](examples/z258/shader-circleWave.html) | 圆波扫光 |
| 5 | [shader-cityMixShader.html](examples/z258/shader-cityMixShader.html) | 城市混合Shader |
| 6 | [shader-cityMoveLight.html](examples/z258/shader-cityMoveLight.html) | 智慧城市扫光 |
| 7 | [shader-cityLight.html](examples/z258/shader-cityLight.html) | 城市光影 |
| 8 | [shader-cityLine.html](examples/z258/shader-cityLine.html) | 城市线条 |

### 自然与天气
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 9 | [shader-grassShader.html](examples/z258/shader-grassShader.html) | 草地着色器 |
| 10 | [shader-oceanShader.html](examples/z258/shader-oceanShader.html) | 海面着色器 |
| 11 | [shader-cartoonOcean.html](examples/z258/shader-cartoonOcean.html) | 卡通海面 |
| 12 | [shader-cloudShader.html](examples/z258/shader-cloudShader.html) | 云朵着色器 |
| 13 | [shader-whiteCloud.html](examples/z258/shader-whiteCloud.html) | 白云效果 |
| 14 | [shader-darkClouds.html](examples/z258/shader-darkClouds.html) | 乌云效果 |
| 15 | [shader-raningSea.html](examples/z258/shader-raningSea.html) | 雨中海面 |
| 16 | [shader-waterSky.html](examples/z258/shader-waterSky.html) | 水天效果 |
| 17 | [shader-steamWaveSun.html](examples/z258/shader-steamWaveSun.html) | 蒸汽波太阳 |

### 特效与动画
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 18 | [shader-magicalSphere.html](examples/z258/shader-magicalSphere.html) | 魔法球体 |
| 19 | [shader-blackhole.html](examples/z258/shader-blackhole.html) | 黑洞效果 |
| 20 | [shader-audioSolutions.html](examples/z258/shader-audioSolutions.html) | 音乐可视化 |
| 21 | [shader-audioDance.html](examples/z258/shader-audioDance.html) | 音频舞动 |
| 22 | [shader-loveShader.html](examples/z258/shader-loveShader.html) | 爱心效果 |
| 23 | [shader-redRose.html](examples/z258/shader-redRose.html) | 红玫瑰 |
| 24 | [shader-heartShader.html](examples/z258/shader-heartShader.html) | 心形着色器 |
| 25 | [shader-jumpHeart.html](examples/z258/shader-jumpHeart.html) | 跳动的心 |
| 26 | [shader-fireShader.html](examples/z258/shader-fireShader.html) | 火焰着色器 |
| 27 | [shader-smoke.html](examples/z258/shader-smoke.html) | 烟雾效果 |
| 28 | [shader-candleShader.html](examples/z258/shader-candleShader.html) | 蜡烛效果 |
| 29 | [shader-ephemeralFlower.html](examples/z258/shader-ephemeralFlower.html) | 昙花一现 |
| 30 | [shader-mushroom.html](examples/z258/shader-mushroom.html) | 蘑菇效果 |
| 31 | [shader-energyBallShader.html](examples/z258/shader-energyBallShader.html) | 能量球 |
| 32 | [shader-fishShader.html](examples/z258/shader-fishShader.html) | 鱼群效果 |
| 33 | [shader-blobShader.html](examples/z258/shader-blobShader.html) | _blob效果 |

### 扫描与检测
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 34 | [shader-radarScan.html](examples/z258/shader-radarScan.html) | 雷达扫描 |
| 35 | [shader-radarShader.html](examples/z258/shader-radarShader.html) | 雷达着色器 |
| 36 | [shader-planeScan.html](examples/z258/shader-planeScan.html) | 平面扫描 |
| 37 | [shader-waveScan.html](examples/z258/shader-waveScan.html) | 波浪扫描 |
| 38 | [shader-circleRotate.html](examples/z258/shader-circleRotate.html) | 圆环旋转 |
| 39 | [shader-ringShader.html](examples/z258/shader-ringShader.html) | 环形着色器 |
| 40 | [shader-ringsShader.html](examples/z258/shader-ringsShader.html) | 多层圆环 |
| 41 | [shader-compassShader.html](examples/z258/shader-compassShader.html) | 指南针效果 |
| 42 | [shader-halfCircle.html](examples/z258/shader-halfCircle.html) | 半圆效果 |

### 材质与效果
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 43 | [shader-hologram.html](examples/z258/shader-hologram.html) | 全息投影 |
| 44 | [shader-innerGlow.html](examples/z258/shader-innerGlow.html) | 内发光效果 |
| 45 | [shader-softLight.html](examples/z258/shader-softLight.html) | 柔光效果 |
| 46 | [shader-emitShader.html](examples/z258/shader-emitShader.html) | 发光效果 |
| 47 | [shader-girdFloor.html](examples/z258/shader-girdFloor.html) | 网格地板 |
| 48 | [shader-infiniteGrid.html](examples/z258/shader-infiniteGrid.html) | 无限网格 |
| 49 | [shader-rasterGrid.html](examples/z258/shader-rasterGrid.html) | 光栅网格 |
| 50 | [shader-gridShader.html](examples/z258/shader-gridShader.html) | 网格着色器 |
| 51 | [shader-tachnologyFloor.html](examples/z258/shader-tachnologyFloor.html) | 科技风地面 |
| 52 | [shader-groundglass.html](examples/z258/shader-groundglass.html) | 磨砂玻璃 |
| 53 | [shader-gaussianBlur.html](examples/z258/shader-gaussianBlur.html) | 高斯模糊 |
| 54 | [shader-mosaicShader.html](examples/z258/shader-mosaicShader.html) | 马赛克效果 |
| 55 | [shader-cellShader.html](examples/z258/shader-cellShader.html) | 细胞效果 |

### 溶解与变换
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 56 | [shader-dissolve.html](examples/z258/shader-dissolve.html) | 溶解效果 |
| 57 | [shader-dissolveAnimate.html](examples/z258/shader-dissolveAnimate.html) | 溶解动画 |
| 58 | [shader-changeShaderToy.html](examples/z258/shader-changeShaderToy.html) | ShaderToy切换 |
| 59 | [shader-grayShader.html](examples/z258/shader-grayShader.html) | 灰度效果 |
| 60 | [shader-reliefImage.html](examples/z258/shader-reliefImage.html) | 浮雕图像 |
| 61 | [shader-contour.html](examples/z258/shader-contour.html) | 轮廓效果 |
| 62 | [shader-contourLine.html](examples/z258/shader-contourLine.html) | 轮廓线 |

### 流动与光效
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 63 | [shader-flowLight.html](examples/z258/shader-flowLight.html) | 流动光效 |
| 64 | [shader-waveShader.html](examples/z258/shader-waveShader.html) | 波浪着色器 |
| 65 | [shader-vortexShader.html](examples/z258/shader-vortexShader.html) | 漩涡效果 |
| 66 | [shader-smokeCircle.html](examples/z258/shader-smokeCircle.html) | 烟雾圆环 |
| 67 | [shader-wallShader.html](examples/z258/shader-wallShader.html) | 墙体着色器 |
| 68 | [shader-fenceShader.html](examples/z258/shader-fenceShader.html) | 围栏着色器 |
| 69 | [shader-fenceWall.html](examples/z258/shader-fenceWall.html) | 围栏墙面 |
| 70 | [shader-transparentGradient.html](examples/z258/shader-transparentGradient.html) | 透明渐变 |
| 71 | [shader-modelBlendShader.html](examples/z258/shader-modelBlendShader.html) | 模型混合 |

---

## 🚀 应用场景 (Application) - 59个

### 可视化与数据
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 1 | [application-pie3D.html](examples/z258/application-pie3D.html) | 3D饼图 |
| 2 | [application-terrain.html](examples/z258/application-terrain.html) | 程序化地形 |
| 3 | [application-mathApply.html](examples/z258/application-mathApply.html) | 数学公式应用 |
| 4 | [application-matrixOper.html](examples/z258/application-matrixOper.html) | 矩阵操作 |
| 5 | [application-textSphere.html](examples/z258/application-textSphere.html) | 球体文字 |
| 6 | [application-isoline.html](examples/z258/application-isoline.html) | 等值线 |
| 7 | [application-modelHeatmap.html](examples/z258/application-modelHeatmap.html) | 模型热力图 |
| 8 | [application-geometryMerge.html](examples/z258/application-geometryMerge.html) | 几何合并 |
| 9 | [application-measurement.html](examples/z258/application-measurement.html) | 测量工具 |
| 10 | [application-measure.html](examples/z258/application-measure.html) | 3D测量 |
| 11 | [application-measureTool.html](examples/z258/application-measureTool.html) | 测量工具增强 |
| 12 | [application-measureDraw.html](examples/z258/application-measureDraw.html) | 画线测量 |
| 13 | [application-measureArea.html](examples/z258/application-measureArea.html) | 测量面积 |
| 14 | [application-mathVisual.html](examples/z258/application-mathVisual.html) | 数学可视化 |
| 15 | [application-matrixTransform.html](examples/z258/application-matrixTransform.html) | 矩阵变换可视化 |

### 交互与漫游
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 16 | [application-modelNav.html](examples/z258/application-modelNav.html) | 自动寻路 |
| 17 | [application-personAnimation.html](examples/z258/application-personAnimation.html) | 点击第三人称移动 |
| 18 | [application-personThirdMove.html](examples/z258/application-personThirdMove.html) | 第三人称移动 |
| 19 | [application-pointCloudFpsOctree.html](examples/z258/application-pointCloudFpsOctree.html) | 点云第一人称漫游 |
| 20 | [application-houseExplorer.html](examples/z258/application-houseExplorer.html) | 房屋探索 |
| 21 | [application-fpsRoaming.html](examples/z258/application-fpsRoaming.html) | 第一人称漫游 |
| 22 | [application-modelNavigator.html](examples/z258/application-modelNavigator.html) | 模型导航器 |
| 23 | [application-modelViewer.html](examples/z258/application-modelViewer.html) | 模型查看器 |
| 24 | [application-inspectionView.html](examples/z258/application-inspectionView.html) | 巡检视图 |
| 25 | [application-simpleColl.html](examples/z258/application-simpleColl.html) | 简单碰撞检测 |
| 26 | [application-jumpAnimate.html](examples/z258/application-jumpAnimate.html) | 跳跃动画 |

### 特效与动画
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 27 | [application-videoEffect.html](examples/z258/application-videoEffect.html) | 视频碎片效果 |
| 28 | [application-videoFloor.html](examples/z258/application-videoFloor.html) | 视频地板 |
| 29 | [application-videoModel.html](examples/z258/application-videoModel.html) | 模型视频材质 |
| 30 | [application-vrVideo.html](examples/z258/application-vrVideo.html) | VR全景视频 |
| 31 | [application-imageMove.html](examples/z258/application-imageMove.html) | 图片移动 |
| 32 | [application-canvasTexture.html](examples/z258/application-canvasTexture.html) | Canvas贴图 |
| 33 | [application-spriteText.html](examples/z258/application-spriteText.html) | 精灵文字 |
| 34 | [application-lightIcon.html](examples/z258/application-lightIcon.html) | 亮光标记 |
| 35 | [application-lightBar.html](examples/z258/application-lightBar.html) | 光柱效果 |
| 36 | [application-flowerRain.html](examples/z258/application-flowerRain.html) | 花瓣雨 |
| 37 | [application-smokeAir.html](examples/z258/application-smokeAir.html) | 烟雾效果 |
| 38 | [application-tweenFire.html](examples/z258/application-tweenFire.html) | 精灵火花 |
| 39 | [application-windMove.html](examples/z258/application-windMove.html) | 风吹动画 |
| 40 | [application-windTurbineWake.html](examples/z258/application-windTurbineWake.html) | 风力涡轮机尾迹 |
| 41 | [application-samplexWave.html](examples/z258/application-samplexWave.html) | 采样波 |

### 建筑与线条
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 42 | [application-buildingLine.html](examples/z258/application-buildingLine.html) | 建筑线条 |
| 43 | [application-flowLine.html](examples/z258/application-flowLine.html) | 贴图飞线 |
| 44 | [application-flyLine.html](examples/z258/application-flyLine.html) | 飞线效果 |
| 45 | [application-pipeFlow.html](examples/z258/application-pipeFlow.html) | 管道流动 |
| 46 | [application-diffuseLine.html](examples/z258/application-diffuseLine.html) | 发散飞线 |
| 47 | [application-diffuseLine2.html](examples/z258/application-diffuseLine2.html) | 发散飞线2 |
| 48 | [application-flowTube.html](examples/z258/application-flowTube.html) | 管道表面运动 |
| 49 | [application-dynamicTube.html](examples/z258/application-dynamicTube.html) | 动态管道 |
| 50 | [application-drawFence.html](examples/z258/application-drawFence.html) | 绘制围栏 |
| 51 | [application-sportFence.html](examples/z258/application-sportFence.html) | 流动围栏 |
| 52 | [application-lampshade.html](examples/z258/application-lampshade.html) | 灯罩效果 |

### 模型与效果
| 序号 | 文件名 | 说明 |
|------|--------|------|
| 53 | [application-modelParticle.html](examples/z258/application-modelParticle.html) | 模型粒子化 |
| 54 | [application-modelBorder.html](examples/z258/application-modelBorder.html) | 模型边框 |
| 55 | [application-modelBase.html](examples/z258/application-modelBase.html) | 生成模型底座 |
| 56 | [application-whiteModel.html](examples/z258/application-whiteModel.html) | 随机城市白膜 |
| 57 | [application-punk.html](examples/z258/application-punk.html) | 朋克风格 |
| 58 | [application-radarScan.html](examples/z258/application-radarScan.html) | 雷达扫描 |
| 59 | [application-customGrid.html](examples/z258/application-customGrid.html) | 自定义网格 |

---

## 🎬 动画效果 (Animation) - 13个

| 序号 | 文件名 | 说明 |
|------|--------|------|
| 1 | [animation-animejsBasic.html](examples/z258/animation-animejsBasic.html) | animejs使用 |
| 2 | [animation-gsapBasic.html](examples/z258/animation-gsapBasic.html) | GSAP基础使用 |
| 3 | [animation-theatrejs.html](examples/z258/animation-theatrejs.html) | Theatre.js动画 |
| 4 | [animation-gsapCollection.html](examples/z258/animation-gsapCollection.html) | GSAP动画合集 |
| 5 | [animation-clipAnimation.html](examples/z258/animation-clipAnimation.html) | 裁剪动画 |
| 6 | [animation-modelAnimation.html](examples/z258/animation-modelAnimation.html) | 人物模型动画 |
| 7 | [animation-personAnimation.html](examples/z258/animation-personAnimation.html) | 点击第三人称移动 |
| 8 | [animation-personThirdMove.html](examples/z258/animation-personThirdMove.html) | 第三人称移动 |
| 9 | [animation-modelUnpack.html](examples/z258/animation-modelUnpack.html) | 模型拆解动画 |
| 10 | [animation-transformAnimate.html](examples/z258/animation-transformAnimate.html) | Mesh变换动画 |
| 11 | [animation-curveAnimate.html](examples/z258/animation-curveAnimate.html) | 曲线动画 |
| 12 | [animation-curlAnimate.html](examples/z258/animation-curlAnimate.html) | 卷曲动画 |
| 13 | [animation-inspectionView.html](examples/z258/animation-inspectionView.html) | 巡检动画 |

---

## 🔧 扩展功能 (Expand) - 11个

| 序号 | 文件名 | 说明 |
|------|--------|------|
| 1 | [expand-localModel.html](examples/z258/expand-localModel.html) | 本地模型加载 |
| 2 | [expand-useIndexDB.html](examples/z258/expand-useIndexDB.html) | IndexedDB使用 |
| 3 | [expand-loadTiles.html](examples/z258/expand-loadTiles.html) | 3D Tiles加载 |
| 4 | [expand-map3D.html](examples/z258/expand-map3D.html) | 3D地图 |
| 5 | [expand-areaMap.html](examples/z258/expand-areaMap.html) | 分级地图 |
| 6 | [expand-geoBorder.html](examples/z258/expand-geoBorder.html) | 地理边界 |
| 7 | [expand-heatmap3D.html](examples/z258/expand-heatmap3D.html) | 3D热力图 |
| 8 | [expand-multViews.html](examples/z258/expand-multViews.html) | 多视图 |
| 9 | [expand-blurReflect.html](examples/z258/expand-blurReflect.html) | 模糊反射 |

---

## 🎮 游戏复刻 (Game) - 1个

| 序号 | 文件名 | 说明 |
|------|--------|------|
| 1 | [game-snake3D.html](examples/z258/game-snake3D.html) | 3D贪吃蛇 |

---

## ⚛️ 物理应用 (Physics) - 2个

| 序号 | 文件名 | 说明 |
|------|--------|------|
| 1 | [physics-physicsMesh.html](examples/z258/physics-physicsMesh.html) | Cannon物理引擎 |
| 2 | [physics-ammoPhysics.html](examples/z258/physics-ammoPhysics.html) | Ammo物理引擎 |

---

## 🎆 特效效果 (Effect) - 2个

| 序号 | 文件名 | 说明 |
|------|--------|------|
| 1 | [effect-cyberCorridor.html](examples/z258/effect-cyberCorridor.html) | 赛博走廊 |
| 2 | [effect-fireworks.html](examples/z258/effect-fireworks.html) | 烟花庆祝 |

---

## 📝 其他独立示例

| 序号 | 文件名 | 说明 |
|------|--------|------|
| 1 | [characterBlur.html](examples/z258/characterBlur.html) | 人物虚化 |
| 2 | [application-happyYear.html](examples/z258/application-happyYear.html) | 新年快乐 |
| 3 | [application-coffeeMug.html](examples/z258/application-coffeeMug.html) | 咖啡杯 |
| 4 | [application-coneMesh.html](examples/z258/application-coneMesh.html) | 圆锥网格 |
| 5 | [application-driving.html](examples/z258/application-driving.html) | 无限行驶 |
| 6 | [application-faceMesh.html](examples/z258/application-faceMesh.html) | 表情网格 |
| 7 | [application-girdMaterial.html](examples/z258/application-girdMaterial.html) | 网格材质 |
| 8 | [application-gridFloor.html](examples/z258/application-gridFloor.html) | 贴图网格地面 |
| 9 | [application-gsapTimeLine.html](examples/z258/application-gsapTimeLine.html) | 时间轴动画 |

---

## 📁 项目结构

```
three.js-examples-2/
├── examples/z258/          # 示例文件目录
│   ├── basic-*.html        # 基础案例
│   ├── animation-*.html    # 动画效果
│   ├── application-*.html  # 应用场景
│   ├── shader-*.html       # 着色器
│   ├── particle-*.html     # 粒子
│   ├── effectComposer-*.html # 后期处理
│   ├── postprocessing-*.html # 后期处理
│   ├── expand-*.html       # 扩展功能
│   ├── physics-*.html      # 物理应用
│   ├── game-*.html         # 游戏复刻
│   └── effect-*.html       # 特效效果
├── images/                 # 缩略图目录
├── libs/                   # 第三方库
│   └── three/r179/         # Three.js r179
├── js/
│   └── data.js            # 示例数据配置
└── EXAMPLES_LIST.md       # 本文件
```

---

## 🚀 快速开始

1. 克隆项目
```bash
git clone <repository-url>
cd three.js-examples-2
```

2. 启动本地服务器
```bash
# 使用 Python
python -m http.server 8000

# 或使用 Node.js
npx serve
```

3. 访问示例
```
http://localhost:8000/examples/z258/basic-createScene.html
```

---

## 📄 许可证

MIT License

---

## 🙏 致谢

- [Three.js](https://threejs.org/) - 强大的 3D 库
- 所有示例原作者的贡献
