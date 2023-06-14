import { Entity } from 'udany-toolbox/modules/base';
import { Dimension } from './Dimension';

export class Quote extends Entity {
	@Entity.Field.String()
	zipCodeSource: string;
	@Entity.Field.String()
	zipCodeDestination: string;

	@Entity.Field.Float()
	weight: number;

	@Entity.Field.Entity({
		class: Dimension,
		nullable: false,
		defaultValue: () => new Dimension()
	})
	dimension: Dimension;
}
