import { companyInfo } from '@/data/company';

/**
 * Format teks Whatsapp otomatis (Pre-filled Message)
 * Berguna saat pembeli mengklik "Request Quotation" pada sebuah produk
 * @param {Object} product - Objek data produk
 * @returns {String} URL valid untuk API WhatsApp
 */
export const generateWhatsAppQuotationLink = (product) => {
  const adminPhone = companyInfo.phone.replace(/\s/g, '').replace(/^0/, '62');
  
  // Format pesan default jika param product tidak dipassing (halaman kontak umum)
  if (!product) {
    const defaultMsg = encodeURIComponent("Halo PT Tevori Global, saya tertarik untuk mengatur pengadaan produk. Bisakah kita berdiskusi lebih lanjut tentang penawaran dan katalog lengkap?");
    return `https://wa.me/${adminPhone}?text=${defaultMsg}`;
  }

  // Format pesan spesifik produk
  const message = encodeURIComponent(`Halo PT Tevori Global,

Saya tertarik untuk meminta penawaran harga (Quotation) untuk produk berikut:

*Nama Produk:* ${product.name}
*Kode (SKU):* ${product.id}

Mohon info estimasi harga per volume logistiknya. Terima kasih.`);
  
  return `https://wa.me/${adminPhone}?text=${message}`;
};

/**
 * Memotong teks deskripsi agar tidak terlalu panjang (berguna untuk Card UI)
 * @param {String} text - Teks asli
 * @param {Number} length - Batas maksimal karakter
 * @returns {String} Teks yang sudah dipotong dan diberi "..."
 */
export const truncateText = (text, length = 100) => {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};
