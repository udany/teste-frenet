<template>
	<div class="main">
		<h1>
			<router-link :to="{ name: 'home' }"><fa-icon>chevron-left</fa-icon></router-link>
			Buscar usuário
		</h1>

		<!-- username -->
		<div class="form-field">
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
	import BaseButton from '../../components/BaseButton.vue';

	export default {
		name: 'NewUser',
		components: { BaseButton },
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
	.main {
		> button {
			margin-top: 1em;
		}
	}
</style>
