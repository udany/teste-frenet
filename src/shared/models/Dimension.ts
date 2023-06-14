import { Entity } from 'udany-toolbox/modules/base';

export class Dimension extends Entity {
	@Entity.Field.Integer()
	width: number;
	@Entity.Field.Integer()
	heigth: number;
	@Entity.Field.Integer()
	length: number;
}
