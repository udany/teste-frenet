<template>
	<div class="main">
		<h1>
			<router-link :to="{ name: 'home' }"><fa-icon>chevron-left</fa-icon></router-link>
			Buscar usuário
		</h1>

		<!-- username -->
		<div class="field">
			<label for="username">Nome de Usuário</label>
			<input id="username" v-model="data.username" @keydown.enter="search" autofocus />
			<AutoResizer>
				<transition name="fade">
					<p class="field-message" v-if="!data.username">
						* Obrigatório
					</p>
				</transition>
			</AutoResizer>
		</div>

		<BaseButton icon="search" @activate="search">Buscar</BaseButton>
	</div>
</template>

<script>
	import { reactive } from 'vue';
	import { useRouter } from 'vue-router'
	import UserForm from './components/UserForm.vue';
	import BaseButton from '../../components/BaseButton.vue';

	export default {
		name: 'NewUser',
		components: { BaseButton, UserForm },
		setup() {
			const router = useRouter();

			let data = reactive({
				username: ''
			});

			return {
				data,
				async search() {
					router.push({
						name: 'edit-user',
						params: {
							username: data.username
						}
					})
				}
			}
		},
	};
</script>

<style lang="scss" scoped>
	.field {
		> label {
			display: block;
			font-size: $font-size-xs;
		}

		> input {
			margin: .4em 0;
			padding: .4em .6em;
			outline: none !important;
			border: 0;

			color: var(--neutral-lightest);
			background: hsla(var(--neutral-darkest-hsl), .8);

			border-bottom: 1px solid var(--neutral-lightest);

			transition: border-bottom-color .2s;

			&:focus {
				border-bottom-color: var(--primary);
			}
			&:-webkit-autofill {
				-webkit-text-fill-color: var(--neutral-lightest);
				-webkit-box-shadow: 0 0 0 1000px hsla(var(--neutral-darkest-hsl), 1) inset;

				border-bottom-color: var(--info);
			}
		}

		.field-message {
			margin: 0;
			color: var(--warning);
			font-size: $font-size-xxs;

			&.error {
				color: var(--error);
			}
		}

		+ .field {
			margin-top: 1em;
		}
	}

	.main {
		> button {
			margin-top: 1em;
		}
	}
</style>
