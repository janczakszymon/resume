<template>
	<main
		v-if="project"
		class="flex flex-col mb-5"
	>
		<ProjectDetailsHeaderComponent
			:full-name="project.fullName[$i18n.locale]"
			:name="project.name[$i18n.locale]"
		/>
		<!--		<ProjectDetailsLinksComponent :links="project.links" /> -->
		<ProjectDetailsTextComponent :text="project.description[$i18n.locale]" />
		<!--		<HomeTechStackComponent no-divider /> -->
		<!--		<ProjectDetailsImagesComponent :images="project.images" /> -->
	</main>
	<SkeletonComponent v-else />
</template>

<script setup lang="ts">
import type { IProjectDetails } from '~/interface/project/IProjectDetails';
import { useApi } from '~/composable/useApi';

const route = useRoute();
const project = ref<IProjectDetails>();

useApi(`/resumes/projects/${route.params.id}/`)
	.then((res) => {
		project.value = res;
	});
</script>

<style scoped lang="scss"></style>
