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

export { loginAction, registerAction, logoutAction };
