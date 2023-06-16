<template>
	<div class="main">
		<h1>
			<router-link :to="{ name: 'home' }">
				<fa-icon>chevron-left</fa-icon>
			</router-link>
			Fazer orçamento
		</h1>

		<!-- zipCodeSource -->
		<div class="form-field">
			<label for="zipCodeSource">CEP de Origem</label>
			<input id="zipCodeSource" v-model="data.quote.zipCodeSource" autofocus />
			<AutoResizer>
				<transition name="fade">
					<p class="field-message" v-if="!data.quote.zipCodeSource">
						* Obrigatório
					</p>
				</transition>
				<transition name="fade">
					<p class="field-message error"
					   v-if="data.quote.zipCodeSource && !data.quote.zipCodeSource.match(zipRegex)">
						* CEP Inválid
					</p>
				</transition>
			</AutoResizer>
		</div>

		<!-- zipCodeDestination -->
		<div class="form-field">
			<label for="zipCodeDestination">CEP de Destino</label>
			<input id="zipCodeDestination" v-model="data.quote.zipCodeDestination" />
			<AutoResizer>
				<transition name="fade">
					<p class="field-message" v-if="!data.quote.zipCodeDestination">
						* Obrigatório
					</p>
				</transition>
				<transition name="fade">
					<p class="field-message error"
					   v-if="data.quote.zipCodeDestination && !data.quote.zipCodeDestination.match(zipRegex)">
						* CEP Inválid
					</p>
				</transition>
			</AutoResizer>
		</div>

		<!-- weight -->
		<div class="form-field">
			<label for="weight">Peso</label>
			<input id="weight" type="number" min="0" v-model="data.quote.weight" />
			<AutoResizer>
				<transition name="fade">
					<p class="field-message" v-if="!data.quote.weight">
						* Obrigatório
					</p>
				</transition>
			</AutoResizer>
		</div>

		<!-- weight -->
		<div class="form-field">
			<label>Tamanho (altura, largura e profundidade)</label>
			<input type="number" min="0" v-model="data.quote.dimension.heigth" style="width: 50px" />
			<input type="number" min="0" v-model="data.quote.dimension.width" style="width: 50px" />
			<input type="number" min="0" v-model="data.quote.dimension.length" style="width: 50px" />
			<AutoResizer>
				<transition name="fade">
					<p class="field-message"
					   v-if="!data.quote.dimension.heigth || !data.quote.dimension.width || !data.quote.dimension.length">
						* Obrigatório
					</p>
				</transition>
			</AutoResizer>
		</div>

		<BaseButton icon="search" @activate="search">Buscar orçamentos</BaseButton>

		<AutoResizer>
			<transition name="fade">
				<div class="results" v-if="data.results.length">
					<QuotationCard
						v-for="item in data.results"
						:key="item.shippingServiceCode"
						:quotation="item"
					/>
				</div>
			</transition>
		</AutoResizer>
	</div>
</template>

<script lang="ts">
	import { reactive, watchEffect } from 'vue';
	import { useRouter } from 'vue-router'
	import AutoResizer from 'udany-toolbox/vue/ui/AutoResizer/AutoResizer.vue'
	import BaseButton from '../../components/BaseButton.vue';
	import { Quote } from '../../../shared/models/Quote';
	import { apiService } from '../../services/api';
	import { QuotationResponse } from '../../../shared/models/QuotationResponse';
	import QuotationCard from './components/QuotationCard.vue';

	const zipRegex = /^(\d{5}-?\d{3})$/;

	export default {
		name: 'NewUser',
		components: { QuotationCard, BaseButton, AutoResizer },
		setup() {
			const router = useRouter();

			let data = reactive({
				quote: new Quote().$fill({
					dimension: {},
				}),
				results: [] as QuotationResponse[]
			});

			return {
				data,
				zipRegex,
				async search() {
					data.results = [];

					data.quote.zipCodeSource = data.quote.zipCodeSource?.replace(/[^\d]/g, '');
					data.quote.zipCodeDestination = data.quote.zipCodeDestination?.replace(/[^\d]/g, '');

					data.results = await apiService.quote.get(data.quote);
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

	.results {
		margin-top: 1em;

		> * + * {
			margin-top: 15px;
		}
	}
</style>
