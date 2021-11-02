import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	adminInfo: {},
	isLoading: false,
	error: "",
};

const adminSlice = createSlice({
	name: "admin",
	initialState,
	reducers: {
		getAdminPending: (state) => {
			state.isLoading = true;
		},
		getAdminSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.adminInfo = payload;
			state.error = "";
		},
		getAdminFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
	},
});

const { reducer, actions } = adminSlice;

export const { getAdminPending, getAdminSuccess, getAdminFail } = actions;

export default reducer;
