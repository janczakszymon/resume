<template>
	<UContainer>
		<NavbarComponent />
		<slot />
		<footer class="mb-3">
			<UDivider class="my-3" />
			Szymon Janczak &#169; {{ currentYear }}
		</footer>
	</UContainer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped lang="scss">
footer {
  color: $gray;
  font-size: .8rem;

  @screen md {
    font-size: 1rem;
  }
}
</style>
