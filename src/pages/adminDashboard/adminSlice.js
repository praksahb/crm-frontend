import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {},
	isLoading: false,
	error: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		getAdminPending: (state) => {
			state.isLoading = true;
		},
		getAdminSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.user = payload;
			state.error = "";
		},
		getAdminFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
	},
});

const { reducer, actions } = userSlice;

export const { getAdminPending, getAdminSuccess, getAdminFail } = actions;

export default reducer;
