<template>
	<BoxComponent
		title="kontakt"
		class="links-component"
	>
		<div
			v-for="(link, key) in links"
			:key="key"
		>
			{{ link.text }}:
			<NuxtLink
				:to="link.to"
				target="_blank"
				external
				class="underline"
			>
				{{ link.name }}
			</NuxtLink>
		</div>
	</BoxComponent>
</template>

<script setup lang="ts">
import type { ILink } from '~/interface/ILink';

const links = ref<ILink[]>([
	{
		name: 'Szymon Janczak',
		text: 'Linkedin',
		to: 'https://www.linkedin.com/in/szymon-j-690149213',
	},
	{
		name: 'janczakszymon',
		text: 'GitHub',
		to: 'https://github.com/janczakszymon',
	},
]);
</script>
