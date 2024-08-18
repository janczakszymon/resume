<template>
	<BoxComponent
		id="certificates"
		:title="$t('certificates')"
	>
		<div
			v-for="(cert, key) in certificates"
			:key="key"
		>
			{{ cert.name }}
			<CircleComponent />
			{{ cert.description }}
		</div>
	</BoxComponent>
</template>

<script setup lang="ts">
import type { ICertificate } from '~/interface/home/ICertificate';

const certificates = ref<ICertificate[]>([
	{
		name: 'INF.03',
		description: 'Tworzenie witryn internetowych i Bazy danych',
	},
	{
		name: 'INF.02',
		description: 'Technologie informatyczne, Administrowanie siecią i Projektowanie sieci',
	},
]);
</script>
