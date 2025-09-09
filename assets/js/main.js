/**
 * Main JavaScript for Haidi Fathur Rahman Portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const header = document.querySelector('.header');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navigation = document.querySelector('.navigation');
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const loader = document.querySelector('.loader');
    const currentYearElement = document.getElementById('current-year');
    
    // Initialize Current Year in Footer
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Hide Loader after Page Load
    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('hidden');
        }, 1000);
    });
    
    // Handle Header Style on Scroll
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    
    // Mobile Menu Toggle
    mobileMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        navigation.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navigation.classList.contains('active') && 
            !navigation.contains(event.target) && 
            !mobileMenu.contains(event.target)) {
            navigation.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
    
    // Dark Mode Toggle
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        
        // Update icon
        if (document.body.classList.contains('dark-mode')) {
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        }
    }
    
    themeToggle.addEventListener('click', toggleDarkMode);
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.className = 'fas fa-sun';
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navigation.classList.contains('active')) {
                    navigation.classList.remove('active');
                    mobileMenu.classList.remove('active');
                    document.body.classList.remove('no-scroll');
                }
            }
        });
    });
    
    // Active navigation link highlighting
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.navigation a');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - header.offsetHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const scrollPosition = window.scrollY;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // Handle case when at top of page
        if (window.scrollY < 100) {
            const homeLink = document.querySelector('.navigation a[href="#home"]');
            if (homeLink) {
                navLinks.forEach(link => link.classList.remove('active'));
                homeLink.classList.add('active');
            }
        }
    }
    
    window.addEventListener('scroll', setActiveNavLink);
    
    // Initialize AOS animation library if it exists
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true
        });
    }
});