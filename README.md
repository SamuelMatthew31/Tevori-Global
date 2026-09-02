# PT Tevori Global — Company Profile & Digital Sourcing Portal

> **Product Requirement Document (PRD) & Developer Onboarding Guide**  
> *Official repository for PT Tevori Global web platform prototype.*

---

## 1. Project Overview & Business Background

**PT Tevori Global** is a professional export and buyer's agent enterprise headquartered in Denpasar, Bali, Indonesia. The company specializes in sourcing high-quality Indonesian commodities and manufactured goods, bridging verified local suppliers and manufacturers with international buyers worldwide.

- **Tagline:** *Your Trusted Partner in Global Sourcing*
- **Primary Pillars:**
  1. **Furniture:** Custom craftsmanship and bulk furniture procurement.
  2. **Komoditi Alam (Natural Commodities):** Premium natural raw materials and agricultural commodities.
  3. **Kerajinan Seni (Authentic Arts & Crafts):** Handcrafted decorative items and authentic Indonesian artisan goods.
- **Brand Color:** #737474 (Sophisticated Neutral Slate / Gray)

---

## 2. Product Requirement Document (PRD)

### 2.1. Objectives & Goals
- Present a **modern, minimalist, and uncluttered** digital presence that communicates reliability, trust, and international standard compliance.
- Facilitate seamless B2B & B2C inquiries and **Request Quotation (RFQ)** workflows via direct WhatsApp & email communication channels.
- Establish a clean, scalable architectural foundation ready for Phase 2 (Fullstack dynamic catalog, inventory tracking, multi-currency pricing, and quotation approval systems).

### 2.2. Target Audience
- **International B2B Importers & Retailers:** Looking for dependable procurement partners in Indonesia with quality assurance and export handling capabilities.
- **B2C & Direct Clients:** Seeking bespoke orders or smaller volume procurements.
- **Local Verified Suppliers & Artisans:** Partnering to distribute their products globally.

### 2.3. Design & UX Principles
- **Minimalist & Breathing Room:** Ample whitespace to avoid cramped layouts.
- **Direct & Clear Navigation:** Smooth scrolling to key sections (*Beranda*, *Tentang Kami*, *Layanan*, *Kontak*) and dedicated routes for *Katalog Produk*.
- **Responsive & Mobile-First:** Fluid layouts across smartphone, tablet, and desktop screens.

### 2.4. Phased Roadmap

| Phase | Scope | Status |
|---|---|---|
| **Phase 1 (Current)** | Interactive Company Profile Prototype, Static Data Architecture, Sourcing Showcases, WhatsApp RFQ Integration | Complete |
| **Phase 2 (Future)** | Fullstack Backend (REST/GraphQL API), Dynamic Product Catalog (>150 SKUs), Multi-currency Converter, B2B Quotation Approval Workflow | Planned |

---

## 3. Tech Stack

- **Framework:** [Vue 3](https://vuejs.org/) (Composition API, <script setup>)
- **Build Tool:** [Vite 8](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing:** [Vue Router 5](https://router.vuejs.org/)
- **Icons:** [Lucide Vue Next](https://lucide.dev/)
- **State Management (Ready):** Modular Store architecture under src/stores/

---

## 4. Project Directory Structure

`	ext
tevori_global/
├── public/                     # Static assets (favicon, direct downloads)
├── src/
│   ├── assets/
│   │   ├── fonts/              # Custom typography assets
│   │   ├── images/             # Static brand images, placeholders, and backgrounds
│   │   └── styles/
│   │       ├── Main.css        # Tailwind imports & master styles
│   │       ├── Utilities.css   # Custom CSS helper classes
│   │       └── Variables.css   # CSS Variables (e.g., brand colors)
│   ├── components/
│   │   ├── cards/              # Reusable card UI (ProductCard, ServiceCard, etc.)
│   │   ├── common/             # Base UI elements (BaseButton, BaseInput, LoadingSpinner, etc.)
│   │   ├── forms/              # Form components (ContactForm, InquiryForm)
│   │   ├── layout/             # Master layout parts (Navbar.vue, Footer.vue)
│   │   └── products/           # Product-specific components (ProductGrid, ProductFilters, etc.)
│   ├── composables/            # Shared Vue composables (useProducts, useScroll, useSearch)
│   ├── constants/              # Route & category constants
│   ├── data/                   # Mock & static business datasets (company.js, services.js, etc.)
│   ├── router/                 # Vue Router configuration (index.js)
│   ├── sections/
│   │   └── home/               # Modular landing page sections (Hero, About, Services, Contact)
│   ├── services/               # API service integration layers (inquiryService, productService)
│   ├── stores/                 # Pinia / Reactive App state stores (appStore, productStore)
│   ├── utils/                  # Helper utilities and formatters
│   ├── views/                  # Route page views (HomeView, ProductsView, NotFoundView)
│   ├── App.vue                 # Master application root component
│   └── main.js                 # App entry point
├── package.json                # Project dependencies and script scripts
└── vite.config.js              # Vite configuration with Tailwind CSS plugin
`

---

## 5. Getting Started on Localhost

Follow these instructions to set up and run the project locally on your machine.

### 5.1. Prerequisites
Ensure you have the following installed:
- **Node.js**: Version 20.x, 22.x, or >=24.12.0
- **npm**: Version 9.x or higher (bundled with Node.js)

Verify your installation:
`ash
node -v
npm -v
`

### 5.2. Installation

1. Navigate to the project directory:
   `ash
   cd src/tevori_global
   `

2. Install all required dependencies:
   `ash
   npm install
   `

### 5.3. Running the Development Server

Start the local development server with Hot Module Replacement (HMR):
`ash
npm run dev
`

Once started, open your browser and access:
`	ext
http://localhost:5173
`

### 5.4. Building for Production

To build the production-ready static assets:
`ash
npm run build
`
Output files will be generated in the dist/ directory.

### 5.5. Previewing Production Build

To preview the built production bundle locally:
`ash
npm run preview
`

---

## 6. Developer Guidelines & Extension Rules

1. **Brand Consistency:** Always respect the brand primary color #737474 and keep UI elements clean and non-cluttered.
2. **Modularity:** When adding new sections to the home page, create the component under src/sections/home/ and import it into src/views/HomeView.vue.
3. **Data Management:** Static company details and data points should be maintained inside src/data/company.js or src/data/services.js rather than hardcoded into template tags.
4. **Responsive Testing:** Verify your modifications on mobile (375px+), tablet (768px+), and desktop (1024px+) viewports.

---

## 7. Point of Contact (Project PIC)

- **PIC Name:** Vigor (Managing Director)
- **WhatsApp / Phone:** 0857 4635 8310
- **Location:** Jalan Bedahulu, Denpasar, Bali, Indonesia 80115
