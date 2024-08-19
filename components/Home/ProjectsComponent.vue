<template>
	<BoxComponent
		id="projects"
		:title="$t('projects')"
		icon="i-heroicons-folder-open"
	>
		<NuxtLinkLocale
			v-for="(project, key) in projects"
			:key="key"
			:to="`/projects/${project.name}`"
		>
			<span class="underline">{{ project.name }}</span>
			<span class="type uppercase">{{ $t(project.type) }}</span>
			<UIcon
				name="i-heroicons-arrow-right"
				class="icon"
			/>
		</NuxtLinkLocale>
	</BoxComponent>
</template>

<script setup lang="ts">
import type { IProject } from '~/interface/home/IProject';

const projects = ref<IProject[]>([
	{
		name: 'Resume',
		type: 'opensource',
	},
	{
		name: 'Biuro Projektowe',
		type: 'contract',
	},
	{
		name: 'Medycyna Estetyczna',
		type: 'contract',
	},
]);
</script>

<style scoped lang="scss">
#projects {
  .type {
    color: $gray;
    font-size: .7rem;
    margin-left: 10px;
    text-decoration: none !important;

    @screen md {
      font-size: .8rem;
    }
  }

  .icon {
    margin-left: 10px;
    color: $gray;
    vertical-align: middle;
  }
}
</style>
