<template>
	<BoxComponent
		title="technologie"
		class="tech-stack-component"
	>
		<div class="flex gap-3">
			<div
				v-for="(tech, key) in techs"
				:key="key"
				class="flex items-center gap-2"
			>
				<NuxtImg
					v-if="tech.icon"
					:src="tech.icon"
					:alt="`${tech.name}-icon`"
					class="tech-icon"
				/>
				{{ tech.name }}
				<CircleComponent v-if="key < techs.length-1" />
			</div>
		</div>
	</BoxComponent>
</template>

<script setup lang="ts">
import type { ITech } from '~/interface/ITech';

const techs = ref<ITech[]>([
	{
		name: 'Vue',
		icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558',
	},
	{
		name: 'Symfony',
		icon: 'https://w7.pngwing.com/pngs/792/884/png-transparent-symfony-doctrine-php-software-developer-application-programming-interface-python-stickers-text-logo-programming-language-thumbnail.png',
	},
	{
		name: 'Docker',
		icon: '',
	},
]);
</script>

<style scoped lang="scss">
.tech-stack-component {
  .tech-icon {
    width: 20px;
  }
}
</style>
