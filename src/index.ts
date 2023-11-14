import type { Preset } from 'unocss'
import { animatedRules } from './animated'
import animatedName from './animatedName.json'

interface Options {
  /**
   * Whether to output the entire animate.css.
   * Which is very effective if you need to dynamically combine class names at runtime.
   * @default true
   */
  buildFullVersion: boolean
}

export function animatedUno({
  buildFullVersion = true,
} = ({} as Options)): Preset<any> {
  return {
    name: 'animated-unocss',
    rules: [
      ...animatedRules,
    ],
    safelist: buildFullVersion
      ? animatedName.map(name => `animated-${name}`)
      : [],
  }
}
