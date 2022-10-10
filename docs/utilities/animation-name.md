# Animation Name

| Class | Properties ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name)) |
| :---- | :---------------------------------------------------------------------------------- |
| `animate-[name]` | `animation-name: name; `

## Examples

```html
<div class="animated animated-bounce">Foo</div>
<div class="animated animated-bounce animated-infinite">Bar</div>
```

Refer [the demo](../demo/index.md) to see the available animations in action.

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(()=>{
document.getElementsByClassName('VPImage')[0].classList.add('animate-rubber-band','animate-count-infinite','animate-duration-1s')
})
</script>
