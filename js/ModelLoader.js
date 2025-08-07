/**
 * 3D模型加载器聚合类
 * 基于Three.js，支持多种3D模型格式的加载
 */

// 导入Three.js核心
import * as THREE from 'three';

// 导入各种加载器
import { GLTFLoader } from '../libs/three/r179/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from '../libs/three/r179/jsm/loaders/OBJLoader.js';
import { MTLLoader } from '../libs/three/r179/jsm/loaders/MTLLoader.js';
import { STLLoader } from '../libs/three/r179/jsm/loaders/STLLoader.js';
import { TDSLoader } from '../libs/three/r179/jsm/loaders/TDSLoader.js';
import { PCDLoader } from '../libs/three/r179/jsm/loaders/PCDLoader.js';
import { BVHLoader } from '../libs/three/r179/jsm/loaders/BVHLoader.js';
import { ColladaLoader } from '../libs/three/r179/jsm/loaders/ColladaLoader.js';
import { VRMLLoader } from '../libs/three/r179/jsm/loaders/VRMLLoader.js';
import { FBXLoader } from '../libs/three/r179/jsm/loaders/FBXLoader.js';
import { AMFLoader } from '../libs/three/r179/jsm/loaders/AMFLoader.js';
import { GCodeLoader } from '../libs/three/r179/jsm/loaders/GCodeLoader.js';
import { KMZLoader } from '../libs/three/r179/jsm/loaders/KMZLoader.js';
import { VTKLoader } from '../libs/three/r179/jsm/loaders/VTKLoader.js';

/**
 * 模型加载器类
 */
class ModelLoader {
  /**
   * 构造函数
   */
  constructor() {
    // 文件类型与加载器映射
    this.loaderMap = new Map();
    this.initLoaderMap();
  }

  /**
   * 初始化加载器映射表
   * @private
   */
  initLoaderMap() {
    // 文件类型与加载器类的映射
    this.loaderMap.set('JSON', { loader: THREE.ObjectLoader });
    this.loaderMap.set('PCD', { loader: PCDLoader });
    this.loaderMap.set('BVH', { loader: BVHLoader });
    this.loaderMap.set('OBJ', { loader: OBJLoader });
    this.loaderMap.set('STL', { loader: STLLoader });
    this.loaderMap.set('3DS', { loader: TDSLoader });
    this.loaderMap.set('VTK', { loader: VTKLoader });
    this.loaderMap.set('KMZ', { loader: KMZLoader });
    this.loaderMap.set('DAE', { loader: ColladaLoader });
    this.loaderMap.set('WRL', { loader: VRMLLoader });
    this.loaderMap.set('GLTF', { loader: GLTFLoader });
    this.loaderMap.set('GLB', { loader: GLTFLoader });
    this.loaderMap.set('MTL', { loader: MTLLoader });
    this.loaderMap.set('FBX', { loader: FBXLoader });
    this.loaderMap.set('AMF', { loader: AMFLoader });
    this.loaderMap.set('GCODE', { loader: GCodeLoader });
  }

  /**
   * 加载3D模型
   * @param {string} url - 模型文件URL
   * @param {string} type - 模型文件类型，如 'GLTF', 'OBJ' 等
   * @param {Object} options - 加载选项
   * @param {Function} onLoad - 加载成功回调函数
   * @param {Function} onProgress - 加载进度回调函数
   * @param {Function} onError - 加载错误回调函数
   * @returns {Promise} - 返回Promise对象
   */
  load(url, type, options = {}, onLoad = null, onProgress = null, onError = null) {
    return new Promise((resolve, reject) => {
      // 将类型转换为大写
      const upperType = type.toUpperCase();
      
      // 检查是否支持该类型
      if (!this.loaderMap.has(upperType)) {
        const error = new Error(`不支持的模型类型: ${type}`);
        if (onError) onError(error);
        reject(error);
        return;
      }

      // 获取对应的加载器
      const { loader: LoaderClass } = this.loaderMap.get(upperType);
      const loader = new LoaderClass();

      // 处理带材质的模型
      if (options.material && options.material.url && options.material.type) {
        const materialType = options.material.type.toUpperCase();
        
        if (materialType === 'MTL' && upperType === 'OBJ') {
          // 加载MTL材质
          const mtlLoader = new MTLLoader();
          mtlLoader.load(options.material.url, (materials) => {
            materials.preload();
            loader.setMaterials(materials);
            
            // 加载OBJ模型
            this._loadModel(loader, url, upperType, options, (object) => {
              if (onLoad) onLoad(object);
              resolve(object);
            }, onProgress, (error) => {
              if (onError) onError(error);
              reject(error);
            });
          }, onProgress, (error) => {
            if (onError) onError(error);
            reject(error);
          });
        } else {
          const error = new Error(`不支持的材质类型: ${materialType} 与模型类型: ${upperType} 的组合`);
          if (onError) onError(error);
          reject(error);
        }
      } else {
        // 直接加载模型
        this._loadModel(loader, url, upperType, options, (object) => {
          if (onLoad) onLoad(object);
          resolve(object);
        }, onProgress, (error) => {
          if (onError) onError(error);
          reject(error);
        });
      }
    });
  }

  /**
   * 内部加载模型方法
   * @private
   * @param {Object} loader - 加载器实例
   * @param {string} url - 模型文件URL
   * @param {string} type - 模型文件类型
   * @param {Object} options - 加载选项
   * @param {Function} onLoad - 加载成功回调函数
   * @param {Function} onProgress - 加载进度回调函数
   * @param {Function} onError - 加载错误回调函数
   */
  _loadModel(loader, url, type, options, onLoad, onProgress, onError) {
    loader.load(url, (result) => {
      let object;

      // 根据不同类型处理加载结果
      if (type === 'STL') {
        // STL加载器返回的是几何体，需要创建网格
        const material = new THREE.MeshStandardMaterial({
          color: options.color || 0x7777ff,
          metalness: options.metalness || 0.1,
          roughness: options.roughness || 0.5,
          side: THREE.DoubleSide
        });
        object = new THREE.Mesh(result, material);
      } else if (type === 'VTK') {
        // 创建两个材质：一个实体材质和一个线框材质
        const meshMaterial = new THREE.MeshPhongMaterial({
          color: options.color || 0x00aaff,
          specular: 0x111111,
          shininess: 20,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.8
        });
        
        // 创建实体网格
        const mesh = new THREE.Mesh(result, meshMaterial);
        
        // 创建线框几何体
        const wireframeGeometry = new THREE.WireframeGeometry(result);
        const wireframeMaterial = new THREE.LineBasicMaterial({
          color: 0x000000,
          linewidth: 1
        });
        const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
        
        // 创建组合对象
        object = new THREE.Group();
        object.add(mesh);
        object.add(wireframe);
      } else if (type === 'BVH') {
        // BVH加载器返回的是骨骼动画数据
        const skeletonHelper = new THREE.SkeletonHelper(result.skeleton.bones[0]);
        skeletonHelper.skeleton = result.skeleton;

        const boneContainer = new THREE.Group();
        boneContainer.add(result.skeleton.bones[0]);
        
        // 创建一个组合对象
        object = new THREE.Group();
        object.add(skeletonHelper);
        object.add(boneContainer);
        
        // 保存动画数据
        object.userData.animation = {
          mixer: new THREE.AnimationMixer(skeletonHelper),
          clip: result.clip
        };
        
        // 播放动画
        if (options.playAnimation !== false) {
          object.userData.animation.mixer.clipAction(result.clip).play();
        }
      } else {
        // 其他加载器返回的可能是对象或场景
        object = result.object || result.scene || result;
      }

      // 应用变换
      if (options.scale) {
        const scale = options.scale;
        object.scale.set(
          scale.x !== undefined ? scale.x : 1,
          scale.y !== undefined ? scale.y : 1,
          scale.z !== undefined ? scale.z : 1
        );
      }

      if (options.rotation) {
        const rotation = options.rotation;
        if (rotation.x !== undefined) object.rotateX(Math.PI / 180 * rotation.x);
        if (rotation.y !== undefined) object.rotateY(Math.PI / 180 * rotation.y);
        if (rotation.z !== undefined) object.rotateZ(Math.PI / 180 * rotation.z);
      }

      if (options.position) {
        const position = options.position;
        object.position.set(
          position.x || 0,
          position.y || 0,
          position.z || 0
        );
      }

      // 返回处理后的对象
      onLoad(object);
    }, onProgress, onError);
  }

  /**
   * 检查是否支持指定的模型类型
   * @param {string} type - 模型文件类型
   * @returns {boolean} - 是否支持
   */
  isSupported(type) {
    return this.loaderMap.has(type.toUpperCase());
  }

  /**
   * 获取所有支持的模型类型
   * @returns {Array<string>} - 支持的模型类型列表
   */
  getSupportedTypes() {
    return Array.from(this.loaderMap.keys());
  }
}

// 创建默认实例
const modelLoader = new ModelLoader();

// 只导出默认实例和类，不重复导出
export { ModelLoader };
export default modelLoader;
