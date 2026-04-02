# 🚀 QUICK START GUIDE - Koat Kopi Website

## ⚡ Langkah-Langkah Setup (5 Menit)

### 1️⃣ **Buka Website Lokal**
```bash
# Di VS Code, install extension "Live Server"
# Klik kanan di index.html → "Open with Live Server"
# atau
# Tekan Alt + L + O
```

**Hasilnya:**
- Website akan terbuka di browser otomatis
- Setiap kali kamu save file, page refresh otomatis ✨

---

### 2️⃣ **Update WhatsApp Number**

File: `assets/js/main.js` (cari baris ~20)

```javascript
// SEBELUM
const whatsappNumber = '628xx';

// SESUDAH
const whatsappNumber = '628123456789'; // Update dengan nomor kamu!
```

**Test:** Klik tombol "Order Sekarang" → harus membuka WhatsApp

---

### 3️⃣ **Update Instagram Username**

File: `assets/js/main.js` (cari baris ~26)

```javascript
// SEBELUM
const instagramUsername = 'koatkopi_uad';

// SESUDAH
const instagramUsername = 'username_instagram_kamu'; // Update!
```

**Test:** Klik tombol "Follow Instagram" → harus membuka Instagram

---

### 4️⃣ **Update Menu Data (JSON)**

File: `data/menu.json`

```json
{
  "coffee": [
    {
      "id": 1,
      "name": "Espresso",
      "price": 10000,
      "description": "Kopi murni yang kuat dan nikmat",
      "image": "espresso.jpg",
      "badge": null  // atau "🔥 Favorit" untuk destaque
    }
  ]
}
```

**Cara Menambah Item:**
1. Copy salah satu item di array
2. Ubah `id`, `name`, `price`, `description`
3. Save file
4. Refresh browser

---

### 5️⃣ **Update Informasi Lokasi**

File: `index.html` (cari "LOCATION SECTION")

```html
<!-- UBAH INI -->
<p>Umbulharjo, Yogyakarta 55161<br>
Dekat dengan Universitas Ahmad Dahlan</p>

<p>Setiap hari dari jam 08:00 - 22:00 WIB</p>

<!-- JADI INI (sesuai bisnis Kamu) -->
<p>Alamat Toko Kamu<br>
Area / Landmark Terdekat</p>

<p>Jam operasional Kamu</p>
```

---

## 🎨 Kustomisasi Warna

File: `assets/css/style.css` (cari `:root { }`)

```css
:root {
  /* Ganti warna utama */
  --color-coffee: #6F4E37;      /* Warna coklat kopi */
  --color-cream: #F5E6D3;       /* Warna background cream */
  --color-blue: #2C5F8D;        /* Warna aksen biru */
  
  /* Contoh: Ganti to warna lain */
  /* --color-coffee: #8B4513; */  /* Coklat lebih gelap */
  /* --color-blue: #1ABC9C; */    /* Biru tosca */
}
```

**Color Picker:** https://www.color-hex.com/

---

## 📝 Struktur File Penting

```
WebKoatCoffee/
├── index.html              ← MAIN PAGE (yang paling penting)
├── menu.html               ← Halaman menu terpisah
├── about.html              ← Tentang kami
├── contact.html            ← Kontak & lokasi
│
├── assets/
│   ├── css/
│   │   ├── style.css       ← Edit untuk styling
│   │   └── responsive.css  ← Mobile responsive
│   │
│   ├── js/
│   │   ├── main.js         ← Edit untuk logic
│   │   └── menu.js         ← Edit untuk menu system
│   │
│   └── images/             ← Folder untuk foto
│
├── data/
│   └── menu.json           ← Edit untuk menu data
│
└── components/             ← Reference component
```

---

## 🎯 Hal-Hal yang Ingin Diubah?

### ❓ Bagaimana Ganti Warna Background?

**Jawab:** Di `style.css`, cari `--color-light: #F9F7F4;` dan ganti dengan warna yang diinginkan.

### ❓ Bagaimana Ubah Nama Bisnis?

**Jawab:**
1. `index.html` → cari "Koat" → ganti jadi "Nama Bisnis Kamu"
2. `assets/js/main.js` → konsisten dengan nama yang diubah

### ❓ Bagaimana Tambah Logo?

**Jawab:**
1. Simpan logo (`logo.png`) di `assets/images/`
2. Di navbar, ganti `☕ Koat<span>Kopi</span>` dengan:
   ```html
   <img src="assets/images/logo.png" alt="Logo" style="height: 30px;">
   ```

### ❓ Bagaimana Hapus Section Tertentu?

**Jawab:** Hapus section `<section>...</section>` di `index.html`

Contoh, hapus testimonial:
```html
<!-- Hapus section ini -->
<section class="testimonials section">
  ...
</section>
```

---

## ✅ Checklist Sebelum Deploy

- [ ] Update WhatsApp number di `main.js`
- [ ] Update Instagram username di `main.js`
- [ ] Update menu data di `menu.json`
- [ ] Update lokasi & jam di `index.html`
- [ ] Ganti warna sesuai branding (opsional)
- [ ] Test semua button dari mobile & desktop
- [ ] Test WhatsApp link → seharusnya buka WhatsApp
- [ ] Test Instagram link → seharusnya buka Instagram

---

## 🌐 Testing Checklist

### Desktop
- [ ] Buka `index.html` di Chrome → smooth?
- [ ] Buka di Firefox → smooth?
- [ ] Buka di Safari → smooth?
- [ ] Hover button → color change?
- [ ] Scroll animation → smooth?

### Mobile
- [ ] Buka dengan iPhone → responsive?
- [ ] Buka dengan Android → responsive?
- [ ] Hamburger menu → berfungsi?
- [ ] Button order → buka WhatsApp?

---

## 🚀 Cara Deploy (Upload ke Internet)

### Option 1: GitHub Pages (Gratis + Domain Subgithub) ⭐

```bash
# 1. Buat repo baru di GitHub: WebKoatCoffee
# 2. Push project
git init
git add .
git commit -m "Initial commit"
git push origin main

# 3. Setting di GitHub:
# Settings → Pages → Branch: main → Save
# Domain akan: yourusername.github.io/WebKoatCoffee
```

### Option 2: Netlify (Gratis + Domain Custom)

```bash
# 1. Drag & drop folder ke netlify.com
# 2. Done! Auto-deploy every push to GitHub
```

### Option 3: Hosting Tradisional (Berbayar)

1. Beli hosting dari Hostinger, Niagahoster, dll
2. Upload via FTP
3. Point domain ke hosting

---

## 📚 CSS Color Reference

```css
/* Color Palette Koat Kopi */
--color-coffee: #6F4E37      /* Main color */
--color-cream: #F5E6D3       /* Background */
--color-blue: #2C5F8D        /* Accent */
--color-red-accent: #E63946  /* Alert/badge */
--color-dark: #1a1a1a        /* Text dark */
--color-light: #F9F7F4       /* Light bg */
```

**Kamu bisa ganti dengan:**
- Warna terang: RGB format
- Contoh: `#FF6B6B`, `#4ECDC4`, `#95E1D3`
- Tool: [HTML Color Codes](https://htmlcolorcodes.com/)

---

## 🔥 Pro Tips

1. **Live Server Extension**: Pakai Live Server di VS Code untuk auto-refresh
2. **DevTools**: Press `F12` untuk inspect & debug
3. **Mobile Test**: Inspect → Toggle device → test di mobile view
4. **Responsive**: Test di width: 1920px, 768px, 480px
5. **Performance**: Optimize images dengan TinyPNG.com

---

## ❓ Troubleshooting

### Problem: WhatsApp link tidak berfungsi

**Solusi:** Pastikan format nomor benar: `628xxxxxxxxxx` (62 bukan 0)

### Problem: Menu tidak muncul

**Solusi:** Check console (F12) → ada error? Fix error tersebut

### Problem: Gambar tidak muncul

**Solusi:** Check path image di `src`. Path harus relative dari file HTML

### Problem: Mobile responsive tidak OK

**Solusi:** Check `responsive.css` → adjust breakpoints

---

## 📞 Contoh Implementasi

### Update Menu dengan 1 Item Baru

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
    },
    // ← TAMBAH INI (BARU)
    {
      "id": 5,
      "name": "Kopi Tubruk",
      "price": 8000,
      "description": "Kopi tradisional yang nikmat",
      "image": "tubruk.jpg",
      "badge": null
    }
  ]
}
```

Save → Refresh browser → Selesai! Item baru muncul di menu ✨

---

## 🎓 Next Level (Optional)

### Ingin tambah fitur?

- [ ] **Search menu** → Sudah ada di `menu.js` function `searchMenuItems()`
- [ ] **Filter by price** → Add di `menu.js`
- [ ] **Cart system** → Tambah localStorage
- [ ] **Admin panel** → Kompleks, gunakan Next.js atau React
- [ ] **Payment gateway** → Gunakan Snap Midtrans atau Stripe

---

## 🎉 SELAMAT!

Website kamu sudah jadi! Berikutnya tinggal:
1. Update info sesuai bisnis kamu
2. Test di semua device
3. Deploy ke internet
4. Share ke teman-teman! 🔥

---

**Butuh bantuan?**
- Baca documentation di `README.md`
- Cek `components/` folder untuk reference code
- Test di browser untuk lihat hasilnya

**Happy Coding! ☕✨**
