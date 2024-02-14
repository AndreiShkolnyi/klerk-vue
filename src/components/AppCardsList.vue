<template>
  <div class="flex flex-wrap gap-6 justify-center mx-4">
    <AppCard v-for="item in 4" :key="item"/>
  </div>
</template>

<script setup lang="ts">
import AppCard from '@/components/AppCard.vue'
</script>

<style scoped></style>
