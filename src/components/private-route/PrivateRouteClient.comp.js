import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { clientLoginSuccess } from "../client-Login/clientLoginSlice";

import { fetchNewAccessJWT } from "../../api/clientApi";
import { getClientProfile } from "../../pages/clientDashboard/clientAction";

import { DefaultLayout } from "../../layout/DefaultLayout";

export const PrivateRouteClient = ({ children, ...rest }) => {
	const dispatch = useDispatch();
	const { isAuth } = useSelector((state) => state.clientLogin);
	const { client } = useSelector((state) => state.client);

	useEffect(() => {
		const updateAccessJWT = async () => {
			const result = await fetchNewAccessJWT();
			result && dispatch(clientLoginSuccess());
		};

		!client._id && dispatch(getClientProfile());

		!sessionStorage.getItem("accessJWT") &&
			localStorage.getItem("crmSite") &&
			updateAccessJWT();

		!isAuth &&
			sessionStorage.getItem("accessJWT") &&
			dispatch(clientLoginSuccess());
	}, [dispatch, isAuth, client._id]);
	return (
		<Route
			{...rest}
			render={() =>
				isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to="/" />
			}
		/>
	);
};
