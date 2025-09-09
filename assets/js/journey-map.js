/**
 * Interactive Journey Map JavaScript
 * Handles all interactions, animations, and data for the career journey
 */

document.addEventListener('DOMContentLoaded', function() {
    // Journey data for each node
    const journeyData = {
        1: {
            title: "Anggota Bagian Pemetaan",
            company: "Tim Penyusunan Rencana Tata Ruang Desa Gedawung, Wonogiri",
            duration: "Februari - Maret 2020",
            description: "Bertanggung jawab dalam pembuatan dan analisis peta untuk mendukung penyusunan rencana tata ruang desa. Mengumpulkan dan mengolah data spasial untuk perencanaan pembangunan desa yang berkelanjutan.",
            skills: ["GIS Mapping", "Spatial Analysis", "Data Collection", "Urban Planning"],
            stats: [
                { number: "2", label: "Bulan" },
                { number: "5", label: "Peta Dibuat" },
                { number: "1", label: "Desa" }
            ],
            icon: "fas fa-map-marked-alt",
            achievement: "🗺️",
            achievementTitle: "Langkah Pertama!",
            achievementDesc: "Memulai perjalanan profesional di bidang pemetaan GIS"
        },
        2: {
            title: "Freelance Developer",
            company: "Fastwork & Upwork",
            duration: "2020 - Sekarang",
            description: "Menyediakan layanan pengembangan solusi GIS, Excel VBA, dan AI-Assisted development untuk berbagai klien di platform freelance internasional.",
            skills: ["Excel VBA", "GIS Solutions", "Client Relations", "AI-Assisted Development", "Remote Work"],
            stats: [
                { number: "4+", label: "Tahun" },
                { number: "25+", label: "Proyek" },
                { number: "15+", label: "Klien Puas" }
            ],
            icon: "fas fa-laptop-code",
            achievement: "💼",
            achievementTitle: "Mode Entrepreneur!",
            achievementDesc: "Menjadi developer freelance mandiri"
        },
        3: {
            title: "Data Engineer",
            company: "PT. Rekadwipa Teknika Studio",
            duration: "2021 - Sekarang",
            description: "Fokus pada pembuatan peta tematik, analisis spasial, dan fasilitasi proyek batas desa. Mengembangkan solusi otomatisasi dengan Excel VBA dan aplikasi pendukung untuk meningkatkan efisiensi operasional.",
            skills: ["Data Engineering", "Spatial Analysis", "Excel VBA", "Process Automation", "Team Leadership"],
            stats: [
                { number: "3+", label: "Tahun" },
                { number: "20+", label: "Peta Dibuat" },
                { number: "100%", label: "Peningkatan Efisiensi" }
            ],
            icon: "fas fa-database",
            achievement: "🚀",
            achievementTitle: "Naik Level!",
            achievementDesc: "Berkembang ke posisi Data Engineer"
        },
        4: {
            title: "Tujuan Masa Depan",
            company: "Petualangan Selanjutnya",
            duration: "Segera Hadir",
            description: "Melanjutkan inovasi di bidang GIS, AI-assisted development, dan data engineering. Membangun solusi yang lebih canggih dan berdampak luas untuk masa depan teknologi geospasial.",
            skills: ["Machine Learning", "Advanced GIS", "Cloud Computing", "Leadership", "Innovation"],
            stats: [
                { number: "∞", label: "Kemungkinan" },
                { number: "∞", label: "Pembelajaran" },
                { number: "∞", label: "Pertumbuhan" }
            ],
            icon: "fas fa-rocket",
            achievement: "⭐",
            achievementTitle: "Langit adalah Batas!",
            achievementDesc: "Siap untuk tantangan besar selanjutnya"
        }
    };

    // Get DOM elements
    const journeyNodes = document.querySelectorAll('.journey-node');
    const experiencePanel = document.getElementById('experience-panel');
    const achievementNotification = document.getElementById('achievement-notification');
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');

    // Initialize
    init();

    function init() {
        // Attach event listeners
        journeyNodes.forEach(node => {
            node.addEventListener('click', () => handleNodeClick(node));
            node.addEventListener('mouseenter', () => handleNodeHover(node));
        });

        // Animate stats on scroll
        if (window.IntersectionObserver) {
            const observer = new IntersectionObserver(handleStatsAnimation, {
                threshold: 0.5
            });
            
            statNumbers.forEach(stat => observer.observe(stat));
        }

        // Initialize path animation on scroll
        initializeScrollAnimations();
    }

    function handleNodeClick(node) {
        const nodeId = node.getAttribute('data-node');
        const data = journeyData[nodeId];
        
        if (!data) return;

        // Update panel content
        updateExperiencePanel(data);
        
        // Show achievement notification
        showAchievementNotification(data);
        
        // Update active state
        updateActiveNode(node);
        
        // Show panel with animation
        setTimeout(() => {
            experiencePanel.classList.add('active');
        }, 100);
    }

    function handleNodeHover(node) {
        // Add subtle hover effects and sound (if enabled)
        node.style.filter = 'drop-shadow(0 10px 30px rgba(58, 123, 213, 0.4))';
        
        // Remove filter after animation
        setTimeout(() => {
            if (!node.matches(':hover')) {
                node.style.filter = '';
            }
        }, 300);
    }

    function updateExperiencePanel(data) {
        const panel = experiencePanel;
        
        // Update icon
        const icon = panel.querySelector('.experience-icon i');
        icon.className = data.icon;
        
        // Update title and company
        panel.querySelector('.experience-title').textContent = data.title;
        panel.querySelector('.experience-company').textContent = data.company;
        panel.querySelector('.experience-duration').textContent = data.duration;
        
        // Update description
        panel.querySelector('.experience-description p').textContent = data.description;
        
        // Update skills
        const skillsContainer = panel.querySelector('.skill-tags');
        skillsContainer.innerHTML = '';
        data.skills.forEach(skill => {
            const skillTag = document.createElement('span');
            skillTag.className = 'skill-tag';
            skillTag.textContent = skill;
            skillsContainer.appendChild(skillTag);
        });
        
        // Update stats
        const statsContainer = panel.querySelector('.experience-stats');
        statsContainer.innerHTML = '';
        data.stats.forEach(stat => {
            const statItem = document.createElement('div');
            statItem.className = 'stat-item';
            statItem.innerHTML = `
                <div class="stat-number">${stat.number}</div>
                <div class="stat-label">${stat.label}</div>
            `;
            statsContainer.appendChild(statItem);
        });
    }

    function showAchievementNotification(data) {
        const notification = achievementNotification;
        
        // Update content
        notification.querySelector('.achievement-title').textContent = data.achievementTitle;
        notification.querySelector('.achievement-desc').textContent = data.achievementDesc;
        
        // Show with animation
        notification.classList.add('show');
        
        // Auto hide after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    function updateActiveNode(clickedNode) {
        // Remove active class from all nodes
        journeyNodes.forEach(node => {
            node.classList.remove('active');
        });
        
        // Add active class to clicked node (unless it's the future node)
        if (!clickedNode.classList.contains('future')) {
            clickedNode.classList.add('active');
        }
    }

    function handleStatsAnimation(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const count = parseInt(target.getAttribute('data-count'));
                animateNumber(target, count);
            }
        });
    }

    function animateNumber(element, target) {
        const duration = 2000; // 2 seconds
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 16);
    }

    function initializeScrollAnimations() {
        if (window.IntersectionObserver) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Trigger path animation
                        const pathLine = document.querySelector('.path-line');
                        if (pathLine) {
                            pathLine.style.animation = 'pathDraw 3s ease-in-out forwards, pathPulse 4s ease-in-out infinite 3s';
                        }
                        
                        // Trigger node animations with stagger
                        journeyNodes.forEach((node, index) => {
                            setTimeout(() => {
                                node.style.animation = `nodeFloat 3s ease-in-out infinite ${-index * 0.5}s`;
                                node.style.opacity = '1';
                            }, index * 200);
                        });
                    }
                });
            }, { threshold: 0.3 });
            
            const journeyMap = document.querySelector('.journey-map');
            if (journeyMap) {
                observer.observe(journeyMap);
            }
        }
    }

    // Global function to close panel
    window.closeExperiencePanel = function() {
        experiencePanel.classList.remove('active');
    };

    // Close panel when clicking outside
    experiencePanel.addEventListener('click', (e) => {
        if (e.target === experiencePanel) {
            closeExperiencePanel();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && experiencePanel.classList.contains('active')) {
            closeExperiencePanel();
        }
    });

    // Add interactive features for mobile
    if ('ontouchstart' in window) {
        journeyNodes.forEach(node => {
            node.addEventListener('touchstart', () => {
                node.style.transform = 'translate(-50%, -50%) scale(1.1)';
            });
            
            node.addEventListener('touchend', () => {
                setTimeout(() => {
                    node.style.transform = '';
                }, 200);
            });
        });
    }

    // Easter egg: Konami code for special animation
    let konamiCode = [];
    const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.length === konamiSequence.length && 
            konamiCode.every((code, index) => code === konamiSequence[index])) {
            triggerEasterEgg();
            konamiCode = [];
        }
    });

    function triggerEasterEgg() {
        // Special rainbow animation for all nodes
        journeyNodes.forEach((node, index) => {
            setTimeout(() => {
                node.style.animation = 'rainbow 2s ease-in-out';
                node.querySelector('.node-icon').style.background = 
                    'linear-gradient(45deg, #ff0000, #ff8000, #ffff00, #80ff00, #00ff00, #00ff80, #00ffff, #0080ff, #0000ff, #8000ff, #ff0080)';
            }, index * 100);
        });
        
        // Show special achievement
        const notification = achievementNotification;
        notification.querySelector('.achievement-title').textContent = 'Secret Unlocked!';
        notification.querySelector('.achievement-desc').textContent = 'You found the konami code! 🌈';
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
            // Reset styles
            journeyNodes.forEach(node => {
                node.style.animation = '';
                node.querySelector('.node-icon').style.background = '';
            });
        }, 3000);
    }

    // Add CSS for rainbow animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});