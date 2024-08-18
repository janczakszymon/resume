<template>
	<BoxComponent
		id="experience"
		:title="$t('experience')"
	>
		<div
			v-for="(exp, key) in experience"
			:key="key"
			class="experience-details"
		>
			<span class="position">{{ exp.position }}</span>
			<div>
				{{ exp.company }} <CircleComponent /> {{ exp.location }}
			</div>
			<div>
				{{ exp.startDate }} - {{ exp.endDate ? exp.endDate : 'obecnie' }}
			</div>
		</div>
	</BoxComponent>
</template>

<script setup lang="ts">
import type { IExperience } from '~/interface/home/IExperience';

const experience = ref<IExperience[]>([
	{
		company: 'Digital Holding Sp. z o.o.',
		startDate: 'Lip 2022',
		endDate: 'Sie 2023',
		location: 'Olesno, Woj. Opolskie',
		position: 'Młodszy programista fullstack',
	},
	{
		company: 'Dunapack Packaging (Eurobox Polska Sp. z o.o.)',
		startDate: 'Mar 2022',
		endDate: 'Mar 2023',
		location: 'Lubliniec, Woj. Śląskie',
		position: 'Praktykant IT',
	},
]);
</script>

<style scoped lang="scss">
#experience {
  .experience-details {
    div {
      font-size: .9rem;
      color: $gray;
    }
  }
}
</style>
