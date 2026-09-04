import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: process.env.SANITY_PROJECT_ID || 'y7s5i2p8',
    dataset: process.env.SANITY_DATASET || 'production',
  },
})
