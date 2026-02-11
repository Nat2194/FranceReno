import {
	createRouter,
	createWebHistory,
	type RouteRecordRaw,
} from 'vue-router';
// Utilise l'import dynamique pour de meilleures performances (Lazy Loading)
const HomeView = () => import('@/views/HomeView.vue');

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/projets',
		name: 'projects',
		component: () => import('@/views/ProjectsView.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

export default router;

