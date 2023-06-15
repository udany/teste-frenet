
export default [
	{
		path: `/user`,
		name: 'new-user',
		component: () => import('./NewUser.vue')
	},
	{
		path: `/user/:username`,
		name: 'edit-user',
		component: () => import('./EditUser.vue')
	},
	{
		path: `/user/find`,
		name: 'search-user',
		component: () => import('./SearchUser.vue')
	},
];
