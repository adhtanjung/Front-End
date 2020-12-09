const INITIAL_STATE = {
	categories: [],
	productlist: [],
	productById: {},
	loading: false,
};
export const productReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "FETCH_CATEGORIES":
			return {
				...state,
				categories: action.payload,
			};
		case "FETCH_PRODUCTS":
			return {
				...state,
				productlist: action.payload,
			};
		case "FETCH_BY_ID":
			return {
				...state,
				productById: action.payload,
			};
		default:
			return state;
	}
};
