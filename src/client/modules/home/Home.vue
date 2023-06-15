<template>
	<div class="home">
		<h1>Página inicial</h1>

		<ul>
			<li>
				<router-link :to="{ name: 'new-user' }">Novo usuário</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'search-user' }">Buscar usuário</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import { onMounted, reactive } from 'vue';
	import { apiService } from '../../services/api';
	import { Quote } from '../../../shared/models/Quote';

	export default {
		name: 'Home',
		components: {},
		setup() {
			let data = reactive({
				quote: new Quote().$fill({
					zipCodeSource: '20710180',
					zipCodeDestination: '59600145',
					weight: 10,
					dimension: {
						width: 10,
						heigth: 5,
						length: 10,
					},
				}),
			})

			onMounted(async () => {
				let res = await apiService.quote.get(data.quote);
			})
		},
	};
</script>

<style lang="scss" scoped>
	.home {
		margin-left: 20px;
		margin-right: 20px;
		margin-bottom: 120px;
	}
</style>
