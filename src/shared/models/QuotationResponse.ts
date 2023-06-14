import { Entity } from 'udany-toolbox/modules/base';
import { ShipmentService } from './ShipmentService';
import { Dimension } from './Dimension';

export class QuotationResponse extends Entity {
	@Entity.Field.String()
	shippingServiceCode: string;

	@Entity.Field.String()
	shippingServiceName: string;

	@Entity.Field.Float()
	platformShippingPrice: number;

	@Entity.Field.Float()
	deliveryTime: number;

	@Entity.Field.String()
	carrier: string;

	@Entity.Field.String()
	carrierCode: string;

	@Entity.Field.Float()
	shippingPrice: number;

	@Entity.Field.Float()
	shippingCompetitorPrice: number;

	@Entity.Field.Entity({
		class: ShipmentService,
		nullable: false,
		defaultValue: () => new ShipmentService()
	})
	services: ShipmentService;

	@Entity.Field.Boolean()
	error: boolean;

	@Entity.Field.String()
	msg: string;

}
