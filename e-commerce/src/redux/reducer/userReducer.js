const INITIAL_STATE = {
	id: 0,
	email: "",
};

export const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				email: action.payload.email,
				id: action.payload.id,
			};
		case "REGISTER":
			return {
				...state,
				email: action.payload.email,
				id: action.payload.id,
			};
		case "LOGOUT":
			return {
				...state,
				email: "",
				id: "",
			};
		default:
			return state;
	}
};
