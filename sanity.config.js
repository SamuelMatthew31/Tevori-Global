import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas/index.js'

export default defineConfig({
  name: 'tevori-global-studio',
  title: 'PT Tevori Global - Admin Panel',
  basePath: '/admin',

  projectId: process.env.SANITY_PROJECT_ID || 'y7s5i2p8',
  dataset: process.env.SANITY_DATASET || 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
