// ================================
// KOAT KOPI - MAIN JAVASCRIPT
// ================================

// Mobile Menu Toggle
function initMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  if (mobileToggle && navbarMenu) {
    mobileToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      mobileToggle.textContent = navbarMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu when clicking on links
    navbarMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        mobileToggle.textContent = '☰';
      });
    });
  }
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });
}

// Navbar Scroll Effect
function initNavbarScroll() {
  const navbar = document.querySelector('nav');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
      navbar?.style.boxShadow = 'var(--shadow-md)';
    } else {
      navbar?.style.boxShadow = 'var(--shadow-sm)';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

// Number Animation (for stats/counters)
function animateNumber(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 50);
  let current = start;

  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString();
      clearInterval(counter);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 50);
}

// Intersection Observer for Animations
function initIntersectionObserver() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, options);

  // Observe all menu cards and other elements
  document.querySelectorAll('.menu-card, .testimonial-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });
}

// WhatsApp Integration
function initWhatsAppButtons() {
  const whatsappNumber = '628xx'; // Update with actual number
  const whatsappBtns = document.querySelectorAll('[data-whatsapp]');

  whatsappBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const message = btn.getAttribute('data-message') || 'Halo, saya ingin memesan...';
      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
    });
  });
}

// Instagram Integration
function initInstagramButtons() {
  const instagramUsername = 'koatkopi_uad'; // Update with actual username
  const instagramBtns = document.querySelectorAll('[data-instagram]');

  instagramBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      window.open(`https://instagram.com/${instagramUsername}`, '_blank');
    });
  });
}

// Google Maps Embed
function initGoogleMap() {
  const mapElement = document.getElementById('google-map');
  if (mapElement && mapElement.hasAttribute('data-lat') && mapElement.hasAttribute('data-lng')) {
    const lat = mapElement.getAttribute('data-lat');
    const lng = mapElement.getAttribute('data-lng');https
    const mapUrl = `://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.1234567890!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKoat%20Kopi!5e0!3m2!1sid!2sid!4v1234567890`;
    mapElement.src = mapUrl;
  }
}

// Form Validation
function initFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      let isValid = true;

      form.querySelectorAll('input[required], textarea[required]').forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('error');
          isValid = false;
        } else {
          field.classList.remove('error');
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert('Mohon lengkapi semua field yang diperlukan');
      }
    });
  });
}

// Lazy Loading Images
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Scroll to Top Button
function initScrollToTop() {
  const btn = document.querySelector('.scroll-to-top');

  if (btn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        btn.style.display = 'block';
      } else {
        btn.style.display = 'none';
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// Dark Mode Toggle
function initDarkMode() {
  const darkModeToggle = document.querySelector('.dark-mode-toggle');

  if (darkModeToggle) {
    // Check for saved preference or OS preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true' ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDarkMode) {
      document.documentElement.style.colorScheme = 'dark';
    }

    darkModeToggle.addEventListener('click', () => {
      const currentMode = document.documentElement.style.colorScheme;
      const newMode = currentMode === 'dark' ? 'light' : 'dark';

      document.documentElement.style.colorScheme = newMode;
      localStorage.setItem('darkMode', newMode === 'dark');
    });
  }
}

// Element Counter Animation (for stats)
function countUpAnimation(element, finalNumber, duration = 2000) {
  const start = 0;
  const range = finalNumber - start;
  const increment = range / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= finalNumber) {
      element.textContent = finalNumber.toLocaleString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
}

// Initialize All on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('🔥 Koat Kopi Website Loaded!');

  initMobileMenu();
  initSmoothScroll();
  initNavbarScroll();
  initIntersectionObserver();
  initWhatsAppButtons();
  initInstagramButtons();
  initGoogleMap();
  initFormValidation();
  initLazyLoading();
  initScrollToTop();
  initDarkMode();
});

// Log on page load
window.addEventListener('load', () => {
  console.log('✅ All resources loaded!');
});
