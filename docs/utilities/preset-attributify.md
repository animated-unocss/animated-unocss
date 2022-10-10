# Preset Attributify

How to use under [Preset Attributify](https://github.com/unocss/unocss/tree/main/packages/preset-attributify) of UnoCss.

:::warning
If you don't know enough about **Preset Attributify**, you can go [here](https://github.com/unocss/unocss/tree/main/packages/preset-attributify) to learn about.
:::

## Example

```html
<div animated="~ bounce infinite">Foo</div>
<div animated="~ bounce faster delay-6s">Bar</div>
```

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(()=>{
document.getElementsByClassName('VPImage')[0].classList.add('animate-rubber-band','animate-count-infinite','animate-duration-1s')
})
</script>
