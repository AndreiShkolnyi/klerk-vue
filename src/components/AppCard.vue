<template>
  <div
    class="card max-w-[476px] w-full max-h-60 flex p-6 bg-[--white] rounded-3xl hover:shadow-xl transition-all relative"
  >
    <div class="card-content max-w-[348px] w-full">
      <div class="card-category text-[--text-hint-color] text-xs">Перед рассветом</div>
      <div class="card-title font-bold text-xl mb-2">Утренний бухгалтер</div>
      <div class="card-text text-[--text-second-color] text-xs mb-4">
        Самые важные новости и события за день.<br />
        Кратко, по делу, структурировано.
      </div>
      <ul class="card-list font-normal flex-col gap-2 pb-4">
        <li class="item flex gap-2 items-center text-xs">
          <CheckIcon class="" />Новости для бухгалтеров, ИП и директора
        </li>
        <li class="item flex gap-2 items-center text-xs"><CheckIcon />Подборка статей за день</li>
      </ul>
      <div class="card-counter font-medium text-xs flex items-center gap-2">
        <AppToggle /> Уже получает 59 342 человек
      </div>
    </div>
    <div class="absolute mobile:static top-[24px] right-[16px] w-10 h-10 mobile:w-20 mobile:h-20">
      <img src="../assets/icons/card_img.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppToggle from '@/components/AppToggle.vue'
import CheckIcon from '../assets/icons/check.svg?component'
</script>

<style scoped></style>
