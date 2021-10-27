import axios from "axios";

const loginUrl = "http://localhost:3001/v1/user/login";
export const userLogin = (frmData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post(loginUrl, frmData);
			console.log(result);
			resolve(result.data);

			if (result.data.status === "success") {
				sessionStorage.setItem("accessJWT", result.data.accessJWT);
				localStorage.setItem(
					"crmSite",
					JSON.stringify({ refreshJWT: result.data.refreshJWT })
				);
			}
		} catch (error) {
			console.log(error.message);
			reject(error);
		}
	});
};
