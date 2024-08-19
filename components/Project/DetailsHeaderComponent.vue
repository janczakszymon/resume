<template>
	<div class="details-header-component my-3">
		<UBreadcrumb
			:links="breadcrumbLinks"
			:ui="{
				ol: 'flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2',
				li: 'text-xs sm:text-sm'
			}"
		/>
		<h1>
			{{ props.fullName }}
			<UDivider />
		</h1>
	</div>
</template>

<script setup lang="ts">
const i18n = useI18n();
const route = useRoute();

const props = defineProps({
	fullName: {
		type: String,
		required: true
	}
});

const breadcrumbLinks = ref([
	{
		label: i18n.t('homepage'),
		icon: 'i-heroicons-home',
		to: '/'
	},
	{
		icon: 'i-heroicons-code-bracket',
		label: route.params.projectName,
	},
]);
</script>

<style scoped lang="scss">
.details-header-component {
  h1 {
    font-size: 1.75rem;
    font-weight: 800;

    @screen sm {
      font-size: 2rem;
    }

    @screen md {
      font-size: 2.3rem;
    }
  }
}
</style>
