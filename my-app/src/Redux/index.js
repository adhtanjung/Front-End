const INITIAL_STATE = {
	count: 0,
	username: "",
	password: "",
	bool: true,
	data: [],
};

export const increaseCount = () => {
	return {
		type: "TAMBAH",
	};
};
export const decreaseCount = () => {
	return {
		type: "KURANG",
	};
};

export const loginAction = (username) => {
	return {
		type: "LOGIN",
		payload: username,
	};
};

export const registerAction = (userData) => {
	return {
		type: "REGISTER",
		payload: userData,
	};
};
export const reduxAction = (bool) => {
	return {
		type: "REDUX-ACTION",
		payload: bool,
	};
};

export const globalArray = (data) => {
	return {
		type: "GLOBAL",
		payload: data,
	};
};
export const reducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "TAMBAH":
			return { ...state, count: state.count + 1 };
		case "KURANG":
			return { ...state, count: state.count - 1 };
		case "LOGIN":
			return { ...state, username: action.payload };
		case "REGISTER":
			return {
				...state,
				username: action.payload.username,
				password: action.payload.password,
			};
		case "REDUX-ACTION":
			return {
				...state,
				bool: !state.bool,
			};
		case "GLOBAL":
			return {
				...state,
				data: [...state.data, action.payload],
			};
		default:
			return state;
	}
};
