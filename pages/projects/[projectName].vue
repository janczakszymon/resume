<template>
	<main class="flex flex-col mb-5">
		<ProjectDetailsHeaderComponent :full-name="project.fullName" />
		<ProjectDetailsLinksComponent :links="project.links" />
		<ProjectDetailsTextComponent :text="project.description" />
		<HomeTechStackComponent no-divider />
		<ProjectDetailsImagesComponent :images="project.images" />
	</main>
</template>

<script setup lang="ts">
import type { IProjectDetails } from '~/interface/project/IProjectDetails';

const route = useRoute();

const project = ref<IProjectDetails>({
	name: 'Biuro Projektowe',
	fullName: `${route.params.projectName} Full Name`,
	description: 'Opis...',
	images: [
		'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
		'https://static1.squarespace.com/static/65a8583b3f2bb32732bff587/t/65a8ca18de89e516e0386898/1705560605282/RefExteriors-18.jpg?format=1500w',
		'https://img.staticmb.com/mbcontent/images/crop/uploads/2022/12/Most-Beautiful-House-in-the-World_0_1200.jpg'
	],
	links: [
		{
			to: 'https://www.sketchit.pl',
			text: 'Strona internetowa',
			heroIcon: 'i-heroicons-globe-europe-africa'
		},
		{
			to: 'https://www.sketchit.pl',
			text: 'SketchIT.pl',
			heroIcon: 'i-heroicons-star'
		}
	],
});
</script>

<style scoped lang="scss"></style>
