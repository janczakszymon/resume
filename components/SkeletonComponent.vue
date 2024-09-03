<template>
	<div class="flex flex-col gap-1.5">
		<USkeleton
			class="h-4 w-1/2"
			:ui="config"
		/>
		<USkeleton
			class="h-4 w-1/3"
			:ui="config"
		/>
		<USkeleton
			class="h-4 w-1/4"
			:ui="config"
		/>
	</div>
</template>

<script setup lang="ts">
const config = {
	background: 'bg-gray-200'
};
</script>
