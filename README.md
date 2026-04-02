# 🔥 Koat Kopi UAD - Website Landing Page

**Ngopi Murah, Nongkrong Mewah** ☕

Website landing page yang clean, modern, dan catchy untuk kedai kopi murah Koat Kopi UAD. Didesain khusus untuk menarik mahasiswa dengan konsep "Warm Coffee Street Vibes".

---

## 📋 Daftar Isi

- [Features](#features)
- [Teknologi](#teknologi)
- [Struktur Proyek](#struktur-proyek)
- [Cara Menggunakan](#cara-menggunakan)
- [Kustomisasi](#kustomisasi)
- [Browser Support](#browser-support)
- [License](#license)

---

## ✨ Features

### ✅ Sudah Implemented
- ✓ Hero Section dengan CTA yang menarik
- ✓ Menu dynamis dengan 3 kategori (Kopi, Non-Kopi, Makanan)
- ✓ Best Seller Section dengan destaque items
- ✓ Location Section dengan Google Maps embed
- ✓ Gallery Section untuk showcase
- ✓ Testimonial Section dengan review positive
- ✓ Responsive design (Mobile First)
- ✓ Dark mode support
- ✓ Smooth scroll & animations
- ✓ WhatsApp & Instagram integration
- ✓ Mobile-friendly navbar dengan hamburger menu

### 🚀 Features yang Bisa Ditambah
- [ ] Admin dashboard untuk manage menu
- [ ] Online ordering system
- [ ] Payment gateway integration
- [ ] Customer loyalty program
- [ ] Analytics dashboard
- [ ] Blog/News section
- [ ] Multi-language support

---

## 🛠️ Teknologi

**Stack:**
- HTML5
- CSS3 (dengan CSS Variables & Grid)
- Vanilla JavaScript (ES6+)
- JSON untuk data menu
- Google Maps API (embed)

**Tidak perlu external framework!** Semua built from scratch untuk performa maksimal.

---

## 📁 Struktur Proyek

```
WEBKOATCOFFEE/
│
├── index.html                    # Landing page utama
├── README.md                     # Dokumentasi ini
│
├── assets/
│   ├── css/
│   │   ├── style.css            # CSS utama + color scheme
│   │   └── responsive.css       # Mobile responsive rules
│   │
│   ├── js/
│   │   ├── main.js              # Core functionality (mobile menu, scroll, dll)
│   │   └── menu.js              # Menu system & dynamic loading
│   │
│   ├── images/
│   │   ├── hero/                # Hero section images
│   │   ├── menu/                # Product images
│   │   ├── gallery/             # Gallery images
│   │   └── logo.png             # Brand logo
│   │
│   └── fonts/                   # Font files (jika perlu custom font)
│
├── components/
│   ├── navbar.html              # Navbar component
│   ├── footer.html              # Footer component
│   └── card-menu.html           # Menu card component
│
├── data/
│   └── menu.json                # Menu data (JSON format)
│
└── pages/
    └── menu/
        ├── coffee.html          # Coffee menu page
        ├── non-coffee.html      # Non-coffee menu page
        └── food.html            # Food menu page
```

---

## 🎨 Color Scheme

```css
/* Primary Colors */
--color-coffee: #6F4E37      /* Warm brown coffee */
--color-cream: #F5E6D3       /* Soft cream background */
--color-blue: #2C5F8D        /* Modern blue accent */
--color-red-accent: #E63946  /* Red for badges */
--color-dark: #1a1a1a        /* Dark text */
--color-light: #F9F7F4       /* Light background */
```

---

## 🚀 Cara Menggunakan

### 1. Setup Lokal

```bash
# Clone atau download project
cd WebKoatCoffee

# Open di browser
# Buka index.html di browser atau gunakan live server
```

### 2. Live Server (Recommended)
Install VS Code extension "Live Server" dan click "Go Live".

### 3. Update Menu Data

Edit file `data/menu.json`:

```json
{
  "coffee": [
    {
      "id": 1,
      "name": "Espresso",
      "price": 10000,
      "description": "Kopi murni yang kuat dan nikmat",
      "image": "espresso.jpg",
      "badge": null
    }
  ]
}
```

### 4. Update WhatsApp Number

Di `assets/js/main.js`, update nomor WhatsApp:

```javascript
const whatsappNumber = '628xx'; // Update ke nomor Kamu!
```

### 5. Update Instagram Username

Di `assets/js/main.js`, update username Instagram:

```javascript
const instagramUsername = 'koatkopi_uad'; // Update ke Instagram Kamu!
```

---

## 🎯 Kustomisasi

### Mengubah Warna

Edit `:root` di `assets/css/style.css`:

```css
:root {
  --color-coffee: #6F4E37;    /* Coklat kopi */
  --color-cream: #F5E6D3;     /* Cream */
  --color-blue: #2C5F8D;      /* Biru brand */
  /* ... variables lainnya */
}
```

### Mengubah Typography

```css
:root {
  --font-heading: 'Poppins', 'Montserrat', sans-serif;
  --font-body: 'Segoe UI', 'Roboto', sans-serif;
}
```

### Menambah Menu Baru

1. Edit `data/menu.json`
2. Atau edit langsung di `assets/js/menu.js` di function `loadFallbackMenuData()`

### Mengubah Location/Jam Operasional

Edit di `index.html` section "LOCATION SECTION":

```html
<p>Umbulharjo, Yogyakarta 55161</p>
<p>Setiap hari dari jam 08:00 - 22:00 WIB</p>
```

---

## 📊 Key Sections Breakdown

### 1. Hero Section
- Headline yang catchy: "Ngopi Murah, Nongkrong Mewah"
- Subtitle: "Mulai dari 10K aja!"
- CTA buttons: Order & Lihat Menu
- Background gradient aesthetic

### 2. Menu Section
- Category filter: Coffee, Non-Coffee, Food
- Dynamic card display
- Badge untuk bestseller
- Click-to-order dengan WhatsApp

### 3. Best Seller Section
- Dark background dengan gradient
- 3 items utama yang dipromosikan
- Price display menarik
- Call-to-action yang jelas

### 4. Location Section
- Google Maps embed
- Operating hours
- Service info (dine-in, takeaway, delivery)
- Alamat detail

### 5. Gallery Section
- Image grid (3 columns on desktop)
- Hover effects
- Responsive pada mobile

### 6. Testimonial Section
- Customer reviews
- Star ratings
- Author name
- Cream background aesthetic

### 7. CTA Section
- Final call-to-action
- Multiple order options
- Gradient background

---

## 💻 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| Opera | Latest | ✅ Full |
| IE 11 | - | ❌ Not Supported |

---

## 📱 Responsive Breakpoints

```css
/* Tablet: <= 768px */
/* Mobile: <= 480px */
/* Super Small (360px): <= 360px */
```

---

## 🔧 JavaScript Utilities

### Mobile Menu Toggle
```javascript
initMobileMenu()
```

### Smooth Scroll
```javascript
initSmoothScroll()
```

### WhatsApp Integration
```javascript
<!-- Add data-whatsapp to button -->
<button data-whatsapp data-message="Custom message">Order</button>
```

### Instagram Integration
```javascript
<!-- Add data-instagram to link/button -->
<button data-instagram>Follow</button>
```

---

## 🎬 Animation Effects

- **Fade-in on scroll**: Menu cards, testimonials
- **Hover effects**: Cards, buttons, links
- **Smooth transitions**: All interactive elements
- **Stagger animation**: Menu items load dengan delay

---

## 📈 Performance Tips

1. **Lazy Load Images**: Gunakan `data-src` untuk images
2. **Minify CSS/JS**: Untuk production
3. **Compress Images**: Optimize ukuran image
4. **Cache Busting**: Tambah version query string
5. **CDN**: Untuk production deployment

---

## 🚀 Deployment

### Opsi 1: GitHub Pages
```bash
# Push ke GitHub
# Enable GitHub Pages di settings
# Domain: username.github.io/WebKoatCoffee
```

### Opsi 2: Netlify
```bash
# Drag & drop folder ke Netlify
# Automatic builds & deployments
```

### Opsi 3: Vercel
```bash
# Connect GitHub repo
# Auto-deploy on push
```

### Opsi 4: Traditional Hosting
```bash
# Upload via FTP ke hosting provider
# Point domain ke folder public_html
```

---

## 📝 License

© 2024 Koat Kopi UAD. All rights reserved.

Made with ❤️ for Coffee Lovers 🔥

---

## 👨‍💻 Developer Notes

### TODO untuk Production:
- [ ] Update WhatsApp number
- [ ] Update Instagram username
- [ ] Add real images
- [ ] Update location coordinates
- [ ] Setup Google Analytics
- [ ] Add favicon
- [ ] Test di semua browser
- [ ] Optimize images
- [ ] Setup email contact form
- [ ] Add structured data (Schema.org)

### Additional Resources:
- [HTML Best Practices](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Web Accessibility](https://www.w3.org/WAI/)

---

## 📞 Support & Feedback

Punya pertanyaan atau suggestion? Bisa langsung:
- 💬 Message ke WhatsApp
- 📱 DM Instagram
- ✉️ Email ke contact Kamu

---

**Happy Coding! 🔥☕**
