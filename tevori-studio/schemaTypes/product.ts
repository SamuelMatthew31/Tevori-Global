import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'product',
  title: 'Catalog Products',
  type: 'document',
  
  // Grouping helps keep the CMS interface tidy
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'seo', title: 'SEO & Meta' },
  ],

  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      group: 'content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'content',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
      description: "URL safe identifier, e.g. 'teak-dining-table'",
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      group: 'content',
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
      group: 'content',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'material',
      title: 'Material Specification',
      type: 'string',
      group: 'content',
      description: 'e.g., Solid Indonesian Teak Wood Grade A',
    }),
    defineField({
      name: 'cbmEstimation',
      title: 'Estimated CBM (m³)',
      type: 'number',
      group: 'content',
      initialValue: 0.25,
    }),
    defineField({
      name: 'moq',
      title: 'Minimum Order Quantity (MOQ)',
      type: 'number',
      group: 'content',
      initialValue: 5,
    }),
    defineField({
      name: 'is_featured',
      title: 'Featured on Homepage?',
      type: 'boolean',
      group: 'content',
      initialValue: false,
    }),

    // SEO Fields
    defineField({
      name: 'metaTitle',
      title: 'SEO Title Override',
      type: 'string',
      group: 'seo',
      description: 'Overrides the default product title for Search Engines. Keep under 60 characters.',
    }),
    defineField({
      name: 'metaDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      group: 'seo',
      description: 'Brief description for search results (approx 150-160 characters). Falls back to generic catalog description if empty.',
    }),
    defineField({
      name: 'ogImage',
      title: 'Social Share Image (OG Image)',
      type: 'image',
      group: 'seo',
      description: 'Used when sharing this product on WhatsApp, LinkedIn, Facebook, etc. Falls back to the first product image if empty.',
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: 'title', category: 'category', moq: 'moq', media: 'images.0' },
    prepare({ title, category, moq, media }) {
      return { title, subtitle: `${category} - MOQ: ${moq}`, media }
    },
  },
})
