<template>
  <nav>
    <ul
      class="bread_crumbs flex justify-center gap-3.5 font-normal text-[--text-hint-color] text-sm mb-2"
    >
      <li class="bread_crumbs_item flex gap-2">
        <a href="#" class="crumbs_link">Главная</a>
        <Arrow />
      </li>

      <li class="bread_crumbs_item flex gap-2">
        <a href="#" class="crumbs_link">Рассылки</a>
        <Arrow />
      </li>
      <li class="bread_crumbs_item flex gap-2">
        <a href="#" class="crumbs_link">Хлебные крошки</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import Arrow from '../assets/icons/arrow.svg?component'
</script>

<style scoped>
.bread_crumbs_item {
  @apply flex items-center;
}

.crumbs_link {
  @apply border-b-[1px] border-[--light-blue] hover:text-[--accent-color];
}
</style>
