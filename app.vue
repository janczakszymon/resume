<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
useHead({
	bodyAttrs: {
		class: 'bg-zinc-100 dark:bg-slate-900',
	},
});
</script>

<style lang="scss">
body {}
</style>
