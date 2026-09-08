import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Catalog Products',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
      description: "URL safe identifier, e.g. 'teak-dining-table'",
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Furniture', value: 'Furniture' },
          { title: 'Art', value: 'Art' },
          { title: 'Decor', value: 'Decor' },
        ],
      },
      initialValue: 'Furniture',
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'material',
      title: 'Material Specification',
      type: 'string',
      description: 'e.g., Solid Indonesian Teak Wood Grade A',
    }),
    defineField({
      name: 'cbmEstimation',
      title: 'Estimated CBM (m³)',
      type: 'number',
      initialValue: 0.25,
    }),
    defineField({
      name: 'moq',
      title: 'Minimum Order Quantity (MOQ)',
      type: 'number',
      initialValue: 5,
    }),
    defineField({
      name: 'is_featured',
      title: 'Featured on Homepage?',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: 'title', category: 'category', moq: 'moq', media: 'images.0' },
    prepare({ title, category, moq, media }) {
      return { title, subtitle: `${category} - MOQ: ${moq}`, media }
    },
  },
})
