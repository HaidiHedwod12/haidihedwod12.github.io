/**
 * Animation effects for Haidi Fathur Rahman Portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for revealing elements on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
        
        // Add base styles
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Style for revealed elements
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .reveal.revealed {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        </style>
    `);
    
    // Counting animation for statistics
    const countElements = document.querySelectorAll('.count-up');
    
    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetValue = parseInt(target.dataset.count);
                let currentValue = 0;
                const duration = 2000; // 2 seconds
                const increment = targetValue / (duration / 16); // 60 FPS approx
                
                // Start counting
                const counter = setInterval(() => {
                    currentValue += increment;
                    
                    if (currentValue >= targetValue) {
                        target.textContent = targetValue.toLocaleString();
                        clearInterval(counter);
                    } else {
                        target.textContent = Math.floor(currentValue).toLocaleString();
                    }
                }, 16);
                
                countObserver.unobserve(target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    countElements.forEach(element => {
        countObserver.observe(element);
    });
    
    // Typing animation for hero section
    const typingElement = document.querySelector('.typing');
    
    if (typingElement) {
        const phrases = typingElement.dataset.phrases.split(',');
        let currentPhraseIndex = 0;
        let currentCharIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function typePhrase() {
            const currentPhrase = phrases[currentPhraseIndex];
            
            if (isDeleting) {
                // Deleting text
                typingElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
                currentCharIndex--;
                typingSpeed = 50;
            } else {
                // Typing text
                typingElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
                currentCharIndex++;
                typingSpeed = 100;
            }
            
            // Check if complete phrase is typed
            if (!isDeleting && currentCharIndex === currentPhrase.length) {
                isDeleting = true;
                typingSpeed = 1500; // Pause at end of phrase
            }
            
            // Check if deletion is complete
            if (isDeleting && currentCharIndex === 0) {
                isDeleting = false;
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                typingSpeed = 500; // Pause before typing next phrase
            }
            
            setTimeout(typePhrase, typingSpeed);
        }
        
        // Start typing animation
        setTimeout(typePhrase, 1000);
    }
    
    // Parallax effect for hero background
    const parallaxElements = document.querySelectorAll('.parallax');
    
    function updateParallax() {
        const scrollPosition = window.scrollY;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    }
    
    window.addEventListener('scroll', updateParallax);
    
    // Skill progress bars animation
    const progressBars = document.querySelectorAll('.skill-progress');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progressValue = progressBar.dataset.progress || 0;
                
                progressBar.style.width = `${progressValue}%`;
                
                progressObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    progressBars.forEach(element => {
        progressObserver.observe(element);
    });
});