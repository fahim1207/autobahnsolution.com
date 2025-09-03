// Main JavaScript for Autobahn Solutions Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initScrollReveal();
    initSmoothScrolling();
    initNavbarAnimation();
    initBrandsMarquee();
    initTypewriter();
    initFAB();
    initThemeToggle();
});

// Initialize Brands Marquee
function initBrandsMarquee() {
    const marqueeTrack = document.querySelector('.marquee-track');
    const marqueeWrapper = document.querySelector('.brands-marquee-wrapper');
    
    if (!marqueeTrack || !marqueeWrapper) return;
    
    // Pause on hover
    marqueeWrapper.addEventListener('mouseenter', () => {
        marqueeTrack.style.animationPlayState = 'paused';
    });
    
    marqueeWrapper.addEventListener('mouseleave', () => {
        marqueeTrack.style.animationPlayState = 'running';
    });
}

// Scroll Reveal Animation
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-element');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
}

// Navbar Animation on Scroll
function initNavbarAnimation() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove background based on scroll position
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link
        updateActiveNavLink();
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
}

// Update Active Navigation Link
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}



// Typewriter Effect for Hero Text (Optional Enhancement)
function initTypewriter() {
    const heroTitle = document.querySelector('.hero-section h1');
    if (heroTitle && heroTitle.dataset.typewriter) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            heroTitle.textContent += text.charAt(i);
            i++;
            
            if (i >= text.length) {
                clearInterval(typeInterval);
            }
        }, 50);
    }
}

// Utility Functions
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Enhanced Scroll Performance
const throttledScroll = throttle(() => {
    updateActiveNavLink();
}, 100);

window.addEventListener('scroll', throttledScroll);

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('Service worker registered'))
            .catch(err => console.warn('Service worker registration failed', err));
    });
}

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;
    
    // Get stored theme preference or system preference
    const getPreferredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };
    
    // Apply theme and update icon (no persistence)
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            themeIcon.className = 'bi bi-moon-fill';
        } else {
            body.setAttribute('data-theme', 'light');
            themeIcon.className = 'bi bi-sun-fill';
        }
    };
    
    // Toggle theme with simple rotate animation
    const toggleTheme = () => {
        const currentTheme = body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Add rotate animation class
        themeToggle.classList.add('rotating');
        
        // Change the theme immediately with the rotation
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Remove animation class after completion
        setTimeout(() => {
            themeToggle.classList.remove('rotating');
        }, 400);
    };
    
    // Initialize theme on load
    const preferredTheme = getPreferredTheme();
    applyTheme(preferredTheme);
    
    // Add click event listener with enhanced visual feedback
    themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
    });
    
    // Add visual feedback for keyboard interaction
    themeToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// Preload Critical Resources
function preloadCriticalResources() {
    const criticalImages = [
        'assets/images/hero-background.webp',
        'assets/images/services-workshop.webp',
        'assets/images/brand-logo.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize preloading
preloadCriticalResources();

// Error Handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // In production, you might want to send this to an error tracking service
});

// Performance Monitoring
window.addEventListener('load', function() {
    // Measure page load performance
    if ('performance' in window) {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log('Page load time:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
    }
});

// Collapsible FAB functionality
function initFAB() {
    const fabMain = document.getElementById('fabMain');
    const fabActions = document.getElementById('fabActions');
    
    if (fabMain && fabActions) {
        fabMain.addEventListener('click', function() {
            fabMain.classList.toggle('active');
            fabActions.classList.toggle('active');
        });
        
        // Close FAB when clicking outside
        document.addEventListener('click', function(e) {
            if (!fabMain.contains(e.target) && !fabActions.contains(e.target)) {
                fabMain.classList.remove('active');
                fabActions.classList.remove('active');
            }
        });
        
        // Close FAB when any action is clicked
        const actionButtons = fabActions.querySelectorAll('.fab-action');
        actionButtons.forEach(button => {
            button.addEventListener('click', function() {
                fabMain.classList.remove('active');
                fabActions.classList.remove('active');
            });
        });
    }
}

// Initialize FAB when DOM is loaded
// Note: FAB is already initialized in the main DOMContentLoaded listener above
