import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Katalog Produk Ekspor',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Kode SKU / Product ID',
      type: 'string',
      description: 'Contoh: FN-001, CM-001',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Nama Produk',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Kategori Slug',
      type: 'string',
      options: {
        list: [
          { title: 'Furniture & Living', value: 'furniture' },
          { title: 'Komoditi Alam', value: 'komoditi-alam' },
          { title: 'Kerajinan Seni', value: 'kerajinan-seni' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_desc',
      title: 'Deskripsi Singkat',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(250),
    }),
    defineField({
      name: 'specifications',
      title: 'Spesifikasi Produk (B2B Specs)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label Spesifikasi' },
            { name: 'value', type: 'string', title: 'Nilai Spesifikasi' },
          ],
        },
      ],
    }),
    defineField({
      name: 'price_type',
      title: 'Model Harga',
      type: 'string',
      initialValue: 'Quotation',
      options: {
        list: ['Quotation', 'FOB Price', 'CIF Price', 'Negotiable'],
      },
    }),
    defineField({
      name: 'moq',
      title: 'Minimum Order Quantity (MOQ)',
      type: 'string',
      placeholder: '1 x 20ft Container / 50 Pcs',
    }),
    defineField({
      name: 'availability',
      title: 'Ketersediaan / Status Produksi',
      type: 'string',
      initialValue: 'Made to Order',
      options: {
        list: ['Ready Stock', 'Made to Order', 'Seasonal Harvest'],
      },
    }),
    defineField({
      name: 'image',
      title: 'Foto Produk Utama (Upload)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL External (Fallback jika tidak upload)',
      type: 'url',
    }),
    defineField({
      name: 'is_featured',
      title: 'Tampilkan di Beranda (Unggulan)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'id',
      media: 'image',
    },
  },
})
