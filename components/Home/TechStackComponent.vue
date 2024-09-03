<template>
	<BoxComponent
		id="techStack"
		:title="$t('techStack')"
		icon="i-heroicons-code-bracket"
	>
		<div class="flex flex-wrap gap-5 md:w-3/4">
			<template v-if="dataStore.data">
				<div
					v-for="(tech, key) in techStack"
					:key="key"
					class="flex items-center gap-1 bg-gray-200 p-1 rounded-lg"
				>
					{{ tech.name }}
				</div>
			</template>
			<SkeletonComponent v-else />
		</div>
	</BoxComponent>
</template>

<script setup lang="ts">
import type { ITech } from '~/interface/home/ITech';
import { useDataStore } from '~/store/dataStore';

const dataStore = useDataStore();
const techStack = computed<ITech[]>(() => dataStore.data['technologies']);
</script>
