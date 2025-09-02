// Main JavaScript for Autobahn Solutions Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initScrollReveal();
    initSmoothScrolling();
    initContactForm();
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

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Validate required fields
            if (!formObject.name || !formObject.phone || !formObject.service) {
                showAlert('Please fill in all required fields.', 'danger');
                return;
            }
            
            // Validate phone number
            const phoneRegex = /^[+]?[\d\s\-\(\)]+$/;
            if (!phoneRegex.test(formObject.phone)) {
                showAlert('Please enter a valid phone number.', 'danger');
                return;
            }
            
            // Validate email if provided
            if (formObject.email && !isValidEmail(formObject.email)) {
                showAlert('Please enter a valid email address.', 'danger');
                return;
            }
            
            // Simulate form submission
            submitForm(formObject);
        });
    }
}

// Form Submission (Dummy endpoint)
function submitForm(formData) {
    const submitBtn = document.querySelector('#contactForm button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="bi bi-hourglass-split me-2"></i>Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // In a real application, this would be an actual API call
        console.log('Form submitted:', formData);
        
        // Show success message
        showAlert('Thank you! Your message has been sent successfully. We will contact you soon.', 'success');
        
        // Reset form
        document.getElementById('contactForm').reset();
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Track conversion (for analytics)
        trackFormSubmission(formData.service);
        
    }, 1500);
}

// Show Alert Messages
function showAlert(message, type) {
    // Remove existing alerts
    const existingAlert = document.querySelector('.alert-message');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create new alert
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show alert-message`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    // Insert after form
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(alertDiv, form.nextSibling);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alertDiv && alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Email Validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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

// Track Form Submissions (for analytics)
function trackFormSubmission(service) {
    // Google Analytics tracking (if implemented)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
            'event_category': 'Contact',
            'event_label': service,
            'value': 1
        });
    }
    
    // Facebook Pixel tracking (if implemented)
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            content_category: service
        });
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

// Service Worker Registration removed for Replit static hosting
// PWA capabilities not required for this static website

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
    
    // Set theme and update icon
    const setTheme = (theme) => {
        if (theme === 'dark') {
            body.setAttribute('data-theme', 'dark');
            themeIcon.className = 'bi bi-moon-fill';
        } else {
            body.removeAttribute('data-theme');
            themeIcon.className = 'bi bi-sun-fill';
        }
        localStorage.setItem('theme', theme);
    };
    
    // Toggle theme
    const toggleTheme = () => {
        const currentTheme = body.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };
    
    // Initialize theme on load
    const preferredTheme = getPreferredTheme();
    setTheme(preferredTheme);
    
    // Add click event listener
    themeToggle.addEventListener('click', toggleTheme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// Preload Critical Resources
function preloadCriticalResources() {
    const criticalImages = [
        'assets/images/hero-background.webp',
        'assets/images/services-workshop.webp',
        'assets/images/brand-logo.jpg'
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
