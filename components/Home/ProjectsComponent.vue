<template>
	<BoxComponent
		id="projects"
		:title="$t('projects')"
	>
		<NuxtLink
			v-for="(project, key) in projects"
			:key="key"
			to="#"
		>
			<span class="underline">{{ project.name }}</span>
			<span
				v-if="project.isContract"
				class="contract uppercase"
			>{{ $t('contract') }}</span>
			<UIcon
				name="i-heroicons-arrow-right"
				class="icon"
			/>
		</NuxtLink>
	</BoxComponent>
</template>

<script setup lang="ts">
import type { IProject } from '~/interface/IProject';

const projects = ref<IProject[]>([
	{
		name: 'Resume',
		isContract: false,
	},
	{
		name: 'Biuro Projektowe',
		isContract: true,
	},
	{
		name: 'Medycyna Estetyczna',
		isContract: true,
	},
]);
</script>

<style scoped lang="scss">
#projects {
  .contract {
    color: $gray;
    font-size: .8rem;
    margin-left: 10px;
    text-decoration: none !important;
  }

  .icon {
    margin-left: 10px;
    color: $gray;
    vertical-align: middle;
  }
}
</style>
