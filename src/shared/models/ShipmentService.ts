import { Entity } from 'udany-toolbox/modules/base';

export class ShipmentService extends Entity {
	@Entity.Field.Boolean()
	declaredValue: boolean;

	@Entity.Field.Boolean()
	receiptNotification: boolean;

	@Entity.Field.Boolean()
	ownHand: boolean;
}
