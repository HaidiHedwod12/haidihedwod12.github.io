/**
 * Simplified Projects Carousel Handler
 */

document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.projects-carousel-container');
    const carousel = document.querySelector('.projects-carousel');
    
    if (!carouselContainer || !carousel) {
        return;
    }

    let isHovering = false;

    // Pause on hover - immediate response
    carouselContainer.addEventListener('mouseenter', function() {
        isHovering = true;
        carousel.style.animationPlayState = 'paused';
    });

    // Resume on leave - immediate response
    carouselContainer.addEventListener('mouseleave', function() {
        isHovering = false;
        // Minimal delay to prevent flickering
        setTimeout(() => {
            if (!isHovering) {
                carousel.style.animationPlayState = 'running';
            }
        }, 50);
    });

    let scrollTimeout;
    let isManualScrolling = false;

    // Simple and effective infinite scroll
    let isLooping = false;
    
    carouselContainer.addEventListener('scroll', function() {
        if (isLooping) return; // Prevent multiple triggers during loop
        
        const scrollLeft = carouselContainer.scrollLeft;
        const scrollWidth = carouselContainer.scrollWidth;
        const clientWidth = carouselContainer.clientWidth;
        const maxScroll = scrollWidth - clientWidth;
        
        // We have duplicate content, so we can loop at 50% point
        const loopPoint = maxScroll / 2;
        const threshold = 100; // pixels before edge
        
        // Right edge - reset to start of duplicate section
        if (scrollLeft >= maxScroll - threshold) {
            isLooping = true;
            carouselContainer.scrollLeft = threshold;
            setTimeout(() => isLooping = false, 50);
        }
        // Left edge - reset to end of original section
        else if (scrollLeft <= threshold) {
            isLooping = true;
            carouselContainer.scrollLeft = loopPoint - threshold;
            setTimeout(() => isLooping = false, 50);
        }
    }, { passive: true });

    // Enhanced mouse wheel control with smooth scrolling
    carouselContainer.addEventListener('wheel', function(e) {
        if (isHovering) {
            e.preventDefault();
            
            const scrollAmount = e.deltaY * 2.5;
            const currentScroll = carouselContainer.scrollLeft;
            const targetScroll = currentScroll + scrollAmount;
            
            // Smooth scroll to target position
            carouselContainer.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    }, { passive: false });

});