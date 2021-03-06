import { configureStore } from '@reduxjs/toolkit';
import mainReducer from './reducers';

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch {
		// ignore write errors
	}
};

const persistedState = loadState();

const store = configureStore({
	reducer: mainReducer,
	preloadedState: persistedState,
});

store.subscribe(() => {
	saveState(store.getState());
	console.log(persistedState);
});

export default store;
