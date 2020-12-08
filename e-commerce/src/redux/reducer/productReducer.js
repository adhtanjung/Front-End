const INITIAL_STATE = {
	categories: [],
	productlist: [],
	productById: {},
	loading: false,
	productCategory: [],
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
		case "FETCH_BY_CATEGORY":
			return {
				...state,
				// productCategory: action.payload,
				productlist: action.payload,
			};
		default:
			return state;
	}
};
