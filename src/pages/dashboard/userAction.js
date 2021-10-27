import { getUserPending, getUserSuccess, getUserFail } from "./userSlice";
import { fetchUser } from "../../api/userApi";

export const getUserProfile = () => async (dispatch) => {
	try {
		dispatch(getUserPending());

		const result = await fetchUser();
		console.log(result.user);

		if (result.user && result.user._id)
			return dispatch(getUserSuccess(result.user));

		dispatch(getUserFail("user is not found"));
	} catch (error) {
		dispatch(getUserFail(error.message));
	}
};
