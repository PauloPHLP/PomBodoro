import Vue from 'vue';
import VueRouter from 'vue-router';

import Clock from '../views/Clock.vue';
import Settings from '../views/Settings.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'clock',
		component: Clock,
	},
	{
		path: '/settings',
		name: 'settings',
		component: Settings,
	},
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

export default router;
