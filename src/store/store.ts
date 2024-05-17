import { configureStore } from '@reduxjs/toolkit';
import linkSlice, { LINK_PERSISTENT_STATE } from './link.slice';
import themeSlice, { THEME_PERSISTENT_STATE } from './theme.slice';
import { saveState } from './storage';

export const store = configureStore({
	reducer: {
		link: linkSlice,
		theme: themeSlice,
	},
});

store.subscribe(() => {
	saveState(store.getState().link, LINK_PERSISTENT_STATE);
	saveState(store.getState().theme.isDarkMode, THEME_PERSISTENT_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
