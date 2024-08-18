<template>
	<h1 class="details-header-component my-3">
		{{ props.fullName }}
		<UDivider />
	</h1>
</template>

<script setup lang="ts">
const props = defineProps({
	fullName: {
		type: String,
		required: true
	}
});
</script>

<style scoped lang="scss">
.details-header-component {
  font-size: 1.5rem;
  font-weight: 800;

  @screen sm {
    font-size: 2rem;
  }

  @screen md {
    font-size: 2.3rem;
  }
}
</style>
