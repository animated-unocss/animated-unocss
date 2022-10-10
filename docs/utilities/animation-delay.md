# Animation Delay

| Class | Properties |
| :---- | :--------- |
| `animate-delay-[time]` | `animation-delay: time;` |

Here `[time]` is one of `{75, 100, 150, 200, 300, 500, 700, 1000}` and is interpreted like 75ms, 100ms, ... You can also use arbitrary values instead. Classic `animate-delay-{time}s` classes are also available.

## Examples

```html
<div class="animated animated-bounce animate-delay-300">Foo</div>
<div class="animated animated-bounce animate-delay-2s">Bar</div>
<div class="animated animated-bounce animate-delay-[1200ms]">Baz</div>
```
