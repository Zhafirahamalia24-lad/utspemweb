cat > README.md << 'EOF'
# Property Next.js Website — Implementasi Lengkap

> Dokumen ini adalah panduan lengkap pembuatan website menggunakan template *Property (Tailwind + Next.js)* dari ThemeWagon. Isi dokumen memuat ide kasus, struktur proyek, langkah setup, contoh file kode utama (React/Next.js + Tailwind), pengaturan Tailwind, integrasi kontak, deployment (Vercel), dan contoh dokumentasi laporan agar bisa langsung dikumpulkan.

---

## 1. Ringkasan Ide dan Kasus

Saya membuat sebuah website listing properti bernama **PropertiKu** yang bertujuan menjadi landing page dan katalog properti (rumah, apartemen, ruko) untuk agen properti lokal. Fitur inti yang diimplementasikan adalah halaman beranda (hero, fitur), daftar properti (grid), detail properti (page dynamic), blog singkat, halaman tentang, kontak dengan form, dan mode gelap/terang.

Tujuan utama: menyajikan aset properti dengan performa baik, SEO dasar, UI responsif mobile-first, dan pengalaman yang mudah untuk agen memperbarui data lewat file JSON atau headless CMS.

---

## 2. Fitur yang Diimplementasikan

1. Halaman Beranda dengan hero, CTA, dan ringkasan listing.
2. Daftar properti (filter sederhana berdasarkan tipe dan harga).
3. Halaman detail properti (dynamic route `/properties/[slug]`).
4. Komponen ulang pakai: Header, Footer, PropertyCard, SearchBar, ContactForm.
5. Kontak bekerja (API route Next.js mengirim ke email via service / menyimpan di file selama dev).
6. Dukungan dark mode, responsive, optimasi gambar Next/Image.
7. Dokumentasi pengujian dan deployment ke Vercel.

---

## 3. Struktur Projek (direkomendasikan)

