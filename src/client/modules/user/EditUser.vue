<template>
	<div class="main">
		<h1>
			Editar usuário
		</h1>

		<template v-if="data.user?.id">
			<UserForm :user="data.user" v-model:valid="data.valid" />

			<BaseButton icon="save" :disabled="!data.valid" @activate="save">Salvar</BaseButton>
			<BaseButton icon="trash" :disabled="!data.valid" @activate="deleteUser">Apagar</BaseButton>
		</template>

		<p v-if="!data.user">
			Usuário não encontrado
		</p>
	</div>
</template>

<script>
	import { reactive, watchEffect } from 'vue';
	import { useRoute, useRouter } from 'vue-router'
	import { apiService } from '../../services/api';
	import { User } from '../../../shared/models/User';
	import UserForm from './components/UserForm.vue';
	import BaseButton from '../../components/BaseButton.vue';

	export default {
		name: 'NewUser',
		components: { BaseButton, UserForm },
		setup() {
			const route = useRoute();
			const router = useRouter();

			let data = reactive({
				user: new User().$fill({ id: 0, userStatus: 2 }),
				valid: true
			});

			watchEffect(async () => {
				data.user = await apiService.user.get(route.params.username.toString());
			})

			return {
				data,
				async save() {
					if (!data.valid) return;

					let user = await apiService.user.update(data.user);

					alert('Salvo!')
				},
				async deleteUser() {
					if (!confirm('Certeza?')) return;

					let success = await apiService.user.delete(data.user);

					if (success) {
						router.push({
							name: 'home'
						})
					}
				}
			}
		},
	};
</script>

<style lang="scss" scoped>
	.main {
		> button {
			margin-top: 1em;

			+ * {
				margin-inline-start: 1em;
			}
		}
	}
</style>
