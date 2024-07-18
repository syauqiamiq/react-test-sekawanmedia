import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
	value: "dark",
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<string>) => {
			state.value = action.payload;
		},
	},
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
