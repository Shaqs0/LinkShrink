import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  darkTheme: boolean;
}

const initialState: ThemeState = {
	darkTheme: false,
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.darkTheme = !state.darkTheme;
		},
	},
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;