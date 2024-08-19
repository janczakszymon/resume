<template>
	<div class="details-links-component flex gap-3 flex-wrap mt-5">
		<NuxtLink
			v-for="(link, key) in props.links"
			:key="key"
			:to="link.to"
			external
			target="_blank"
			class="flex items-center gap-2"
		>
			<UIcon
				:name="link.heroIcon"
				size="25"
			/> <span class="underline">{{ link.text }}</span>
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { IProjectLink } from '~/interface/project/IProjectLink';

const props = defineProps({
	links: {
		type: Object as PropType<IProjectLink[]>,
	}
});
</script>

<style scoped lang="scss">
.details-links-component {
  font-size: .8rem;

  @screen md {
    font-size: 1rem;
  }
}
</style>
