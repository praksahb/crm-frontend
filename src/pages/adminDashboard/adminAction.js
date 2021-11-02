import { getAdminPending, getAdminSuccess, getAdminFail } from "./adminSlice";
import { fetchAdmin } from "../../api/adminApi";

export const getAdminProfile = () => async (dispatch) => {
	try {
		dispatch(getAdminPending());

		const result = await fetchAdmin();
		console.log(result.user);

		if (result.user && result.user._id)
			return dispatch(getAdminSuccess(result.user));

		dispatch(getAdminFail("user is not found"));
	} catch (error) {
		dispatch(getAdminFail(error.message));
	}
};
