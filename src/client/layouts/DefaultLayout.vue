<template>
	<div class="layout-default">
		<slot />
	</div>
</template>

<script>
	export default {
		name: 'DefaultLayout',
		components: { },
		data: () => ({
			isMenuOpen: false,
		})
	}
</script>

<style lang="scss" scoped>
.layout-default {
	max-width: 800px;

	padding: 20px 20px 40px;
	margin: 20px auto;

	background: hsla(var(--neutral-dark-hsl), 1);
}
</style>
