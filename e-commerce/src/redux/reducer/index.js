import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

export default combineReducers({
	user: userReducer,
	product: productReducer,
});
