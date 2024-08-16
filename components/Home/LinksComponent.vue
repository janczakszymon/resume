<template>
  <BoxComponent class="links-component">
    <template #title>
      KONTAKT
    </template>
    <div class="links flex flex-col gap-1">
      <div>Linkedin:
        <NuxtLink to="https://www.linkedin.com/in/szymon-j-690149213" target="_blank" external>Szymon Janczak</NuxtLink>
      </div>
      <div>GitHub:
        <NuxtLink to="https://github.com/janczakszymon" target="_blank" external>janczakszymon</NuxtLink>
      </div>
    </div>
  </BoxComponent>
</template>

<script setup>
</script>

<style scoped lang="scss">
.links-component {
  a {
    text-decoration: underline;
  }
}
</style>