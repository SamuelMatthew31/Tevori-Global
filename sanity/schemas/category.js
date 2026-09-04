import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Kategori Produk',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Kategori',
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
      name: 'label',
      title: 'Display Label',
      type: 'string',
      description: 'Nama tampilan untuk tombol filter (contoh: Furniture & Living)',
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Kategori',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'icon',
      title: 'Icon Emoji atau Simbol',
      type: 'string',
      placeholder: '🪵',
    }),
  ],
})
