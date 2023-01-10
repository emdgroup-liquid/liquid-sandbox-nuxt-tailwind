// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import liquidPreset from '@emdgroup-liquid/liquid/dist/css/tailwind-preset.cjs'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.vue'],
  presets: [liquidPreset],
}
