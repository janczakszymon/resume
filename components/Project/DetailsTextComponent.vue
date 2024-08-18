<template>
	<p class="details-text-component">
		Strona-wizytówka firmy SketchIT, zajmującej się projektowaniem budynków. Projekt od strony technicznej prowadzony
		przeze mnie od podstaw, od napisania części frontendowej przez stworzenie dedykowanego panelu kończąc na
		umieszczeniu strony w sieci. Całość frontendu została napisana przy użyciu frameworka Nuxt, natomiast backend w
		języku PHP z frameworkiem Symfony.
	</p>
</template>

<script setup lang="ts">
const props = defineProps({
	text: {
		type: String,
		required: true
	}
});
</script>

<style scoped lang="scss">
.details-text-component {
  text-align: justify;
  font-size: .9rem;

  @screen md {
    font-size: 1rem;
  }
}
</style>
