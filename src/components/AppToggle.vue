<template>
  <label class="relative inline-flex cursor-pointer items-center">
    <input id="switch" type="checkbox" class="peer sr-only" />
    <label for="switch" class="hidden"></label>
    <div :class="checkClass"></div>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  classType: {
    type: String,
    default: 'big'
  }
})

const checkClass = computed(() => {
  return props.classType === 'big' ? 'big' : 'little'
})
</script>

<style scoped>
.big {
  @apply h-6 w-11 rounded-full border bg-[#DCDCDC] after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[--dark-blue] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300;
}

.little {
  @apply h-4 w-8 rounded-full border bg-[#DCDCDC] after:absolute after:left-[2px] after:top-0.5 after:h-3 after:w-3 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[--dark-blue] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300;
}
</style>
