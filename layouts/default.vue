<template>
  <UContainer>
    <main>
      <slot/>
    </main>
    <footer>
      <UDivider class="my-3"></UDivider>
      <div class="flex justify-between">
        <span>Szymon Janczak &#169; {{ currentYear }}</span>
        <span>Motyw inspirowany
          <NuxtLink to="https://www.2020.works/" external target="_blank" class="underline">2020.works</NuxtLink>
        </span>
      </div>
    </footer>
  </UContainer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>