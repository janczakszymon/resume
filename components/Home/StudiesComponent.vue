<template>
  <BoxComponent title="wykształcenie" is-last class="studies-component">
    <div v-for="(study, key) in studies" :key="key">{{ study.name }}
      <CircleComponent/>
      {{ study.profile }}
    </div>
  </BoxComponent>
</template>

<script setup lang="ts">
import type {IStudy} from "~/interface/IStudy";

const studies = ref<IStudy[]>([
  {
    name: 'Politechnika Śląska',
    profile: 'Informatyka, inżynierskie I stopnia, w trakcie'
  },
  {
    name: 'ZSOT Lubliniec',
    profile: 'Technik Informatyk'
  }
]);
</script>