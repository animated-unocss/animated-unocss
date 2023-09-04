import { type CSSObject, createGenerator, presetAttributify, presetUno } from 'unocss'
import { describe, expect, test } from 'vitest'
import postcss from 'postcss'
import postcssJs from 'postcss-js'
import { animatedUno } from '../src'
import animated from './animated.json'
import { removeLastZero, removeUnusedCSS } from './util'

const durationShortcuts = {
  faster: 0.5,
  fast: 0.8,
  slow: 2,
  slower: 3,
}

describe('animated.json', () => {
  test('The keys of the data are in kebabCase format', () => {
    Object.keys(animated).forEach((key) => {
      expect(/^[a-z-]+$/.test(key)).is.true
    })
  })

  test('animation names starting with une in camelCase format', () => {
    Object.values(animated).forEach(({ animationName, css }) => {
      expect(/^une[A-Z]/.test(animationName)).is.true
      expect(/^une[A-Z]/.test(css['animation-name'])).is.true
    })
  })

  test('The style name is kebabCase format', () => {
    Object.values(animated).forEach(({ css }) => {
      Object.keys(css).forEach((key) => {
        expect(/^[a-z-]+$/.test(key)).is.true
      })
    })
  })
})

describe('animated', () => {
  const generator = createGenerator({
    presets: [
      presetUno(),
      presetAttributify(),
      animatedUno(),
    ],
  })

  test('animated-name', async () => {
    const { css } = await generator.generate(
      Object.keys(animated).map(k => `animated-${k}`).join(' '),
    )

    const styles = removeUnusedCSS({
      ...postcssJs.objectify(postcss.parse(css)),
    }) as CSSObject

    Object.entries(animated).forEach(([key, { animationName }]) => {
      expect(styles[`.animated-${key}`]).toBeDefined()
      expect(styles[`@keyframes ${animationName}`]).toBeDefined()
    })
  })

  test('animated-repeat', async () => {
    const { css } = await generator.generate(`
      animated-infinite
      animated-repeat-infinite
      ${/* 0 ~ 66 */ Array.from({ length: 67 }, (_, i) => `animated-repeat-${i}`).join(' ')}
      ${/* 0.1, 1.2, ... */ Array.from({ length: 67 }, (_, i) => `animated-repeat-${i}.${removeLastZero(i + 1)}`).join(' ')}
      ${/* 0_1, 1_2, ... */ Array.from({ length: 7 }, (_, i) => `animated-repeat-${i}_${removeLastZero(i + 1)}`).join(' ')}
      ${/* a ~ z */ Array.from({ length: 26 }, (_, i) => `animated-repeat-${String.fromCharCode(97 + i)}`)}
    `)
  })

  test('animated-delay', async () => {
    const { css } = await generator.generate(`
      animated-delay-none
      ${/* 0 ~ 66 */ Array.from({ length: 67 }, (_, i) => `animated-delay-${i}`).join(' ')}
      ${/* 0ms ~ 66ms */ Array.from({ length: 67 }, (_, i) => `animated-delay-${i}ms`).join(' ')}
      ${/* 0s ~ 66s */ Array.from({ length: 67 }, (_, i) => `animated-delay-${i}s`).join(' ')}
      ${/* 0.1, 1.2, ... */ Array.from({ length: 67 }, (_, i) => `animated-delay-${i}.${removeLastZero(i + 1)}`).join(' ')}
      ${/* 0.1ms, 1.2ms, ... */ Array.from({ length: 67 }, (_, i) => `animated-delay-${i}.${removeLastZero(i + 1)}ms`).join(' ')}
      ${/* 0.1s, 1.2s, ... */ Array.from({ length: 67 }, (_, i) => `animated-delay-${i}.${removeLastZero(i + 1)}s`).join(' ')}
    `)
  })

  test('animated-duration', async () => {
    const { css } = await generator.generate(`
      animated-duration-none
      ${/* shortcuts */ Object.keys(durationShortcuts).map(k => `animated-${k}`).join(' ')}
      ${/* 0 ~ 66 */ Array.from({ length: 67 }, (_, i) => `animated-duration-${i}`).join(' ')}
      ${/* 0ms ~ 66ms */ Array.from({ length: 67 }, (_, i) => `animated-duration-${i}ms`).join(' ')}
      ${/* 0s ~ 66s */ Array.from({ length: 67 }, (_, i) => `animated-duration-${i}s`).join(' ')}
      ${/* 0.1, 1.2, ... */
      Array.from({ length: 67 }, (_, i) => `animated-duration-${i}.${removeLastZero(i + 1)}`).join(' ')}
      ${/* 0.1ms, 1.2ms, ... */ Array.from({ length: 67 }, (_, i) => `animated-duration-${i}.${removeLastZero(i + 1)}ms`).join(' ')}
      ${/* 0.1s, 1.2s, ... */ Array.from({ length: 67 }, (_, i) => `animated-duration-${i}.${removeLastZero(i + 1)}s`).join(' ')}
    `)
  })
})
