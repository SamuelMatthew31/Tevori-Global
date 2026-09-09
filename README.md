# PT Tevori Global - Company Profile & Digital Sourcing Portal

> **Architecture Flow, CMS Integration & Developer Guide**  
> *Official repository for PT Tevori Global headless CMS & Nuxt 4 frontend.*

---

## 1. System Architecture Flow

Aplikasi ini mengadopsi arsitektur modern **Headless CMS Jamstack / SSR**:

```text
[ Your Admin Panel ] ──(CRUD Updates)──> [ Sanity Free Cloud API ] ──> [ Nuxt Frontend (Vercel) ] ──> [ Global B2B Buyer ]
```

### Penjelasan Alur (Flow):

1. **[ Your Admin Panel ] (Sanity Studio v3):**
   - Panel dashboard visual untuk tim internal PT Tevori Global melakukan Create, Read, Update, dan Delete (CRUD) konten tanpa menyentuh kode.
   - Mengelola katalog produk ekspor, artikel edukasi/insights, profil perusahaan, testimonial, dan kategori bisnis.
   - Berada di dalam folder `tevori-studio/` dan dijalankan terpisah secara lokal atau di-deploy ke Sanity Cloud.

2. **[ Sanity Free Cloud API ] (Sanity Content Lake):**
   - Database cloud global web hooks gratis dan real-time dari Sanity.io yang menyimpan dokumen JSON, asset gambar, dan media.
   - Menyediakan GraphQL & GROQ query API super cepat dengan CDN cache global.

3. **[ Nuxt Frontend (Vercel) ]:**
   - Frontend modern berbasis **Nuxt 4** (Vue 3, Vite) + **Tailwind CSS v4** yang di-deploy di Vercel.
   - Mendukung Server-Side Rendering (SSR) & kapabilitas hybrid rendering untuk kecepatan loading maksimal dan SEO optimal bagi calon buyer internasional di Google.
   - Mengambil data dengan GROQ, library fetching native Nuxt, dan klien Sanity yang dikonfigurasi khusus.
   - Dilengkapi **Graceful Fallback**: Jika koneksi Sanity offline atau credential file belum diisi dengan benar, web ini otomatis menampilkan dummy content (offline dataset fallback di `src/data/`) sehingga sistem tidak akan pernah crash.

4. **[ Global B2B Buyer ]:**
   - Pengalaman belanja B2B yang bersih, responsif di semua perangkat (mobile, tablet, desktop).
   - Dilengkapi Call-to-Action seperti **Request Quotation (RFQ) via WhatsApp** dengan template teks pembelian produk.

---

## 2. Struktur Direktori & Skema CMS

```text
tevori_global/
├── tevori-studio/                  # Konfigurasi Schema Sanity Studio v3 (Admin Panel) berbasis TypeScript
│   ├── schemaTypes/
│   │   ├── product.ts              # Skema Katalog Produk Ekspor (SKU, Specs, MOQ, Foto)
│   │   └── index.ts                # Registrasi keseluruhan koleksi schema Sanity
│   ├── sanity.config.ts            # Konfigurasi Sanity Studio v3 & Plugin Vision
│   └── sanity.cli.ts               # Konfigurasi basis CLI CLI Sanity
├── src/                            # Direktori Aplikasi Utama (Nuxt 4 Frontend Codebase)
│   ├── App.vue                     # Master layout template (Navbar, Halaman Routing, Footer)
│   ├── pages/                      # Routing URL otomatis Nuxt berbasis struktur folder 
│   │   ├── index.vue               # Beranda utama (One-page landing section)
│   │   ├── products/               # Galeri Katalog interaktif dengan filter
│   │   └── insights/               # Daftar artikel wawasan industri
│   ├── components/                 # Komponen UI modular independen (Cards, Buttons, Layout)
│   ├── sections/                   # Komponen pembungkus bagian besar spesifik per halaman (Hero, About)
│   ├── composables/                # Reusable Vue 3 Composition API (Misal: useSanityData)
│   ├── stores/                     # State management global
│   ├── services/                   # Layer API caller ke Sanity / backend lainnya
│   ├── utils/                      # Helper script (Sanity image builder, content parser)
│   ├── constants/                  # Preset warna, opsi filter dan list static
│   ├── data/                       # Dataset tiruan lokal (Fallback dataset & dummy offline)
│   ├── assets/                     # Styles, CSS global Tailwind v4
│   └── server/                     # Layer Nuxt Nitro API endpoints backend untuk API proxying
├── nuxt.config.js                  # Konfig Nuxt 4 (SrcDir, App Head, Nuxt SEO, & Vite-Tailwind setup)
├── package.json                    # Kumpulan script `npm run dev/build` dan dependensi utama app
└── .env.example                    # Template standard environment local frontend variable
```

---

## 3. Panduan Menjalankan Project

Repositori ini terdiri dari aplikasi **Frontend (Nuxt)** dan **Admin Panel (Sanity Studio)** yang dikelola dalam struktur *monorepo-style*, berjalan pada proses dan folder yang berbeda.

### Prasyarat Umum:
- **Node.js**: Versi `>= 22.18.0` atau `>= 24.12.0` (Sesuai spesifikasi `engines` environment v22+)
- **NPM**: Versi `>= 9.0.0`

### A. Menjalankan Aplikasi Utama (Frontend Web)

1. **Pastikan berada di folder direktori proyek Frontend Utama:**
   Lokasi *root folder* berada di base repository `tevori_global/`.

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Setup Environment Variables Frontend:**
   Salin file dari `.env.example` lalu ubah menjadi bernama `.env`:
   ```bash
   cp .env.example .env
   ```
   *(Opsional)* Buka file `.env` dan lengkapi dengan Project ID Sanity anda jika server frontend ingin mengambil data langsung dari Cloud:
   ```env
   SANITY_PROJECT_ID=your-project-id
   SANITY_DATASET=production
   ```
   *(Penting: Jika variabel `SANITY_PROJECT_ID` tidak dibuat/dikosongkan, situs ini otomatis berpindah ke **Offline Fallback Data** dan Web tetap berjalan normal tanpa Sanity).*

4. **Jalankan Frontend Live Server:**
   ```bash
   npm run dev
   ```
   Buka web browser dan akses halaman melalui tautan: `http://localhost:3000`

### B. Menjalankan CMS Admin Panel (Sanity Studio)

Berbeda dengan sistem lama, Sanity Panel kini dirancang sepenuhnya *self-contained* pada direktori `tevori-studio`.

1. **Masuk ke folder direktori panel admin:**
   ```bash
   cd tevori-studio
   ```

2. **Install Dependencies Sanity Panel:**
   ```bash
   npm install
   ```

3. **Jalankan Studio Server:**
   ```bash
   npm run dev
   ```
   Buka panel admin melalui port independennya, biasanya di tautan `http://localhost:3333`. (Gunakan akun koleaborator admin Sanity yang valid untuk login masuk CMS).

---

## 4. Deploy ke Vercel (Production)

Proyek ini telah dikonfigurasi supaya *plug-and-play* ketika akan di-deploy ke Internet (Vercel).

1. Push commit keseluruhan repository ini ke GitHub / GitLab.
2. Buka dashboard [Vercel](https://vercel.com) dan pilih **Add New Project \u2192 Import Project**.
3. Vercel akan otomatis mendeteksi source framework ini sebagai proyek **Nuxt** dan mem-parsing command builder-nya.
4. Masukkan **Environment Variables** utama di Dashboard Deploy Vercel:
   - `SANITY_PROJECT_ID`: (Wajib diisi sesuai dengan ID project Sanity Cloud produksi Anda)
   - `SANITY_DATASET`: `production`
5. Klik **Deploy**! Proses ini akan membuat static caching (ISR/SSR) framework Nuxt ke CDN edge deployment global secepat kilat.
