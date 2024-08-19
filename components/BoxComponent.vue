<template>
	<div class="box-component mb-5">
		<div class="title flex gap-3 items-center">
			<UIcon :name="props.icon" /> {{ props.title }}
		</div>
		<div class="content flex flex-col gap-1.5">
			<slot name="default" />
		</div>
		<UDivider
			v-if="!props.noDivider"
			class="w-1/6 mt-3"
		/>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	icon: {
		type: String,
		default: 'i-heroicons-newspaper'
	},
	noDivider: {
		type: Boolean,
		default: false,
	},
});
</script>

<style scoped lang="scss">
.box-component {
  .title {
    font-size: .9rem;
    letter-spacing: 4px;
    opacity: .35;
    color: $gray;
    user-select: none;
    text-transform: lowercase;

    @screen md {
      font-size: 1.3rem;
    }
  }

  .content {
    font-size: .8rem;

    @screen md {
      font-size: 1rem;
    }
  }
}
</style>
