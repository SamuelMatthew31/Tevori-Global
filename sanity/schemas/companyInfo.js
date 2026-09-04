import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'companyInfo',
  title: 'Profil & Informasi Perusahaan',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Resmi Perusahaan',
      type: 'string',
      initialValue: 'PT TEVORI GLOBAL INDONESIA',
    }),
    defineField({
      name: 'short_name',
      title: 'Nama Pendek / Brand',
      type: 'string',
      initialValue: 'Tevori Global',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline Perusahaan',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'address',
      title: 'Alamat Kantor',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'phone',
      title: 'Nomor Telepon / WhatsApp',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Alamat Email',
      type: 'string',
    }),
    defineField({
      name: 'vision',
      title: 'Visi Perusahaan',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mission',
      title: 'Misi Perusahaan',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'advantages',
      title: 'Keunggulan / Value Proposition',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Judul Keunggulan' },
            { name: 'desc', type: 'text', title: 'Deskripsi' },
          ],
        },
      ],
    }),
  ],
})
