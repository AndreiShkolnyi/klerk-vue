<template>
  <div class="flex-col items-center mb-8 mx-auto max-w-5xl px-4 mobile:px-12">
    <div class="mailing-title font-medium text-2xl mb-6 text-start mobile:text-center">
      Выберите рассылки, которые подходят именно вам
    </div>
    <AppField />
    <div class="mailing-agree"><AppToggle class-type="little" /> Подписаться на все рассылки</div>
  </div>
</template>

<script setup lang="ts">
import AppField from '@/components/AppField.vue'
import AppToggle from '@/components/AppToggle.vue'
</script>

<style scoped></style>
