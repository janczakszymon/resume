<template>
	<BoxComponent
		id="languages"
		:title="$t('languages')"
		icon="i-heroicons-language"
	>
		<template v-if="dataStore.data">
			<div
				v-for="(lang, key) in languages"
				:key="key"
			>
				<div v-html="lang.textPrimary[$i18n.locale]" />
				<div
					class="text-gray-500"
					v-html="lang.textSecondary[$i18n.locale]"
				/>
			</div>
		</template>
		<SkeletonComponent v-else />
	</BoxComponent>
</template>

<script setup lang="ts">
import { useDataStore } from '~/store/dataStore';
import type { IText } from '~/interface/home/IText';

const dataStore = useDataStore();
const languages = computed<IText[]>(() => dataStore.data['texts']['languages']);
</script>
