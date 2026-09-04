import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'insight',
  title: 'Berita & Artikel Insight',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Artikel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Tanggal Publikasi',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Kategori Topik',
      type: 'string',
      options: {
        list: ['Regulasi Ekspor', 'Info Komoditi', 'Insights Bisnis', 'Logistik Kargo'],
      },
    }),
    defineField({
      name: 'image',
      title: 'Gambar Utama (Upload)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL External (Fallback jika tidak upload)',
      type: 'url',
    }),
    defineField({
      name: 'summary',
      title: 'Ringkasan / Excerpt',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Konten Artikel (HTML / Teks Lengkap)',
      type: 'text',
      rows: 10,
    }),
  ],
})
