<template>
	<div class="details-images-component grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 items-center">
		<NuxtImg
			v-for="(image, key) in props.images"
			:key="key"
			:src="image"
			alt="image"
			class="preview-image col-span-1 rounded-xl"
			@click="currentVisibleImage=key; isOpen = true"
		/>
		<UModal
			v-if="props.images"
			v-model="isOpen"
		>
			<NuxtImg
				:src="props.images[currentVisibleImage]"
				alt="image"
			/>
			<div
				class="text-center py-1 uppercase text-xs sm:text-sm hover:opacity-75 cursor-pointer transition duration-100"
				@click="isOpen = false"
			>
				{{ $t('close') }}
			</div>
		</UModal>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	images: {
		type: Array,
		required: true
	}
});

const isOpen = ref(false);
const currentVisibleImage = ref(0);
</script>

<style scoped lang="scss">
.details-images-component {
  .preview-image {
    width: 100%;
    cursor: pointer;
    transition: 150ms;
    -webkit-user-drag: none;

    &:hover {
      opacity: .85;
    }
  }
}
</style>
