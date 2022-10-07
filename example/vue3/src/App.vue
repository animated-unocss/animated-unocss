<script setup lang="ts">
import { ref } from 'vue'
import Animated from './components/Animated.vue'
import animations from './utils/animations'
const animation = ref(Object.values(animations)[0][0].value)
const repeat = ref(false)
const shouldAnimate = ref(false)
const copied = ref(false)
const handleRepeat: EventListener = (e) => {
  repeat.value = !repeat.value
}
const handleChange: EventListener = (e) => {
  shouldAnimate.value = true
  animation.value = (e.target as HTMLSelectElement).value
}
const reset: EventListener = () => {
  shouldAnimate.value = false
}
const rerun: EventListener = () => {
  shouldAnimate.value = true
}
const copy: EventListener = () => {
  navigator.clipboard
    .writeText(`animated-${animation.value}${repeat.value ? ' animated-infinite' : ''}`)
    .then(() => {
      copied.value = true
    })
  setTimeout(() => {
    copied.value = false
  }, 1200)
}
</script>

<template>
  <div class="mt-6 flex flex-col">
    <div
      class="relative flex items-center justify-center overflow-hidden rounded-md bg-[#f0f0f0] p-20 sm:p-32"
    >
      <Animated />
      <img
        class="w-32 animated"
        :class="{ [`animated-${animation}`]: shouldAnimate, 'animated-infinite': repeat }"
        src="https://raw.githubusercontent.com/unocss/unocss/main/playground/public/icon-gray.svg"
        @animationend="reset"
      >
      <button
        id="repeat"
        class="absolute bottom-2 right-4 rounded-md border-2 border-slate-600 p-2 text-black"
        :class="{ 'bg-slate-600 text-white': repeat }"
        type="button"
        @click="handleRepeat"
      >
        Repeat
      </button>
    </div>
    <div class="mt-6 flex self-center">
      <button class="rounded-l-md bg-[#f0f0f0] py-1 px-4" type="button" @click="copy">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="my-[3px] h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            :class="copied ? 'hidden' : 'block'"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
          <path
            :class="copied ? 'block' : 'hidden'"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      </button>
      <select
        aria-label="Choose an animation."
        class="appearance-none border-x border-[#333] bg-[#f0f0f0] py-1 px-4"
        @change="handleChange"
      >
        <optgroup v-for="(keyframes, type) in animations" :label="type">
          <option v-for="keyframe in keyframes" :value="keyframe.value">
            {{ keyframe.label }}
          </option>
        </optgroup>
      </select>
      <button type="button" class="rounded-r-md bg-[#f0f0f0] py-1 px-4" @click="rerun">
        Animate
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
