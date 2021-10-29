import {
	registrationPending,
	registrationSuccess,
	registrationError,
} from "./userRegistration.slice";

import { userRegistration } from "../../api/userApi";

export const newUserRegistration = (formData) => async (dispatch) => {
	try {
		dispatch(registrationPending());
		//api to send the data to server
		const result = await userRegistration(formData);
		//receive feedback from sv

		//update redux store
		result.status === "success"
			? dispatch(registrationSuccess(result.message))
			: dispatch(registrationError(result.message));
		console.log(result);
	} catch (error) {
		console.log(error);
		dispatch(registrationError(error.message));
	}
};
