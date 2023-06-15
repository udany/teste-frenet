<template>
	<div class="user-form">
		<!-- username -->
		<div class="form-field">
			<label for="username">Usuário</label>
			<input id="username" v-model="user.username" />
			<AutoResizer>
				<transition name="fade">
					<p class="field-message" v-if="!user.username">
						* Obrigatório
					</p>
				</transition>
			</AutoResizer>
		</div>

		<!-- password -->
		<div class="form-field">
			<label for="password">Senha</label>
			<input id="password" type="password" v-model="user.password" />
			<AutoResizer>
				<transition name="fade">
					<p class="field-message" v-if="!user.password">
						* Obrigatório
					</p>
				</transition>
			</AutoResizer>
		</div>

		<!-- firstName -->
		<div class="form-field">
			<label for="firstName">Nome</label>
			<input id="firstName" v-model="user.firstName" />
			<AutoResizer>
				<transition name="fade">
					<p class="field-message" v-if="!user.firstName">
						* Obrigatório
					</p>
				</transition>
			</AutoResizer>
		</div>

		<!-- lastName -->
		<div class="form-field">
			<label for="lastName">Sobrenome</label>
			<input id="lastName" v-model="user.lastName" />
			<AutoResizer>
				<transition name="fade">
					<p class="field-message" v-if="!user.lastName">
						* Obrigatório
					</p>
				</transition>
			</AutoResizer>
		</div>

		<!-- email -->
		<div class="form-field">
			<label for="email">Email</label>
			<input id="email" v-model="user.email" />
			<AutoResizer>
				<transition name="fade">
					<p class="field-message" v-if="!user.email">
						* Obrigatório
					</p>
				</transition>
				<transition name="fade">
					<p class="field-message error" v-if="user.email && !user.email.match(emailRegex)">
						* Email inválido
					</p>
				</transition>
			</AutoResizer>
		</div>

		<!-- email -->
		<div class="form-field">
			<label for="phone">Telefone</label>
			<input id="phone" v-model="user.phone" />
			<AutoResizer>
				<transition name="fade">
					<p class="field-message" v-if="!user.phone">
						* Obrigatório
					</p>
				</transition>
				<transition name="fade">
					<p class="field-message error" v-if="user.phone && !user.phone.match(phoneRegex)">
						* Telefone inválido
					</p>
				</transition>
			</AutoResizer>
		</div>
	</div>
</template>

<script lang="ts">
	import { computed, defineComponent, reactive, watch, defineEmits } from 'vue';
	import { User } from '../../../../shared/models/User';
	import AutoResizer from 'udany-toolbox/vue/ui/AutoResizer/AutoResizer.vue'
	import emailRegex from 'udany-toolbox/modules/util/helpers/emailRegex.js'

	const phoneRegex = /^\+?(\d{0,3})?\s?\(?(\d{0,2})\)?\s?(\d{4,5}-?\d{4})/;

	export default defineComponent({
		name: 'UserForm',
		components: { AutoResizer },
		props: {
			user: User,
			valid: Boolean
		},
		setup(props, ctx) {

			const { user } = props;

			let data = reactive({
				isValid: computed(() =>
					user.username &&
					user.firstName &&
					user.lastName &&
					user.email && user.email.match(emailRegex) &&
					user.password &&
					user.phone && user.phone.match(phoneRegex)
				)
			});

			watch(() => data.isValid, () => {
				ctx.emit('update:valid', !!data.isValid)
			})

			return {
				data,
				emailRegex,
				phoneRegex
			}
		}
	})
</script>

<style lang="scss" scoped></style>
