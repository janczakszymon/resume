<template>
	<BoxComponent
		id="languages"
		:title="$t('languages')"
	>
		<div
			v-for="(lang, key) in languages"
			:key="key"
		>
			{{ lang.name }}
			<CircleComponent />
			{{ lang.level }}
		</div>
	</BoxComponent>
</template>

<script setup lang="ts">
import type { ILanguage } from '~/interface/ILanguage';

const languages = ref<ILanguage[]>([
	{
		name: 'Angielski',
		level: 'Średniozaawansowany',
	},
	{
		name: 'Polski',
		level: 'Ojczysty',
	},
]);
</script>
