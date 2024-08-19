<template>
	<BoxComponent
		:title="$t('images')"
		no-divider
	>
		<template #default>
			<div class="details-images-component grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 items-center">
				<NuxtImg
					v-for="(image, key) in props.images"
					:key="key"
					:src="image"
					alt="image"
					class="preview-image"
					@click="currentVisibleImage=key; isOpen = true"
				/>
				<UModal
					v-if="props.images"
					v-model="isOpen"
					class="m-auto"
					:ui="{
						base: 'm-auto',
						background: 'bg-inherit dark:bg-inherit',
						shadow: 'shadow-none'
					}"
				>
					<NuxtImg
						:src="props.images[currentVisibleImage]"
						alt="image"
					/>
					<div
						class="text-center py-1 uppercase text-xs sm:text-sm"
						@click="isOpen = false"
					>
						{{ $t('close') }}
					</div>
				</UModal>
			</div>
		</template>
	</BoxComponent>
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
    height: 100%;
    cursor: pointer;
    transition: 150ms;
    -webkit-user-drag: none;
    object-fit: cover;

    &:hover {
      opacity: .85;
    }
  }
}
</style>
