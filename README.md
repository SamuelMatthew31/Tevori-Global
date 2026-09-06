# PT Tevori Global - Company Profile & Digital Sourcing Portal

> **Architecture Flow, CMS Integration & Developer Guide**  
> *Official repository for PT Tevori Global headless CMS & Nuxt 3 frontend.*

---

## 1. System Architecture Flow

Aplikasi ini mengadopsi arsitektur modern **Headless CMS Jamstack / SSR**:

```
[ Your Admin Panel ] ──(CRUD Updates)──> [ Sanity Free Cloud API ] ──> [ Nuxt Frontend (Vercel) ] ──> [ Global B2B Buyer ]
```

### Penjelasan Alur (Flow):

1. **[ Your Admin Panel ] (Sanity Studio v3):**
   - Panel dashboard visual untuk tim internal PT Tevori Global melakukan Create, Read, Update, dan Delete (CRUD) konten tanpa menyentuh kode.
   - Mengelola katalog produk ekspor, artikel edukasi/insights, profil perusahaan, testimonial, dan kategori bisnis.
   - Dijalankan secara lokal dengan `npm run studio:dev` atau di-deploy gratis ke `*.sanity.studio` dengan `npm run studio:deploy`.

2. **[ Sanity Free Cloud API ] (Sanity Content Lake):**
   - Database cloud global gratis dan real-time dari Sanity.io yang menyimpan dokumen JSON, asset gambar, dan media.
   - Menyediakan GraphQL & GROQ query API super cepat dengan CDN cache global.

3. **[ Nuxt Frontend (Vercel) ]:**
   - Frontend modern berbasis **Nuxt 3** + **Tailwind CSS v4** yang di-deploy di Vercel.
   - Mendukung Server-Side Rendering (SSR) & Incremental Static Regeneration (ISR) untuk kecepatan loading maksimal dan SEO optimal bagi calon buyer internasional di Google.
   - Menggunakan `@nuxtjs/sanity` dan GROQ untuk menarik data langsung dari Sanity Cloud API secara real-time.
   - Dilengkapi **Graceful Fallback**: Jika koneksi Sanity offline atau credential belum diisi, website otomatis menggunakan data lokal sehingga sistem tidak pernah crash/blank.

4. **[ Global B2B Buyer ]:**
   - Pengalaman belanja B2B yang bersih, responsif di semua perangkat (mobile, tablet, desktop).
   - Dilengkapi tombol otomatis **Request Quotation (RFQ) via WhatsApp** dengan pesan yang telah terformat rapi sesuai SKU barang.

---

## 2. Struktur Direktori & Skema CMS

```
tevori_global/
├── sanity/                     # Konfigurasi Schema Sanity Studio (Admin Panel)
│   ├── schemas/
│   │   ├── category.js         # Skema Kategori Produk (Furniture, Komoditi, Kerajinan)
│   │   ├── product.js          # Skema Katalog Produk Ekspor (SKU, Specs, MOQ, Foto)
│   │   ├── insight.js          # Skema Artikel Berita & Regulasi Ekspor
│   │   ├── companyInfo.js      # Skema Profil & Kontak Perusahaan
│   │   ├── testimonial.js      # Skema Review & Testimoni Mitra
│   │   ├── service.js          # Skema 3 Pilar Layanan Utama
│   │   └── index.js            # Registrasi seluruh schema
│   ├── sanity.config.js        # Konfigurasi Sanity Studio v3 & Plugin Vision
│   └── sanity.cli.js           # Konfigurasi CLI Sanity
├── src/                        # Nuxt 3 Frontend Codebase
│   ├── app.vue                 # Master layout template (Navbar, NuxtPage, Footer)
│   ├── pages/                  # Routing otomatis Nuxt 3
│   │   ├── index.vue           # Beranda utama (One-page landing section)
│   │   ├── products/
│   │   │   └── index.vue       # Galeri Katalog interaktif dengan Filter & Pencarian
│   │   └── insights/
│   │       ├── index.vue       # Daftar artikel wawasan industri
│   │       └── [slug].vue      # Halaman detail baca artikel
│   ├── components/             # Komponen UI modular
│   │   ├── cards/              # ProductCard, ServiceCard, TestimonialCard, InsightCard
│   │   ├── layout/             # Navbar (dengan burger menu & smooth scroll) & Footer
│   │   └── products/           # ProductSearch, ProductFilters
│   ├── composables/
│   │   └── useSanityData.js    # Data-fetching GROQ ke Sanity API dengan fallback
│   ├── stores/
│   │   └── productStore.js     # State management reactive untuk search & filter
│   ├── utils/
│   │   ├── sanity.js           # Sanity Client & Image URL Builder
│   │   └── formatters.js       # Generator pesan WhatsApp RFQ & pemotong teks
│   └── data/                   # Mock fallback data (High-fidelity offline dataset)
├── nuxt.config.js              # Konfigurasi Nuxt 3, Tailwind v4, & @nuxtjs/sanity
└── .env.example                # Template variabel environment Sanity
```

---

## 3. Panduan Menjalankan Project

### Prasyarat:
- **Node.js**: Versi `>= 18.0.0` (Rekomendasi v20+ atau v22+)
- **NPM**: Versi `>= 9.0.0`

### Langkah 1: Install Dependencies
```bash
npm install
```

### Langkah 2: Setup Environment Variables
Salin file template `.env.example` menjadi `.env`:
```bash
cp .env.example .env
```
Isi dengan Project ID Sanity Anda:
```env
SANITY_PROJECT_ID=your-project-id
SANITY_DATASET=production
SANITY_API_VERSION=2024-01-01
```
*(Catatan: Jika belum memiliki akun Sanity, biarkan default, website akan otomatis berjalan menggunakan sistem Local Fallback)*.

### Langkah 3: Menjalankan Nuxt Frontend
```bash
npm run dev
```
Buka browser pada: `http://localhost:3000`

### Langkah 4: Menjalankan Admin Panel (Sanity Studio)
```bash
npm run studio:dev
```
Buka browser pada: `http://localhost:3333`  
Di panel ini, tim admin dapat menambah, mengedit, dan menghapus produk, artikel, dan profil PT Tevori Global secara instan!

---

## 4. Deploy ke Vercel (Production)

1. Push repository ini ke GitHub / GitLab.
2. Buka dashboard [Vercel](https://vercel.com) dan pilih **Import Project**.
3. Vercel akan otomatis mendeteksi framework **Nuxt**.
4. Masukkan **Environment Variables** di Vercel:
   - `SANITY_PROJECT_ID`: ID project Sanity Anda
   - `SANITY_DATASET`: `production`
5. Klik **Deploy**! Website akan live dalam hitungan detik dengan performa edge global.
