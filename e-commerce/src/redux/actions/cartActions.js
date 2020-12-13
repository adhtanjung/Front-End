import Axios from "axios";
import { fakeUrl } from "../../helpers/fake-api-url";
import swal from "sweetalert";

export const addToCartAction = (data) => {
	return (dispatch) => {
		Axios.post(`${fakeUrl}/cart`, data)
			.then((res) => {
				dispatch({
					type: "ADD_TO_CART",
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
export const editCartAction = (data) => {
	return (dispatch) => {};
};
export const getCartActionById = (id) => {
	return (dispatch) => {
		Axios.get(`${fakeUrl}/cart?userId=${id}`)
			.then((res) => {
				dispatch({
					type: "FETCH_CART",
					payload: res.data,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const deleteCartAction = (id, userId) => {
	return (dispatch) => {
		swal({
			title: "Are you sure?",
			text:
				"Once deleted, you will not be able to recover this imaginary file!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				swal("Poof! Your item  has been deleted!", {
					icon: "success",
				});
				Axios.delete(`${fakeUrl}/cart/${id}`)
					.then((res) => {
						dispatch(getCartActionById(userId));
					})
					.catch((err) => {
						console.log(err);
					});
			}
		});
	};
};
export const checkOutAction = (data) => {
	return (dispatch) => {
		Axios.post(`${fakeUrl}/checkout`, data)
			.then((res) => {
				data.items.forEach((val) => {
					Axios.delete(`${fakeUrl}/cart/${val.id}`).then((res) => {
						console.log(res);
					});
				});
				swal({
					title: "Checkout Success",
					icon: "success",
				});
			})
			.catch((err) => {
				console.log(err);
			});
	};
};
