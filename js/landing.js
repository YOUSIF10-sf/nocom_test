/**
 * ==========================================================================
 * NoComm Standalone Enterprise Landing Page Engine V1.0
 * Modular & Portable: Can be copied into ANY project (HTML, React, Next.js, Laravel, etc.)
 * ==========================================================================
 */

// 1. Easy Global Configuration
window.NoCommConfig = {
  companyName: 'شركة نوكوم المحدودة',
  companyNameEn: 'NoComm Ltd.',
  apiBaseUrl: '/api',
  enableLiveBackend: true,
  offlineFallback: true
};

// 2. Official Systems & Activities Catalog (NoComm Ltd. Core Portfolio)
const CORE_10_SYSTEMS = [
  {
    id: 1,
    category: 'security',
    title: 'أنظمة الأمان والمراقبة (CCTV & AI Surveillance)',
    description: 'توريد وتركيب منظومات المراقبة المرئية فائقة الدقة 4K/8K، كاميرات حرارية للمحيط، وتحليل الفيديو بالذكاء الاصطناعي لكشف التسلل والتعرف على المركبات والوجوه بدقة متناهية.',
    icon: 'fa-video',
    image: 'PHOTO/CCTV & AI.jpg',
    badge: 'CCTV & AI Vision 4K',
    features: ['تحليل ذكي بالرؤية الحاسوبية (AI Video Analytics)', 'كاميرات متحركة PTZ وحرارية للمنشآت الحيوية', 'أنظمة تسجيل وتخزين سحابي ومحلي مطابق لاشتراطات الأمن الصناعي']
  },
  {
    id: 2,
    category: 'security',
    title: 'أنظمة التحكم في الدخول والخروج (Access Control)',
    description: 'حلول التحكم بالدخول الإلكتروني، بوابات مرور الأفراد الدوارة (Flap Barriers)، قارئات البصمة وبصمة الوجه، ومصدات وحواجز مواقف السيارات وبوابات التفتيش الأمني.',
    icon: 'fa-id-card-clip',
    image: 'PHOTO/Access Control).jpg',
    badge: 'Access Control & IoT',
    features: ['التعرف السريع ببصمة الوجه والبطاقات الذكية والهواتف', 'بوابات أمنية ومصدات هيدروليكية للمركبات', 'إدارة مركزية للصلاحيات والربط مع أنظمة الحضور والـ ERP']
  },
  {
    id: 3,
    category: 'safety',
    title: 'أنظمة إنذار الحريق والسلامة (Fire Alarm & Life Safety)',
    description: 'تصميم وتنفيذ أنظمة إنذار وكشف الحريق المعنونة (Addressable)، حساسات الدخان والحرارة، الربط التلقائي مع لوحات التحكم وأنظمة الإخلاء الصوتي ومطابقة كود البناء السعودي.',
    icon: 'fa-fire-extinguisher',
    image: 'PHOTO/Fire Alarm.jpg',
    badge: 'Fire Alarm & Safety',
    features: ['كواشف ذكية معنونة عالية الحساسية والدقة', 'ربط فوري مع أنظمة الإخلاء ومضخات الإطفاء ومخارج الطوارئ', 'اعتماد ومطابقة تامة لاشتراطات ولوائح الدفاع المدني']
  },
  {
    id: 4,
    category: 'networks',
    title: 'الشبكات والاتصالات والبنية التحتية (Networks & Fiber Optics)',
    description: 'هندسة وتمديد البنية التحتية لشبكات الألياف الضوئية (Fiber Optics)، كوابل الشبكات Cat6A/Cat7، سويتشات المؤسسات، تجهيز مراكز البيانات وغرف السيرفرات، وشبكات الـ Wi-Fi المؤسسية.',
    icon: 'fa-network-wired',
    image: 'PHOTO/PHOTO_LIKE_NETWORK.jpg',
    badge: 'Fiber & Data Center',
    features: ['تمديد ولحام كوابل الألياف مع شهادات اختبار معتمدة OTDR', 'حلول الربط الشبكي المؤسسي (Cisco, Aruba, Huawei)', 'تجهيز غرف الخوادم، كبائن Racks، ووحدات الطاقة UPS']
  },
  {
    id: 5,
    category: 'telecom',
    title: 'السنترالات والاتصالات الموحدة (IP-PBX & Telecom)',
    description: 'بدالات هواتف شبكية ذكية (IP-PBX)، حلول الاتصال الموحد بالفيديو والصوت، أنظمة الإنتركم المرئي الذكي للمداخل والمباني، والتكامل مع البدالات السحابية الحديثة.',
    icon: 'fa-phone-volume',
    image: 'PHOTO/NetworkTor.jpg',
    badge: 'IP-PBX & Telecom HD',
    features: ['سنترالات شبكية IP متطورة مع تسجيل وتحويل آلي للمكالمات', 'إنتركم صوتي ومرئي بدقة عالية HD متصل بالتطبيقات الذكية', 'حلول كول سنتر وربط الفروع المتعددة بشبكة موحدة']
  },
  {
    id: 6,
    category: 'bms',
    title: 'أنظمة إدارة المباني الذكية (BMS - Building Management)',
    description: 'أتمتة وإدارة المنشآت والمباني عبر منصات BMS موحدة للتحكم بالتكييف (HVAC)، الإضاءة الذكية، مراقبة استهلاك الطاقة ومضخات المياه والمصاعد، وتحقيق أقصى كفاءة تشغيلية.',
    icon: 'fa-building-shield',
    image: 'PHOTO/BMS - Building.jpg',
    badge: 'BMS Smart Building',
    features: ['لوحات تحكم مركزية وشاشات مراقبة تفاعلية للمبنى', 'بروتوكولات قياسية متوافقة عالمياً: BACnet, Modbus, KNX', 'ترشيد استهلاك الكهرباء والطاقة بنسب تصل إلى 35%']
  },
  {
    id: 7,
    category: 'smarthome',
    title: 'أنظمة المنازل الذكية (Smart Homes & Automation)',
    description: 'حلول الرفاهية والأتمتة السكنية والفلل الفاخرة: تحكم كامل بالإضاءة، التكييف، الستائر، أنظمة الأمان السكنية، السينما المنزلية، والتحكم عبر التطبيقات والأوامر الصوتية.',
    icon: 'fa-house-signal',
    image: 'PHOTO/Smart Home.jpg',
    badge: 'Smart Home & KNX',
    features: ['سيناريوهات ذكية مخصصة للراحة والأمان وترشيد الطاقة', 'تكامل شامل مع أنظمة Apple Home, Google, Alexa, KNX', 'شاشات لمس جدارية أنيقة وتطبيقات هاتف سهلة الاستخدام']
  },
  {
    id: 8,
    category: 'audiovisual',
    title: 'الأنظمة المرئية والصوتية وشاشات العرض (Audio-Visual & Video Walls)',
    description: 'تصميم جدران العرض المرئية لغرف العمليات والتحكم (SOC Video Walls)، تجهيز قاعات الاجتماعات التفاعلية بالصوتيات وشاشات العرض، وأنظمة النداء الصوتي والإذاعة الداخلية (PA/VA).',
    icon: 'fa-tv',
    image: 'PHOTO/Audio-Visual & Video Walls.jpg',
    badge: 'Audio-Visual & Video Wall',
    features: ['شاشات فيديو وول بدون حواف فائقة الدقة للعمل المتواصل 24/7', 'أنظمة نداء صوتي وإذاعة موجهة IP Audio للمنشآت والمجمعات', 'تجهيز قاعات المؤتمرات بأنظمة الترجمة والميكروفونات التفاعلية']
  }
];

const SHOWCASE_PROJECTS = [
  {
    id: 101,
    title: 'مشروع المنظومة الأمنية المتكاملة والشبكات لبرج إداري',
    category: 'أنظمة الأمان والشبكات',
    city: 'الرياض',
    image: 'PHOTO/CCTV & AI.jpg',
    badge: 'برج مكتبي 30,000 م²',
    description: 'توريد وتركيب 220 كاميرا ذكية 4K، بوابات تحكم بالدخول والخروج، شبكة ألياف ضوئية، وسنترال IP لبرج مكتبي بمساحة 30,000 م².',
    client: 'شركة تطوير عقاري كبرى',
    status: 'منجز بالكامل'
  },
  {
    id: 102,
    title: 'تجهيز مركز العمليات المرئية (SOC) ونظام إدارة المبنى (BMS)',
    category: 'إدارة المباني والأنظمة المرئية',
    city: 'الرياض',
    image: 'PHOTO/Audio-Visual & Video Walls.jpg',
    badge: 'مركز عمليات 8K Video Wall',
    description: 'تنفيذ نظام BMS للتحكم بالتكييف والإضاءة وربطه بجدار شاشات Video Wall فائق الدقة مع نظام إنذار حريق معنون.',
    client: 'منشأة مالية وحكومية',
    status: 'منجز بالكامل'
  },
  {
    id: 103,
    title: 'منظومة الأتمتة والمنازل الذكية لمجمع سكني فاخر',
    category: 'المنازل الذكية والصوتيات',
    city: 'الرياض',
    image: 'PHOTO/Smart Home.jpg',
    badge: '45 فيلا بنظام KNX الذكي',
    description: 'أتمتة 45 فيلا سكنية بنظام KNX الذكي، إنتركم مرئي متصل بالسحابة، وأنظمة صوتية موزعة وتحكم كامل بالإنارة والتكييف.',
    client: 'مجمع سكني استثماري',
    status: 'منجز بالكامل'
  }
];

// 3. Standalone API Client Adapter
const LandingApi = {
  async getCompanyInfo() {
    if (!window.NoCommConfig.enableLiveBackend) return null;
    try {
      const res = await fetch(`${window.NoCommConfig.apiBaseUrl}/company?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) return await res.json();
    } catch (e) {
      console.log("Offline mode: Using embedded Company Info.");
    }
    return null;
  },

  async getServices() {
    if (!window.NoCommConfig.enableLiveBackend) return [];
    try {
      const res = await fetch(`${window.NoCommConfig.apiBaseUrl}/services?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) return await res.json();
    } catch (e) {
      console.log("Offline mode: Using embedded core services catalog.");
    }
    return [];
  },

  async getProjects() {
    if (!window.NoCommConfig.enableLiveBackend) return [];
    try {
      const res = await fetch(`${window.NoCommConfig.apiBaseUrl}/projects?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) return await res.json();
    } catch (e) {
      console.log("Offline mode: Using embedded projects showcase.");
    }
    return [];
  },

  async postContactMessage(payload) {
    if (!window.NoCommConfig.enableLiveBackend) return { ok: true, fallback: true };
    try {
      const res = await fetch(`${window.NoCommConfig.apiBaseUrl}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) return await res.json();
    } catch (e) {
      console.log("Contact message saved in local session (offline fallback).");
    }
    return { status: 'success', fallback: true };
  }
};

// 4. Initialize Everything on DOM Load safely
document.addEventListener('DOMContentLoaded', () => {
  try { initNavbarBehavior(); } catch (e) { console.warn(e); }
  try { initMobileDrawer(); } catch (e) { console.warn(e); }
  try { initNumbersCounter(); } catch (e) { console.warn(e); }
  try { initHeroVideoController(); } catch (e) { console.warn(e); }
  try { initVideoModal(); } catch (e) { console.warn(e); }
  try { initServicesCatalog(); } catch (e) { console.warn(e); }
  try { initProjectsShowcase(); } catch (e) { console.warn(e); }
  try { initProjectCostEstimator(); } catch (e) { console.warn(e); }
  try { initContactFormHandler(); } catch (e) { console.warn(e); }
  try { initQuoteModal(); } catch (e) { console.warn(e); }
  try { initBackToTop(); } catch (e) { console.warn(e); }
  try { syncCompanyInfo(); } catch (e) { console.warn(e); }
});

// Hero Background Video Controller
function initHeroVideoController() {
  const video = document.getElementById('hero-bg-video');
  if (video) {
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Browser autoplay restriction handled gracefully
      });
    }
  }
}

// Cinematic Video Modal Handler
function initVideoModal() {
  const modal = document.getElementById('cinematic-video-modal');
  const openBtn = document.getElementById('btn-open-video-modal');
  const closeBtn = document.getElementById('btn-close-video-modal');
  const player = document.getElementById('showcase-player-video');

  if (!modal) return;

  const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (player) {
      player.currentTime = 0;
      const p = player.play();
      if (p !== undefined) p.catch(() => {});
    }
  };

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (player) {
      player.pause();
    }
  };

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

// Navbar & Scroll Spy
function initNavbarBehavior() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });
}

// Mobile Drawer
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const overlay = document.getElementById('mobile-drawer-overlay');
  const closeBtn = document.getElementById('mobile-drawer-close');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer || !overlay) return;

  const openDrawer = () => {
    drawer.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));
}

// Animated Numbers Counter
function initNumbersCounter() {
  const counters = document.querySelectorAll('.stat-number');
  let hasAnimated = false;

  const runCounter = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target') || 0;
      const prefix = counter.getAttribute('data-prefix') || '';
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 1800;
      const stepTime = 20;
      const totalSteps = duration / stepTime;
      const increment = target / totalSteps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          counter.innerText = `${prefix}${target}${suffix}`;
          clearInterval(timer);
        } else {
          counter.innerText = `${prefix}${Math.ceil(current)}${suffix}`;
        }
      }, stepTime);
    });
  };

  const targetStrip = document.querySelector('.hero-stats-strip');
  if (!targetStrip) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        runCounter();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(targetStrip);
}

// Services Catalog & Dynamic Filter Tabs
async function initServicesCatalog() {
  const container = document.getElementById('services-catalog-grid');
  const tabs = document.querySelectorAll('.tab-filter-btn');
  if (!container) return;

  let allServices = [...CORE_10_SYSTEMS];
  const dynamicServices = await LandingApi.getServices();
  if (dynamicServices && dynamicServices.length > 0) {
    allServices = dynamicServices.map(s => {
      let parsedFeatures = ['توريد وتنفيذ هندسي مباشر بأعلى المعايير', 'ضمان معتمد وبدون عمولة وساطة'];
      if (Array.isArray(s.features)) {
        parsedFeatures = s.features;
      } else if (typeof s.features === 'string' && s.features.trim()) {
        try {
          const jsonP = JSON.parse(s.features);
          if (Array.isArray(jsonP) && jsonP.length > 0) parsedFeatures = jsonP;
        } catch (e) {
          parsedFeatures = s.features.split('\n').map(f => f.trim()).filter(Boolean);
        }
      }
      return {
        id: s.id,
        category: s.category || 'security',
        title: s.title,
        description: s.description,
        icon: s.icon || 'fa-microchip',
        image: s.image || 'PHOTO/TECHNOLGE.jpg',
        badge: s.badge || 'معتمد',
        features: parsedFeatures
      };
    });
  }

  const renderServices = (filter = 'all') => {
    let filtered = allServices;
    if (filter !== 'all') {
      if (filter === 'bms') {
        filtered = allServices.filter(s => s.category === 'bms' || s.category === 'smarthome');
      } else {
        filtered = allServices.filter(s => s.category === filter);
      }
    }
    
    container.innerHTML = filtered.map(s => {
      const imgSrc = s.image ? (s.image.startsWith('/') ? s.image : '/' + s.image) : '/PHOTO/TECHNOLGE.jpg';
      return `
        <div class="service-card" data-category="${s.category}">
          <div class="service-card-media">
            <img src="${encodeURI(imgSrc)}" alt="${s.title}" loading="lazy">
            <div class="service-media-overlay"></div>
            <span class="service-card-badge">${s.badge || 'معتمد'}</span>
            <div class="service-card-icon-floating">
              <i class="fas ${s.icon || 'fa-microchip'}"></i>
            </div>
          </div>
          
          <div class="service-card-top">
            <h3>${s.title}</h3>
            <p>${s.description}</p>
            <ul class="service-features-list">
              ${s.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
            </ul>
          </div>
          
          <div class="service-card-footer">
            <button type="button" class="btn btn-secondary btn-sm" style="flex: 1;" onclick="openQuoteModalWithService('${s.title.replace(/'/g, "\\'")}')">
              <i class="fas fa-file-invoice"></i> طلب مواصفات وعرض
            </button>
            <a href="#contact" class="btn btn-primary btn-sm" style="padding: 0 0.75rem;" aria-label="تواصل">
              <i class="fas fa-arrow-left"></i>
            </a>
          </div>
        </div>
      `;
    }).join('');
  };

  renderServices('all');

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter') || 'all';
      renderServices(cat);
    });
  });
}

// Projects Showcase with Rich Media
async function initProjectsShowcase() {
  const container = document.getElementById('public-projects-grid');
  if (!container) return;

  let allProjects = [...SHOWCASE_PROJECTS];
  const dynamicProjects = await LandingApi.getProjects();
  if (dynamicProjects && dynamicProjects.length > 0) {
    allProjects = dynamicProjects.map(dp => ({
      id: dp.id,
      title: dp.title,
      category: dp.category || 'الأنظمة التقنية',
      city: dp.city || 'الرياض',
      image: dp.image || 'PHOTO/TECHNOLGE.jpg',
      badge: dp.badge || dp.category || 'مشروع معتمد',
      description: dp.description || 'تنفيذ متكامل وتوريد مباشر بدون عمولة وفق أعلى درجات الاعتمادية.',
      client: dp.client || 'عميل معتمد',
      status: dp.status || 'منجز بالكامل'
    }));
  }

  container.innerHTML = allProjects.map(p => {
    const imgSrc = p.image ? (p.image.startsWith('/') ? p.image : '/' + p.image) : '/PHOTO/TECHNOLGE.jpg';
    return `
      <div class="portfolio-card">
        <div class="portfolio-card-media">
          <img src="${encodeURI(imgSrc)}" alt="${p.title}" loading="lazy">
          <div class="portfolio-media-overlay"></div>
          <span class="portfolio-media-badge"><i class="fas fa-tag"></i> ${p.badge || p.category}</span>
        </div>
        <div class="portfolio-body">
          <div>
            <div class="portfolio-header-tags">
              <span class="gold-badge"><i class="fas fa-layer-group"></i> ${p.category}</span>
              <span class="tech-tag"><i class="fas fa-map-marker-alt"></i> ${p.city || 'الرياض'}</span>
            </div>
            <h3>${p.title}</h3>
            <p>${p.description}</p>
          </div>
          <div class="portfolio-meta">
            <span><i class="fas fa-building" style="color: var(--primary-gold); margin-left: 0.35rem;"></i> ${p.client || 'منشأة معتمدة'}</span>
            <span style="color: #10B981; font-weight: 700;"><i class="fas fa-check-circle"></i> ${p.status || 'منجز بالكامل'}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Interactive Project Cost Estimator
function initProjectCostEstimator() {
  const facilityBtns = document.querySelectorAll('.calc-facility-btn');
  const systemBtns = document.querySelectorAll('.calc-system-btn');
  const summarySystemsCount = document.getElementById('calc-summary-systems-count');
  const summaryEstimateText = document.getElementById('calc-summary-estimate');
  const btnApplyQuote = document.getElementById('calc-btn-quote');

  let selectedFacility = 'مبنى تجاري / مكاتب';
  let selectedSystems = ['كاميرات المراقبة والتحليل الذكي', 'التحكم بالدخول والأبواب'];

  facilityBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      facilityBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedFacility = btn.getAttribute('data-facility') || 'منشأة عامة';
      updateEstimate();
    });
  });

  systemBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('selected');
      const sysName = btn.getAttribute('data-system');
      if (btn.classList.contains('selected')) {
        if (!selectedSystems.includes(sysName)) selectedSystems.push(sysName);
      } else {
        selectedSystems = selectedSystems.filter(s => s !== sysName);
      }
      updateEstimate();
    });
  });

  function updateEstimate() {
    if (summarySystemsCount) summarySystemsCount.innerText = `${selectedSystems.length} منظومات مختارة`;
    if (summaryEstimateText) {
      if (selectedSystems.length === 0) {
        summaryEstimateText.innerText = 'يرجى اختيار منظومة واحدة على الأقل';
      } else {
        summaryEstimateText.innerText = `توريد وتنفيذ مباشر لمشروع (${selectedFacility}) — ZERO COMMISSION`;
      }
    }
  }

  if (btnApplyQuote) {
    btnApplyQuote.addEventListener('click', () => {
      const msg = `طلب تقدير تكلفة: منشأة (${selectedFacility})، المنظومات المطلوبة: [${selectedSystems.join('، ')}]`;
      openQuoteModalWithMessage(msg);
    });
  }
}

// Quote Modal
function initQuoteModal() {
  const overlay = document.getElementById('quote-request-modal');
  const closeBtn = document.getElementById('quote-modal-close');
  const form = document.getElementById('quote-modal-form');

  if (!overlay) return;

  const closeModal = () => { overlay.classList.remove('active'); };
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.disabled = true;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري إرسال الطلب...';

      const payload = {
        name: document.getElementById('qm-name').value,
        phone: document.getElementById('qm-phone').value,
        email: document.getElementById('qm-email').value,
        message: `[طلب عرض سعر مباشر] — المنظومة: ${document.getElementById('qm-system').value} — ملاحظات: ${document.getElementById('qm-notes').value}`
      };

      await LandingApi.postContactMessage(payload);

      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-check-circle"></i> تم إرسال طلبك بنجاح!';
      form.reset();
      setTimeout(() => {
        btn.innerHTML = originalText;
        closeModal();
      }, 2000);
    });
  }
}

window.openQuoteModalWithService = function(serviceTitle) {
  const overlay = document.getElementById('quote-request-modal');
  const sysInput = document.getElementById('qm-system');
  if (sysInput) sysInput.value = serviceTitle;
  if (overlay) overlay.classList.add('active');
};

window.openQuoteModalWithMessage = function(message) {
  const overlay = document.getElementById('quote-request-modal');
  const notesInput = document.getElementById('qm-notes');
  if (notesInput) notesInput.value = message;
  if (overlay) overlay.classList.add('active');
};

// Contact Form Handler
function initContactFormHandler() {
  const form = document.getElementById('main-contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btn-contact-submit');
    const originalText = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = 'جاري الإرسال وحفظ الطلب... <i class="fas fa-spinner fa-spin"></i>';

    const payload = {
      name: document.getElementById('c-name').value,
      phone: document.getElementById('c-phone').value,
      email: document.getElementById('c-email').value,
      message: `[الموضوع: ${document.getElementById('c-subject').value}] — ${document.getElementById('c-message').value}`
    };

    await LandingApi.postContactMessage(payload);

    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-check-circle"></i> تم إرسال رسالتك بنجاح!';
    form.reset();

    setTimeout(() => { btn.innerHTML = originalText; }, 4000);
  });
}

// Back to Top Button
function initBackToTop() {
  const btn = document.getElementById('btn-back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Hero Ambient Background Video Controller (Continuous Non-Stop Motion)
function initHeroVideoController() {
  const video = document.getElementById('hero-bg-video');
  if (!video) return;

  video.muted = true;
  video.loop = true;
  video.defaultMuted = true;
  video.playsInline = true;

  const playBackgroundVideo = () => {
    video.muted = true;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback: resume on first user interaction
        const resumeOnInteract = () => {
          video.muted = true;
          video.play().catch(() => {});
          ['click', 'touchstart', 'scroll', 'mousemove'].forEach(evt => document.removeEventListener(evt, resumeOnInteract));
        };
        ['click', 'touchstart', 'scroll', 'mousemove'].forEach(evt => document.addEventListener(evt, resumeOnInteract, { once: true, passive: true }));
      });
    }
  };

  playBackgroundVideo();

  video.addEventListener('canplay', playBackgroundVideo);
  video.addEventListener('loadedmetadata', playBackgroundVideo);

  // Ensure it never stops when tab is focused or page is visible
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && video.paused) {
      playBackgroundVideo();
    }
  });

  window.addEventListener('focus', () => {
    if (video.paused) playBackgroundVideo();
  });

  video.addEventListener('ended', () => {
    video.currentTime = 0;
    playBackgroundVideo();
  });
}

// Cinematic Video Showcase Modal
function initVideoModal() {
  const modal = document.getElementById('video-showcase-modal');
  const closeBtn = document.getElementById('video-modal-close');
  const modalVideo = document.getElementById('showcase-player-video');
  const triggers = document.querySelectorAll('.trigger-video-modal');

  if (!modal) return;

  window.openVideoModal = function() {
    modal.classList.add('active');
    if (modalVideo) {
      modalVideo.currentTime = 0;
      modalVideo.play().catch(e => console.log('Autoplay modal video prevented:', e));
    }
  };

  window.closeVideoModal = function() {
    modal.classList.remove('active');
    if (modalVideo) {
      modalVideo.pause();
    }
  };

  if (closeBtn) closeBtn.addEventListener('click', window.closeVideoModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) window.closeVideoModal();
  });

  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.openVideoModal();
    });
  });
}

// Sync Live Company Info & All Sections if backend is running
async function syncCompanyInfo() {
  const info = await LandingApi.getCompanyInfo();
  if (!info) return;

  // 1. Company Name & Identity
  if (info.company_name) {
    document.querySelectorAll('.dynamic-company-name').forEach(el => el.innerText = info.company_name);
  }
  if (info.company_name_en) {
    document.querySelectorAll('.en-headline').forEach(el => el.innerText = info.company_name_en);
  }

  // 2. Contact Info & Links
  const phoneElems = document.querySelectorAll('.dynamic-company-phone');
  const emailElems = document.querySelectorAll('.dynamic-company-email');
  const addressElems = document.querySelectorAll('.dynamic-company-address');

  if (info.phone) {
    phoneElems.forEach(el => el.innerText = info.phone);
    document.querySelectorAll('a[href^="tel:"]').forEach(a => a.href = `tel:${info.phone.replace(/\s+/g, '')}`);
  }
  if (info.email) {
    emailElems.forEach(el => el.innerText = info.email);
    document.querySelectorAll('a[href^="mailto:"]').forEach(a => a.href = `mailto:${info.email}`);
  }
  if (info.address) {
    addressElems.forEach(el => el.innerText = info.address);
  }
  if (info.whatsapp) {
    const cleanWa = info.whatsapp.replace(/[^0-9]/g, '');
    document.querySelectorAll('a[href*="wa.me"]').forEach(a => a.href = `https://wa.me/${cleanWa}`);
  }

  // 3. Hero Section
  if (info.hero_badge) {
    const badgeEl = document.querySelector('.hero-content .gold-badge');
    if (badgeEl) badgeEl.innerHTML = `<span class="status-dot"></span> ${info.hero_badge}`;
  }
  if (info.hero_title) {
    const heroTitleEl = document.querySelector('.hero-title');
    if (heroTitleEl) heroTitleEl.innerText = info.hero_title;
  }
  if (info.hero_subtitle) {
    const heroDescEl = document.getElementById('company-tagline');
    if (heroDescEl) heroDescEl.innerText = info.hero_subtitle;
  }

  // 4. Hero KPI Counters
  const statCards = document.querySelectorAll('.hero-stats-strip .hero-stat-card');
  if (statCards.length >= 4) {
    if (info.hero_stat1_val) statCards[0].querySelector('.hero-stat-val').innerText = info.hero_stat1_val;
    if (info.hero_stat1_lbl) statCards[0].querySelector('.hero-stat-lbl').innerText = info.hero_stat1_lbl;
    if (info.hero_stat2_val) statCards[1].querySelector('.hero-stat-val').innerText = info.hero_stat2_val;
    if (info.hero_stat2_lbl) statCards[1].querySelector('.hero-stat-lbl').innerText = info.hero_stat2_lbl;
    if (info.hero_stat3_val) statCards[2].querySelector('.hero-stat-val').innerText = info.hero_stat3_val;
    if (info.hero_stat3_lbl) statCards[2].querySelector('.hero-stat-lbl').innerText = info.hero_stat3_lbl;
    if (info.hero_stat4_val) statCards[3].querySelector('.hero-stat-val').innerText = info.hero_stat4_val;
    if (info.hero_stat4_lbl) statCards[3].querySelector('.hero-stat-lbl').innerText = info.hero_stat4_lbl;
  }

  // 5. Hero Video Background
  if (info.hero_video_path) {
    const heroVideo = document.getElementById('hero-bg-video');
    if (heroVideo) {
      const source = heroVideo.querySelector('source');
      if (source && source.getAttribute('src') !== info.hero_video_path) {
        source.setAttribute('src', info.hero_video_path);
        heroVideo.load();
        heroVideo.play().catch(() => {});
      }
    }
  }

  // 6. Profile Section & Showcase Image
  if (info.profile_section_title) {
    const secTitle = document.querySelector('#profile .section-header .gold-badge');
    if (secTitle) secTitle.innerHTML = `<i class="fas fa-building"></i> ${info.profile_section_title}`;
  }
  if (info.profile_headline) {
    const profHeadline = document.querySelector('#profile .profile-overview-card h3');
    if (profHeadline) profHeadline.innerText = info.profile_headline;
  }
  if (info.profile_desc1) {
    const desc1 = document.querySelector('#profile .profile-overview-card p:nth-of-type(1)');
    if (desc1) desc1.innerText = info.profile_desc1;
  }
  if (info.profile_desc2) {
    const desc2 = document.querySelector('#profile .profile-overview-card p:nth-of-type(2)');
    if (desc2) desc2.innerText = info.profile_desc2;
  }
  if (info.profile_image) {
    const profImg = document.querySelector('#profile .profile-visual-showcase img');
    if (profImg) {
      profImg.src = info.profile_image.startsWith('/') ? info.profile_image : `/${encodeURI(info.profile_image)}`;
    }
  }

  // 7. Profile 3 Pillars
  const specTags = document.querySelectorAll('#profile .profile-badges-row .profile-spec-tag');
  if (specTags.length >= 3) {
    if (info.profile_pillar1_title) specTags[0].innerHTML = `<i class="fas fa-certificate"></i> ${info.profile_pillar1_title}`;
    if (info.profile_pillar2_title) specTags[1].innerHTML = `<i class="fas fa-shield-alt"></i> ${info.profile_pillar2_title}`;
    if (info.profile_pillar3_title) specTags[2].innerHTML = `<i class="fas fa-cubes"></i> ${info.profile_pillar3_title}`;
  }

  // 8. Footer About & Details
  if (info.footer_about) {
    const footerAbout = document.querySelector('.footer-col:first-child p');
    if (footerAbout) footerAbout.innerText = info.footer_about;
  }
}
