import { createNewTicket } from "../../api/ticketApi";
import {
	openNewTicketPending,
	openNewTicketSuccess,
	openNewTicketFail,
} from "./addTicketSlice";

export const openNewTicket = (formData) => (dispatch) => {
	return new Promise(async (resolve, reject) => {
		try {
			dispatch(openNewTicketPending());
			//call api
			const result = await createNewTicket(formData);
			//console.log(result);

			if (result.status === "error") {
				return dispatch(openNewTicketFail(result.message));
			}

			dispatch(openNewTicketSuccess(result.message));
		} catch (error) {
			console.log(error);
			dispatch(openNewTicketFail(error.message));
		}
	});
};
