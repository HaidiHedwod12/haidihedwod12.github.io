/**
 * Projects Hexagon Interactive Handler for Haidi Fathur Rahman Portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
    // Project data for hexagon showcase
    const projectsData = {
        gis: {
            category: "GIS & Mapping",
            categoryId: "GIS & Pemetaan",
            categoryEn: "GIS & Mapping",
            title: "Proyek Batas Desa",
            titleEn: "Village Boundary Project",
            description: "Fasilitasi pembuatan peta batas desa untuk pemerintah daerah menggunakan teknologi GIS lanjutan dengan akurasi tinggi dan metodologi yang sesuai standar nasional.",
            descriptionEn: "Facilitation of village boundary mapping for local governments using advanced GIS technology with high accuracy and methodology according to national standards.",
            techStack: [
                { src: "assets/img/skills/GIS/Logo Arcgis.png", alt: "ArcGIS" },
                { src: "assets/img/skills/GIS/Logo QGIS.png", alt: "QGIS" },
                { src: "assets/img/skills/GIS/Logo Goole Earth.png", alt: "Google Earth" }
            ],
            link: "projects.html#boundary"
        },
        data: {
            category: "Data & Automation",
            categoryId: "Data & Otomasi",
            categoryEn: "Data & Automation", 
            title: "Sistem Otomatisasi Data",
            titleEn: "Data Automation System",
            description: "Pengembangan sistem otomatisasi input dan analisis data dengan Excel VBA untuk PT. Rekadwipa, meningkatkan efisiensi kerja hingga 80%.",
            descriptionEn: "Development of data input and analysis automation system with Excel VBA for PT. Rekadwipa, improving work efficiency by up to 80%.",
            techStack: [
                { src: "assets/img/skills/Data/Logo Excel.png", alt: "Excel" },
                { src: "assets/img/skills/Data/Logo VBA.png", alt: "VBA" },
                { src: "assets/img/skills/Data/Logo Word.png", alt: "Word" }
            ],
            link: "projects.html#excel"
        },
        ai: {
            category: "AI Development",
            categoryId: "AI Development", 
            categoryEn: "AI Development",
            title: "Aplikasi Dokumentasi Kantor",
            titleEn: "Office Documentation App",
            description: "Pembuatan aplikasi dokumentasi dan notulensi dengan bantuan AI untuk efisiensi workflow dan otomatisasi proses administrative.",
            descriptionEn: "Creating documentation and minutes applications with AI assistance for workflow efficiency and administrative process automation.",
            techStack: [
                { src: "assets/img/skills/Code/Logo Chatgpt.png", alt: "ChatGPT" },
                { src: "assets/img/skills/Code/Logo Claude.png", alt: "Claude" },
                { src: "assets/img/skills/Code/Logo v0.png", alt: "v0" }
            ],
            link: "projects.html#app"
        },
        spatial: {
            category: "Spatial Analysis",
            categoryId: "Analisis Spasial",
            categoryEn: "Spatial Analysis",
            title: "Analisis Spasial",
            titleEn: "Spatial Analysis",
            description: "Proyek analisis spasial lanjutan menggunakan Google Earth Engine dan teknologi cloud computing untuk pengolahan data satelit skala besar.",
            descriptionEn: "Advanced spatial analysis project using Google Earth Engine and cloud computing technology for large-scale satellite data processing.",
            techStack: [
                { src: "assets/img/skills/GIS/Logo GEE.png", alt: "Google Earth Engine", class: "remove-bg" },
                { src: "assets/img/skills/GIS/Logo Goole Earth.png", alt: "Google Earth" },
                { src: "assets/img/skills/GIS/Logo QGIS.png", alt: "QGIS" }
            ],
            link: "projects.html#spatial"
        },
        thematic: {
            category: "Thematic Mapping",
            categoryId: "Pemetaan Tematik",
            categoryEn: "Thematic Mapping", 
            title: "Pemetaan Tematik",
            titleEn: "Thematic Mapping",
            description: "Pembuatan peta tematik berkualitas tinggi untuk berbagai keperluan perencanaan wilayah dan presentasi data spasial yang informatif.",
            descriptionEn: "Creation of high-quality thematic maps for various regional planning needs and informative spatial data presentation.",
            techStack: [
                { src: "assets/img/skills/GIS/Logo Arcgis.png", alt: "ArcGIS" },
                { src: "assets/img/skills/Data/Logo Powerpoint.png", alt: "PowerPoint" },
                { src: "assets/img/skills/Data/Logo Excel.png", alt: "Excel" }
            ],
            link: "projects.html#thematic"
        }
    };

    // DOM elements
    const hexProjects = document.querySelectorAll('.hex-project');
    const focusCategory = document.getElementById('focusCategory');
    const focusTitle = document.getElementById('focusTitle');
    const focusDescription = document.getElementById('focusDescription');
    const focusTechStack = document.getElementById('focusTechStack');
    const focusViewBtn = document.getElementById('focusViewBtn');
    const hexCentral = document.querySelector('.hex-central');

    // Get current language
    function getCurrentLanguage() {
        return localStorage.getItem('language') || 'id';
    }

    // Update focus detail panel
    function updateFocusDetail(projectKey) {
        const project = projectsData[projectKey];
        if (!project) return;

        const currentLang = getCurrentLanguage();
        const isEnglish = currentLang === 'en';

        // Update content
        focusCategory.textContent = isEnglish ? project.categoryEn : project.categoryId;
        focusTitle.textContent = isEnglish ? project.titleEn : project.title;
        focusDescription.textContent = isEnglish ? project.descriptionEn : project.description;

        // Update tech stack
        focusTechStack.innerHTML = '';
        project.techStack.forEach(tech => {
            const img = document.createElement('img');
            img.src = tech.src;
            img.alt = tech.alt;
            if (tech.class) {
                img.className = tech.class;
            }
            focusTechStack.appendChild(img);
        });

        // Update view button
        focusViewBtn.style.display = 'flex';
        focusViewBtn.onclick = () => window.location.href = project.link;
    }

    // Reset focus detail to default
    function resetFocusDetail() {
        const currentLang = getCurrentLanguage();
        const isEnglish = currentLang === 'en';
        
        focusCategory.textContent = 'Project';
        focusTitle.textContent = isEnglish ? 'Select Project' : 'Pilih Project';
        focusDescription.textContent = isEnglish ? 
            'Hover on project hexagon to see details' : 
            'Hover pada hexagon project untuk melihat detail';
        focusTechStack.innerHTML = '';
        focusViewBtn.style.display = 'none';
    }

    // Add hover effects to hexagon projects
    hexProjects.forEach(hexProject => {
        const projectKey = hexProject.dataset.project;

        hexProject.addEventListener('mouseenter', () => {
            updateFocusDetail(projectKey);
            
            // Add active state to central hexagon
            hexCentral.style.transform = 'translate(-50%, -50%) scale(1.1)';
            hexCentral.style.background = 'rgba(58, 123, 213, 0.1)';
            hexCentral.style.borderColor = 'var(--accent-color)';
            
            // Hide central content and show project indicator
            const focusContent = hexCentral.querySelector('.hex-focus-content');
            focusContent.style.opacity = '0.3';
        });

        hexProject.addEventListener('mouseleave', () => {
            // Reset central hexagon
            setTimeout(() => {
                if (!hexProject.matches(':hover')) {
                    hexCentral.style.transform = 'translate(-50%, -50%) scale(1)';
                    hexCentral.style.background = 'rgba(255, 255, 255, 0.9)';
                    hexCentral.style.borderColor = 'var(--primary-color)';
                    
                    const focusContent = hexCentral.querySelector('.hex-focus-content');
                    focusContent.style.opacity = '1';
                }
            }, 100);
        });

        // Click to navigate
        hexProject.addEventListener('click', () => {
            const project = projectsData[projectKey];
            if (project && project.link) {
                window.location.href = project.link;
            }
        });
    });

    // Reset on mouse leave from entire showcase area
    const showcaseArea = document.querySelector('.hexagon-showcase');
    showcaseArea.addEventListener('mouseleave', () => {
        setTimeout(() => {
            resetFocusDetail();
            hexCentral.style.transform = 'translate(-50%, -50%) scale(1)';
            hexCentral.style.background = 'rgba(255, 255, 255, 0.9)';
            hexCentral.style.borderColor = 'var(--primary-color)';
            
            const focusContent = hexCentral.querySelector('.hex-focus-content');
            focusContent.style.opacity = '1';
        }, 200);
    });

    // Handle language changes
    function handleLanguageChange() {
        // Reset to default state with new language
        resetFocusDetail();
    }

    // Listen for language change events
    document.addEventListener('languageChanged', handleLanguageChange);

    // Initialize with default state
    resetFocusDetail();

    // Add particle effect on hover (optional enhancement)
    hexProjects.forEach(hexProject => {
        hexProject.addEventListener('mouseenter', function() {
            createParticleEffect(this);
        });
    });

    function createParticleEffect(element) {
        // Simple particle effect for extra visual appeal
        const particles = document.createElement('div');
        particles.className = 'hex-particles';
        particles.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 200px;
            height: 200px;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 1;
        `;

        element.appendChild(particles);

        // Remove particles after animation
        setTimeout(() => {
            if (particles.parentNode) {
                particles.parentNode.removeChild(particles);
            }
        }, 1000);
    }

    // Add floating animation enhancement
    function enhanceFloatingAnimation() {
        hexProjects.forEach((hexProject, index) => {
            const delay = index * 0.2;
            hexProject.style.animationDelay = `${delay}s`;
            hexProject.classList.add('hex-float');
        });
    }

    // Initialize enhancements
    enhanceFloatingAnimation();
});

// Add floating keyframes to CSS dynamically
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .hex-float {
            animation: hexFloat 6s ease-in-out infinite;
        }
        
        @keyframes hexFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
        }
        
        .hex-particles {
            background: radial-gradient(circle, rgba(58,123,213,0.1) 0%, transparent 70%);
            animation: particlePulse 1s ease-out forwards;
        }
        
        @keyframes particlePulse {
            0% { 
                transform: translate(-50%, -50%) scale(0);
                opacity: 0.8;
            }
            100% { 
                transform: translate(-50%, -50%) scale(2);
                opacity: 0;
            }
        }
    </style>
`);