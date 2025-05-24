// JavaScript for Interactive Portfolio Features

document.addEventListener('DOMContentLoaded', function() {    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('-translate-x-full');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }    // Close mobile menu when clicking on a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu) {
                mobileMenu.classList.add('-translate-x-full');
            }
            if (mobileMenuBtn) {
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.add('fa-bars');
                    icon.classList.remove('fa-times');
                }
            }
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });    // Calculator Display Animation
    const calculatorDisplay = document.getElementById('calculator-display');
    if (calculatorDisplay) {
        const values = ['100,000.00 €', '256,789.50 €', '89,432.75 €', '150,000.00 €', '75,850.25 €'];
        let currentValueIndex = 0;

        setInterval(() => {
            currentValueIndex = (currentValueIndex + 1) % values.length;
            calculatorDisplay.textContent = values[currentValueIndex];
            calculatorDisplay.style.color = getRandomColor();
        }, 3000);
    }

    function getRandomColor() {
        const colors = ['#d97706', '#059669', '#3b82f6', '#8b5cf6', '#ef4444'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Calculator Button Interactions
    const calcButtons = document.querySelectorAll('.calc-btn');
    calcButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.1)';
            }, 100);
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
    });

    // Animated Counter for Statistics
    const counters = document.querySelectorAll('.counter');
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 20);
    }

    // Skill Bar Animations
    const skillBars = document.querySelectorAll('.skill-bar');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target;
                const width = skillBar.getAttribute('data-width');
                setTimeout(() => {
                    skillBar.style.width = width;
                }, 500);
                skillObserver.unobserve(skillBar);
            }
        });
    }, observerOptions);

    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });

    // Chart Bar Animations
    const chartBars = document.querySelectorAll('.chart-bar');
    const chartObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const chartBar = entry.target;
                const height = chartBar.getAttribute('data-height');
                setTimeout(() => {
                    chartBar.style.height = height;
                }, 800);
                chartObserver.unobserve(chartBar);
            }
        });
    }, observerOptions);

    chartBars.forEach(bar => {
        chartObserver.observe(bar);
    });

    // Parallax Effect for Background Elements
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.animate-float');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px) rotate(${yPos * 0.02}deg)`;
        });
    });    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.innerHTML : '';
            
            if (submitBtn) {
                // Animate submit button
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-3"></i>Envoi en cours...';
                submitBtn.disabled = true;
                
                // Simulate form submission (replace with actual form handling)
                setTimeout(() => {
                    submitBtn.innerHTML = '<i class="fas fa-check mr-3"></i>Message envoyé !';
                    submitBtn.classList.remove('from-accounting-gold', 'to-accounting-green');
                    submitBtn.classList.add('bg-green-500');
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.classList.add('from-accounting-gold', 'to-accounting-green');
                        submitBtn.classList.remove('bg-green-500');
                        submitBtn.disabled = false;
                        contactForm.reset();
                    }, 2000);
                }, 1500);
            }
        });
    }

    // Service Card Hover Effects
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.5)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
    });

    // Portfolio Item Interactions
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add a subtle shake animation when clicked
            this.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 500);
        });
    });

    // Add shake animation to CSS dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0) translateY(-8px); }
            25% { transform: translateX(-5px) translateY(-8px); }
            75% { transform: translateX(5px) translateY(-8px); }
        }
    `;
    document.head.appendChild(style);

    // Active Navigation Highlight
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('text-accounting-gold');
            item.classList.add('text-gray-300');
            if (item.getAttribute('href') === '#' + current) {
                item.classList.add('text-accounting-gold');
                item.classList.remove('text-gray-300');
            }
        });
    });

    // Typing Effect for Hero Section
    const heroText = document.querySelector('h1 span:first-child');
    const text = 'Comptable';
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            heroText.textContent = text.substring(0, index + 1);
            index++;
            setTimeout(typeWriter, 150);
        }
    }

    // Start typing effect after page load
    setTimeout(typeWriter, 1000);

    // Random floating elements animation
    function createFloatingElement() {
        const element = document.createElement('div');
        element.classList.add('fixed', 'pointer-events-none', 'text-accounting-gold', 'opacity-20', 'text-2xl');
        element.innerHTML = ['📊', '💼', '📈', '🧮', '💰'][Math.floor(Math.random() * 5)];
        element.style.left = Math.random() * window.innerWidth + 'px';
        element.style.top = window.innerHeight + 'px';
        element.style.zIndex = '1';
        
        document.body.appendChild(element);
        
        // Animate upward
        let position = window.innerHeight;
        const animation = setInterval(() => {
            position -= 2;
            element.style.top = position + 'px';
            
            if (position < -50) {
                clearInterval(animation);
                element.remove();
            }
        }, 50);
    }

    // Create floating elements periodically
    setInterval(createFloatingElement, 5000);

    // Add mouse trail effect
    const trail = [];
    const trailLength = 20;

    document.addEventListener('mousemove', function(e) {
        trail.push({ x: e.clientX, y: e.clientY });
        
        if (trail.length > trailLength) {
            trail.shift();
        }
        
        // Update existing trail elements or create new ones
        trail.forEach((point, index) => {
            let trailElement = document.querySelector(`#trail-${index}`);
            
            if (!trailElement) {
                trailElement = document.createElement('div');
                trailElement.id = `trail-${index}`;
                trailElement.style.cssText = `
                    position: fixed;
                    width: 4px;
                    height: 4px;
                    background: linear-gradient(45deg, #d97706, #059669);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 9999;
                    transition: opacity 0.3s ease;
                `;
                document.body.appendChild(trailElement);
            }
            
            trailElement.style.left = point.x - 2 + 'px';
            trailElement.style.top = point.y - 2 + 'px';
            trailElement.style.opacity = (index / trailLength) * 0.5;
        });
    });

    // Cleanup trail on mouse leave
    document.addEventListener('mouseleave', function() {
        setTimeout(() => {
            for (let i = 0; i < trailLength; i++) {
                const element = document.querySelector(`#trail-${i}`);
                if (element) {
                    element.remove();
                }
            }
            trail.length = 0;
        }, 300);
    });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('click', function() {
        document.body.classList.remove('keyboard-navigation');
    });

    // Performance optimization: Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) originalScrollHandler();
        }, 10);
    });

    console.log('🧮 Portfolio ComptaPro chargé avec succès !');
});
