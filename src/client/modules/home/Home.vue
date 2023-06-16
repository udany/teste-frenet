<template>
	<div class="home">
		<h1>Página inicial</h1>

		<h3>Usuários</h3>
		<ul>
			<li>
				<router-link :to="{ name: 'new-user' }">Novo usuário</router-link>
			</li>
			<li>
				<router-link :to="{ name: 'search-user' }">Buscar usuário</router-link>
			</li>
		</ul>

		<h3>Orçamento</h3>

		<ul>
			<li>
				<router-link :to="{ name: 'quote' }">Fazer orçamento</router-link>
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
		components: {}
	};
</script>

<style lang="scss" scoped>
	.home {
		margin-left: 20px;
		margin-right: 20px;
		margin-bottom: 120px;
	}
</style>
