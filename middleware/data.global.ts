import { defineNuxtRouteMiddleware } from '#app';
import { useApi } from '~/composable/useApi';
import { useDataStore } from '~/store/dataStore';

export default defineNuxtRouteMiddleware(() => {
	const dataStore = useDataStore();

	useApi('/resumes/')
		.then((res) => {
			dataStore.data = res;
		});
});
