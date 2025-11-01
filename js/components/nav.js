// Navigation component loader and functionality

// Navigation HTML template
function getNavigationHTML() {
    return `
        <!-- Navigation -->
        <nav class="bg-white shadow-md">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <!-- Logo/Brand -->
                    <div class="flex-shrink-0">
                        <span class="text-xl font-bold text-blue-600">Todo App</span>
                    </div>
                    
                    <!-- Desktop Navigation -->
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="index.html" class="nav-link text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors" data-page="home">Home</a>
                        <a href="todo.html" class="nav-link text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors" data-page="todo">Todo List</a>
                        <a href="config.html" class="nav-link text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors" data-page="config">Configuration</a>
                    </div>
                    
                    <!-- Mobile menu button -->
                    <div class="md:hidden">
                        <button id="mobileMenuBtn" type="button" class="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 p-2" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <!-- Hamburger icon -->
                            <svg id="menuIcon" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            <!-- Close icon (hidden by default) -->
                            <svg id="closeIcon" class="h-6 w-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <!-- Mobile menu (hidden by default) -->
            <div id="mobileMenu" class="hidden md:hidden border-t border-gray-200">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="index.html" class="nav-link-mobile block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors" data-page="home">Home</a>
                    <a href="todo.html" class="nav-link-mobile block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors" data-page="todo">Todo List</a>
                    <a href="config.html" class="nav-link-mobile block text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium transition-colors" data-page="config">Configuration</a>
                </div>
            </div>
        </nav>
    `;
}

// Load navigation component
function loadNavigation() {
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = getNavigationHTML();
        
        // Initialize navigation after loading
        initializeNavigation();
        highlightCurrentPage();
    }
}

// Initialize navigation functionality
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = mobileMenu.classList.contains('hidden');
            if (isOpen) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Highlight current page in navigation
function highlightCurrentPage() {
    const currentPage = document.body.getAttribute('data-page');
    if (!currentPage) return;
    
    // Desktop navigation
    const desktopLinks = document.querySelectorAll('.nav-link');
    desktopLinks.forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.remove('text-gray-600', 'hover:text-gray-900');
            link.classList.add('text-blue-600', 'hover:text-blue-700', 'border-b-2', 'border-blue-600');
        }
    });
    
    // Mobile navigation
    const mobileLinks = document.querySelectorAll('.nav-link-mobile');
    mobileLinks.forEach(link => {
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.remove('text-gray-600', 'hover:text-gray-900', 'hover:bg-gray-50');
            link.classList.add('text-blue-600', 'bg-blue-50');
        }
    });
}

// Load navigation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavigation);
} else {
    loadNavigation();
}
