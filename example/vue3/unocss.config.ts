import {
  defineConfig,
  presetAttributify,
  presetUno,
  presetWebFonts,
} from 'unocss'
import { animatedUno } from 'animated-unocss'

export default defineConfig({
  presets: [
    presetUno(),
    animatedUno(),
    presetAttributify(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})
