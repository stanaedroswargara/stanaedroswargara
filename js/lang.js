/**
 * Complete Bilingual Translation Engine (ID & EN) for Stana Edro Swargara Portfolio
 */

const translations = {
  id: {
    // Nav icon-bar
    nav_home: "beranda",
    nav_about: "profil",
    nav_resume: "pengalaman",
    nav_competencies: "kompetensi",
    nav_skills: "keahlian",
    nav_portfolio: "proyek",
    nav_contact: "kontak",

    // Sidebar
    sidebar_nav_title: "Navigasi",
    menu_home: "Beranda",
    menu_about: "Profil",
    menu_resume: "Pengalaman",
    menu_competencies: "Kompetensi",
    menu_skills: "Keahlian",
    menu_portfolio: "Proyek",
    menu_contact: "Kontak",

    // Profile Card
    profile_role: "Programmer &<br>Fullstack Web Developer",

    // Hero
    hero_badge: "TERSEDIA UNTUK BEKERJA",
    hero_title: '<span>Fullstack Developer</span> <br><span>Siap Berkontribusi</span><br><span class="color">Membangun Sistem Handal</span>',
    hero_desc: "Saya adalah seorang Programmer & Fullstack Engineer lulusan Informatika Telkom University. Berpengalaman dalam merancang dan mengembangkan arsitektur backend yang kokoh, integrasi RESTful API terstandar, basis data terstruktur, serta antarmuka web interaktif yang berkinerja tinggi. Siap bergabung dan memberikan dampak positif pada tim engineering perusahaan Anda.",
    hero_btn_hire: "Hubungi / Rekrut Saya",
    hero_btn_cv: "Unduh CV",
    hero_btn_portfolio: "Lihat Dokumen Portofolio",

    // About
    about_badge: "PROFIL PROFESIONAL",
    about_title: '<span>Ringkasan Diri & </span> <span class="color"> Pendidikan</span>',
    about_p1: "Saya merupakan individu yang adaptif, komunikatif, dan memiliki daya analisa yang kuat dalam memecahkan masalah rekayasa perangkat lunak. Sebagai seorang software engineer, saya berfokus pada penulisan kode yang bersih (clean code), terstruktur, efisien, dan mudah dipelihara secara kolaboratif bersama tim.",
    about_p2: "Terbiasa menangani siklus pengembangan perangkat lunak (SDLC) mulai dari analisis kebutuhan sistem, perancangan skema basis data, implementasi backend & frontend, hingga integrasi pihak ketiga dan deployment aplikasi ke lingkungan server produksi.",
    
    edu1_title: "S1 Informatika",
    edu1_school: "Telkom University",
    edu1_date: "Lulus 2021",
    edu1_desc: "Mendalami rekayasa perangkat lunak, algoritma pemrograman tingkat lanjut, arsitektur sistem komputasi, dan pengembangan web fullstack secara komprehensif.",

    edu2_title: "D3 Teknik Informatika",
    edu2_school: "Telkom University",
    edu2_date: "Lulus 2018",
    edu2_desc: "Fokus pada penerapan praktis pengembangan aplikasi web, dasar jaringan komputer, administrasi server, serta manajemen basis data relasional.",

    // Resume / Experience
    exp_badge: "PENGALAMAN KERJA",
    exp_title: '<span>Pengalaman Profesional &</span> <br> <span class="color">Jejak Karir</span>',
    
    exp1_role: "Fullstack Engineer",
    exp1_company: "PT Airbox Technology",
    exp1_date: "2025 – 2026 (Full-Time)",
    exp1_desc: "Memimpin pengembangan dan pemeliharaan aplikasi core bisnis perusahaan (Air Box & Jurnal Pintar). Bertanggung jawab atas arsitektur backend, manajemen RESTful API terstandar, integrasi database PostgreSQL/MySQL, serta optimalisasi performa aplikasi skala production.",

    exp2_role: "Web Developer",
    exp2_company: "Lokale Resort & Villas Bali",
    exp2_date: "2026 (Kontrak / Project-based)",
    exp2_desc: "Merancang sistem reservasi kamar terintegrasi, dashboard admin multi-level dengan Laravel & MySQL, serta memastikan antarmuka web responsif dan cepat diakses oleh pengguna dari berbagai perangkat.",

    exp3_role: "Web Developer",
    exp3_company: "Samas Property",
    exp3_date: "2025 (Kontrak / Project-based)",
    exp3_desc: "Mengembangkan platform direktori & profil properti lengkap dengan sistem filtering interaktif, pencarian data cepat, dan dashboard manajemen katalog unit berbasis web.",

    exp4_role: "Programmer",
    exp4_company: "PT. Motio Labs Indonesia",
    exp4_date: "2022 (Full-Time)",
    exp4_desc: "Mengembangkan fitur aplikasi web Single Page Application (SPA) menggunakan arsitektur Laravel & React.js, menulis REST API terstruktur, pengujian endpoint, dan kolaborasi tim via Git version control.",

    exp5_role: "Web Developer",
    exp5_company: "Yamitala Outdoorgeear",
    exp5_date: "2021 (Kontrak / Project-based)",
    exp5_desc: "Membangun platform toko online katalog e-commerce menggunakan Laravel (Blade) & MySQL, integrasi fitur checkout dinamis, dan optimasi kecepatan akses halaman.",

    // Competencies
    comp_badge: "KOMPETENSI TEKNIS",
    comp_title: '<span>Keahlian & Kemampuan</span><br><span class="color">Yang Saya Tawarkan Untuk Tim Anda</span>',
    
    comp1_title: "Rekayasa Backend & RESTful API",
    comp1_desc: "Mahir merancang arsitektur backend yang aman, modular, dan scalable menggunakan Laravel, PHP, dan Python. Mampu menyusun endpoint RESTful API terstandar dengan autentikasi (JWT/Sanctum), validasi ketat, dan dokumentasi yang rapi.",

    comp2_title: "Pengembangan Frontend Modern & Interaktif",
    comp2_desc: "Menguasai pembangunan antarmuka pengguna berbasis komponen menggunakan React.js, Vue.js, JavaScript Modern (ES6+), dan Blade. Berpengalaman menciptakan SPA yang responsif, mobile-first, dan memiliki performa rendering optimal.",

    comp3_title: "Desain Skema Basis Data & Optimasi Query",
    comp3_desc: "Keahlian dalam merancang relasi tabel basis data (RDBMS: MySQL, PostgreSQL) dan NoSQL (Firebase), optimasi query melalui indexing yang tepat, pencegahan bottleneck, serta menjaga konsistensi transaksi data.",

    comp4_title: "Integrasi Layanan Pihak Ketiga & Sistem Eksternal",
    comp4_desc: "Berpengalaman mengintegrasikan payment gateway, webhook, email/messaging notifications, cloud storage, dan API eksternal lainnya ke dalam sistem aplikasi secara aman dan andal.",

    comp5_title: "Kolaborasi Tim, Git & AI-Assisted Workflow",
    comp5_desc: "Disiplin dalam penggunaan Git version control (branching, pull request, code review), adaptif terhadap metodologi Agile/Scrum, serta memanfaatkan AI dev tools modern untuk mempercepat produktivitas penulisan dan pengujian kode.",

    // Skills
    skills_badge: "STACK TEKNOLOGI",
    skills_title: '<span>Penguasaan Bahasa Pemrograman &</span> <span class="color">Framework</span>',

    // Projects
    port_badge: "REKAM JEJAK PROYEK",
    port_title: '<span>Studi Kasus &</span><br><span class="color">Proyek Nyata Yang Pernah Saya Bangun</span>',
    port_sub: "Berikut adalah beberapa implementasi sistem nyata berskala production yang telah saya kembangkan, mencakup arsitektur backend, integrasi REST API, dan antarmuka web modern.",
    port_visit_btn: "Kunjungi Website",

    p1_badge: "FULLSTACK ENGINEER • 2025–2026",
    p1_title: "PT Airbox Technology — Air Box & Jurnal Pintar",
    p1_desc: "Merancang dan mengelola arsitektur end-to-end untuk aplikasi perusahaan utama. Berfokus pada integrasi RESTful API yang aman, pemeliharaan basis data terstruktur, serta optimasi sistem secara menyeluruh untuk performa tinggi.",
    p1_hl1: "<strong>Arsitektur End-to-End:</strong> Membangun sistem full-stack yang scalable dan aman untuk aplikasi core bisnis.",
    p1_hl2: "<strong>Integrasi RESTful API:</strong> Merancang dan mendokumentasikan API terstandar untuk komunikasi data antar-sistem & third-party.",
    p1_hl3: "<strong>Database Management:</strong> Mengelola basis data PostgreSQL/MySQL dan optimasi query untuk efisiensi transaksi data.",

    p2_badge: "WEB DEVELOPER • 2026",
    p2_title: "Lokale Resort & Villas Bali (Lokale Pererenan)",
    p2_desc: "Membangun website resort berbasis Laravel dan MySQL yang dilengkapi dashboard admin penuh untuk manajemen data kamar, harga, dan fasilitas (CRUD), serta sistem pemesanan online yang responsif.",
    p2_hl1: "<strong>Dashboard Admin & Fitur CRUD:</strong> Merancang panel admin interaktif untuk pengelolaan kamar, fasilitas, galeri, dan harga dinamis.",
    p2_hl2: "<strong>Sistem Pemesanan (Booking System):</strong> Mengembangkan alur reservasi kamar online yang terstruktur & terhubung langsung ke basis data.",
    p2_hl3: "<strong>Optimasi Performa & UX:</strong> Mempercepat waktu pemuatan halaman (page load) dengan optimasi aset visual dan efisiensi query.",

    p3_badge: "WEB DEVELOPER • 2025",
    p3_title: "Samas Property — Modern Property Profile & Catalog",
    p3_desc: "Merancang dan membangun website profile Samas Property yang bersih, elegan, dan profesional untuk menampilkan katalog unit properti, fitur pencarian interaktif, serta manajemen data inventaris unit yang efisien.",
    p3_hl1: "<strong>Manajemen Inventaris & Data Unit:</strong> Mengembangkan sistem basis data terstruktur menggunakan MySQL dan PHP untuk katalog properti.",
    p3_hl2: "<strong>Fitur Promosi Interaktif:</strong> Membangun galeri foto unit, filter pencarian properti, dan formulir konsultasi interaktif untuk lead generation.",
    p3_hl3: "<strong>Desain Responsif:</strong> Memastikan tata letak visual tampil proporsional dan cepat diakses di perangkat mobile maupun desktop.",

    p4_badge: "PROGRAMMER • 2022",
    p4_title: "PT. Motio Labs Indonesia — Interactive Full-Stack SPA",
    p4_desc: "Membangun aplikasi web modern Single Page Application (SPA) berbasis Laravel dan React.js. Berfokus pada arsitektur komponen modular, integrasi RESTful API lancar, serta pengolahan basis data MySQL yang cepat dan responsif.",
    p4_hl1: "<strong>Pengembangan Full-Stack App:</strong> Menggunakan Laravel sebagai backend engine dan React.js untuk antarmuka SPA yang dinamis.",
    p4_hl2: "<strong>Integrasi RESTful API & Modular UI:</strong> Membuat dan mengonsumsi REST API untuk komunikasi data real-time serta komponen React yang reusabel.",
    p4_hl3: "<strong>Kolaborasi Tim & Clean Code:</strong> Berkolaborasi dengan UI/UX, PM, dan QA dalam memelihara standar kode yang bersih serta debugging intensif.",

    p5_badge: "WEB DEVELOPER • 2021",
    p5_title: "Yamitala Outdoorgeear — Modern E-Commerce Platform",
    p5_desc: "Merancang dan mengimplementasikan antarmuka e-commerce Yamitala yang modern, intuitif, dan responsif menggunakan Laravel (Blade) dan MySQL dengan fokus pada visual hierarchy jelas serta alur belanja yang optimal.",
    p5_hl1: "<strong>Antarmuka Responsif & Fitur Interaktif:</strong> Membangun filter produk dinamis, galeri variasi produk, dan alur checkout belanja yang mudah.",
    p5_hl2: "<strong>Integrasi Full-Stack Direct:</strong> Menghubungkan Blade views langsung ke backend Laravel dan database MySQL via Eloquent ORM.",
    p5_hl3: "<strong>Optimasi Performa:</strong> Memaksimalkan kecepatan muat halaman via kompresi gambar, lazy loading, dan minifikasi aset CSS/JS.",

    // Contact
    contact_badge: "HUBUNGI SAYA",
    contact_title: '<span>Tertarik dengan profil saya?</span><br><span class="color">Mari jadwalkan sesi wawancara atau diskusi.</span>',
    contact_direct_title: "Kontak Langsung",
    contact_chat_wa: "Chat via WhatsApp",
    contact_dom_title: "Domisili & Kesiapan Kerja",
    contact_dom_addr: '<i class="ri-map-pin-line" style="margin-right: 6px; color: #fff;"></i> Cluster Griya Ararya Blok B 4, Baleendah, Kab. Bandung, Jawa Barat',
    contact_readiness: '<i class="ri-checkbox-circle-line" style="margin-right: 6px;"></i> Terbuka untuk Onsite (Bandung / Sekitarnya), Hybrid, maupun Full Remote.',
    
    form_name_label: "NAMA / REKRUTER / PERUSAHAAN",
    form_name_ph: "Nama Anda / Perusahaan",
    form_email_label: "EMAIL PERUSAHAAN",
    form_email_ph: "email@perusahaan.com",
    form_subject_label: "POSISI / TOPIK",
    form_subject_ph: "Lowongan Kerja / Undangan Interview",
    form_msg_label: "PESAN / DETAIL LOWONGAN KERJA",
    form_msg_ph: "Tuliskan detail posisi yang ditawarkan, deskripsi pekerjaan, atau jadwal interview...",
    form_submit_btn: "Kirim Penawaran via WhatsApp"
  },

  en: {
    // Nav icon-bar
    nav_home: "home",
    nav_about: "profile",
    nav_resume: "experience",
    nav_competencies: "competencies",
    nav_skills: "skills",
    nav_portfolio: "projects",
    nav_contact: "contact",

    // Sidebar
    sidebar_nav_title: "Navigation",
    menu_home: "Home",
    menu_about: "Profile",
    menu_resume: "Experience",
    menu_competencies: "Competencies",
    menu_skills: "Skills",
    menu_portfolio: "Projects",
    menu_contact: "Contact",

    // Profile Card
    profile_role: "Programmer &<br>Fullstack Web Developer",

    // Hero
    hero_badge: "AVAILABLE FOR HIRE",
    hero_title: '<span>Fullstack Developer</span> <br><span>Ready to Deliver Impact</span><br><span class="color">& Reliable Systems</span>',
    hero_desc: "I am a Programmer & Fullstack Engineer graduated in Informatics from Telkom University. Experienced in designing robust backend architectures, standardized RESTful API integrations, structured databases, and high-performance interactive web interfaces. Ready to join and create a strong positive impact on your engineering team.",
    hero_btn_hire: "Contact / Hire Me",
    hero_btn_cv: "Download CV",
    hero_btn_portfolio: "View Portfolio PDF",

    // About
    about_badge: "PROFESSIONAL PROFILE",
    about_title: '<span>About Me & </span> <span class="color"> Education</span>',
    about_p1: "I am an adaptive, communicative individual with strong analytical problem-solving skills in software engineering. As a software engineer, I focus on writing clean, well-structured, efficient, and maintainable code in collaborative team environments.",
    about_p2: "Experienced in managing the complete software development lifecycle (SDLC) from system requirements analysis, database schema design, backend & frontend implementation, through third-party integrations and production server deployments.",
    
    edu1_title: "Bachelor Degree Informatics",
    edu1_school: "Telkom University",
    edu1_date: "Graduated 2021",
    edu1_desc: "Deepened knowledge in software engineering, advanced algorithms, computing system architecture, and comprehensive full-stack web development.",

    edu2_title: "Diploma III in Informatics Engineering",
    edu2_school: "Telkom University",
    edu2_date: "Graduated 2018",
    edu2_desc: "Focused on practical web application development, computer networking fundamentals, server administration, and relational database management.",

    // Resume / Experience
    exp_badge: "WORK EXPERIENCE",
    exp_title: '<span>Professional Experience &</span> <br> <span class="color">Career Journey</span>',
    
    exp1_role: "Fullstack Engineer",
    exp1_company: "PT Airbox Technology",
    exp1_date: "2025 – 2026 (Full-Time)",
    exp1_desc: "Leading development and maintenance of company core business applications (Air Box & Jurnal Pintar). Responsible for backend architecture, RESTful API management, PostgreSQL/MySQL database integration, and production performance optimization.",

    exp2_role: "Web Developer",
    exp2_company: "Lokale Resort & Villas Bali",
    exp2_date: "2026 (Contract / Project-based)",
    exp2_desc: "Architected integrated room reservation system, multi-level admin dashboard with Laravel & MySQL, and ensured responsive, high-speed web interfaces across all devices.",

    exp3_role: "Web Developer",
    exp3_company: "Samas Property",
    exp3_date: "2025 (Contract / Project-based)",
    exp3_desc: "Developed full property directory & profile platform with interactive filtering, fast search indexing, and dynamic web-based inventory management dashboard.",

    exp4_role: "Programmer",
    exp4_company: "PT. Motio Labs Indonesia",
    exp4_date: "2022 (Full-Time)",
    exp4_desc: "Developed modern Single Page Application (SPA) web features using Laravel & React.js architecture, structured REST APIs, endpoint testing, and team collaboration via Git version control.",

    exp5_role: "Web Developer",
    exp5_company: "Yamitala Outdoorgeear",
    exp5_date: "2021 (Contract / Project-based)",
    exp5_desc: "Built e-commerce online store catalog platform using Laravel (Blade) & MySQL, integrated dynamic checkout features, and optimized page speed.",

    // Competencies
    comp_badge: "TECHNICAL COMPETENCIES",
    comp_title: '<span>Skills & Strengths</span><br><span class="color">I Offer to Your Engineering Team</span>',
    
    comp1_title: "Backend Engineering & RESTful APIs",
    comp1_desc: "Skilled in designing secure, modular, and scalable backend architectures using Laravel, PHP, and Python. Capable of building standardized RESTful API endpoints with authentication (JWT/Sanctum), rigorous validation, and clean documentation.",

    comp2_title: "Modern & Interactive Frontend Development",
    comp2_desc: "Proficient in component-based UI engineering with React.js, Vue.js, Modern JavaScript (ES6+), and Blade. Experienced in crafting responsive, mobile-first SPAs with optimized rendering performance.",

    comp3_title: "Database Schema Design & Query Optimization",
    comp3_desc: "Expertise in designing relational database schemas (MySQL, PostgreSQL) and NoSQL (Firebase), optimizing queries via proper indexing, preventing bottlenecks, and ensuring data transaction consistency.",

    comp4_title: "Third-Party & External System Integrations",
    comp4_desc: "Experienced in integrating payment gateways, webhooks, automated email/messaging notifications, cloud storage, and other external APIs into software applications reliably and securely.",

    comp5_title: "Team Collaboration, Git & AI-Assisted Workflow",
    comp5_desc: "Disciplined in Git version control (branching, pull requests, code reviews), adaptable to Agile/Scrum methodologies, and leveraging modern AI developer tools to boost coding and testing productivity.",

    // Skills
    skills_badge: "TECH STACK",
    skills_title: '<span>Programming Languages &</span> <span class="color">Frameworks</span>',

    // Projects
    port_badge: "PROJECT SHOWCASE",
    port_title: '<span>Case Studies &</span><br><span class="color">Production Systems I Have Built</span>',
    port_sub: "Here are featured production-grade implementations I engineered, encompassing backend architecture, REST API integrations, and modern web interfaces.",
    port_visit_btn: "Visit Website",

    p1_badge: "FULLSTACK ENGINEER • 2025–2026",
    p1_title: "PT Airbox Technology — Air Box & Jurnal Pintar",
    p1_desc: "Designed and managed end-to-end architecture for core enterprise business applications. Focused on secure RESTful API integrations, structured database maintenance, and comprehensive system optimization for high throughput.",
    p1_hl1: "<strong>End-to-End Architecture:</strong> Built scalable and secure full-stack systems for core enterprise business applications.",
    p1_hl2: "<strong>RESTful API Integration:</strong> Designed and documented standardized APIs for inter-system and third-party data exchange.",
    p1_hl3: "<strong>Database Management:</strong> Managed PostgreSQL/MySQL databases and optimized query execution for efficient data transactions.",

    p2_badge: "WEB DEVELOPER • 2026",
    p2_title: "Lokale Resort & Villas Bali (Lokale Pererenan)",
    p2_desc: "Built a resort website powered by Laravel and MySQL featuring full admin dashboard for managing rooms, pricing, and amenities (CRUD), alongside a responsive online booking flow.",
    p2_hl1: "<strong>Admin Dashboard & CRUD:</strong> Designed interactive control panels for managing rooms, facilities, gallery showcases, and dynamic rates.",
    p2_hl2: "<strong>Online Booking System:</strong> Developed structured online reservation pipelines directly connected to the transactional database.",
    p2_hl3: "<strong>Performance & UX Optimization:</strong> Accelerated page loading times through visual asset optimizations and efficient query executions.",

    p3_badge: "WEB DEVELOPER • 2025",
    p3_title: "Samas Property — Modern Property Profile & Catalog",
    p3_desc: "Designed and built an elegant, clean, and professional property profile website to showcase property catalogs, interactive search filters, and efficient unit inventory management.",
    p3_hl1: "<strong>Inventory & Unit Management:</strong> Developed structured database systems using MySQL and PHP for real estate property catalogs.",
    p3_hl2: "<strong>Interactive Promotion Features:</strong> Built property photo galleries, search filtering, and interactive inquiry consultation forms for lead generation.",
    p3_hl3: "<strong>Responsive Design:</strong> Ensured layout renders seamlessly and quickly across mobile, tablet, and desktop viewports.",

    p4_badge: "PROGRAMMER • 2022",
    p4_title: "PT. Motio Labs Indonesia — Interactive Full-Stack SPA",
    p4_desc: "Built modern Single Page Application (SPA) platforms using Laravel and React.js. Focused on modular component architecture, seamless REST API integration, and high-performance MySQL data querying.",
    p4_hl1: "<strong>Full-Stack App Development:</strong> Utilized Laravel for backend processing and React.js for dynamic, fluid SPA user interfaces.",
    p4_hl2: "<strong>REST API & Modular UI:</strong> Created and consumed REST APIs for real-time data communication and reusable React components.",
    p4_hl3: "<strong>Team Collaboration & Clean Code:</strong> Collaborated with UI/UX designers, PMs, and QA while upholding clean code standards and rigorous testing.",

    p5_badge: "WEB DEVELOPER • 2021",
    p5_title: "Yamitala Outdoorgeear — Modern E-Commerce Platform",
    p5_desc: "Designed and implemented modern, intuitive, and responsive e-commerce interfaces using Laravel (Blade) and MySQL, focusing on clear visual hierarchy and an optimal shopping flow.",
    p5_hl1: "<strong>Responsive UI & Interactive Features:</strong> Developed dynamic product filtering, variation galleries, and an easy checkout journey.",
    p5_hl2: "<strong>Full-Stack Direct Integration:</strong> Connected Blade views directly to Laravel backend logic and MySQL database via Eloquent ORM.",
    p5_hl3: "<strong>Performance Optimization:</strong> Maximized page load speed via image compression, lazy loading, and CSS/JS asset minification.",

    // Contact
    contact_badge: "GET IN TOUCH",
    contact_title: '<span>Interested in my profile?</span><br><span class="color">Let’s schedule an interview or discussion.</span>',
    contact_direct_title: "Direct Contact",
    contact_chat_wa: "Chat via WhatsApp",
    contact_dom_title: "Domicile & Work Readiness",
    contact_dom_addr: '<i class="ri-map-pin-line" style="margin-right: 6px; color: #fff;"></i> Cluster Griya Ararya Block B 4, Baleendah, Bandung Regency, West Java',
    contact_readiness: '<i class="ri-checkbox-circle-line" style="margin-right: 6px;"></i> Open to Onsite (Bandung / Greater Area), Hybrid, or Full Remote roles.',
    
    form_name_label: "NAME / RECRUITER / COMPANY",
    form_name_ph: "Your Name / Company",
    form_email_label: "COMPANY EMAIL",
    form_email_ph: "email@company.com",
    form_subject_label: "POSITION / TOPIC",
    form_subject_ph: "Job Opportunity / Interview Invitation",
    form_msg_label: "MESSAGE / JOB OFFER DETAILS",
    form_msg_ph: "Describe the offered position, job description, or interview schedule...",
    form_submit_btn: "Send Inquiry via WhatsApp"
  }
};

function setLanguage(lang) {
  if (!translations[lang]) lang = 'id';
  localStorage.setItem('selected_lang', lang);

  // Update toggle UI
  $('.lang-opt').removeClass('active');
  $(`.lang-opt[data-lang="${lang}"]`).addClass('active');

  // Update HTML lang attribute
  $('html').attr('lang', lang);

  // Translate elements with [data-i18n]
  $('[data-i18n]').each(function() {
    const key = $(this).attr('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      $(this).html(translations[lang][key]);
    }
  });

  // Translate placeholders with [data-i18n-ph]
  $('[data-i18n-ph]').each(function() {
    const key = $(this).attr('data-i18n-ph');
    if (translations[lang] && translations[lang][key]) {
      $(this).attr('placeholder', translations[lang][key]);
    }
  });

  // Refresh ScrollTrigger after DOM text updates
  if (typeof ScrollTrigger !== 'undefined') {
    setTimeout(function() {
      ScrollTrigger.refresh();
    }, 80);
  }
}

$(document).ready(function() {
  // Read saved language or default to 'id'
  const savedLang = localStorage.getItem('selected_lang') || 'id';
  setLanguage(savedLang);

  // Click on specific lang option
  $(document).on('click', '.lang-opt', function(e) {
    e.stopPropagation();
    const lang = $(this).data('lang');
    setLanguage(lang);
  });

  // Click on toggle wrapper flips language
  $(document).on('click', '.lang-switch', function(e) {
    if ($(e.target).hasClass('lang-opt')) return;
    const currentLang = localStorage.getItem('selected_lang') || 'id';
    const nextLang = currentLang === 'id' ? 'en' : 'id';
    setLanguage(nextLang);
  });
});
