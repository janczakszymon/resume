<template>
	<BoxComponent
		id="projects"
		:title="$t('projects')"
		icon="i-heroicons-folder-open"
	>
		<template v-if="dataStore.data">
			<NuxtLinkLocale
				v-for="(project, key) in projects"
				:key="key"
				:to="`/projects/${project.id}`"
				class="flex items-center"
			>
				<div
					class="underline"
					v-html="project.name[$i18n.locale]"
				/>
				<div class="type uppercase">
					{{ $t(project.type) }}
				</div>
				<UIcon
					name="i-heroicons-arrow-right"
					class="icon"
				/>
			</NuxtLinkLocale>
		</template>
		<SkeletonComponent v-else />
	</BoxComponent>
</template>

<script setup lang="ts">
import { useDataStore } from '~/store/dataStore';
import type { IProject } from '~/interface/home/IProject';

const dataStore = useDataStore();
const projects = computed<IProject[]>(() => dataStore.data['projects']);
</script>

<style scoped lang="scss">
#projects {
  .type {
    color: $gray;
    font-size: .7rem;
    margin-left: 10px;
    text-decoration: none !important;

    @screen md {
      font-size: .8rem;
    }
  }

  .icon {
    margin-left: 10px;
    color: $gray;
    vertical-align: middle;
  }
}
</style>
