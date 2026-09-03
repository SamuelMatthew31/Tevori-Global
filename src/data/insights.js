export const insightsList = [
  {
    id: 'INS-001',
    slug: 'standar-ekspor-furniture-kayu-jati-eropa',
    title: 'Standar Ekspor Furniture Kayu Jati Indonesia ke Pasar Eropa 2026',
    date: '20 Agustus 2026',
    category: 'Regulasi Ekspor',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    summary: 'Memahami persyaratan SVLK dan sertifikasi keberlanjutan (sustainability) yang wajib dipenuhi sebelum melakukan ekspor kayu ke Uni Eropa.',
    content: `
      <p>Pasar Eropa merupakan salah satu destinasi ekspor furnitur terbesar bagi Indonesia, terutama untuk komoditi kayu jati. Namun, regulasi terkait lingkungan hidup dan standardisasi kualitas semakin diperketat pada tahun 2026.</p>
      <h3>Persyaratan SVLK (Sistem Verifikasi Legalitas Kayu)</h3>
      <p>SVLK adalah syarat mutlak. Ini menjamin bahwa kayu jati yang dipanen dan diolah berasal dari hutan yang dikelola secara lestari dan legal. Tanpa dokumen SVLK (V-Legal), barang kargo tidak akan bisa melewati Custom Clearance di negara tujuan.</p>
      <h3>Standardisasi Moisture Content (MC)</h3>
      <p>Kayu yang diekspor ke area dengan empat musim berisiko pecah atau retak karena perbedaan kelembaban. Standar MC (Kadar Air) untuk pasar Eropa adalah sekitar 8-12%. Pabrik wajib menggunakan metode Kiln Dry (Oven) yang memadai.</p>
      <p>Di PT Tevori Global, kami selaku agen pengadaan Anda memastikan setiap supplier menaati kedua aturan ketat ini sebelum kami meloloskan produk ke dalam kontainer.</p>
    `
  },
  {
    id: 'INS-002',
    slug: 'kualitas-grade-a-komoditi-kopi-gayo',
    title: 'Mengenal Kualitas Grade A pada Komoditi Alam Biji Kopi Gayo',
    date: '15 Agustus 2026',
    category: 'Info Komoditi',
    image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    summary: 'Spesifikasi fisik, tingkat kecacatan (defect), dan profil rasa yang mendefinisikan kopi Gayo Specialty Grade 1 di pasar lelang internasional.',
    content: `
      <p>Kopi Arabica Gayo ditanam di dataran pegunungan Aceh Tengah pada ketinggian 1.200 - 1.500 mdpl. Kondisi geografis ini melahirkan karakter rasa yang kompleks, keasaman rendah, dengan dominasi rempah dan coklat.</p>
      <h3>Definisi Specialty Grade 1</h3>
      <p>Menurut SCAA (Specialty Coffee Association of America), Grade 1 hanya menoleransi maksimal 5 biji cacat (defect) per 300 gram sampel kopi mentah (green beans). Tidak boleh ada primary defect seperti biji hitam penuh atau asam.</p>
      <h3>Mengapa Sourcing Melalui Kami?</h3>
      <p>Konsistensi adalah masalah terbesar importir kopi asing. Musim hujan dan metode panen petani bisa merubah profil kopi. Tim lokal kami melakukan pengujian cupping dan penyortiran ganda (Double Picked) sebelum disegel dalam GrainPro bag.</p>
    `
  },
  {
    id: 'INS-003',
    slug: 'pentingnya-buyer-agent-hindari-fraud',
    title: 'Pentingnya Layanan Buyer Agent dalam Menekan Risiko Fraud',
    date: '02 Agustus 2026',
    category: 'Insights Bisnis',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    summary: 'Bagaimana peran agensi Sourcing & QC lokal di Indonesia mampu memangkas potensi penipuan supplier dan kerugian miliaran rupiah.',
    content: `
      <p>Berdagang internasional adalah bisnis dengan margin menggiurkan namun risiko tinggi. Kasus barang tidak sesuai sampel atau suplier palsu sering menjerat buyer dari luar negeri yang tidak memiliki kaki-tangan di Indonesia.</p>
      <h3>Survei Pabrik (Factory Audit)</h3>
      <p>Sebagai Buyer Agent, tugas pertama kami adalah melakukan kunjungan fisik ke pabrik dan me-review entitas legal perusahaan (NIB, NPWP). Banyak 'broker siluman' di internet yang mengaku sebagai pabrik padahal mereka tidak memiliki mesin produksi sama sekali.</p>
      <h3>Quality Control Pra-Pengiriman</h3>
      <p>Banyak importir menangis ketika kontainer dibuka di negara mereka dan isinya berjamur atau ukurannya berbeda. Tim QC kami akan berada di lapangan saat *stuffing* kontainer untuk memeriksa dimensi, warna, jumlah, dan metode *packaging* secara langsung.</p>
    `
  }
];

export const getInsightBySlug = (slug) => {
  return insightsList.find(item => item.slug === slug);
};
