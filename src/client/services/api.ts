import axios from 'axios';
import { User } from '../../shared/models/User';
import { QuotationResponse } from '../../shared/models/QuotationResponse';
import { Quote } from '../../shared/models/Quote';

const frenetApi = axios.create({
	baseURL: 'https://frontend-test.frenet.dev/v1/'
});

export const apiService = {
	user: {
		async create(user: User): Promise<User> {
			try {
				let { data } = await frenetApi.post('/user', user);

				return data ? new User().$fill(data) : null;
			} catch (e) {
				// TODO: Edge cases
			}
		},
		async update(user: User): Promise<User> {
			try {
				let { data } = await frenetApi.put(`/user/${user.username}`, user);

				return data ? new User().$fill(data) : null;
			} catch (e) {
				// TODO: Edge cases
			}
		},
		async delete(user: User): Promise<boolean> {
			try {
				let { data } = await frenetApi.put(`/user/${user.username}`, user);

				return true;
			} catch (e) {
				// TODO: Edge cases
				return false;
			}
		},
		async get(username: string): Promise<User> {
			try {
				let { data } = await frenetApi.get(`/user/${username}`);

				return data ? new User().$fill(data) : null;
			} catch (e) {
				// TODO: Edge cases
				return null;
			}
		},
	},
	quote: {
		async get(quote: Quote): Promise<QuotationResponse[]> {
			try {
				let { data } = await frenetApi.post('/quote', quote);


				debugger;
				return data?.quotations ? data?.quotations.map(x => new QuotationResponse().$fill(x)) : [];
			} catch (e) {
				// TODO: Edge cases
			}
		},
	}
};
