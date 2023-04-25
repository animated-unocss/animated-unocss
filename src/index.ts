import { type Preset } from 'unocss'
import { animatedRules } from './animated'
import animatedName from './animatedName.json'

export function animatedUno(): Preset {
  return {
    name: 'animated-unocss',
    rules: [
      ...animatedRules,
    ],
    safelist:animatedName.map(name=>'animated-'+name),
  }
}
