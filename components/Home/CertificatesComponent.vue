<template>
	<BoxComponent
		id="certificates"
		:title="$t('certificates')"
		icon="i-heroicons-clipboard-document-check"
	>
		<template v-if="dataStore.data">
			<div
				v-for="(cert, key) in certificates"
				:key="key"
			>
				{{ cert.textPrimary[$i18n.locale] }}
				<CircleComponent />
				{{ cert.textSecondary[$i18n.locale] }}
			</div>
		</template>
		<SkeletonComponent v-else />
	</BoxComponent>
</template>

<script setup lang="ts">
import { useDataStore } from '~/store/dataStore';
import type { IText } from '~/interface/home/IText';

const dataStore = useDataStore();
const certificates = computed<IText[]>(() => dataStore.data['texts']['certificates']);
</script>
