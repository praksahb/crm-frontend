import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	isAuth: false,
	error: "",
};

const clientLoginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		clientLoginPending: (state) => {
			state.isLoading = true;
		},
		clientLoginSuccess: (state) => {
			state.isLoading = false;
			state.isAuth = true;
			state.error = "";
		},
		clientLoginFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
	},
});

const { reducer, actions } = clientLoginSlice;

export const { clientLoginPending, clientLoginSuccess, clientLoginFail } =
	actions;

export default reducer;
