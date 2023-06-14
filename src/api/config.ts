import { Environment } from '../shared/env';

export const serverConfig = {
	environment: Environment[process.env.NODE_ENV],
	baseUrl: process.env.CLIENT_BASE_URL
}
