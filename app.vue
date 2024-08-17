<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
useHead({
	title: 'Szymon Janczak',
	htmlAttrs: {
		lang: 'pl',
	},
	bodyAttrs: {
		class: 'bg-zinc-100 dark:bg-slate-900',
	},
	meta: [
		{
			name: 'description',
			content:
          'Resume website',
		},
		{
			name: 'keywords',
			content:
          'Resume',
		},
	]
});
</script>

<style lang="scss">
body {}
</style>
