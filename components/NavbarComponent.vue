<template>
	<nav class="navbar-component flex items-center justify-between py-1 bg-zinc-100 dark:bg-slate-900">
		<div>
			Janczak Szymon Logo
		</div>
		<UIcon
			size="40"
			name="i-heroicons-bars-3-bottom-right"
			class="cursor-pointer"
			@click="isOpen = true"
		/>
		<USlideover
			v-model="isOpen"
		>
			<div class="flex flex-col gap-3 p-3">
				<div class="flex justify-between items-center">
					<div class="flex items-center gap-1">
						<USelectMenu
							v-model="selectedLanguage"
							:options="languages"
							:placeholder="selectedLanguage.name"
							value-attribute="value"
							option-attribute="name"
							tabindex="-1"
						/>
						<UButton
							:icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
							color="gray"
							variant="ghost"
							size="xl"
							tabindex="-1"
							@click="isDark = !isDark"
						/>
					</div>
					<UIcon
						size="50"
						name="i-heroicons-x-mark"
						class="cursor-pointer"
						@click="isOpen = false"
					/>
				</div>
				<NuxtLink
					v-for="(link, key) in navLinks"
					:key="key"
					:to="link.to"
					:external="link.external"
					:target="link.external ? '_blank' : '_self'"
					tabindex="-1"
				>
					{{ link.name }}
					<UDivider />
				</NuxtLink>
			</div>
		</USlideover>
	</nav>
</template>

<script setup lang="ts">
import type { INavLink } from '~/interface/INavLink';
import type { ISelectLanguage } from '~/interface/ISelectLanguage';

const isOpen = ref(false);
const colorMode = useColorMode();
const languages = ref<ISelectLanguage[]>([
	{
		name: 'Polski',
		value: 'pl'
	},
	{
		name: 'English',
		value: 'en'
	}
]);
const selectedLanguage = ref<ISelectLanguage>(languages.value[0]);

const isDark = computed({
	get() {
		return colorMode.value === 'dark';
	},
	set() {
		colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
	}
});

const navLinks = ref<INavLink[]>([
	{
		name: 'O mnie',
		to: '#',
		external: false
	},
	{
		name: 'Kontakt',
		to: '#',
		external: false
	},
	{
		name: 'Doświadczenie',
		to: '#',
		external: false
	},
	{
		name: 'Projekty',
		to: '#',
		external: false
	},
	{
		name: 'Technolgie',
		to: '#',
		external: false
	},
	{
		name: 'Certyfikaty',
		to: '#',
		external: false
	},
	{
		name: 'Języki',
		to: '#',
		external: false
	},
	{
		name: 'Wykształcenie',
		to: '#',
		external: false
	},
]);
</script>

<style scoped lang="scss">
.navbar-component {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
