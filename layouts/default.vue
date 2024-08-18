<template>
	<UContainer>
		<NavbarComponent />
		<slot />
		<footer class="mb-3">
			<UDivider class="my-3" />
			<div class="flex justify-between">
				<span>Szymon Janczak &#169; {{ currentYear }}</span>
				<span>
					{{ $t('theme') }}
					<NuxtLink
						to="https://www.2020.works/"
						external
						target="_blank"
						class="underline"
					>2020.works</NuxtLink>
				</span>
			</div>
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
