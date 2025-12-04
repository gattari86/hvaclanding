/**
 * HVAC Landing Page - Interactive Script
 * Modern implementation with analytics and CTA tracking
 */

// ============================================
// Configuration
// ============================================

const config = {
    analyticsEnabled: true,
    ctaTrackingEnabled: true,
    scrollTrackingEnabled: true,
    scrollDepthThresholds: [25, 50, 75, 100],
};

// ============================================
// CTA Tracking
// ============================================

class CTATracker {
    constructor() {
        this.trackedCTAs = new Map();
        this.init();
    }

    init() {
        if (!config.ctaTrackingEnabled) return;

        // Find all CTA buttons
        const ctaButtons = document.querySelectorAll('[data-cta]');
        ctaButtons.forEach((button) => {
            button.addEventListener('click', (e) => this.trackCTA(e));
        });

        // Log page load
        this.logEvent('page_view', {
            page_title: document.title,
            url: window.location.href,
            timestamp: new Date().toISOString(),
        });
    }

    trackCTA(event) {
        const element = event.currentTarget;
        const ctaId = element.getAttribute('data-cta');

        this.logEvent('cta_click', {
            cta_id: ctaId,
            element_text: element.textContent.trim(),
            timestamp: new Date().toISOString(),
        });

        // Track in Google Analytics if available
        if (window.gtag) {
            gtag('event', 'cta_click', {
                cta_id: ctaId,
            });
        }

        // Log to console in development
        console.log(`CTA Tracked: ${ctaId}`);
    }

    logEvent(eventType, data) {
        if (window.localStorage) {
            const events = JSON.parse(localStorage.getItem('hvac_events') || '[]');
            events.push({
                type: eventType,
                data: data,
                timestamp: new Date().toISOString(),
            });
            // Keep only last 50 events
            if (events.length > 50) {
                events.shift();
            }
            localStorage.setItem('hvac_events', JSON.stringify(events));
        }
    }
}

// ============================================
// Scroll Depth Tracking
// ============================================

class ScrollDepthTracker {
    constructor() {
        this.tracked = new Set();
        this.init();
    }

    init() {
        if (!config.scrollTrackingEnabled) return;

        window.addEventListener('scroll', () => this.checkScrollDepth());
    }

    checkScrollDepth() {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const scrollPercent = Math.round((scrolled / docHeight) * 100);

        config.scrollDepthThresholds.forEach((threshold) => {
            if (scrollPercent >= threshold && !this.tracked.has(threshold)) {
                this.tracked.add(threshold);
                this.logScrollDepth(threshold);
            }
        });
    }

    logScrollDepth(depth) {
        console.log(`Scroll Depth: ${depth}%`);

        if (window.gtag) {
            gtag('event', 'scroll_depth', {
                depth: depth,
            });
        }
    }
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================

class SmoothScroller {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            });
        });
    }
}

// ============================================
// Form Handler (for future integration)
// ============================================

class FormHandler {
    constructor() {
        this.init();
    }

    init() {
        // Check if there are any forms
        const forms = document.querySelectorAll('form');
        if (forms.length === 0) return;

        forms.forEach((form) => {
            form.addEventListener('submit', (e) => this.handleSubmit(e, form));
        });
    }

    handleSubmit(event, form) {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Log form submission
        console.log('Form Submitted:', data);

        if (window.gtag) {
            gtag('event', 'form_submit', {
                form_id: form.id || 'unknown',
            });
        }

        // Clear form
        form.reset();

        // Show success message
        this.showSuccessMessage(form);
    }

    showSuccessMessage(form) {
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.textContent = 'Thank you! We will contact you soon.';
        successMsg.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            background-color: #10B981;
            color: white;
            border-radius: 0.5rem;
            animation: slideIn 0.3s ease-in-out;
        `;

        form.insertAdjacentElement('afterend', successMsg);

        setTimeout(() => {
            successMsg.remove();
        }, 5000);
    }
}

// ============================================
// Performance Monitoring
// ============================================

class PerformanceMonitor {
    constructor() {
        this.init();
    }

    init() {
        // Use Performance API to measure page load
        window.addEventListener('load', () => {
            this.measurePerformance();
        });
    }

    measurePerformance() {
        if (!window.performance || !window.performance.timing) return;

        const timing = window.performance.timing;
        const metrics = {
            // DNS lookup time
            dns: timing.domainLookupEnd - timing.domainLookupStart,
            // TCP connection time
            tcp: timing.connectEnd - timing.connectStart,
            // Time to first byte
            ttfb: timing.responseStart - timing.navigationStart,
            // DOM interactive time
            domInteractive: timing.domInteractive - timing.navigationStart,
            // DOM complete time
            domComplete: timing.domComplete - timing.navigationStart,
            // Page load time
            pageLoadTime: timing.loadEventEnd - timing.navigationStart,
        };

        console.log('Performance Metrics:', metrics);

        // Send to analytics
        if (window.gtag) {
            gtag('event', 'page_performance', {
                page_load_time: metrics.pageLoadTime,
                dns_time: metrics.dns,
            });
        }
    }
}

// ============================================
// Interactive Elements
// ============================================

class InteractiveElements {
    constructor() {
        this.init();
    }

    init() {
        this.setupButtonHover();
        this.setupCardHover();
        this.setupObserver();
    }

    setupButtonHover() {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach((btn) => {
            btn.addEventListener('mouseenter', () => {
                btn.style.transform = 'translateY(-2px)';
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translateY(0)';
            });
        });
    }

    setupCardHover() {
        const cards = document.querySelectorAll(
            '.problem-card, .feature, .testimonial-card, .faq-item'
        );
        cards.forEach((card) => {
            card.addEventListener('mouseenter', () => {
                card.style.boxShadow =
                    '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                card.style.transform = 'translateY(-4px)';
            });
            card.addEventListener('mouseleave', () => {
                card.style.boxShadow = '';
                card.style.transform = '';
            });
        });
    }

    setupObserver() {
        // Intersection Observer for fade-in animations
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
            }
        );

        // Observe all cards and features
        document.querySelectorAll(
            '.problem-card, .feature, .step, .ai-feature, .testimonial-card'
        ).forEach((el) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            observer.observe(el);
        });
    }
}

// ============================================
// Mobile Menu (for future responsive menu)
// ============================================

class MobileMenu {
    constructor() {
        this.init();
    }

    init() {
        // Placeholder for future mobile menu implementation
        // Will be used if header navigation is added
    }
}

// ============================================
// Utility Functions
// ============================================

function debounce(func, wait) {
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

function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

// ============================================
// Main Initialization
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all tracking systems
    const ctaTracker = new CTATracker();
    const scrollTracker = new ScrollDepthTracker();
    const scroller = new SmoothScroller();
    const formHandler = new FormHandler();
    const performanceMonitor = new PerformanceMonitor();
    const interactive = new InteractiveElements();
    const mobileMenu = new MobileMenu();

    console.log('HVAC Landing Page Initialized');
});

// ============================================
// Google Analytics Integration
// ============================================

// Add your Google Analytics ID here
window.addEventListener('load', () => {
    // This will be populated with actual Google Analytics tracking code
    // when deploying to production

    // Placeholder for Google Analytics
    // window.gtag = window.gtag || function() {...}
});

// ============================================
// Enhanced Micro-Animations
// Based on Designer's Arsenal best practices
// ============================================

class MicroAnimationController {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        this.init();
    }

    init() {
        // Animate elements on scroll using Intersection Observer
        if ('IntersectionObserver' in window) {
            this.observeAnimatedElements();
            this.setupSmoothScrolling();
            this.setupFAQAnimations();
            this.setupCardInteractions();
        }
    }

    observeAnimatedElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add visible class to trigger animations
                    entry.target.classList.add('visible');
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    observer.unobserve(entry.target);
                }
            });
        }, this.observerOptions);

        // Observe all sections
        document.querySelectorAll('.section-header, .problem-card, .feature, .testimonial, .faq-item, .ai-feature').forEach(el => {
            observer.observe(el);
        });
    }

    setupSmoothScrolling() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupFAQAnimations() {
        // FAQ toggle animations
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            const answer = item.querySelector('.faq-answer');

            if (question && answer) {
                question.addEventListener('click', () => {
                    item.classList.toggle('active');

                    // Animate answer reveal
                    if (item.classList.contains('active')) {
                        answer.style.maxHeight = answer.scrollHeight + 'px';
                        answer.style.opacity = '1';
                    } else {
                        answer.style.maxHeight = '0';
                        answer.style.opacity = '0';
                    }
                });
            }
        });
    }

    setupCardInteractions() {
        // Add ripple effect on card clicks
        const cards = document.querySelectorAll('.problem-card, .feature, .testimonial, .ai-feature');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        });
    }
}

// Initialize micro-animations
const microAnimations = new MicroAnimationController();

// ============================================
// Performance Optimization
// ============================================

// Lazy load images if needed
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
    });
}