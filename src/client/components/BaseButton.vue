<template>
	<button class="base-button" :class="[{ disabled, toggled }, size]" @click="$emit('activate')" @keydown.enter="$emit('activate')">
		<slot name="icon">
			<FaIcon class="button-icon" v-if="icon">
				{{icon}}
			</FaIcon>
		</slot>

		<slot/>
	</button>
</template>

<script>
	import FaIcon from './FaIcon.vue';

	export default {
		name: 'BaseButton',
		components: { FaIcon },
		data: () => ({}),
		props: {
			disabled: {
				type: Boolean,
				default: false
			},
			toggled: {
				type: Boolean,
				default: false
			},
			tooltip: {
				type: String,
				default: ''
			},
			size: {
				type: String,
				default: 'md'
			},
			tooltipTimeout: {
				type: Number,
				default: 500
			},
			icon: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.base-button {
		--button-background-i: var(--button-background, hsla(var(--neutral-darkest-hsl), .3));
		--button-background-focus-i: var(--button-background-focus, hsla(var(--neutral-darkest-hsl), .4));
		--button-background-hover-i: var(--button-background-hover, hsla(var(--neutral-darkest-hsl), .6));

		--button-icon-color-i: var(--button-icon-color, inherit);
		--button-icon-color-focus-i: var(--button-icon-color-focus, var(--button-icon-color-i));
		--button-icon-color-hover-i: var(--button-icon-color-hover, var(--button-icon-color-i));

		border: 1px solid transparent;
		border-radius: 4px;

		position: relative;

		transition: all .3s;
		background-color: var(--button-background-i);

		cursor: pointer;

		color: inherit;

		padding: var(--spacer-1) var(--spacer-2);


		&.disabled {
			color: var(--neutral-md);
			pointer-events: none;
		}

		&.toggled {
			color: var(--primary);
		}

		&.md {
			padding: .5em 1em;
		}

		&.lg {
			padding: 1em 2em;
		}

		.button-icon {
			margin-right: var(--spacer-2);
			font-size: .9em;
			color: var(--button-icon-color-i);

			transition: transform .3s;
		}

		&:hover {
			background-color: var(--button-background-hover-i);
			box-shadow: 0 1px 5px rgba(6, 6, 17, 0.5);

			.button-icon {
				color: var(--button-icon-color-hover-i);
			}
		}

		&:focus {
			background-color: var(--button-background-focus-i);
			box-shadow: 0 1px 9px rgba(6, 6, 17, 0.5);
			outline: none;

			.button-icon {
				color: var(--button-icon-color-focus-i);
			}
		}

		&:hover, &:focus {
			border-color: var(--primary);

			.button-icon {
				transform: scale(1.2);
			}
		}
	}
</style>
