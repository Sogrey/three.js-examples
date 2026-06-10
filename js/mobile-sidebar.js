// 移动端侧边栏交互
(function() {
    // DOM 元素
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebarClose = document.getElementById('sidebarClose');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const categoryTree = document.getElementById('categoryTree');

    // 检查是否为移动端
    function isMobile() {
        return window.innerWidth <= 768;
    }

    // 打开侧边栏
    function openSidebar() {
        if (!sidebar) return;
        sidebar.classList.add('active');
        if (sidebarOverlay) sidebarOverlay.classList.add('active');
        document.body.classList.add('sidebar-open');
    }

    // 关闭侧边栏
    function closeSidebar() {
        if (!sidebar) return;
        sidebar.classList.remove('active');
        if (sidebarOverlay) sidebarOverlay.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }

    // 切换侧边栏
    function toggleSidebar() {
        if (sidebar && sidebar.classList.contains('active')) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    // 初始化事件监听
    function init() {
        // 切换按钮点击
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                toggleSidebar();
            });
        }

        // 关闭按钮点击
        if (sidebarClose) {
            sidebarClose.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                closeSidebar();
            });
        }

        // 遮罩层点击关闭
        if (sidebarOverlay) {
            sidebarOverlay.addEventListener('click', function() {
                closeSidebar();
            });
        }

        // 点击分类项后自动关闭侧边栏（移动端）
        if (categoryTree) {
            categoryTree.addEventListener('click', function(e) {
                if (isMobile()) {
                    // 检查是否点击了子分类
                    const subcategoryItem = e.target.closest('.subcategory-item');
                    if (subcategoryItem) {
                        // 延迟关闭，让用户看到选中效果
                        setTimeout(closeSidebar, 200);
                    }
                }
            });
        }

        // ESC 键关闭侧边栏
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && sidebar && sidebar.classList.contains('active')) {
                closeSidebar();
            }
        });

        // 窗口大小改变时处理
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (!isMobile() && sidebar && sidebar.classList.contains('active')) {
                    // 切换到桌面端时关闭移动端侧边栏
                    closeSidebar();
                }
            }, 250);
        });

        // 防止侧边栏内触摸滑动穿透
        if (sidebar) {
            sidebar.addEventListener('touchmove', function(e) {
                e.stopPropagation();
            }, { passive: true });
        }
    }

    // DOM 加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // 暴露全局方法
    window.mobileSidebar = {
        open: openSidebar,
        close: closeSidebar,
        toggle: toggleSidebar,
        isMobile: isMobile
    };
})();
