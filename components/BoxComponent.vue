<template>
  <div class="box-component my-5">
    <div class="title">
      <slot name="title"/>
    </div>
    <slot name="default"/>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.box-component {
  .title {
    font-size: 1.3rem;
    letter-spacing: 4px;
    opacity: .25;
    user-select: none;
  }

  p {
    font-size: 1rem;
    text-align: justify;
  }
}
</style>