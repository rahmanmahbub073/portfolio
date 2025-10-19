document.addEventListener('DOMContentLoaded', function() {
    // Load navigation component
    fetch('components/navigation.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navigation-placeholder').innerHTML = data;
            
            // After loading navigation, initialize its scripts
            initNavigation();
        });
    
    // Load footer component
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
            
            // After loading footer, initialize its scripts
            initFooter();
        });
});

// Initialize navigation functionality
function initNavigation() {
    // Toggle menu/navbar script
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            navbar.querySelector('.menu').classList.toggle("active");
            menuBtn.querySelector('i').classList.toggle("active");
        });
    }
    
    // Highlight active navigation item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const currentHash = window.location.hash;
    
    // Remove active class from all menu items first
    document.querySelectorAll('.navbar .menu li a').forEach(link => {
        link.classList.remove('active');
    });
    
    if (currentPage === 'index.html' || currentPage === '') {
        // For home page, check if there's a hash
        if (currentHash) {
            // Try to find a link that matches the current hash
            const hashLink = document.querySelector(`.navbar .menu li a[href="index.html${currentHash}"]`);
            if (hashLink) {
                hashLink.classList.add('active');
            } else {
                // Default to home if no matching hash link
                document.querySelector('.navbar .menu li a[href="index.html#home"]').classList.add('active');
            }
        } else {
            // No hash, so highlight home
            document.querySelector('.navbar .menu li a[href="index.html#home"]').classList.add('active');
        }
    } else {
        // For other pages, find the matching link
        const currentPageLink = document.querySelector(`.navbar .menu li a[href="${currentPage}"]`);
        if (currentPageLink) {
            currentPageLink.classList.add('active');
        }
    }
    
    // Add smooth scrolling for navigation items
    document.querySelectorAll('.navbar .menu li a[href^="index.html#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            // Check if we're already on the index page
            if (window.location.pathname.endsWith('index.html') || 
                window.location.pathname.endsWith('/')) {
                e.preventDefault();
                const hash = this.getAttribute('href').split('#')[1];
                const targetElement = document.getElementById(hash);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Adjust for navbar height
                        behavior: 'smooth'
                    });
                    
                    // Update URL hash without jumping
                    history.pushState(null, null, '#' + hash);
                    
                    // Update active state
                    document.querySelectorAll('.navbar .menu li a').forEach(link => {
                        link.classList.remove('active');
                    });
                    this.classList.add('active');
                }
            }
            // If not on index page, let the default action happen (navigate to index.html#section)
        });
    });
    
    // Scroll button functionality
    const scrollUpBtn = document.querySelector('.scroll-up-btn');
    
    if (scrollUpBtn) {
        scrollUpBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Update navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 20) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
        
        if (scrollUpBtn) {
            if (window.scrollY > 500) {
                scrollUpBtn.classList.add("show");
            } else {
                scrollUpBtn.classList.remove("show");
            }
        }
    });
}

// Initialize footer functionality
function initFooter() {
    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    if (themeToggleBtn) {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        const currentTheme = localStorage.getItem('theme');
        
        // Set initial theme based on saved preference or system preference
        if (currentTheme === 'light') {
            document.body.classList.add('light-theme');
            themeToggleBtn.querySelector('i').classList.remove('fa-moon');
            themeToggleBtn.querySelector('i').classList.add('fa-sun');
        } else if (currentTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggleBtn.querySelector('i').classList.remove('fa-sun');
            themeToggleBtn.querySelector('i').classList.add('fa-moon');
        } else if (prefersDarkScheme.matches) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.add('light-theme');
            themeToggleBtn.querySelector('i').classList.remove('fa-moon');
            themeToggleBtn.querySelector('i').classList.add('fa-sun');
        }
        
        themeToggleBtn.addEventListener('click', function() {
            if (document.body.classList.contains('light-theme')) {
                document.body.classList.replace('light-theme', 'dark-theme');
                localStorage.setItem('theme', 'dark');
                themeToggleBtn.querySelector('i').classList.remove('fa-sun');
                themeToggleBtn.querySelector('i').classList.add('fa-moon');
            } else {
                document.body.classList.replace('dark-theme', 'light-theme');
                localStorage.setItem('theme', 'light');
                themeToggleBtn.querySelector('i').classList.remove('fa-moon');
                themeToggleBtn.querySelector('i').classList.add('fa-sun');
            }
        });
    }
}
