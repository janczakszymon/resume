<template>
	<BoxComponent
		id="experience"
		:title="$t('experience')"
		icon="i-heroicons-briefcase"
	>
		<template v-if="dataStore.data">
			<div
				v-for="(exp, key) in experiences"
				:key="key"
				class="experience-details"
			>
				<div
					class="position"
					v-html="exp.position[$i18n.locale]"
				/>
				<div>
					{{ exp.company }}
				</div>
				<div>
					{{ exp.location }}
				</div>
				<div>
					{{ format(exp.startDate, 'MM-yyyy') }} - {{ exp.endDate ? format(exp.endDate, 'MM-yyyy') : 'obecnie' }}
				</div>
			</div>
		</template>
		<SkeletonComponent v-else />
	</BoxComponent>
</template>

<script setup lang="ts">
import { format } from 'date-fns';
import type { IExperience } from '~/interface/home/IExperience';
import { useDataStore } from '~/store/dataStore';

const dataStore = useDataStore();
const experiences = computed<IExperience[]>(() => dataStore.data['experiences']);
</script>

<style scoped lang="scss">
#experience {
  .experience-details {
    div:not(.position) {
      font-size: .8rem;
      color: $gray;

      @screen md {
        font-size: .9rem;
      }
    }
  }
}
</style>
