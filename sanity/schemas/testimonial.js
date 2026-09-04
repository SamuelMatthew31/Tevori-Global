import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimoni Mitra Klien',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Klien / Partner',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Jabatan (e.g. Sourcing Director)',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Nama Perusahaan & Negara Asal',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Ulasan / Testimoni',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating Bintang (1 - 5)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    }),
  ],
})
