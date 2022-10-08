# Getting Started

In a project where you are using [UnoCSS](https://github.com/unocss/unocss), run the following command:

```shell
# npm
npm install --save-dev animated-unocss
# yarn
yarn add -D animated-unocss
# pnpm
pnpm install --save-dev animated-unocss
```

Then configure your unocss.config.ts to use the animations:

::: details Example
```typescript
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import { animatedUno } from 'animated-unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    animatedUno(),
  ],
})
```
:::

After proper config, you can use the animations of Animate.css the same way as you use those of UnoCss:

```html
<h1 class="animated animated-bounce animated-infinite">
  Forever Bouncing Heading
</h1>
```

:::warning NOTES
- If you are coming from classical Animate.css, please note that you need to reference the classes as `.animated-...` instead of `.animate__...`.
- The animations this package provides are not _exactly_ same as that of Animate.css. We have done some cleaning up to provide you with more consistent animations.
:::

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(()=>{
document.getElementsByClassName('VPImage')[0].classList.add('animate-rubber-band','animate-count-infinite','animate-duration-1s')
})
</script>
