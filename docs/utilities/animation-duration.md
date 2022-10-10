# Animation Duration

| Class | Properties |
| :---- | :--------- |
| `animated-faster` | `animation-duration: 0.5s;` |
| `animated-fast` | `animation-duration: 0.8s;` |
| `animated-slow` | `animation-duration: 2s;` |
| `animated-slower` | `animation-duration: 3s;` |
| `animate-duration-[time]` | `animation-duration: time;` |

Here [time] is one of {75, 100, 150, 200, 300, 500, 700, 1000} and is interpreted like 75ms, 100ms, ... You can also add `s` for seconds and `ms` for milliseconds.

## Examples

```html
<div class="animated animated-duration-300">Foo</div>
<div class="animated animated-duration-2s">Bar</div>
```
