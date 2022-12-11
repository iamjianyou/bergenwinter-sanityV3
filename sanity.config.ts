import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'


export default defineConfig({
  name: 'default',
  title: 'Bergen Winter',

  /** ProjectId dataset */
  projectId: '5c7j3wbu',
  dataset: 'production',

  /** Sanity Plugins */
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
