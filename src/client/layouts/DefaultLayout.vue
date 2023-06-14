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
	--footer-bar-height: 50px;

	.login-bar {
		height: var(--footer-bar-height);

		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;

		background: $background-lighter;
		padding: var(--spacer-2);
		box-sizing: border-box;
		border-top: 4px solid $primary;

		display: flex;
		align-items: center;
		justify-content: flex-end;
		gap: 10px;

		h3.user-name {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.user-image {
			--size: calc( var(--footer-bar-height) + 8px);

			position: relative;
			transform: translateY(-8px);

			width: var(--size);
			height: var(--size);


			img {
				border: 3px solid $info;
				width: var(--size);
				height: var(--size);
				box-sizing: border-box;

				box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);

				border-radius: 50%;
				overflow: hidden;

				position: relative;
			}
		}
	}

	.menu-overlay {
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		height: 100%;

		background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
		backdrop-filter: blur(2px);

		opacity: 0;

		transition: opacity .5s;

		pointer-events: none;

		&.visible {
			pointer-events: all;
			opacity: 1;
		}
	}
}
</style>
