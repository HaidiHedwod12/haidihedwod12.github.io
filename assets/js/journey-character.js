/**
 * Interactive Journey Character Handler
 * Manages character animations, expressions, and milestone interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    const character = document.getElementById('journey-character');
    const characterSvg = character.querySelector('.character-svg');
    const characterEyes = character.querySelector('.character-eyes');
    const characterMouth = character.querySelector('.character-mouth');
    const characterArms = character.querySelector('.character-arms');
    const characterHands = character.querySelector('.character-hands');
    const thoughtBubble = character.querySelector('.thought-bubble');
    const thoughtText = character.querySelector('.thought-text');
    const accessories = character.querySelector('.character-accessories');
    const emotionParticles = character.querySelector('.emotion-particles');
    
    const journeyNodes = document.querySelectorAll('.journey-node');
    
    if (!character || !characterSvg || !journeyNodes.length) return;

    // Character states for each milestone
    const characterStates = {
        default: {
            class: 'idle',
            eyes: 'normal',
            mouth: 'normal',
            arms: 'normal',
            hands: 'normal',
            accessory: 'accessory-default',
            thought: '👋',
            particles: []
        },
        1: { // Mapping Specialist
            class: 'mapping',
            eyes: 'focused',
            mouth: 'focused',
            arms: 'mapping',
            hands: 'mapping',
            accessory: 'accessory-mapping',
            thought: '🗺️',
            particles: ['star', 'code']
        },
        2: { // Freelance Developer  
            class: 'coding',
            eyes: 'excited',
            mouth: 'happy',
            arms: 'coding',
            hands: 'coding',
            accessory: 'accessory-coding',
            thought: '💻',
            particles: ['code', 'star']
        },
        3: { // Data Engineer
            class: 'engineering',
            eyes: 'focused',
            mouth: 'excited',
            arms: 'engineering',
            hands: 'engineering',
            accessory: 'accessory-engineering',
            thought: '🚀',
            particles: ['star', 'heart']
        },
        4: { // Future Goals
            class: 'dreaming',
            eyes: 'happy',
            mouth: 'dreaming',
            arms: 'dreaming',
            hands: 'dreaming',
            accessory: 'accessory-future',
            thought: '⭐',
            particles: ['star', 'heart', 'code']
        }
    };

    let currentState = 'default';
    let isTransitioning = false;

    // Initialize character
    function initCharacter() {
        // Set default state
        changeCharacterState('default');
        
        // Add event listeners to journey nodes
        journeyNodes.forEach(node => {
            node.addEventListener('mouseenter', () => handleNodeHover(node));
            node.addEventListener('mouseleave', () => handleNodeLeave(node));
        });

        // Add periodic idle animations
        setInterval(addIdleAnimation, 5000);
        
        // Add character click interaction
        characterSvg.addEventListener('click', handleCharacterClick);
    }

    function handleNodeHover(node) {
        if (isTransitioning) return;
        
        const nodeId = node.getAttribute('data-node');
        const state = characterStates[nodeId];
        
        if (state && currentState !== nodeId) {
            changeCharacterState(nodeId);
        }
    }

    function handleNodeLeave(node) {
        // Small delay to prevent flicker when moving between nodes
        setTimeout(() => {
            const hoveredNode = document.querySelector('.journey-node:hover');
            if (!hoveredNode) {
                changeCharacterState('default');
            }
        }, 100);
    }

    function changeCharacterState(stateId) {
        if (isTransitioning || currentState === stateId) return;
        
        isTransitioning = true;
        const state = characterStates[stateId] || characterStates.default;
        
        // Character main animation
        characterSvg.className = `character-svg ${state.class}`;
        
        // Eyes expression
        characterEyes.className = `character-eyes ${state.eyes}`;
        
        // Mouth expression
        characterMouth.className = `character-mouth ${state.mouth}`;
        
        // Arms pose
        characterArms.className = `character-arms ${state.arms}`;
        
        // Hands pose
        characterHands.className = `character-hands ${state.hands}`;
        
        // Accessories
        updateAccessories(state.accessory);
        
        // Thought bubble
        updateThoughtBubble(state.thought);
        
        // Particles
        if (state.particles.length > 0) {
            createEmotionParticles(state.particles);
        }
        
        currentState = stateId;
        
        // Reset transition flag
        setTimeout(() => {
            isTransitioning = false;
        }, 600);
    }

    function updateAccessories(accessoryClass) {
        // Hide all accessories first
        const allAccessories = accessories.querySelectorAll('g[class^="accessory-"]');
        allAccessories.forEach(acc => {
            acc.style.opacity = '0';
        });
        
        // Show target accessory
        setTimeout(() => {
            const targetAccessory = accessories.querySelector(`.${accessoryClass}`);
            if (targetAccessory) {
                targetAccessory.style.opacity = '1';
            }
        }, 200);
    }

    function updateThoughtBubble(emoji) {
        // Hide bubble first
        thoughtBubble.classList.remove('show');
        
        // Update content and show
        setTimeout(() => {
            thoughtText.textContent = emoji;
            thoughtBubble.classList.add('show');
        }, 300);
        
        // Auto hide after delay
        setTimeout(() => {
            thoughtBubble.classList.remove('show');
        }, 3000);
    }

    function createEmotionParticles(particleTypes) {
        const particleCount = 3 + Math.floor(Math.random() * 3); // 3-5 particles
        
        for (let i = 0; i < particleCount; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
                
                particle.className = `emotion-particle particle-${type}`;
                
                // Random position around character
                const x = 40 + Math.random() * 40; // Center area
                const y = 60 + Math.random() * 40;
                
                particle.style.left = x + '%';
                particle.style.top = y + '%';
                
                emotionParticles.appendChild(particle);
                
                // Remove particle after animation
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.parentNode.removeChild(particle);
                    }
                }, 3000);
            }, i * 200);
        }
    }

    function addIdleAnimation() {
        if (currentState === 'default' && !isTransitioning) {
            // Random idle gestures
            const idleActions = [
                () => {
                    characterSvg.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        characterSvg.style.transform = '';
                    }, 500);
                },
                () => {
                    thoughtBubble.classList.add('show');
                    thoughtText.textContent = ['💭', '🤔', '✨', '🎯'][Math.floor(Math.random() * 4)];
                    setTimeout(() => {
                        thoughtBubble.classList.remove('show');
                    }, 2000);
                },
                () => {
                    createEmotionParticles(['star']);
                }
            ];
            
            const randomAction = idleActions[Math.floor(Math.random() * idleActions.length)];
            randomAction();
        }
    }

    function handleCharacterClick() {
        // Special interaction when character is clicked
        characterSvg.style.animation = 'none';
        characterSvg.style.transform = 'scale(1.2) rotate(360deg)';
        
        // Celebration particles
        createEmotionParticles(['star', 'heart']);
        
        // Show special message
        thoughtBubble.classList.add('show');
        thoughtText.textContent = '🎉';
        
        // Reset after animation
        setTimeout(() => {
            characterSvg.style.animation = '';
            characterSvg.style.transform = '';
            thoughtBubble.classList.remove('show');
        }, 1000);
    }

    // Advanced character expressions based on scroll position
    function handleScrollExpressions() {
        if (window.IntersectionObserver) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Character notices user is looking
                        if (currentState === 'default') {
                            characterEyes.style.transform = 'scale(1.2)';
                            setTimeout(() => {
                                characterEyes.style.transform = '';
                            }, 1000);
                        }
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(character);
        }
    }

    // Mouse tracking for eyes (subtle effect)
    function addMouseTracking() {
        const journeyMap = document.querySelector('.journey-map');
        if (!journeyMap) return;
        
        journeyMap.addEventListener('mousemove', (e) => {
            if (currentState !== 'default') return;
            
            const rect = characterSvg.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            // Calculate angle and distance
            const deltaX = mouseX - centerX;
            const deltaY = mouseY - centerY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            
            // Only track if mouse is reasonably close
            if (distance < 200) {
                const maxOffset = 2;
                const offsetX = Math.max(-maxOffset, Math.min(maxOffset, deltaX / 50));
                const offsetY = Math.max(-maxOffset, Math.min(maxOffset, deltaY / 50));
                
                const leftEye = character.querySelector('.eye-left');
                const rightEye = character.querySelector('.eye-right');
                
                if (leftEye && rightEye) {
                    leftEye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
                    rightEye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
                }
            }
        });
        
        // Reset eyes when mouse leaves
        journeyMap.addEventListener('mouseleave', () => {
            if (currentState === 'default') {
                const leftEye = character.querySelector('.eye-left');
                const rightEye = character.querySelector('.eye-right');
                
                if (leftEye && rightEye) {
                    leftEye.style.transform = '';
                    rightEye.style.transform = '';
                }
            }
        });
    }

    // Easter egg: Konami code for special character animation
    let konamiSequence = [];
    const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    
    document.addEventListener('keydown', (e) => {
        konamiSequence.push(e.keyCode);
        if (konamiSequence.length > konami.length) {
            konamiSequence.shift();
        }
        
        if (konamiSequence.length === konami.length && 
            konamiSequence.every((code, i) => code === konami[i])) {
            
            // Special rainbow character animation
            characterSvg.style.animation = 'characterDreaming 1s ease-in-out infinite, rainbow 2s linear infinite';
            createEmotionParticles(['star', 'heart', 'code']);
            updateThoughtBubble('🌈');
            
            setTimeout(() => {
                characterSvg.style.animation = '';
            }, 5000);
            
            konamiSequence = [];
        }
    });

    // Initialize all features
    initCharacter();
    handleScrollExpressions();
    addMouseTracking();
    
    console.log('🎭 Interactive Journey Character initialized!');
});