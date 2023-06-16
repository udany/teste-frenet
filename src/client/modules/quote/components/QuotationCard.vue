<template>
	<div class="quotation-card">
		<header>
			<div class="service">
				<small>
					{{ quotation.shippingServiceCode }}
				</small>
				<h2>
					{{ quotation.shippingServiceName }}
				</h2>
			</div>

			<div class="carrier">
				<small>
					{{ quotation.carrierCode }}
				</small>
				<h3>
					{{ quotation.carrier }}
				</h3>
			</div>
		</header>

		<section class="content">
			<div class="price">
				<span class="platform">R$ {{quotation.platformShippingPrice.toFixed(2)}} </span>
				<span class="competitor"> {{quotation.shippingCompetitorPrice.toFixed(2)}} </span>
			</div>
			<div class="details">
				<p>
					Entregue em <b>{{quotation.deliveryTime}} dias</b>
				</p>
				<p class="feature" :class="{ available: quotation.services.declaredValue }">
					<fa-icon>{{ quotation.services.declaredValue ? 'check' : 'times' }}</fa-icon>
					Valor declarado
				</p>
				<p class="feature" :class="{ available: quotation.services.receiptNotification }">
					<fa-icon>{{ quotation.services.receiptNotification ? 'check' : 'times' }}</fa-icon>
					Aviso de recebimento
				</p>
				<p class="feature" :class="{ available: quotation.services.ownHand }">
					<fa-icon>{{ quotation.services.ownHand ? 'check' : 'times' }}</fa-icon>
					Mão própria
				</p>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
	import { QuotationResponse } from '../../../../shared/models/QuotationResponse';

	export default defineComponent({
		name: 'QuotationCard',
		props: {
			quotation: {
				type: QuotationResponse,
				required: true
			}
		},
		setup() {

		}
	})
</script>

<style lang="scss" scoped>
	.quotation-card {
		border-radius: 6px;
		background: var(--background-lighter);

		padding: 1em;

		header {
			display: flex;
			justify-content: space-between;
		}

		.carrier {
			text-align: right;
		}

		.price {
			font-size: $font-size-lg;

			.platform {
				color: var(--success);
				font-weight: bolder;

				margin-inline-end: .2em;
			}

			.competitor {
				color: var(--neutral-light);
				text-decoration: line-through;
			}
		}

		.details {
			margin-block-start: .5em;
			> p {
				margin: 0;
				+ p {
					margin-block-start: .5em;
				}
			}

			.feature {
				color: var(--neutral-light);
				&.available {
					color: var(--success);
				}
			}
		}

		small {
			color: var(--neutral-lightest);
			font-weight: bolder;
		}

		h2, h3 {
			margin-top: 0;
			line-height: 1em;
		}
	}
</style>
