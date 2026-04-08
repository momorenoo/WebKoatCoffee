# 📱 Setup WhatsApp & Instagram Integration

## Bagaimana Cara Mengintegrasikan WhatsApp dan Instagram?

Sudah terintegrasi otomatis! Setiap file HTML memiliki elemen tersembunyi yang menyimpan nomor WhatsApp dan username Instagram Anda.

## Cara Mengubah Nomor WhatsApp

Buka file HTML yang ingin Anda ubah (index.html, menu.html, about.html, contact.html) dan cari baris berikut:

```html
<div id="whatsapp-number" style="display: none;">08895880118</div>
```

Ganti `08895880118` dengan nomor WhatsApp Anda (gunakan format: 62xxxxxxxxxx atau 08xxxxxxxxxx)

**Contoh:**
- Format internasional: `628895880118` (tanpa 0 didepan)
- Format lokal: `08895880118` (dengan 0 didepan)

## Cara Mengubah Username Instagram

Buka file HTML yang ingin Anda ubah dan cari baris berikut:

```html
<div id="instagram-username" style="display: none;">koatkopi_uad</div>
```

Ganti `koatkopi_uad` dengan username Instagram Anda (tanpa @)

**Contoh:**
```html
<div id="instagram-username" style="display: none;">koatkopi_uad</div>
```

## File Mana Saja yang Perlu Diubah?

Untuk konsistensi, ubah di semua file berikut:
1. ✅ `index.html`
2. ✅ `menu.html`
3. ✅ `about.html`
4. ✅ `contact.html`
5. ✅ `components/footer.html`

## Apa Yang Terjadi Setelah Diubah?

Semua tombol dan link dengan `data-whatsapp` dan `data-instagram` akan otomatis menggunakan data terbaru Anda:

- **WhatsApp buttons**: Ketika diklik, akan membuka WhatsApp dengan nomor Anda
- **Instagram buttons**: Ketika diklik, akan membuka profil Instagram Anda di browser

## Testing

Setelah mengubah nomor/username:
1. Refresh halaman website
2. Klik tombol WhatsApp atau Instagram
3. Pastikan terbuka dengan akun yang benar

## Catatan Teknis

- WhatsApp dapat menggunakan format `08xxxxxxxxxx` atau `62xxxxxxxxxx`
- Instagram username harus tanpa `@` (cth: gunakan `koatkopi_uad` bukan `@koatkopi_uad`)
- Semua perubahan bersifat otomatis - tidak perlu mengubah JavaScript kode
