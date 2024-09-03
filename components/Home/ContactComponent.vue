<template>
	<BoxComponent
		id="contact"
		:title="$t('contact')"
		icon="i-heroicons-user-plus"
	>
		<template v-if="isVisible">
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
		</template>
		<ClickToShowComponent
			v-else
			v-model="isVisible"
		/>
	</BoxComponent>
</template>

<script setup lang="ts">
import type { ILink } from '~/interface/home/ILink';

const isVisible = ref(false);
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
	{
		name: 'kontakt@janczakszymon.pl',
		text: 'Email',
		to: 'mailto:kontakt@janczakszymon.pl',
	},
]);
</script>
