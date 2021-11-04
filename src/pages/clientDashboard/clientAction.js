import {
	getClientPending,
	getClientSuccess,
	getClientFail,
} from "./clientSlice";
import { fetchClient } from "../../api/clientApi";

export const getClientProfile = () => async (dispatch) => {
	try {
		dispatch(getClientPending());

		const result = await fetchClient();
		console.log(result.user);

		if (result.user && result.user._id)
			return dispatch(getClientSuccess(result.user));

		dispatch(getClientFail("user is not found"));
	} catch (error) {
		dispatch(getClientFail(error.message));
	}
};
