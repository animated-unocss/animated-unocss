import { type Preset } from 'unocss'
import { animatedRules } from './animated'

export function animatedUno(): Preset {
  return {
    name: 'animated-unocss',
    rules: [
      ...animatedRules,
    ],
  }
}
