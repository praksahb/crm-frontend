import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { fetchNewAccessJWT } from "../../api/adminApi";

import { DefaultLayout } from "../../layout/DefaultLayout";
import { getAdminProfile } from "../../pages/adminDashboard/adminAction";
import { adminLoginSuccess } from "../admin-Login/AdminLoginSlice";

export const PrivateRouteAdmin = ({ children, ...rest }) => {
	const dispatch = useDispatch();
	const { isAuth } = useSelector((state) => state.adminLogin);
	const { adminInfo } = useSelector((state) => state.admin);
	//console.log(adminInfo);

	useEffect(() => {
		const updateAccessJWT = async () => {
			const result = await fetchNewAccessJWT();
			console.log("result: ", result);
			result && dispatch(adminLoginSuccess());
		};

		!adminInfo._id && dispatch(getAdminProfile());

		!sessionStorage.getItem("accessJWT") &&
			localStorage.getItem("crmSite") &&
			updateAccessJWT();

		!isAuth &&
			sessionStorage.getItem("accessJWT") &&
			dispatch(adminLoginSuccess());
	}, [dispatch, isAuth, adminInfo._id]);
	console.log(adminInfo);
	return (
		<Route
			{...rest}
			render={() =>
				isAuth ? (
					<DefaultLayout>{children}</DefaultLayout>
				) : (
					<Redirect to="/admin" />
				)
			}
		/>
	);
};
