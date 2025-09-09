/**
 * Language Switcher for Haidi Fathur Rahman Portfolio
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const langButtons = document.querySelectorAll('.lang-btn');
    const footerLangButtons = document.querySelectorAll('.footer-lang-btn');
    
    // Language dictionaries - make it globally accessible
    window.translations = {
        // Indonesian (default)
        id: {
            // Navigation
            'nav.home': 'Beranda',
            'nav.about': 'Tentang',
            'nav.education': 'Pendidikan',
            'nav.experience': 'Pengalaman',
            'nav.projects': 'Proyek',
            'nav.contact': 'Kontak',
            
            // Hero Section
            'hero.greeting': 'Halo, Saya',
            'hero.title': 'Spesialis GIS & Pemetaan | Spesialis Data & Otomasi | Vibe Coder',
            'hero.description': 'Membantu mengembangkan solusi inovatif berbasis geospasial, Excel VBA, dan pengembangan aplikasi dengan bantuan AI untuk memecahkan masalah.',
            'hero.cta.projects': 'Lihat Proyek',
            'hero.cta.contact': 'Hubungi Saya',
            
            // Expertise Section
            'expertise.title': 'Keahlian Utama',
            'expertise.subtitle': 'Area spesialisasi dan kemampuan yang saya kuasai',
            'expertise.gis.title': 'Geographic Information System',
            'expertise.gis.description': 'Ahli dalam pembuatan peta tematik, analisis spasial, dan fasilitasi proyek batas desa untuk membantu pemerintah daerah dalam perencanaan wilayah.',
            'expertise.excel.title': 'Excel & VBA',
            'expertise.excel.description': 'Mengembangkan solusi analisis data kompleks dan otomatisasi proses dengan formula lanjutan Excel dan pemrograman VBA untuk meningkatkan efisiensi kerja.',
            'expertise.ai.title': 'AI-Assisted Development',
            'expertise.ai.description': 'Menggunakan teknologi AI untuk mempercepat pengembangan aplikasi Windows, Android, dan web frontend untuk kebutuhan bisnis dan personal branding.',
            
            // Expertise Categories
            'expertise.gis.category': 'GIS & Pemetaan',
            'expertise.data.category': 'Data & Otomasi',
            'expertise.code.category': 'Vibe Coder',
            
            // Modal
            'modal.highlights.title': 'Yang Bisa Saya Berikan:',
            
            // Projects Hexagon Focus
            'projects.focus.title': 'Hover Project',
            'projects.focus.subtitle': 'untuk detail',
            
            // Projects Section
            'projects.title': 'Proyek Terbaru',
            'projects.subtitle': 'Beberapa pekerjaan terbaik yang telah saya selesaikan',
            'projects.boundary.title': 'Proyek Batas Desa',
            'projects.boundary.description': 'Fasilitasi pembuatan peta batas desa untuk pemerintah daerah menggunakan teknologi GIS lanjutan.',
            'projects.excel.title': 'Sistem Otomatisasi Data',
            'projects.excel.description': 'Pengembangan sistem otomatisasi input dan analisis data dengan Excel VBA untuk PT. Rekadwipa.',
            'projects.app.title': 'Aplikasi Dokumentasi Kantor',
            'projects.app.description': 'Pembuatan aplikasi dokumentasi dan notulensi dengan bantuan AI untuk efisiensi workflow.',
            'projects.spatial.title': 'Analisis Spasial',
            'projects.spatial.description': 'Analisis data spasial menggunakan teknologi GIS untuk mendukung pengambilan keputusan berbasis lokasi.',
            'projects.thematic.title': 'Pemetaan Tematik',
            'projects.thematic.description': 'Pembuatan peta tematik berkualitas tinggi untuk visualisasi data dan informasi geospasial.',
            'projects.view': 'Lihat Detail',
            'projects.all': 'Lihat Semua Proyek',
            
            // Experience Section
            'experience.title': 'Perjalanan Karir',
            'experience.subtitle': 'Ikuti petualangan profesional saya',
            'experience.current.duration': '2021 - Sekarang',
            'experience.current.title': 'Data Engineer',
            'experience.current.company': 'PT. Rekadwipa Teknika Studio',
            'experience.current.description': 'Fokus pada pembuatan peta tematik, analisis spasial, dan fasilitasi proyek batas desa. Mengembangkan solusi otomatisasi dengan Excel VBA dan aplikasi pendukung untuk meningkatkan efisiensi.',
            'experience.freelance.duration': '2021 - Sekarang',
            'experience.freelance.title': 'Freelance Developer',
            'experience.freelance.company': 'Fastwork & Upwork',
            'experience.freelance.description': 'Menyediakan layanan pengembangan solusi GIS, Excel VBA, dan AI-Assisted development untuk berbagai klien di platform freelance.',
            'experience.mapping.duration': 'Februari - Maret 2020',
            'experience.mapping.title': 'Anggota Bagian Pemetaan',
            'experience.mapping.company': 'Tim Penyusunan Rencana Tata Ruang Desa Gedawung, Wonogiri',
            'experience.mapping.description': 'Bertanggung jawab dalam pembuatan dan analisis peta untuk mendukung penyusunan rencana tata ruang desa. Mengumpulkan dan mengolah data spasial untuk perencanaan pembangunan desa yang berkelanjutan.',
            'experience.more': 'Lebih Banyak Pengalaman',
            'experience.explore': 'Jelajahi Selengkapnya',
            
            // Stats Section
            'stats.experience': 'Tahun Pengalaman',
            'stats.projects': 'Proyek Selesai',
            'stats.clients': 'Klien Puas',
            'stats.technologies': 'Teknologi',
            
            // Contact Section
            'contact.title': 'Mari Bekerja Sama!',
            'contact.description': 'Tertarik dengan keahlian saya? Apakah Anda memiliki proyek GIS, Excel VBA, atau pengembangan aplikasi? Jangan ragu untuk menghubungi saya!',
            'contact.cta': 'Hubungi Saya',
            
            // Footer
            'footer.tagline': 'Solusi inovatif untuk perencanaan wilayah dan analisis data',
            'footer.navigation': 'Navigasi',
            'footer.services': 'Layanan',
            'footer.contact': 'Kontak',
            'footer.location': 'Surakarta, Indonesia',
            'footer.rights': 'Hak Cipta Dilindungi.',
            
            // Services
            'services.gis': 'GIS & Pemetaan',
            'services.excel': 'Otomatisasi Excel',
            'services.development': 'Pengembangan Aplikasi',
            'services.consultation': 'Konsultasi'
        },
        
        // English
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.education': 'Education',
            'nav.experience': 'Experience',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            
            // Hero Section
            'hero.greeting': 'Hello, I\'m',
            'hero.title': 'GIS & Mapping Specialist | Data Processing & Automation Specialist | Vibe Coder',
            'hero.description': 'Helping develop innovative geospatial-based solutions, Excel VBA, and AI-assisted application development to solve problems.',
            'hero.cta.projects': 'View Projects',
            'hero.cta.contact': 'Contact Me',
            
            // Expertise Section
            'expertise.title': 'Core Expertise',
            'expertise.subtitle': 'Areas of specialization and capabilities I master',
            'expertise.gis.title': 'Geographic Information System',
            'expertise.gis.description': 'Expert in creating thematic maps, spatial analysis, and facilitating village boundary projects to assist local governments in regional planning.',
            'expertise.excel.title': 'Excel & VBA',
            'expertise.excel.description': 'Developing complex data analysis solutions and process automation with advanced Excel formulas and VBA programming to improve work efficiency.',
            'expertise.ai.title': 'AI-Assisted Development',
            'expertise.ai.description': 'Using AI technology to accelerate the development of Windows applications, Android, and web frontend for business needs and personal branding.',
            
            // Expertise Categories
            'expertise.gis.category': 'GIS & Mapping',
            'expertise.data.category': 'Data & Automation',
            'expertise.code.category': 'Vibe Coder',
            
            // Modal
            'modal.highlights.title': 'What I Can Provide:',
            
            // Projects Hexagon Focus
            'projects.focus.title': 'Hover Project',
            'projects.focus.subtitle': 'for details',
            
            // Projects Section
            'projects.title': 'Latest Projects',
            'projects.subtitle': 'Some of the best work I have completed',
            'projects.boundary.title': 'Village Boundary Project',
            'projects.boundary.description': 'Facilitation of village boundary mapping for local governments using advanced GIS technology.',
            'projects.excel.title': 'Data Automation System',
            'projects.excel.description': 'Development of data input and analysis automation system with Excel VBA for PT. Rekadwipa.',
            'projects.app.title': 'Office Documentation App',
            'projects.app.description': 'Creating documentation and minutes applications with AI assistance for workflow efficiency.',
            'projects.spatial.title': 'Spatial Analysis',
            'projects.spatial.description': 'Spatial data analysis using GIS technology to support location-based decision making.',
            'projects.thematic.title': 'Thematic Mapping',
            'projects.thematic.description': 'Creating high-quality thematic maps for geospatial data and information visualization.',
            'projects.view': 'View Details',
            'projects.all': 'View All Projects',
            
            // Experience Section
            'experience.title': 'Career Journey',
            'experience.subtitle': 'Follow my professional adventure',
            'experience.current.duration': '2021 - Present',
            'experience.current.title': 'Data Engineer',
            'experience.current.company': 'PT. Rekadwipa Teknika Studio',
            'experience.current.description': 'Focus on creating thematic maps, spatial analysis, and facilitating village boundary projects. Developing automation solutions with Excel VBA and supporting applications to improve efficiency.',
            'experience.freelance.duration': '2021 - Present',
            'experience.freelance.title': 'Freelance Developer',
            'experience.freelance.company': 'Fastwork & Upwork',
            'experience.freelance.description': 'Providing GIS, Excel VBA, and AI-Assisted development solution services for various clients on freelance platforms.',
            'experience.mapping.duration': 'February - March 2020',
            'experience.mapping.title': 'Mapping Team Member',
            'experience.mapping.company': 'Gedawung Village Spatial Planning Team, Wonogiri',
            'experience.mapping.description': 'Responsible for creating and analyzing maps to support village spatial planning. Collecting and processing spatial data for sustainable village development planning.',
            'experience.more': 'More Experience',
            'experience.explore': 'Explore More',
            
            // Stats Section
            'stats.experience': 'Years Experience',
            'stats.projects': 'Projects Completed',
            'stats.clients': 'Happy Clients',
            'stats.technologies': 'Technologies',
            
            // Contact Section
            'contact.title': 'Let\'s Work Together!',
            'contact.description': 'Interested in my expertise? Do you have a GIS, Excel VBA, or application development project? Don\'t hesitate to contact me!',
            'contact.cta': 'Contact Me',
            
            // Footer
            'footer.tagline': 'Innovative solutions for regional planning and data analysis',
            'footer.navigation': 'Navigation',
            'footer.services': 'Services',
            'footer.contact': 'Contact',
            'footer.location': 'Surakarta, Indonesia',
            'footer.rights': 'All Rights Reserved.',
            
            // Services
            'services.gis': 'GIS & Mapping',
            'services.excel': 'Excel Automation',
            'services.development': 'Application Development',
            'services.consultation': 'Consultation'
        }
    };
    
    // Function to update page content based on selected language
    function updateLanguage(lang) {
        const elements = document.querySelectorAll('[data-lang-key]');
        
        elements.forEach(element => {
            const key = element.dataset.langKey;
            
            if (window.translations[lang] && window.translations[lang][key]) {
                // Update text content
                element.textContent = window.translations[lang][key];
            }
        });
        
        // Update language buttons state
        langButtons.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        footerLangButtons.forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Save user preference
        localStorage.setItem('language', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Dispatch custom event for other modules
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
    }
    
    // Event listeners for language buttons
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            updateLanguage(lang);
        });
    });
    
    footerLangButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.dataset.lang;
            updateLanguage(lang);
        });
    });
    
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
        updateLanguage(savedLanguage);
    } else {
        // Default to Indonesian (id)
        updateLanguage('id');
    }
});