<template>
  <div class="box-component my-5">
    <div class="title">{{ props.title }}</div>
    <div class="links flex flex-col gap-1">
      <slot name="default"/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true
  }
});
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