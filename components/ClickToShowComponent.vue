<template>
	<div
		class="flex flex-col gap-1.5 cursor-pointer select-none"
		@click="isVisible = true"
	>
		<USkeleton
			class="h-4 w-1/2"
			:ui="config"
		/>
		<div class="flex items-center gap-3">
			<USkeleton
				class="h-4 w-1/6"
				:ui="config"
			/>
			<div>{{ $t('clickToShow') }}</div>
		</div>
		<USkeleton
			class="h-4 w-1/4"
			:ui="config"
		/>
	</div>
</template>

<script setup lang="ts">
const isVisible = defineModel<boolean>();

const config = {
	background: 'bg-gray-200'
};
</script>
