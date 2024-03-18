import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { googleMapsInput } from "@sanity/google-maps-input";

export default defineConfig({
  name: 'default',
  title: 'Fisio Science Costa Rica',

  projectId: 'qvpk0388',
  dataset: 'production',

  plugins: [structureTool(), visionTool(),  googleMapsInput({
    apiKey: "AIzaSyBf1mun0vyAS59PAvb9JASpOKYWSg_1KSY"
})],

  schema: {
    types: schemaTypes,
  },
})
