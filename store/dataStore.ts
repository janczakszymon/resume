import { defineStore } from 'pinia';

export const useDataStore = defineStore('dataStore', () => {
	const data = ref(null);

	return {
		data
	};
});
