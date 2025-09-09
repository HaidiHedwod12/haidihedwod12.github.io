/**
 * Projects Page JavaScript for Haidi Fathur Rahman Portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
    // Hilangkan loader segera untuk mencegah masalah tampilan
    setTimeout(function() {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.display = 'none';
        }
    }, 1000);
    
    // Project Filter Functionality
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectItems = document.querySelectorAll('.project-item');
    
    // Filter projects based on category
    function filterProjects(category) {
        projectItems.forEach(item => {
            // Simpan implementasi animasi untuk menghindari masalah pada mobile
            if (window.innerWidth > 767) {
                // Animasi hanya untuk desktop
                item.classList.add('fade');
                
                setTimeout(() => {
                    if (category === 'all' || item.getAttribute('data-category') === category) {
                        item.classList.remove('hidden');
                        setTimeout(() => {
                            item.classList.remove('fade');
                        }, 100 * Math.random());
                    } else {
                        item.classList.add('hidden');
                    }
                }, 300);
            } else {
                // Untuk mobile, transisi langsung tanpa animasi
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.classList.remove('hidden');
                    item.classList.remove('fade');
                } else {
                    item.classList.add('hidden');
                }
            }
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
    
    // Intersection Observer for project reveal animation - dengan pengecekan browser support
    if ('IntersectionObserver' in window) {
        try {
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
        } catch (error) {
            // Fallback jika terjadi error dengan IntersectionObserver
            console.log("IntersectionObserver error:", error);
            document.querySelectorAll('.reveal').forEach(item => {
                item.classList.add('revealed');
            });
        }
    } else {
        // Fallback untuk browser yang tidak mendukung IntersectionObserver
        document.querySelectorAll('.reveal').forEach(item => {
            item.classList.add('revealed');
        });
    }
    
    // Handle anchor links from other pages - dengan penanganan error
    function handleAnchorLinks() {
        try {
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
                            try {
                                const headerHeight = document.querySelector('.header') ? 
                                    document.querySelector('.header').offsetHeight : 0;
                                const targetPosition = targetElement.getBoundingClientRect().top + 
                                    window.scrollY - headerHeight - 20;
                                
                                window.scrollTo({
                                    top: targetPosition,
                                    behavior: 'smooth'
                                });
                            } catch (scrollError) {
                                console.log("Scroll error:", scrollError);
                                // Fallback jika smooth scroll gagal
                                targetElement.scrollIntoView();
                            }
                        }, 300);
                    }
                }
            }
        } catch (error) {
            console.log("Anchor link error:", error);
        }
    }
    
    // Call the function when page loads
    handleAnchorLinks();
    
    // Call the function when hash changes
    window.addEventListener('hashchange', handleAnchorLinks);
});
