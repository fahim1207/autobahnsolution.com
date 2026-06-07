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
    initLeadTracking();
    initReviewsCarousel();
});

// Sliding Google-reviews carousel
// Renders from window.AUTOBAHN_REVIEWS (see /assets/js/reviews.js — the single
// source of truth for review content). One review per slide, with prev/next
// arrows, pagination dots, native swipe on touch, keyboard support and gentle
// autoplay that respects prefers-reduced-motion. If the data file is missing or
// empty, the static fallback slide already in the HTML is left untouched.
function initReviewsCarousel() {
    const root = document.getElementById('reviewsCarousel');
    if (!root) return;

    const track = root.querySelector('[data-reviews-track]');
    const dotsWrap = document.querySelector('[data-reviews-dots]');
    const prevBtn = root.querySelector('[data-reviews-prev]');
    const nextBtn = root.querySelector('[data-reviews-next]');
    if (!track) return;

    const reviews = Array.isArray(window.AUTOBAHN_REVIEWS) ? window.AUTOBAHN_REVIEWS : [];

    // No data → keep the static fallback slide, hide controls we can't drive.
    if (!reviews.length) {
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        return;
    }

    const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => (
        { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
    ));
    const stars = (n) => {
        const r = Math.max(0, Math.min(5, Math.round(Number(n) || 0)));
        let out = '';
        for (let i = 0; i < 5; i++) {
            out += '<i class="bi bi-star' + (i < r ? '-fill' : '') + '"></i>';
        }
        return { html: out, count: r };
    };

    // Build slides from data (replaces the static fallback).
    track.innerHTML = reviews.map((rv, i) => {
        const s = stars(rv.rating);
        return '<li class="review-slide" role="group" aria-roledescription="review" aria-label="Review ' +
            (i + 1) + ' of ' + reviews.length + '">' +
            '<figure class="review-card">' +
            '<div class="review-stars" role="img" aria-label="Rated ' + s.count + ' out of 5 stars">' + s.html + '</div>' +
            '<blockquote class="review-text mb-0">&ldquo;' + esc(rv.text) + '&rdquo;</blockquote>' +
            '<figcaption class="review-meta">' +
            '<i class="bi bi-google" aria-hidden="true"></i>' +
            '<span><span class="review-name">' + esc(rv.name) + '</span>' +
            '<span class="review-source">' + esc(rv.source || 'Google review') + '</span></span>' +
            '</figcaption></figure></li>';
    }).join('');

    const slides = Array.from(track.querySelectorAll('.review-slide'));
    let index = 0;

    // Pagination dots
    let dots = [];
    if (dotsWrap) {
        dotsWrap.innerHTML = reviews.map((rv, i) =>
            '<button type="button" class="reviews-dot" role="tab" aria-label="Show review ' +
            (i + 1) + (rv.name ? ' by ' + esc(rv.name) : '') + '"></button>'
        ).join('');
        dots = Array.from(dotsWrap.querySelectorAll('.reviews-dot'));
    }

    const setActive = (i) => {
        index = (i + slides.length) % slides.length;
        dots.forEach((d, di) => {
            const on = di === index;
            d.classList.toggle('is-active', on);
            d.setAttribute('aria-selected', on ? 'true' : 'false');
        });
    };

    const goTo = (i, smooth) => {
        const target = (i + slides.length) % slides.length;
        track.scrollTo({ left: target * track.clientWidth, behavior: smooth === false ? 'auto' : 'smooth' });
        setActive(target);
    };

    // Keep the active dot in sync while the user swipes/scrolls.
    let scrollTimer;
    track.addEventListener('scroll', () => {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
            const i = Math.round(track.scrollLeft / track.clientWidth);
            setActive(i);
        }, 80);
    }, { passive: true });

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(index - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => goTo(index + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

    // Keyboard arrows when the carousel has focus
    root.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1); }
        else if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
    });

    setActive(0);

    // Gentle autoplay — paused on hover, focus or touch, and off entirely when
    // the user prefers reduced motion or there's only one review.
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion && slides.length > 1) {
        let timer = null;
        const start = () => { timer = setInterval(() => goTo(index + 1), 6000); };
        const stop = () => { if (timer) { clearInterval(timer); timer = null; } };
        start();
        ['mouseenter', 'focusin', 'touchstart'].forEach((ev) => root.addEventListener(ev, stop, { passive: true }));
        ['mouseleave', 'focusout'].forEach((ev) => root.addEventListener(ev, start));
        document.addEventListener('visibilitychange', () => { document.hidden ? stop() : (stop(), start()); });
    }

    // Re-align to the active slide if the viewport is resized.
    window.addEventListener('resize', debounce(() => goTo(index, false), 150));
}

// Lead-conversion tracking -> GA4
// Fires a `generate_lead` event when a visitor clicks WhatsApp, call, or email.
// Mark `generate_lead` as a key event in GA4 to measure leads from organic/maps.
// See docs/seo/08-technical-seo-audit.md (T11) and docs/seo/11-page-briefs.md (§4b).
function initLeadTracking() {
    var fire = function (method) {
        if (typeof window.gtag === 'function') {
            window.gtag('event', 'generate_lead', { method: method });
        }
    };
    var bind = function (selector, method) {
        document.querySelectorAll(selector).forEach(function (el) {
            el.addEventListener('click', function () { fire(method); });
        });
    };
    bind('a[href*="wa.me"], a[href*="api.whatsapp.com"]', 'whatsapp');
    bind('a[href^="tel:"]', 'call');
    bind('a[href^="mailto:"]', 'email');
}

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
    const root = document.documentElement;
    if (!themeToggle || !themeIcon) {
        return;
    }

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
            root.setAttribute('data-theme', 'dark');
            themeIcon.className = 'bi bi-moon-fill';
        } else {
            root.setAttribute('data-theme', 'light');
            themeIcon.className = 'bi bi-sun-fill';
        }
    };
    
    // Toggle theme with simple rotate animation
    const toggleTheme = () => {
        const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
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

// Preload Critical Resources (gated by connection and deferred)
function preloadCriticalResources() {
    try {
        const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const effectiveType = conn && conn.effectiveType ? conn.effectiveType : '4g';
        const saveData = conn && typeof conn.saveData === 'boolean' ? conn.saveData : false;

        // Skip preloading for slow networks or when Data Saver is on
        if (saveData || effectiveType !== '4g') {
            return;
        }

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
    } catch (e) {
        // Fail silently
    }
}

// Initialize preloading after window load (and preferably idle)
window.addEventListener('load', () => {
    if ('requestIdleCallback' in window) {
        requestIdleCallback(preloadCriticalResources, { timeout: 2000 });
    } else {
        setTimeout(preloadCriticalResources, 1500);
    }
});

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

// Service Packages Carousel with Preview Effect
function initServicePackagesCarousel() {
    const carousel = document.getElementById('servicePackagesCarousel');
    if (!carousel) return;

    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function updatePreviews() {
        const activeItem = carousel.querySelector('.carousel-item.active');
        if (!activeItem) return;

        const activeIndex = Array.from(items).indexOf(activeItem);
        const prevIndex = (activeIndex - 1 + totalItems) % totalItems;
        const nextIndex = (activeIndex + 1) % totalItems;

        // Remove existing preview elements
        carousel.querySelectorAll('.service-preview').forEach(el => el.remove());

        // Get the container for the active item
        const container = activeItem.querySelector('.position-relative');
        if (!container) return;

        // Get images
        const prevImg = items[prevIndex].querySelector('img');
        const nextImg = items[nextIndex].querySelector('img');

        if (prevImg && nextImg) {
            // Create previous preview
            const prevPreview = document.createElement('div');
            prevPreview.className = 'service-preview service-preview-left';
            prevPreview.innerHTML = `<img src="${prevImg.src}" alt="${prevImg.alt}">`;
            container.appendChild(prevPreview);

            // Create next preview
            const nextPreview = document.createElement('div');
            nextPreview.className = 'service-preview service-preview-right';
            nextPreview.innerHTML = `<img src="${nextImg.src}" alt="${nextImg.alt}">`;
            container.appendChild(nextPreview);
        }
    }

    // Initial setup
    updatePreviews();

    // Update on slide
    carousel.addEventListener('slide.bs.carousel', function() {
        setTimeout(updatePreviews, 100);
    });
}

// Initialize service packages carousel
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServicePackagesCarousel);
} else {
    initServicePackagesCarousel();
}
