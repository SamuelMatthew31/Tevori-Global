import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Layanan Utama',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Nomor Urut',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Judul Layanan',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Layanan',
      type: 'text',
      rows: 4,
    }),
  ],
})
