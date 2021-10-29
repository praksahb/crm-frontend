import axios from "axios";

const rootUrl = "http://localhost:3001/v1/";
const loginUrl = rootUrl + "user/login";
const userProfileUrl = rootUrl + "user";
const logoutUrl = rootUrl + "user/logout";
const newAccessJWTurl = rootUrl + "tokens";

export const userRegistration = (formData) => {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios.post(userProfileUrl, formData);

			resolve(res.data);

			if (res.data.status === "success") {
				resolve(res.data);
			}
		} catch (error) {
			reject(error);
		}
	});
};

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
			reject(error);
		}
	});
};

export const fetchUser = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const accessJWT = sessionStorage.getItem("accessJWT");

			if (!accessJWT) {
				reject("Token not found");
			}
			const result = await axios.get(userProfileUrl, {
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

			//console.log(result.data);
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

export const userLogout = async () => {
	try {
		await axios.delete(logoutUrl, {
			headers: {
				Authorization: sessionStorage.getItem("accessJWT"),
			},
		});
	} catch (error) {
		console.log(error);
	}
};
