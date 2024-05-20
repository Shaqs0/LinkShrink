import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const LINK_PERSISTENT_STATE = 'linkData';

interface LinkState {
    generatedLink: string;
	qrCode: string;
}

const initialState: LinkState = {
	generatedLink: '',
	qrCode: '',
};

const linkSlice = createSlice({
	name: 'link',
	initialState,
	reducers: {
		setLink(state, action: PayloadAction<string>) {
			state.generatedLink = action.payload;
		},
		setQrCode(state, action: PayloadAction<string>) {
			state.qrCode = action.payload;
		},
	},
});

export default linkSlice.reducer;
export const { setLink, setQrCode } = linkSlice.actions;