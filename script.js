// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (!mobileMenuToggle || !mainNav) {
    console.warn('Mobile navigation elements not found');
    return;
  }

  // Toggle mobile menu
  function toggleMobileMenu() {
    const isOpen = mainNav.classList.contains('mobile-nav-open');
    
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  // Open mobile menu
  function openMobileMenu() {
    mainNav.classList.add('mobile-nav-open');
    mobileMenuToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.body.classList.add('mobile-menu-open');
  }

  // Close mobile menu
  function closeMobileMenu() {
    mainNav.classList.remove('mobile-nav-open');
    mobileMenuToggle.classList.remove('active');
    document.body.style.overflow = '';
    document.body.classList.remove('mobile-menu-open');
  }

  // Event listeners
  mobileMenuToggle.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleMobileMenu();
  });

  // Close menu when clicking on nav links
  mainNav.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      closeMobileMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (mainNav.classList.contains('mobile-nav-open') && 
        !mainNav.contains(e.target) && 
        !mobileMenuToggle.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mainNav.classList.contains('mobile-nav-open')) {
      closeMobileMenu();
    }
  });

  // Close menu on window resize (if resizing to desktop)
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && mainNav.classList.contains('mobile-nav-open')) {
      closeMobileMenu();
    }
  });
});

// WhatsApp CTA
const phone = '96599992588'; // Kuwait: +965 99992588
const msg = encodeURIComponent("Hi, I'd like a quote for a custom wood project.");
const waLink = phone ? `https://wa.me/${phone}?text=${msg}` : '#';
document.querySelectorAll('#whatsappBtn, #whatsappBtn2').forEach(el=>{
  if(el){ el.href = waLink; el.rel = 'noopener'; }
});

// Contact form - Form now sends to email via Formspree
// The form will submit normally and send to betok965@gmail.com
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    // Let the form submit normally to Formspree
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
  });
}

// Gallery (for work.html page)
const gallery = document.getElementById('gallery');
if(gallery){
  const galleryImages = [
    // New Screenshot images (unique, no duplicates)
    'assets/img/Screenshot 2025-10-15 030222.png',
    'assets/img/Screenshot 2025-10-15 030055.png',
    'assets/img/Screenshot 2025-10-15 030023.png',
    'assets/img/Screenshot 2025-10-15 025949.png',
    'assets/img/Screenshot 2025-10-15 025916.png',
    'assets/img/Screenshot 2025-10-15 025845.png',
    'assets/img/Screenshot 2025-10-15 025816.png',
    'assets/img/Screenshot 2025-10-15 025739.png',
    'assets/img/Screenshot 2025-10-15 025641.png',
    'assets/img/Screenshot 2025-10-15 025532.png',
    'assets/img/Screenshot 2025-10-15 025146.png',
    
    // Original gallery images (unique, no duplicates)
    'assets/img/19367503_312303009196626_6048794561138917376_n.jpg',
    'assets/img/25017004_2431800253710752_3212384672663207936_n.jpg',
    'assets/img/26269749_1295992047167847_6336521438274519040_n.jpg',
    'assets/img/26871793_2039425629631342_4351044321751859200_n.jpg',
    'assets/img/28753658_184984582226920_3992583366225428480_n.jpg',
    'assets/img/41537567_2205956592966424_2352294427847047133_n.jpg',
    'assets/img/41766713_1827817150668343_820177369462579433_n.jpg',
    'assets/img/42869882_284283405520854_319450259602600645_n.jpg',
    'assets/img/46595212_459017711294428_1590153339600016651_n.jpg',
    'assets/img/47331118_380533296051448_8168746662817500133_n.jpg',
    'assets/img/51461927_416016329153221_7144490879320084338_n.jpg',
    'assets/img/54511940_349937735636062_1452740243803263882_n.jpg',
    'assets/img/65201407_433760417354137_3538799357406721237_n.jpg',
    'assets/img/107282413_739821120113675_1138686441370812496_n.jpg'
  ];
  
  gallery.innerHTML = galleryImages.map(src => `
    <figure><img src="${src}" alt="Woodwork project" loading="lazy"></figure>
  `).join('');

  // Lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  if(lb && lbImg){
    gallery.addEventListener('click', e=>{
      const img = e.target.closest('img');
      if(!img) return;
      lbImg.src = img.src;
      lb.classList.add('show');
      lb.setAttribute('aria-hidden','false');
    });
    lb.addEventListener('click', e=>{
      if(e.target===lb || e.target.classList.contains('lightbox-close')){
        lb.classList.remove('show');
        lb.setAttribute('aria-hidden','true');
        lbImg.removeAttribute('src');
      }
    });
  }
}

// Services (for services.html page)
const servicesGrid = document.getElementById('servicesGrid');
if(servicesGrid){
  console.log('Services grid found:', servicesGrid);
  // Service translation mapping
  const serviceTranslations = {
    'Custom Doors': 'service-doors',
    'Kitchen Cabinets': 'service-kitchen',
    'Wardrobes': 'service-wardrobes',
    'Wall Panels': 'service-panels',
    'Majlis & Furniture': 'service-majlis',
    'Girls Workshops': 'service-workshops'
  };
  
  fetch('data/services.json')
    .then(r=>r.json())
    .then(items=>{
      console.log('Loading services into grid:', items);
      servicesGrid.innerHTML = items.map(s=>{
        const translationKey = serviceTranslations[s.title] || 'service-default';
        return `
          <article class="service-card">
            <h3 data-translate="${translationKey}-title">${s.title}</h3>
            <p data-translate="${translationKey}-desc">${s.desc}</p>
          </article>
        `;
      }).join('');
      
      // Trigger translation update after services are loaded
      setTimeout(() => {
        if (window.languageSwitcher && window.languageSwitcher.translateElements) {
          window.languageSwitcher.translateElements();
        }
      }, 300);
    })
    .catch(err => {
      console.log('Services data not loaded:', err);
      // Fallback services if JSON fails
      servicesGrid.innerHTML = `
        <article class="service-card">
          <h3 data-translate="service-doors-title">Custom Doors</h3>
          <p data-translate="service-doors-desc">Solid wood & veneer doors, frames, and trims.</p>
        </article>
        <article class="service-card">
          <h3 data-translate="service-kitchen-title">Kitchen Cabinets</h3>
          <p data-translate="service-kitchen-desc">Tailored layouts, premium hardware, refined finishes.</p>
        </article>
        <article class="service-card">
          <h3 data-translate="service-wardrobes-title">Wardrobes</h3>
          <p data-translate="service-wardrobes-desc">Built-ins with smart storage and clean lines.</p>
        </article>
        <article class="service-card">
          <h3 data-translate="service-panels-title">Wall Panels</h3>
          <p data-translate="service-panels-desc">Feature walls and acoustic paneling.</p>
        </article>
        <article class="service-card">
          <h3 data-translate="service-majlis-title">Majlis & Furniture</h3>
          <p data-translate="service-majlis-desc">Bespoke seating, tables, and display units.</p>
        </article>
      `;
      
      // Trigger translation update after fallback services are loaded
      setTimeout(() => {
        if (window.languageSwitcher && window.languageSwitcher.translateElements) {
          window.languageSwitcher.translateElements();
        }
      }, 300);
    });
}
