import axios from "axios";

const rootUrl = "http://localhost:3001/v1";
const loginUrl = rootUrl + "/admin/login";
const adminProfile = rootUrl + "/admin";

export const adminLogin = (formData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await axios.post(loginUrl, formData);
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
			reject(error);
		}
	});
};

export const fetchAdmin = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const accessJWT = sessionStorage.getItem("accessJWT");

			if (!accessJWT) {
				reject("Token not found");
			}
			const result = await axios.get(adminProfile, {
				headers: {
					Authorization: accessJWT,
				},
			});
			//console.log(result);
			resolve(result.data);
		} catch (error) {
			reject(error);
		}
	});
};
