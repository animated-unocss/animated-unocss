# Animation Iteration Count

| Class | Properties |
| :---- | :--------- |
| `animate-infinite` | `animation-iteration-count: infinite;` |
| `animate-repeat-[n]` | `animation-iteration-count: n;` |

Here `[n]` is one of `number`. You can also use arbitrary values instead.

## Examples

```html
<div class="animated animated-bounce animated-infinite">Foo</div>
<div class="animated animated-bounce animated-repeat-6">Bar</div>
<div class="animated animated-bounce animated-repeat-666">Baz</div>
```

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(()=>{
document.getElementsByClassName('VPImage')[0].classList.add('animate-rubber-band','animate-count-infinite','animate-duration-1s')
})
</script>
