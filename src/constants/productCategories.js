// Daftar Kategori Produk Utama PT Tevori Global
// Digunakan untuk filter di halaman katalog dan select option di form inquiry

export const CATEGORIES = {
  FURNITURE: {
    id: 'furniture',
    slug: 'furniture',
    name: 'Furniture',
    label: 'Furniture & Perabot',
    description: 'Perabot berkualitas tinggi dari kayu, rotan, dan material pilihan karya pengrajin terverifikasi Indonesia.',
    icon: 'sofa' // Referensi icon jika nanti menggunakan library icon
  },
  NATURAL_COMMODITIES: {
    id: 'komoditi-alam',
    slug: 'komoditi-alam',
    name: 'Komoditi Alam',
    label: 'Komoditi Alam',
    description: 'Hasil bumi dan pertanian unggulan dari berbagai daerah di Nusantara dengan jaminan kualitas.',
    icon: 'leaf'
  },
  ARTS_CRAFTS: {
    id: 'kerajinan-seni',
    slug: 'kerajinan-seni',
    name: 'Kerajinan Seni',
    label: 'Kerajinan & Seni Authentic',
    description: 'Karya seni dan kerajinan tangan otentik yang menonjolkan nilai budaya dan estetika pengerjaan lokal.',
    icon: 'palette'
  }
};

// Helper function untuk mendapatkan array kategori (berguna untuk loop v-for di Vue)
export const getCategoryList = () => {
  return Object.values(CATEGORIES);
};

// Helper function untuk mendapatkan label kategori berdasarkan slug/id
export const getCategoryLabel = (slug) => {
  const category = Object.values(CATEGORIES).find(c => c.slug === slug);
  return category ? category.label : 'Kategori Tidak Diketahui';
};
