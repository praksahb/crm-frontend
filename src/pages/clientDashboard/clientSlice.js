import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	client: {},
	isLoading: false,
	error: "",
};

const clientSlice = createSlice({
	name: "client",
	initialState,
	reducers: {
		getClientPending: (state) => {
			state.isLoading = true;
		},
		getClientSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.client = payload;
			state.error = "";
		},
		getClientFail: (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		},
	},
});

const { reducer, actions } = clientSlice;

export const { getClientPending, getClientSuccess, getClientFail } = actions;

export default reducer;
