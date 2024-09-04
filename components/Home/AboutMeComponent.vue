<template>
	<BoxComponent
		id="aboutMe"
		:title="$t('aboutMe')"
	>
		<div
			v-if="dataStore.data"
			v-html="aboutMe.textPrimary[$i18n.locale]"
		/>
		<SkeletonComponent v-else />
	</BoxComponent>
</template>

<script setup lang="ts">
import { useDataStore } from '~/store/dataStore';
import type { IText } from '~/interface/home/IText';

const dataStore = useDataStore();
const aboutMe = computed<IText>(() => dataStore.data['texts']['aboutMe'][0]);
</script>
