/**
 * Projects Page JavaScript for Haidi Fathur Rahman Portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
    // Project Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectItems = document.querySelectorAll('.project-item');
    
    // Filter projects based on category
    function filterProjects(category) {
        projectItems.forEach(item => {
            // First add fade out class
            item.classList.add('fade');
            
            // After animation completes, handle visibility
            setTimeout(() => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.classList.remove('hidden');
                    // Slight delay for staggered animation effect
                    setTimeout(() => {
                        item.classList.remove('fade');
                    }, 100 * Math.random());
                } else {
                    item.classList.add('hidden');
                }
            }, 300);
        });
    }
    
    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter projects based on category
            const category = this.getAttribute('data-filter');
            filterProjects(category);
        });
    });
    
    // Project Modal Functionality
    const modalLinks = document.querySelectorAll('.view-project-btn');
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    
    // Function to open modal
    function openModal(modalId) {
        const modal = document.querySelector(modalId);
        if (modal) {
            document.body.style.overflow = 'hidden'; // Prevent scrolling
            modal.classList.add('active');
        }
    }
    
    // Function to close modal
    function closeModal() {
        const activeModal = document.querySelector('.project-modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            document.body.style.overflow = ''; // Enable scrolling
        }
    }
    
    // Add click event to modal links
    modalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.getAttribute('href');
            openModal(modalId);
        });
    });
    
    // Add click event to modal close buttons
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });
    
    // Close modal when clicking outside content
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('project-modal')) {
            closeModal();
        }
    });
    
    // Close modal when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Intersection Observer for project reveal animation
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
    
    // Observe all project items
    document.querySelectorAll('.reveal').forEach(item => {
        revealObserver.observe(item);
    });
    
    // Handle anchor links from other pages
    function handleAnchorLinks() {
        const hash = window.location.hash;
        if (hash && hash.startsWith('#')) {
            const targetId = hash.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // If it's a project item, make sure it's visible
                if (targetElement.classList.contains('project-item')) {
                    // Show all projects first
                    filterProjects('all');
                    
                    // Update active button
                    const category = targetElement.getAttribute('data-category');
                    filterButtons.forEach(btn => {
                        if (btn.getAttribute('data-filter') === 'all' || 
                            btn.getAttribute('data-filter') === category) {
                            btn.classList.add('active');
                        } else {
                            btn.classList.remove('active');
                        }
                    });
                    
                    // Scroll to the element with offset for header
                    setTimeout(() => {
                        const headerHeight = document.querySelector('.header').offsetHeight;
                        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }, 300);
                }
            }
        }
    }
    
    // Call the function when page loads
    handleAnchorLinks();
    
    // Call the function when hash changes
    window.addEventListener('hashchange', handleAnchorLinks);
});