// Data Katalog Produk PT Tevori Global
// Mensimulasikan >150 SKU varian (diwakili oleh data sampel ini)

export const productsList = [
  // --- KATEGORI: FURNITURE ---
  {
    id: 'FN-001',
    name: 'Teak Wood Outdoor Dining Set',
    category: 'furniture',
    short_desc: 'Set meja makan luar ruangan berbahan kayu jati Jepara pilihan (Grade A).',
    specifications: [
      { label: 'Material', value: 'Solid Teak Wood (Kayu Jati)' },
      { label: 'Finishing', value: 'Fine Sanded / Oil Treated' },
      { label: 'Kapasitas', value: '1 Meja Ekstensi, 6 Kursi Lipat' },
      { label: 'Asal', value: 'Jepara, Jawa Tengah' }
    ],
    price_type: 'Quotation',
    moq: '1 x 20ft Container (Mixed allowed)',
    availability: 'Made to Order',
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    is_featured: true
  },
  {
    id: 'FN-002',
    name: 'Rattan Lounge Chair (Bohemian Style)',
    category: 'furniture',
    short_desc: 'Kursi santai rotan alami asli Cirebon dengan desain bohemian elegan.',
    specifications: [
      { label: 'Material', value: 'Natural Rattan & Cane' },
      { label: 'Dimensi', value: '80cm x 75cm x 90cm' },
      { label: 'Warna', value: 'Natural / Honey / Dark Brown' },
      { label: 'Asal', value: 'Cirebon, Jawa Barat' }
    ],
    price_type: 'Quotation',
    moq: '50 Pcs',
    availability: 'Made to Order',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    is_featured: false
  },

  // --- KATEGORI: KOMODITI ALAM ---
  {
    id: 'CM-001',
    name: 'Kopi Hijau Gayo (Arabica Green Beans)',
    category: 'komoditi-alam',
    short_desc: 'Biji kopi mentah Arabica Gayo Grade 1 premium dari dataran tinggi Aceh.',
    specifications: [
      { label: 'Grade', value: 'Grade 1 (Specialty)' },
      { label: 'Proses', value: 'Semi-Washed / Wet Hulled' },
      { label: 'Ketinggian', value: '1,200 - 1,500 mdpl' },
      { label: 'Dikemas Dalam', value: 'Goni (Jute Bag) 60kg' }
    ],
    price_type: 'Quotation',
    moq: '1 Metric Ton',
    availability: 'Ready Stock / Seasonal',
    image: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    is_featured: true
  },
  {
    id: 'CM-002',
    name: 'Briket Arang Kelapa (Coconut Charcoal Briquettes)',
    category: 'komoditi-alam',
    short_desc: 'Arang briket kelapa berkualitas ekspor untuk Shisha dan BBQ, tanpa asap dan abu rendah.',
    specifications: [
      { label: 'Material', value: '100% Coconut Shell' },
      { label: 'Ash Content', value: 'Max 2.5%' },
      { label: 'Waktu Bakar', value: 'Up to 2.5 Jam' },
      { label: 'Bentuk', value: 'Kubus (25x25x25mm) / Hexagonal' }
    ],
    price_type: 'Quotation',
    moq: '1 x 20ft Container (approx. 18 Tons)',
    availability: 'Made to Order',
    image: 'https://images.unsplash.com/photo-1582293041079-7814c278ec68?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    is_featured: false
  },

  // --- KATEGORI: KERAJINAN SENI ---
  {
    id: 'AC-001',
    name: 'Balinese Hand-Carved Wooden Door',
    category: 'kerajinan-seni',
    short_desc: 'Pintu ukir kayu tradisional khas Bali, dikerjakan 100% oleh pande ukir lokal.',
    specifications: [
      { label: 'Material', value: 'Kayu Jati / Kayu Nangka' },
      { label: 'Teknik', value: 'Ukir Tangan Manual' },
      { label: 'Dimensi Standar', value: '120cm (L) x 210cm (T)' },
      { label: 'Asal', value: 'Gianyar, Bali' }
    ],
    price_type: 'Quotation',
    moq: 'Custom (1 set available for prototype)',
    availability: 'Made to Order (3-4 weeks)',
    image: 'https://images.unsplash.com/photo-1590422749902-601ba472be29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    is_featured: true
  },
  {
    id: 'AC-002',
    name: 'Keranjang Anyaman Eceng Gondok (Water Hyacinth Basket)',
    category: 'kerajinan-seni',
    short_desc: 'Set keranjang dekoratif & fungsional ramah lingkungan dari anyaman eceng gondok.',
    specifications: [
      { label: 'Material', value: 'Dried Water Hyacinth' },
      { label: 'Penggunaan', value: 'Home Decor, Laundry, Planter' },
      { label: 'Set Isi', value: '3 pcs (S, M, L)' },
      { label: 'Keunggulan', value: 'Ramah Lingkungan, Anti Jamur' }
    ],
    price_type: 'Quotation',
    moq: '100 Sets',
    availability: 'Ready / Made to order',
    image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    is_featured: false
  }
];

// Helper: Mendapatkan produk berdasarkan ID (untuk Halaman Detail)
export const getProductById = (id) => {
  return productsList.find(product => product.id === id);
};

// Helper: Mendapatkan produk unggulan (Featured)
export const getFeaturedProducts = () => {
  return productsList.filter(product => product.is_featured);
};

// Helper: Memfilter produk berdasarkan kategori
export const getProductsByCategory = (categorySlug) => {
  if (!categorySlug || categorySlug === 'all') return productsList;
  return productsList.filter(product => product.category === categorySlug);
};
