// DOM 元素
const categoryTree = document.getElementById('categoryTree');
const currentCategory = document.getElementById('currentCategory');
const examplesGrid = document.getElementById('examplesGrid');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

// 当前选中的分类
let activeCategory = null;
let activeSubcategory = null;

// 初始化页面
function initPage() {
    renderCategoryTree();
    
    // 默认显示第一个分类的第一个子分类
    if (threejsData.categories.length > 0) {
        const firstCategory = threejsData.categories[0];
        if (firstCategory.subcategories.length > 0) {
            showExamples(firstCategory.id, firstCategory.subcategories[0].id);
        }
    }
    
    // 设置搜索功能
    setupSearch();
}

// 渲染左侧分类树
function renderCategoryTree() {
    let html = '<ul>';
    
    threejsData.categories.forEach(category => {
        html += `
            <li class="category-item" data-id="${category.id}">
                <div class="category">
                    <i class="bi ${category.icon}"></i>
                    <span>${category.name}</span>
                    <i class="bi bi-chevron-right"></i>
                </div>
                <div class="subcategory">
                    <ul>
        `;
        
        category.subcategories.forEach(subcategory => {
            html += `
                <li class="subcategory-item" data-category="${category.id}" data-id="${subcategory.id}">
                    <div class="category">
                        <span>${subcategory.name}</span>
                    </div>
                </li>
            `;
        });
        
        html += `
                    </ul>
                </div>
            </li>
        `;
    });
    
    html += '</ul>';
    categoryTree.innerHTML = html;
    
    // 添加事件监听器
    setupCategoryTreeEvents();
}

// 设置分类树的事件
function setupCategoryTreeEvents() {
    // 主分类点击事件
    const categoryItems = document.querySelectorAll('.category-item > .category');
    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const parent = this.parentElement;
            
            // 切换展开/折叠状态
            parent.classList.toggle('expanded');
            
            // 更新箭头图标
            const arrow = this.querySelector('.bi-chevron-right, .bi-chevron-down');
            if (parent.classList.contains('expanded')) {
                arrow.classList.replace('bi-chevron-right', 'bi-chevron-down');
            } else {
                arrow.classList.replace('bi-chevron-down', 'bi-chevron-right');
            }
            
            // 如果展开，显示第一个子分类的示例
            if (parent.classList.contains('expanded')) {
                const categoryId = parent.dataset.id;
                const category = threejsData.categories.find(c => c.id === categoryId);
                if (category && category.subcategories.length > 0) {
                    showExamples(categoryId, category.subcategories[0].id);
                }
            }
        });
    });
    
    // 子分类点击事件
    const subcategoryItems = document.querySelectorAll('.subcategory-item');
    subcategoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const categoryId = this.dataset.category;
            const subcategoryId = this.dataset.id;
            
            showExamples(categoryId, subcategoryId);
        });
    });
}

// 显示指定分类和子分类的示例
function showExamples(categoryId, subcategoryId) {
    // 更新活动状态
    activeCategory = categoryId;
    activeSubcategory = subcategoryId;
    
    // 更新UI活动状态
    updateActiveState();
    
    // 查找对应的分类和子分类
    const category = threejsData.categories.find(c => c.id === categoryId);
    const subcategory = category ? category.subcategories.find(s => s.id === subcategoryId) : null;
    
    if (!category || !subcategory) return;
    
    // 更新标题
    currentCategory.innerHTML = `<h2>${category.name} - ${subcategory.name}</h2>`;
    
    // 渲染示例卡片
    renderExampleCards(subcategory.examples);
}

// 更新活动状态
function updateActiveState() {
    // 移除所有活动状态
    document.querySelectorAll('.category-item, .subcategory-item').forEach(item => {
        item.querySelector('.category').classList.remove('active');
    });
    
    // 设置当前活动的分类
    if (activeCategory) {
        const categoryItem = document.querySelector(`.category-item[data-id="${activeCategory}"]`);
        if (categoryItem) {
            // 展开分类
            categoryItem.classList.add('expanded');
            const arrow = categoryItem.querySelector('.category .bi-chevron-right, .category .bi-chevron-down');
            if (arrow) {
                if (arrow.classList.contains('bi-chevron-right')) {
                    arrow.classList.replace('bi-chevron-right', 'bi-chevron-down');
                }
            }
        }
    }
    
    // 设置当前活动的子分类
    if (activeCategory && activeSubcategory) {
        const subcategoryItem = document.querySelector(`.subcategory-item[data-category="${activeCategory}"][data-id="${activeSubcategory}"]`);
        if (subcategoryItem) {
            subcategoryItem.querySelector('.category').classList.add('active');
        }
    }
}

// 渲染示例卡片
function renderExampleCards(examples) {
    let html = '';
    
    examples.forEach(example => {
            // 从URL中提取示例路径
            const examplePath = example.url.replace('examples/', '').replace('.html', '');
            
            // 为每个示例卡片分配一个随机颜色类（1-8）
            const colorClass = `color-${Math.floor(Math.random() * 8) + 1}`;
            
            // 检查是否有缩略图
            const hasThumbnail = example.thumbnail && example.thumbnail !== '';
            
            // 查找示例所属的分类和子分类
            const categoryInfo = findCategoryForExample(example.id);
            const categoryName = categoryInfo.categoryName;
            const subcategoryName = categoryInfo.subcategoryName;
            
            html += `
                <div class="example-card" data-id="${example.id}">
                    <div class="thumbnail ${colorClass}">
                        ${hasThumbnail ? `<img src="${example.thumbnail}" alt="${example.title}" onerror="this.style.display='none'; this.parentNode.classList.add('no-image');">` : ''}
                        ${!hasThumbnail ? `<div class="thumbnail-icon"><i class="bi bi-cube-fill"></i></div>` : ''}
                        <div class="thumbnail-content">
                            <div class="thumbnail-title">${example.title}</div>
                            <div class="thumbnail-subtitle">${example.description}</div>
                            <div class="thumbnail-id">ID: ${examplePath}</div>
                        </div>
                        <a href="examples/viewer.html#${examplePath}" class="view-btn ${!hasThumbnail ? 'no-image-btn' : ''}" target="_blank">
                            <i class="bi bi-eye-fill"></i>
                        </a>
                    </div>
                    <div class="meta" style="padding: 0.8rem; display: flex; justify-content: space-between; align-items: center;">
                        <span class="version">Three.js <a href="https://github.com/mrdoob/three.js/tree/${example.version}" target="_blank" title="查看 ${example.version} 版本的Three.js源码" style="text-decoration: underline; color: inherit;">${example.version}</a></span>
                        <a href="examples/viewer.html#${examplePath}" target="_blank">查看示例</a>
                    </div>
                </div>
            `;
    });
    
    examplesGrid.innerHTML = html;
}

// 查找示例所属的分类和子分类
function findCategoryForExample(exampleId) {
    let result = {
        categoryName: "未分类",
        subcategoryName: "未分类"
    };
    
    threejsData.categories.forEach(category => {
        category.subcategories.forEach(subcategory => {
            subcategory.examples.forEach(example => {
                if (example.id === exampleId) {
                    result.categoryName = category.name;
                    result.subcategoryName = subcategory.name;
                }
            });
        });
    });
    
    return result;
}

// 设置搜索功能
function setupSearch() {
    // 搜索按钮点击事件
    searchBtn.addEventListener('click', performSearch);
    
    // 输入框回车事件
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

// 执行搜索
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (!query) {
        // 如果搜索框为空，恢复到当前选中的分类
        if (activeCategory && activeSubcategory) {
            showExamples(activeCategory, activeSubcategory);
        }
        return;
    }
    
    // 搜索结果
    const results = [];
    
    // 在所有示例中搜索
    threejsData.categories.forEach(category => {
        category.subcategories.forEach(subcategory => {
            subcategory.examples.forEach(example => {
                if (
                    example.title.toLowerCase().includes(query) ||
                    example.description.toLowerCase().includes(query)
                ) {
                    results.push({
                        ...example,
                        categoryName: category.name,
                        subcategoryName: subcategory.name
                    });
                }
            });
        });
    });
    
    // 更新标题
    currentCategory.innerHTML = `<h2>搜索结果: "${query}"</h2>`;
    
    // 渲染搜索结果
    if (results.length > 0) {
        let html = '';
        
        results.forEach(result => {
            // 从URL中提取示例路径
            const examplePath = result.url.replace('examples/', '').replace('.html', '');
            
            // 为每个示例卡片分配一个随机颜色类（1-8）
            const colorClass = `color-${Math.floor(Math.random() * 8) + 1}`;
            
            // 检查是否有缩略图
            const hasThumbnail = result.thumbnail && result.thumbnail !== '';
            
            html += `
                <div class="example-card" data-id="${result.id}">
                    <div class="thumbnail ${colorClass}">
                        ${hasThumbnail ? `<img src="${result.thumbnail}" alt="${result.title}" onerror="this.style.display='none'; this.parentNode.classList.add('no-image');">` : ''}
                        ${!hasThumbnail ? `<div class="thumbnail-icon"><i class="bi bi-cube-fill"></i></div>` : ''}
                        <div class="thumbnail-content">
                            <div class="thumbnail-title">${result.title}</div>
                            <div class="thumbnail-subtitle">${result.description}</div>
                            <div class="thumbnail-id">ID: ${examplePath}</div>
                        </div>
                        <a href="examples/viewer.html#${examplePath}" class="view-btn ${!hasThumbnail ? 'no-image-btn' : ''}" target="_blank">
                            <i class="bi bi-eye-fill"></i>
                        </a>
                    </div>
                    <div class="meta" style="padding: 0.8rem; display: flex; justify-content: space-between; align-items: center;">
                        <span class="version">Three.js <a href="https://github.com/mrdoob/three.js/tree/${result.version}" target="_blank" title="查看 ${result.version} 版本的Three.js源码" style="text-decoration: underline; color: inherit;">${result.version}</a></span>
                        <a href="examples/viewer.html#${examplePath}" target="_blank">查看示例</a>
                    </div>
                </div>
            `;
        });
        
        examplesGrid.innerHTML = html;
    } else {
        examplesGrid.innerHTML = '<div class="no-results">没有找到匹配的示例</div>';
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initPage();
    updateFooterYear();
});

// 更新页脚年份
function updateFooterYear() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}
