import axios from "axios";

const rootUrl = "http://localhost:3001/v1";
const loginUrl = rootUrl + "/admin/login";
const adminProfile = rootUrl + "/admin";
const newAccessJWTurl = rootUrl + "/tokens/admin";

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

export const fetchNewAccessJWT = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const { refreshJWT } = JSON.parse(localStorage.getItem("crmSite"));

			if (!refreshJWT) {
				reject("Token not found");
			}
			const result = await axios.get(newAccessJWTurl, {
				headers: {
					Authorization: refreshJWT,
				},
			});
			console.log(result.data);
			if (result.data.status === "success") {
				sessionStorage.setItem("accessJWT", result.data.accessJWT);
			}

			resolve(true);
		} catch (error) {
			if (error.message === "Request failed with status code 403") {
				localStorage.removeItem("crmSite");
			}
			console.log(error.message);
			reject(false);
		}
	});
};
