document.addEventListener('DOMContentLoaded', function() {
    // Experience item animations
    const experienceItems = document.querySelectorAll('.experience-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    experienceItems.forEach(item => {
        observer.observe(item);
    });
// Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    // Mobile section title updater
    const mobileSectionTitle = document.querySelector('custom-navbar')?.shadowRoot.querySelector('.mobile-section-title');
    let lastKnownScrollPosition = 0;
    let ticking = false;
    let headerHeight = 0;

    function updateHeaderHeight() {
        const navbar = document.querySelector('custom-navbar');
        if (navbar) {
            headerHeight = navbar.offsetHeight + 12;
        }
    }

    function updateActiveSection() {
        if (!mobileSectionTitle) return;
        
        const sections = document.querySelectorAll('section[id]');
        const activationLine = lastKnownScrollPosition + headerHeight;
        
        let activeSection = null;
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.pageYOffset;
            const sectionBottom = sectionTop + rect.height;
            
            if (sectionTop <= activationLine && sectionBottom > activationLine) {
                activeSection = section;
            }
        });
        if (activeSection) {
            const label = activeSection.dataset.label || '';
            if (mobileSectionTitle.textContent !== label) {
                mobileSectionTitle.textContent = label;
                mobileSectionTitle.classList.toggle('active', activeSection !== null);
            }
        } else {
            mobileSectionTitle.classList.remove('active');
        }
}

    function handleScroll() {
        lastKnownScrollPosition = window.scrollY;
        
        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateActiveSection();
                ticking = false;
            });
            ticking = true;
        }
    }

    // Initialize
    updateHeaderHeight();
    document.querySelectorAll('section[id]').forEach(section => {
        section.style.scrollMarginTop = `${headerHeight}px`;
    });

    // Set up event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => {
        updateHeaderHeight();
        updateActiveSection();
    });
// Navbar shadow on scroll and active section highlighting
    const navbar = document.querySelector('custom-navbar');
const navLinks = navbar.shadowRoot.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) {
            navbar.shadowRoot.querySelector('nav').style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.shadowRoot.querySelector('nav').style.boxShadow = 'none';
        }

        // Highlight active section
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                    // Update mobile title if no intersection yet
                    if (current === '' && window.scrollY === 0 && mobileSectionTitle) {
                        mobileSectionTitle.textContent = '00. Introduction';
                        mobileSectionTitle.classList.add('active');
                    } else if (current && mobileSectionTitle) {
                        mobileSectionTitle.classList.toggle('active', true);
                    }
});
    });
});








