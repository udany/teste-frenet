import { Entity } from 'udany-toolbox/modules/base';

export class User extends Entity {
	@Entity.Field.Integer()
	id: number;

	@Entity.Field.String()
	username: string;

	@Entity.Field.String()
	firstName: string;
	@Entity.Field.String()
	lastName: string;

	@Entity.Field.String({ safe: false })
	email: string;

	@Entity.Field.String({ safe: false })
	password: string;

	@Entity.Field.String({ safe: false })
	phone: string;

	@Entity.Field.Integer()
	userStatus: number;
}
