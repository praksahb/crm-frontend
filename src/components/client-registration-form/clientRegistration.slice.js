import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	status: "",
	message: "",
};

const clientRegistrationSlice = createSlice({
	name: "userRegistration",
	initialState,
	reducers: {
		clientRegistrationPending: (state, action) => {
			state.isLoading = true;
		},
		clientRegistrationSuccess: (state, { payload }) => {
			state.isLoading = false;
			state.status = "success";
			state.message = payload;
		},
		clientRegistrationError: (state, { payload }) => {
			state.isLoading = false;
			state.status = "error";
			state.message = payload;
		},
	},
});

const { reducer, actions } = clientRegistrationSlice;

export const {
	clientRegistrationPending,
	clientRegistrationSuccess,
	clientRegistrationError,
} = actions;

export default reducer;
