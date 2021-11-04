import {
	clientRegistrationPending,
	clientRegistrationSuccess,
	clientRegistrationError,
} from "./clientRegistration.slice";

import { clientRegistration } from "../../api/clientApi";

export const newClientRegistration = (formData) => async (dispatch) => {
	try {
		dispatch(clientRegistrationPending());
		//api to send the data to server
		const result = await clientRegistration(formData);
		//receive feedback from sv

		//update redux store
		result.status === "success"
			? dispatch(clientRegistrationSuccess(result.message))
			: dispatch(clientRegistrationError(result.message));
		console.log(result);
	} catch (error) {
		console.log(error);
		dispatch(clientRegistrationError(error.message));
	}
};
