<template>
	<BoxComponent
		id="studies"
		:title="$t('studies')"
		icon="i-heroicons-academic-cap"
		no-divider
	>
		<template v-if="dataStore.data">
			<div
				v-for="(study, key) in studies"
				:key="key"
			>
				{{ study.textPrimary[$i18n.locale] }}
				<CircleComponent />
				{{ study.textSecondary[$i18n.locale] }}
			</div>
		</template>
		<SkeletonComponent v-else />
	</BoxComponent>
</template>

<script setup lang="ts">
import { useDataStore } from '~/store/dataStore';
import type { IText } from '~/interface/home/IText';

const dataStore = useDataStore();
const studies = computed<IText[]>(() => dataStore.data['texts']['studies']);
</script>
