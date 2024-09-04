<template>
	<div
		class="details-text-component my-5"
		v-html="props.text"
	/>
</template>

<script setup lang="ts">
const props = defineProps({
	text: {
		type: String,
		required: true
	}
});
</script>

<style scoped lang="scss">
.details-text-component {
  text-align: justify;
  font-size: .9rem;

  @screen md {
    font-size: 1rem;
  }
}
</style>
