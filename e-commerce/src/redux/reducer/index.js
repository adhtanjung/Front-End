import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";

export default combineReducers({
	user: userReducer,
	product: productReducer,
	cart: cartReducer,
});
