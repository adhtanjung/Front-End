import Axios from "axios";
import { fakeUrl } from "../../helpers/fake-api-url";

export const fetchCategoriesAction = () => {
	return (dispatch) => {
		Axios.get(`${fakeUrl}/categories`)
			.then((res) => {
				dispatch({
					type: "FETCH_CATEGORIES",
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
export const fetchProductsAction = () => {
	return (dispatch) => {
		Axios.get(`${fakeUrl}/products`)
			.then((res) => {
				dispatch({
					type: "FETCH_PRODUCTS",
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const fetchProductByIdAction = (id) => {
	return (dispatch) => {
		Axios.get(`${fakeUrl}/products/${id}`)
			.then((res) => {
				dispatch({
					type: "FETCH_BY_ID",
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const fetchProductByCategoryAction = (id) => {
	return (dispatch) => {
		if (id === 0) {
			Axios.get(`${fakeUrl}/products`)
				.then((res) => {
					dispatch({
						type: "FETCH_PRODUCTS",
						payload: res.data,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			Axios.get(`${fakeUrl}/products?categoryID=${id}`)
				.then((res) => {
					dispatch({
						type: "FETCH_PRODUCTS",
						payload: res.data,
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};
};
