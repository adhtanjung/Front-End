import Axios from "axios";
import { fakeUrl } from "../../helpers/fake-api-url";

const loginAction = (data) => {
	return {
		type: "LOGIN",
		payload: data,
	};
};

const registerAction = (data) => {
	return {
		type: "REGISTER",
		payload: data,
	};
};

const logoutAction = () => {
	return {
		type: "LOGOUT",
	};
};

const keepLogin = (id) => {
	return (dispatch) => {
		Axios.get(`${fakeUrl}/users/${id}`)
			.then((res) => {
				dispatch({
					type: "LOGIN",
					payload: res.data,
				});
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
export { loginAction, registerAction, logoutAction, keepLogin };
