import { type Preset } from 'unocss';
import { animatedRules } from './animated';

export function presetExtra(): Preset {
  return {
    name: 'animated-unocss',
    rules: [
      ...animatedRules,
    ],
  };
}
