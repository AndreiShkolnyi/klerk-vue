<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNavigation from '@/components/AppNavigation.vue'
import TheHeader from '@/components/TheHeader.vue'
import ThePageTitle from '@/components/ThePageTitle.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="container max-w-5xl mx-auto my-12">
    <TheHeader />
    <ThePageTitle />
    <AppNavigation />
    <main class="bg-[--bg-color] mx-auto py-6 rounded-0 mobile:rounded-2xl justify-center mb-12">
      <RouterView />
    </main>
    <footer>
      <TheFooter />
    </footer>
  </div>
</template>

<style scoped></style>
