<template>
  <div class="mb-4 flex-col">
    <form class="relative">
      <div class="px-4">
        <input
          type="search"
          id="search"
          class="outline-0 w-full p-4 text-sm text-[--text-color] border border-gray-300 rounded-xl bg-[--white] focus:ring-blue-500 focus:border-blue-500"
          placeholder="Электронная почта"
          required
        />
      </div>
      <AppButton type="submit" class="text-base absolute top-0 right-0 h-full">
        <div v-if="big" class="p-3 w-full h-full relative">
          <Sand class="absolute top-1/4 right-1/4" />
        </div>
        <p v-else>Подписаться</p>
      </AppButton>
    </form>
  </div>
</template>

<script lang="ts">
import AppButton from '@/components/AppButton.vue'
import Sand from '../assets/icons/sand.svg?component'
export default {
  components: { AppButton, Sand },
  data: () => ({
    big: false
  }),
  created() {
    window.addEventListener('resize', this.onResize)
    this.onResize()
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      this.big = window.innerWidth <= 425
    }
  }
}
</script>

<style scoped></style>
