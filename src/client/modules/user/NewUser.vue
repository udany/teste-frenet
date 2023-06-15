<template>
	<div class="main">
		<h1>
			<router-link :to="{ name: 'home' }"><fa-icon>chevron-left</fa-icon></router-link>
			Novo usuário
		</h1>

		<UserForm :user="data.user" v-model:valid="data.valid" />

		<BaseButton icon="save" :disabled="!data.valid" @activate="save">Salvar</BaseButton>
	</div>
</template>

<script>
	import { reactive } from 'vue';
	import { useRouter } from 'vue-router';
	import { apiService } from '../../services/api';
	import { User } from '../../../shared/models/User';
	import UserForm from './components/UserForm.vue';
	import BaseButton from '../../components/BaseButton.vue';

	export default {
		name: 'NewUser',
		components: { BaseButton, UserForm },
		setup() {
			let data = reactive({
				user: new User().$fill({ id: 0, userStatus: 2 }),
				valid: false
			});

			const router = useRouter();

			return {
				data,
				async save() {
					if (!data.valid) return;

					let user = await apiService.user.create(data.user);

					console.log(user);

					router.push({
						name: 'edit-user',
						params: {
							username: user.username
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
