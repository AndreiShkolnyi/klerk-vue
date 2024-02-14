<template>
  <header class="header">
    <a href="#"><Logo /></a>
    <TheBreadCrumbs />
  </header>
</template>

<script setup lang="ts">
import TheBreadCrumbs from '@/components/TheBreadCrumbs.vue'
import Logo from '../assets/icons/logo.svg?component'
</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
</style>
