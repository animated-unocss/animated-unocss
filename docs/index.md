---
layout: home
sidebar: false

title: animated-unocss
titleTemplate: A configuration to use Animate.css with UnoCSS.

hero:
  name: animated-unocss
  text: A configuration to use Animate.css with UnoCSS.
  tagline: Community Presets.
  image:
    src: /logo.svg
    alt: animated-unocss
  actions:
    - theme: brand
      text: Get Started
      link: /guide/
    - theme: alt
      text: demo
      link: /demo/
    - theme: alt
      text: View on GitHub
      link: https://github.com/elonehoo/animated-unocss

---

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(()=>{
document.getElementsByClassName('VPImage')[0].classList.add('animate-rubber-band','animate-count-infinite','animate-duration-1s')
})
</script>
