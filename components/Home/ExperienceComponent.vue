<template>
  <BoxComponent title="doświadczenie" class="experience-component">
    <div v-for="(exp, key) in experience" :key="key" class="experience-details">
      <span class="position">{{ exp.position}}</span>
      <div>
        {{ exp.company}} <CircleComponent/> {{exp.location}}
      </div>
      <div>
        {{exp.startDate}} - {{ exp.isWorking ? 'obecnie' : exp.endDate }}
      </div>
    </div>
  </BoxComponent>
</template>

<script setup lang="ts">
import type {IExperience} from "~/interface/IExperience";

const experience = ref<IExperience[]>([
  {
    company: "Digital Holding Sp. z o.o.",
    startDate: "Lip 2022",
    endDate: "Sie 2023",
    isWorking: false,
    location: "Olesno, Woj. Opolskie",
    position: "Młodszy programista fullstack",
  },
  {
    company: "Dunapack Packaging (Eurobox Polska Sp. z o.o.)",
    startDate: "Mar 2022",
    endDate: "Mar 2023",
    isWorking: true,
    location: "Lubliniec, Woj. Śląskie",
    position: "Praktykant IT",
  },
]);
</script>

<style scoped lang="scss">
.experience-component {
  .experience-details {
    div {
      font-size: .9rem;
      opacity: .65;
    }
  }
}
</style>