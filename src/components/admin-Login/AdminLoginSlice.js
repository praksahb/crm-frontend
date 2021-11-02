import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	isAuth: false,
	error: "",
};

const adminLoginSlice = createSlice({
	name: "adminLogin",
	initialState,
	reducers: {
		adminLoginPending: (state) => {
			state.isLoading = true;
		},
		adminLoginSuccess: (state) => {
			state.isLoading = false;
			state.isAuth = true;
			state.error = "";
		},
		adminLoginFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
	},
});

const { reducer, actions } = adminLoginSlice;

export const { adminLoginPending, adminLoginSuccess, adminLoginFail } = actions;

export default reducer;
