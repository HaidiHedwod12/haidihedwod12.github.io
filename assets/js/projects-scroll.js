/**
 * Projects Carousel Scroll Handler for Haidi Fathur Rahman Portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.projects-carousel-container');
    const carousel = document.querySelector('.projects-carousel');
    
    if (!carouselContainer || !carousel) {
        console.log('Carousel elements not found!');
        return;
    }

    console.log('Carousel initialized successfully');

    let isManualScrolling = false;
    let scrollTimeout;
    let isHovering = false;
    let isWheelScrolling = false;

    // Function to pause animation
    function pauseAnimation() {
        carousel.style.animationPlayState = 'paused';
    }

    // Function to resume animation
    function resumeAnimation() {
        if (!isManualScrolling && !isHovering && !isWheelScrolling) {
            carousel.style.animationPlayState = 'running';
        }
    }

    // Infinite scroll logic for manual scrolling
    function handleInfiniteScroll() {
        const scrollLeft = carouselContainer.scrollLeft;
        const scrollWidth = carouselContainer.scrollWidth;
        const clientWidth = carouselContainer.clientWidth;
        const maxScroll = scrollWidth - clientWidth;
        
        // If scrolled to near the end, loop back to beginning smoothly
        if (scrollLeft >= maxScroll - 50) {
            carouselContainer.scrollLeft = scrollLeft - (maxScroll / 2);
        }
        // If scrolled to near the beginning, loop back to middle smoothly
        else if (scrollLeft <= 50) {
            carouselContainer.scrollLeft = scrollLeft + (maxScroll / 2);
        }
    }

    // Handle manual scroll
    carouselContainer.addEventListener('scroll', function() {
        isManualScrolling = true;
        pauseAnimation();
        
        // Handle infinite scrolling for manual scroll
        handleInfiniteScroll();
        
        // Clear existing timeout
        clearTimeout(scrollTimeout);
        
        // Resume animation after scroll stops
        scrollTimeout = setTimeout(() => {
            isManualScrolling = false;
            if (!isHovering && !isWheelScrolling) {
                resumeAnimation();
            }
        }, 1200);
    });

    // Handle hover on container
    carouselContainer.addEventListener('mouseenter', function() {
        isHovering = true;
        pauseAnimation();
    });

    carouselContainer.addEventListener('mouseleave', function() {
        isHovering = false;
        // Small delay to prevent flickering
        setTimeout(() => {
            if (!isHovering && !isManualScrolling && !isWheelScrolling) {
                resumeAnimation();
            }
        }, 200);
    });

    // Enhanced mouse wheel scroll functionality
    carouselContainer.addEventListener('wheel', function(e) {
        if (isHovering) {
            e.preventDefault();
            
            isWheelScrolling = true;
            pauseAnimation();
            
            // Smooth scroll with enhanced responsiveness
            const scrollAmount = e.deltaY * 2.5;
            const newScrollLeft = carouselContainer.scrollLeft + scrollAmount;
            
            carouselContainer.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
            
            // Handle infinite scrolling for wheel scroll too
            setTimeout(() => {
                handleInfiniteScroll();
            }, 100);
            
            // Clear any existing timeout
            clearTimeout(scrollTimeout);
            
            // Resume animation after wheel scrolling stops
            scrollTimeout = setTimeout(() => {
                isWheelScrolling = false;
                if (!isHovering && !isManualScrolling) {
                    resumeAnimation();
                }
            }, 1200);
        }
    }, { passive: false });

    // Handle individual card hovers for enhanced effect
    const projectCards = document.querySelectorAll('.project-card-scroll');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Ensure container is paused when hovering individual cards
            pauseAnimation();
        });
    });

    // Simple restart animation function
    function restartAnimation() {
        carousel.style.animation = 'none';
        carousel.offsetHeight; // Trigger reflow
        carousel.style.animation = 'infiniteScroll 40s linear infinite';
        carousel.style.animationPlayState = 'running';
    }

    // Initialize animation - keep it simple
    console.log('Setting up animation...');
    carousel.style.animation = 'infiniteScroll 40s linear infinite';
    carousel.style.animationPlayState = 'running';
    
    // Check if animation is working after a short delay
    setTimeout(() => {
        const computedStyle = window.getComputedStyle(carousel);
        console.log('Animation state:', computedStyle.animationPlayState);
        console.log('Animation name:', computedStyle.animationName);
        console.log('Animation duration:', computedStyle.animationDuration);
    }, 1000);

    // Simple monitoring to ensure animation is working
    function monitorAnimation() {
        // Just monitor, don't interfere with CSS animation
        lastAnimationFrame = requestAnimationFrame(monitorAnimation);
    }
    
    monitorAnimation();

    // Handle visibility change (pause when tab is not active)
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            pauseAnimation();
        } else {
            if (!isHovering && !isManualScrolling && !isWheelScrolling) {
                carousel.style.animationPlayState = 'running';
            }
        }
    });

    // Cleanup on page unload
    window.addEventListener('beforeunload', function() {
        if (lastAnimationFrame) {
            cancelAnimationFrame(lastAnimationFrame);
        }
        carousel.style.animationPlayState = 'paused';
    });
});