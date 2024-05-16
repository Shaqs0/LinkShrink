import { configureStore } from '@reduxjs/toolkit';
import linkSlice, { LINK_PERSISTENT_STATE } from './link.slice';
import { saveState } from './storage';


export const store = configureStore({
	reducer: {
		link: linkSlice
	},
});

store.subscribe(() => {
	saveState(store.getState().link, LINK_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch;