/**
 * Expertise Modal Handler for Haidi Fathur Rahman Portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
    // Modal data for each expertise area
    const expertiseData = {
        gis: {
            title: "GIS & Pemetaan",
            titleEn: "GIS & Mapping",
            experience: "7+ Tahun Pengalaman",
            experienceEn: "7+ Years Experience",
            icons: [
                { src: "assets/img/skills/GIS/Logo Arcgis.png", alt: "ArcGIS", name: "ArcGIS" },
                { src: "assets/img/skills/GIS/Logo QGIS.png", alt: "QGIS", name: "QGIS" },
                { src: "assets/img/skills/GIS/Logo Goole Earth.png", alt: "Google Earth", name: "Google Earth" },
                { src: "assets/img/skills/GIS/Logo GEE.png", alt: "Google Earth Engine", name: "Google Earth Engine", class: "remove-bg" }
            ],
            description: "Selama lebih dari 7 tahun, saya telah mendalami berbagai aspek Geographic Information System (GIS) dan pemetaan. Dimulai dari masa kuliah hingga pengalaman profesional di PT. Rekadwipa Teknika Studio, saya telah menangani beragam proyek pemetaan mulai dari skala desa hingga kabupaten. Keahlian ini tidak hanya sebatas teknis mengoperasikan software, tetapi juga pemahaman mendalam tentang analisis spasial, interpretasi data geografis, dan kemampuan menghasilkan peta yang akurat serta informatif.",
            descriptionEn: "For more than 7 years, I have delved into various aspects of Geographic Information System (GIS) and mapping. Starting from my college years to professional experience at PT. Rekadwipa Teknika Studio, I have handled various mapping projects from village to district scale. This expertise is not only limited to technical software operation, but also deep understanding of spatial analysis, geographic data interpretation, and the ability to produce accurate and informative maps.",
            highlights: [
                "Pembuatan peta tematik dan analisis spasial yang mendalam",
                "Fasilitasi proyek batas desa untuk pemerintah daerah",
                "Pengolahan data satelit dan citra udara untuk berbagai keperluan",
                "Digitasi dan georeferensi peta dengan tingkat akurasi tinggi",
                "Analisis keruangan untuk perencanaan wilayah dan tata ruang",
                "Integrasi data GIS dengan database dan sistem informasi lainnya"
            ],
            highlightsEn: [
                "Creation of thematic maps and in-depth spatial analysis",
                "Facilitation of village boundary projects for local governments",
                "Processing satellite data and aerial imagery for various purposes",
                "Digitization and georeferencing maps with high accuracy levels",
                "Spatial analysis for regional planning and spatial planning",
                "Integration of GIS data with databases and other information systems"
            ]
        },
        data: {
            title: "Data & Otomasi",
            titleEn: "Data & Automation",
            experience: "5+ Tahun Pengalaman",
            experienceEn: "5+ Years Experience",
            icons: [
                { src: "assets/img/skills/Data/Logo Excel.png", alt: "Excel", name: "Excel" },
                { src: "assets/img/skills/Data/Logo VBA.png", alt: "VBA", name: "VBA" },
                { src: "assets/img/skills/Data/Logo Word.png", alt: "Word", name: "Word" },
                { src: "assets/img/skills/Data/Logo Powerpoint.png", alt: "PowerPoint", name: "PowerPoint" }
            ],
            description: "Dengan pengalaman lebih dari 5 tahun di bidang data dan otomasi, saya telah mengembangkan keahlian mendalam dalam Microsoft Office Suite, terutama Excel dan VBA. Saya mampu mengubah proses manual yang memakan waktu menjadi sistem otomatis yang efisien. Dari formula Excel yang kompleks hingga makro VBA yang canggih, saya telah membantu berbagai organisasi meningkatkan produktivitas dan akurasi dalam pengolahan data. Pengalaman ini mencakup pembuatan dashboard interaktif, sistem pelaporan otomatis, dan solusi analisis data yang disesuaikan dengan kebutuhan spesifik klien.",
            descriptionEn: "With more than 5 years of experience in data and automation, I have developed deep expertise in Microsoft Office Suite, especially Excel and VBA. I can transform time-consuming manual processes into efficient automated systems. From complex Excel formulas to sophisticated VBA macros, I have helped various organizations improve productivity and accuracy in data processing. This experience includes creating interactive dashboards, automated reporting systems, and data analysis solutions tailored to specific client needs.",
            highlights: [
                "Pengembangan makro VBA untuk otomatisasi proses bisnis kompleks",
                "Pembuatan dashboard dan laporan interaktif dengan Excel",
                "Analisis data menggunakan formula lanjutan dan pivot tables",
                "Integrasi data dari berbagai sumber ke dalam sistem terpadu",
                "Otomatisasi dokumen Word dan presentasi PowerPoint",
                "Optimasi workflow dan peningkatan efisiensi operasional"
            ],
            highlightsEn: [
                "VBA macro development for complex business process automation",
                "Creating interactive dashboards and reports with Excel",
                "Data analysis using advanced formulas and pivot tables",
                "Data integration from various sources into unified systems",
                "Word document and PowerPoint presentation automation",
                "Workflow optimization and operational efficiency improvement"
            ]
        },
        code: {
            title: "Vibe Coder",
            titleEn: "Vibe Coder",
            experience: "2+ Tahun Pengalaman",
            experienceEn: "2+ Years Experience",
            icons: [
                { src: "assets/img/skills/Code/Logo Chatgpt.png", alt: "ChatGPT", name: "ChatGPT" },
                { src: "assets/img/skills/Code/Logo Claude.png", alt: "Claude", name: "Claude" },
                { src: "assets/img/skills/Code/Logo Deepseek.png", alt: "DeepSeek", name: "DeepSeek" },
                { src: "assets/img/skills/Code/Logo v0.png", alt: "v0", name: "v0" }
            ],
            description: "Dalam era AI modern, saya telah mengadopsi pendekatan 'Vibe Coder' selama 2+ tahun terakhir - menggabungkan intuisi pengembangan dengan kekuatan artificial intelligence. Saya mahir memanfaatkan berbagai AI tools seperti ChatGPT, Claude, DeepSeek, dan v0 untuk mempercepat proses development tanpa mengurangi kualitas code. Pendekatan ini memungkinkan saya mengembangkan aplikasi Windows, Android, dan web frontend dengan efisiensi tinggi. Saya tidak hanya menggunakan AI sebagai tool, tetapi memahami cara berkolaborasi dengan AI untuk menghasilkan solusi yang elegant dan maintainable.",
            descriptionEn: "In the modern AI era, I have adopted a 'Vibe Coder' approach for the past 2+ years - combining development intuition with the power of artificial intelligence. I am proficient in utilizing various AI tools such as ChatGPT, Claude, DeepSeek, and v0 to accelerate the development process without reducing code quality. This approach allows me to develop Windows applications, Android, and web frontend with high efficiency. I don't just use AI as a tool, but understand how to collaborate with AI to produce elegant and maintainable solutions.",
            highlights: [
                "AI-assisted development untuk aplikasi Windows dan Android",
                "Pengembangan web frontend modern dengan bantuan AI tools",
                "Prototyping cepat dan iterasi development yang efisien",
                "Code review dan optimization menggunakan AI insights",
                "Problem-solving kreatif dengan kombinasi human intuition dan AI",
                "Adaptasi cepat terhadap teknologi dan framework terbaru"
            ],
            highlightsEn: [
                "AI-assisted development for Windows and Android applications",
                "Modern web frontend development with AI tools assistance",
                "Rapid prototyping and efficient development iteration",
                "Code review and optimization using AI insights",
                "Creative problem-solving combining human intuition and AI",
                "Quick adaptation to latest technologies and frameworks"
            ]
        }
    };

    // DOM elements
    const modal = document.getElementById('expertiseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalExperience = document.getElementById('modalExperience');
    const modalDescription = document.getElementById('modalDescription');
    const modalIconsContainer = document.getElementById('modalIconsContainer');
    const modalHighlights = document.getElementById('modalHighlights');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    const clickableCards = document.querySelectorAll('.expertise-interactive-section.clickable');

    // Get current language
    function getCurrentLanguage() {
        return localStorage.getItem('language') || 'id';
    }

    // Open modal function
    function openModal(category) {
        const data = expertiseData[category];
        if (!data) return;

        const currentLang = getCurrentLanguage();
        const isEnglish = currentLang === 'en';

        // Update modal content
        modalTitle.textContent = isEnglish ? data.titleEn : data.title;
        modalExperience.textContent = isEnglish ? data.experienceEn : data.experience;
        modalDescription.textContent = isEnglish ? data.descriptionEn : data.description;

        // Update icons
        modalIconsContainer.innerHTML = '';
        data.icons.forEach(icon => {
            const iconDiv = document.createElement('div');
            iconDiv.className = 'modal-icon';
            iconDiv.innerHTML = `
                <img src="${icon.src}" alt="${icon.alt}" ${icon.class ? `class="${icon.class}"` : ''}>
            `;
            modalIconsContainer.appendChild(iconDiv);
        });

        // Update highlights
        modalHighlights.innerHTML = '';
        const highlights = isEnglish ? data.highlightsEn : data.highlights;
        highlights.forEach(highlight => {
            const li = document.createElement('li');
            li.textContent = highlight;
            modalHighlights.appendChild(li);
        });

        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close modal function
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Event listeners for cards
    clickableCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent opening modal if clicking on individual floating icon
            if (e.target.closest('.floating-icon')) return;
            
            const category = card.dataset.category;
            openModal(category);
        });
    });

    // Event listeners for individual icons
    const floatingIcons = document.querySelectorAll('.floating-icon');
    floatingIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
            const section = icon.closest('.expertise-interactive-section');
            const category = section.dataset.category;
            openModal(category);
        });
    });

    // Close modal events
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Function to update language in modal
    function updateModalLanguage() {
        const highlightsTitle = modal.querySelector('[data-lang-key="modal.highlights.title"]');
        if (highlightsTitle) {
            const currentLang = getCurrentLanguage();
            const translations = window.translations || {};
            if (translations[currentLang] && translations[currentLang]['modal.highlights.title']) {
                highlightsTitle.textContent = translations[currentLang]['modal.highlights.title'];
            }
        }
    }

    // Update modal content when language changes
    function handleLanguageChange() {
        if (modal.classList.contains('active')) {
            // Re-open modal with new language if currently open
            const activeCategory = modal.dataset.currentCategory;
            if (activeCategory) {
                openModal(activeCategory);
            }
        }
        updateModalLanguage();
    }

    // Listen for custom language change events
    document.addEventListener('languageChanged', handleLanguageChange);

    // Store current category when opening modal
    const originalOpenModal = openModal;
    openModal = function(category) {
        modal.dataset.currentCategory = category;
        originalOpenModal(category);
        // Update modal language elements after opening
        setTimeout(() => {
            updateModalLanguage();
        }, 100);
    };
});