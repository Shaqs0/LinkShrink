import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const LINK_PERSISTENT_STATE = 'linkData';

interface LinkState {
    generatedLink: string;
}

const initialState: LinkState = {
	generatedLink: '',
};

const linkSlice = createSlice({
	name: 'link',
	initialState,
	reducers: {
		setLink(state, action: PayloadAction<string>) {
			state.generatedLink = action.payload;
		},
	},
});


export const { setLink } = linkSlice.actions;
export default linkSlice.reducer;