// DOM 元素
const codeToggle = document.getElementById('codeToggle');
const codePanel = document.getElementById('codePanel');
const codeEditor = document.getElementById('codeEditor');
const resizer = document.getElementById('resizer');
const exampleFrame = document.getElementById('exampleFrame');
const exampleInfo = document.getElementById('exampleInfo');
const exampleTitle = document.getElementById('exampleTitle');
const exampleDescription = document.getElementById('exampleDescription');
const exampleVersion = document.getElementById('exampleVersion');
const loadingOverlay = document.getElementById('loadingOverlay');

// 初始隐藏代码切换按钮，直到示例成功加载
if (codeToggle) {
    codeToggle.style.display = 'none';
}

// 从URL获取示例路径（使用hash方式，类似Three.js官网）
const hash = window.location.hash.substring(1); // 移除开头的#
const exampleUrl = hash || '';

// 初始化页面
function initPage() {
    if (!exampleUrl) {
        exampleTitle.textContent = '未指定示例';
        exampleDescription.textContent = '请从首页选择一个示例';
        hideLoading(); // 如果没有示例，隐藏加载浮层
        return;
    }
    
    // 显示加载浮层
    showLoading();
    
    // 直接加载对应的示例页面
    exampleFrame.src = `${exampleUrl}.html`;
    
    // 监听iframe加载完成事件
    exampleFrame.onload = function() {
        try {
            // 检查是否为404页面
            const is404Page = checkIf404Page();
            
            if (is404Page) {
                // 404页面处理
                handle404Page();
            } else {
                // 正常页面处理
                handleNormalPage();
            }
            
            // 隐藏加载浮层
            hideLoading();
        } catch (error) {
            console.error('获取iframe信息失败:', error);
            hideLoading(); // 即使出错也隐藏加载浮层
        }
    };
    
    // 设置代码查看功能
    setupCodeViewer();
    
    // 设置分割线拖动功能
    initResizer();
}

// 获取示例源代码
async function fetchExampleCode() {
    if (!exampleUrl) return '// 未指定示例路径';
    
    try {
        // 直接获取对应的示例页面源代码
        const response = await fetch(`${exampleUrl}.html`);
        if (response.ok) {
            const html = await response.text();
            return html;
        } else {
            console.error('获取源代码失败，HTTP状态码:', response.status);
            return '// 获取源代码失败，HTTP状态码: ' + response.status;
        }
    } catch (error) {
        console.error('获取源代码失败:', error);
        return '// 获取源代码失败: ' + error.message;
    }
}

// 设置代码查看功能
function setupCodeViewer() {
    codeToggle.addEventListener('click', toggleCodePanel);
}

// 切换源代码面板
function toggleCodePanel() {
    document.body.classList.toggle('code-open');
    
    if (document.body.classList.contains('code-open')) {
        codeToggle.innerHTML = '<i class="bi bi-code-slash"></i> 隐藏源代码';
        
        // 确保代码面板可见
        codePanel.style.display = 'block';
        codePanel.style.height = '100vh';
        
        // 获取并显示源代码
        fetchExampleCode().then(code => {
            // 使用 pre 和 code 标签包裹源代码
            codeEditor.innerHTML = '<pre class="language-html"><code class="language-html">' + 
                code.replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;') + 
                '</code></pre>';
            
            // 应用 Prism.js 高亮
            Prism.highlightAllUnder(codeEditor);
        });
    } else {
        codeToggle.innerHTML = '<i class="bi bi-code-slash"></i> 查看源代码';
        codePanel.style.display = 'none';
    }
}

// 拖动分割线调整布局 - 优化版实现，解决鼠标进入iframe时事件丢失的问题，同时避免影响正常交互
function initResizer() {
    let isDragging = false;
    let isResizerMouseDown = false; // 标记是否真正在分割线上按下鼠标
    
    // 创建一个透明覆盖层，在拖动时覆盖整个页面，防止iframe捕获鼠标事件
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.zIndex = '1000';
    overlay.style.display = 'none';
    overlay.style.cursor = 'col-resize'; // 设置光标样式
    document.body.appendChild(overlay);
    
    // 第一阶段：鼠标按下分割线
    resizer.addEventListener('mousedown', (e) => {
        e.preventDefault();
        isResizerMouseDown = true; // 标记在分割线上按下了鼠标
        
        // 添加样式
        resizer.classList.add('active');
        
        // 监听鼠标移动，但只有在真正开始拖动时才激活覆盖层
        function onMouseMove(e) {
            // 如果鼠标移动了一定距离，才认为是开始拖动
            if (isResizerMouseDown && !isDragging) {
                isDragging = true;
                
                // 只有在确认拖动时才显示覆盖层和禁用iframe交互
                overlay.style.display = 'block';
                document.body.classList.add('resizing');
                resizer.classList.add('resizing');
                
                // 禁用iframe内容交互
                if (exampleFrame) {
                    exampleFrame.style.pointerEvents = 'none';
                }
            }
            
            if (isDragging) {
                // 获取窗口宽度和鼠标位置
                const windowWidth = window.innerWidth;
                const mouseX = e.clientX;
                
                // 计算百分比位置（限制在20%-80%之间）
                const leftPercent = Math.max(20, Math.min(80, (mouseX / windowWidth) * 100));
                const rightPercent = 100 - leftPercent;
                
                // 直接设置所有相关元素的位置和宽度
                codePanel.style.width = `${leftPercent}%`;
                resizer.style.left = `${leftPercent}%`;
                
                const exampleContainer = document.querySelector('.example-container');
                exampleContainer.style.width = `${rightPercent}%`;
                exampleContainer.style.left = `${leftPercent}%`;
                
                // 更新信息区域位置
                exampleInfo.style.left = `${leftPercent + 1}%`;
            }
        }
        
        // 第三阶段：鼠标释放，停止拖拽
        function onMouseUp() {
            // 重置状态
            isDragging = false;
            isResizerMouseDown = false;
            
            // 移除样式
            document.body.classList.remove('resizing');
            resizer.classList.remove('resizing');
            resizer.classList.remove('active');
            
            // 隐藏覆盖层
            overlay.style.display = 'none';
            
            // 恢复iframe内容交互
            if (exampleFrame) {
                exampleFrame.style.pointerEvents = 'auto';
            }
            
            // 移除事件监听器
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
        
        // 添加事件监听器到整个文档
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    });
    
    // 为覆盖层添加鼠标事件，确保拖动过程中的事件连续性
    overlay.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const windowWidth = window.innerWidth;
            const mouseX = e.clientX;
            const leftPercent = Math.max(20, Math.min(80, (mouseX / windowWidth) * 100));
            const rightPercent = 100 - leftPercent;
            
            codePanel.style.width = `${leftPercent}%`;
            resizer.style.left = `${leftPercent}%`;
            
            const exampleContainer = document.querySelector('.example-container');
            exampleContainer.style.width = `${rightPercent}%`;
            exampleContainer.style.left = `${leftPercent}%`;
            
            exampleInfo.style.left = `${leftPercent + 1}%`;
        }
    });
}

// 显示加载浮层
function showLoading() {
    if (loadingOverlay) {
        loadingOverlay.style.display = 'flex';
    }
}

// 隐藏加载浮层
function hideLoading() {
    if (loadingOverlay) {
        // 添加淡出效果
        loadingOverlay.style.opacity = '0';
        loadingOverlay.style.transition = 'opacity 0.5s ease';
        
        // 完全隐藏
        setTimeout(() => {
            loadingOverlay.style.display = 'none';
            loadingOverlay.style.opacity = '1'; // 重置透明度，以便下次显示
            loadingOverlay.style.transition = ''; // 清除过渡效果
        }, 500);
    }
}

// 检查是否为404页面
function checkIf404Page() {
    try {
        // 尝试访问iframe内容
        const iframeDoc = exampleFrame.contentDocument || exampleFrame.contentWindow.document;
        const title = iframeDoc.title || iframeDoc.querySelector('title')?.textContent || '';
        const body = iframeDoc.body.textContent || '';
        
        // 检查标题或内容是否包含404关键词
        return title.includes('404') || body.includes('404') || title.includes('未找到') || body.includes('未找到');
    } catch (error) {
        // 如果无法访问iframe内容，可能是跨域问题或其他错误
        console.error('检查404页面失败:', error);
        return false;
    }
}

// 处理404页面
function handle404Page() {
    // 更新页面标题
    document.title = 'Three.js 示例 - 页面未找到';
    
    // 隐藏左上角的信息区域
    if (exampleInfo) {
        exampleInfo.style.display = 'none';
    }
    
    // 隐藏右上角的返回首页按钮
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.style.display = 'none';
    }
    
    // 隐藏左下角的源代码按钮
    if (codeToggle) {
        codeToggle.style.display = 'none';
    }
    
    // 隐藏其他可能的控制元素
    const controlElements = document.querySelectorAll('.control-button, .view-source-button');
    controlElements.forEach(element => {
        element.style.display = 'none';
    });
}

// 处理正常页面
function handleNormalPage() {
    try {
        // 从iframe中获取示例信息
        const iframeDoc = exampleFrame.contentDocument || exampleFrame.contentWindow.document;
        const iframeTitle = iframeDoc.querySelector('title').textContent.replace('Three.js 示例 - ', '');
        const iframeDescription = iframeDoc.querySelector('meta[name="description"]')?.content || '无描述';
        const iframeVersion = iframeDoc.querySelector('meta[name="three-version"]')?.content || 'r150';
        
        // 更新页面标题和信息
        document.title = `Three.js 示例 - ${iframeTitle}`;
        exampleTitle.textContent = iframeTitle;
        exampleDescription.textContent = iframeDescription;
        
        // 创建版本号链接到GitHub仓库
        const versionLink = document.createElement('a');
        versionLink.href = `https://github.com/mrdoob/three.js/tree/${iframeVersion}`;
        versionLink.textContent = iframeVersion;
        versionLink.target = '_blank'; // 在新标签页中打开
        versionLink.title = `查看 ${iframeVersion} 版本的Three.js源码`;
        versionLink.style.color = 'inherit'; // 保持原有颜色
        versionLink.style.textDecoration = 'underline'; // 添加下划线表示可点击
        
        // 清空并添加链接
        exampleVersion.innerHTML = '';
        exampleVersion.appendChild(versionLink);
        
        // 更新加载浮层中的版本号也为链接
        const loadingVersion = document.querySelector('.loading-version');
        if (loadingVersion) {
            const loadingVersionLink = versionLink.cloneNode(true);
            loadingVersion.innerHTML = `使用的Three.js版本: `;
            loadingVersion.appendChild(loadingVersionLink);
        }
        
        // 显示左上角信息区域
        if (exampleInfo) {
            exampleInfo.style.display = 'block';
        }
        
        // 示例成功加载后，显示源代码按钮
        if (codeToggle) {
            // 确保按钮位置正确（左下角）
            codeToggle.style.position = 'fixed';
            codeToggle.style.bottom = '20px';
            codeToggle.style.left = '20px';
            codeToggle.style.display = 'flex';
            // 确保图标和文本正确显示
            setTimeout(() => {
                codeToggle.innerHTML = '<i class="bi bi-code-slash"></i> 查看源代码';
            }, 100);
        }
    } catch (error) {
        console.error('获取iframe信息失败:', error);
    }
}

// 截图功能 - 使用postMessage与iframe通信实现截图
function initScreenshotButton() {
    const screenshotBtn = document.getElementById('screenshotBtn');
    if (!screenshotBtn) return;
    
    // 添加消息监听器，接收来自iframe的截图数据
    window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'screenshot-data') {
            try {
                // 获取当前示例名称（用于文件命名）
                const exampleName = exampleUrl.split('/').pop();
                
                // 创建下载链接
                const link = document.createElement('a');
                link.download = `${exampleName}.jpg`;
                link.href = event.data.dataUrl;
                link.click();
                
                // 恢复按钮状态
                const screenshotBtn = document.getElementById('screenshotBtn');
                screenshotBtn.innerHTML = '<i class="bi bi-camera"></i> 截图封面';
                screenshotBtn.disabled = false;
                
                // 在控制台显示提示，而不是弹窗
                console.log(`%c截图已保存为 ${exampleName}.jpg`, 'color: green; font-weight: bold');
                console.log(`%c请将图片保存到 images 目录下供项目使用`, 'color: blue');
            } catch (error) {
                console.error('处理截图数据失败:', error);
                alert('处理截图数据失败: ' + error.message);
                
                // 恢复按钮状态
                const screenshotBtn = document.getElementById('screenshotBtn');
                screenshotBtn.innerHTML = '<i class="bi bi-camera"></i> 截图封面';
                screenshotBtn.disabled = false;
            }
        }
    });
    
    screenshotBtn.addEventListener('click', () => {
        try {
            // 获取当前示例名称（用于文件命名）
            const exampleName = exampleUrl.split('/').pop();
            if (!exampleName) {
                alert('无法确定示例名称');
                return;
            }
            
            // 显示截图中提示
            screenshotBtn.innerHTML = '<i class="bi bi-camera"></i> 截图中...';
            screenshotBtn.disabled = true;
            
            // 获取iframe
            const iframe = document.getElementById('exampleFrame');
            
            // 向iframe发送截图请求，使用较低的质量以减小文件大小
            iframe.contentWindow.postMessage({
                type: 'take-screenshot',
                quality: 0.8
            }, '*');
            
            // 设置超时，如果5秒内没有收到响应，恢复按钮状态
            setTimeout(() => {
                if (screenshotBtn.disabled) {
                    screenshotBtn.innerHTML = '<i class="bi bi-camera"></i> 截图封面';
                    screenshotBtn.disabled = false;
                    alert('截图超时，请重试');
                }
            }, 5000);
            
        } catch (error) {
            console.error('截图失败:', error);
            alert('截图失败: ' + error.message);
            screenshotBtn.innerHTML = '<i class="bi bi-camera"></i> 截图封面';
            screenshotBtn.disabled = false;
        }
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initPage();
    initScreenshotButton();
});

