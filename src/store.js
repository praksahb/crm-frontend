import { configureStore } from "@reduxjs/toolkit";

import ticketReducer from "./pages/ticket-list/ticketSlice";

const store = configureStore({
	reducer: {
		tickets: ticketReducer,
	},
});

export default store;
