import React, { Component } from "react";
import { connect } from "react-redux";
import {
	checkOutAction,
	deleteCartAction,
	getCartByIdAction,
	increaseQtyAction,
	decreaseQtyAction,
	fetchProductsAction,
} from "../redux/action";
import { Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import { Redirect } from "react-router-dom";
import { Spinner } from "reactstrap";

class CartPage extends Component {
	state = { redirectHome: false, products: [] };

	componentDidMount() {
		const { getCartByIdAction, userID, fetchProductsAction } = this.props;
		getCartByIdAction(userID);
		fetchProductsAction();
	}

	componentDidUpdate(prevProps) {
		const { userID, getCartByIdAction, product } = this.props;
		if (prevProps.userID !== userID) {
			getCartByIdAction(userID);
		}
		if (prevProps.product !== product) {
			fetchProductsAction();
		}
	}

	deleteCart = (id) => {
		const { deleteCartAction, userID } = this.props;
		deleteCartAction(id, userID);
	};

	renderGrandTotal = () => {
		const { cartList } = this.props;
		let output = 0;
		cartList.forEach((val) => {
			output += val.qty * val.price;
		});
		return output;
	};

	checkOut = () => {
		const { cartList, userID, checkOutAction, product } = this.props;
		const date = new Date();
		let day = date.getDate();
		let month = date.getMonth() + 1;
		let year = date.getFullYear();

		const checkOutData = {
			date: `${day}-${month}-${year}`,
			total: this.renderGrandTotal(),
			items: cartList,
			userID: userID,
		};
		checkOutAction(checkOutData, cartList, product);
		this.setState({ redirectHome: true });
		// console.log(cartList, product);
	};

	addQty = (id, qty) => {
		const { increaseQtyAction, userID } = this.props;
		increaseQtyAction(id, qty, userID);
		// const { product } = this.props;
	};
	subQty = (id, qty) => {
		const { decreaseQtyAction, userID } = this.props;
		decreaseQtyAction(id, qty, userID);
	};
	renderTableBody = () => {
		const { product } = this.props;
		// if (product === []) {
		// 	return (
		// 		<div>
		// 			<Spinner color="primary" />
		// 			<Spinner color="secondary" />
		// 			<Spinner color="success" />
		// 			<Spinner color="danger" />
		// 		</div>
		// 	);
		// } else {
		let newArr = this.props.cartList.map((val, i) => {
			let total = val.price * val.qty;
			let idProduct = product.find((value) => {
				return value.name === val.name;
			});
			// console.log(idProduct.stock);
			return (
				<Fade bottom>
					<div
						className="d-flex align-items-center"
						style={{ borderBottom: "1px solid grey" }}
					>
						<div style={{ width: "30%" }}>
							<img src={val.image} alt="img not found" height="250px" />
						</div>
						<div
							className="d-flex justify-content-between"
							style={{ width: "20%" }}
						>
							<h3>{val.name}</h3>
						</div>
						<div
							className="d-flex justify-content-between"
							style={{ width: "50%" }}
						>
							<div className="d-flex">
								<Button
									className="btn btn-light"
									onClick={() => this.subQty(val.id, val.qty)}
									disabled={val.qty === 1 ? true : false}
								>
									-
								</Button>
								<h3 className="mx-2">{val.qty} </h3>
								<Button
									className="btn btn-light"
									onClick={() => this.addQty(val.id, val.qty)}
									disabled={val.qty >= idProduct.stock ? true : false}
								>
									+
								</Button>
							</div>

							<h3>Rp. {total.toLocaleString()}</h3>
							<Button
								className="btn btn-light"
								style={{ backgroundColor: "transparent" }}
								onClick={() => this.deleteCart(val.id)}
							>
								<img
									src="https://icons-for-free.com/iconfiles/png/512/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png"
									alt=""
									height="40px"
								/>
							</Button>
						</div>
					</div>
				</Fade>
			);
		});
		return newArr;
		// }
	};
	render() {
		const { product } = this.props;
		if (this.state.redirectHome) {
			return <Redirect to="/" />;
		} else if (this.props.cartList.length === 0) {
			return (
				<div>
					<div className="d-flex justify-content-center">
						<h1>Your cart is empty</h1>
					</div>
				</div>
			);
		}
		return (
			<div className="container">
				<div>
					<h1 style={{ fontWeight: "600", marginBottom: "15px" }}>
						Review your cart.
					</h1>
				</div>

				<div className="border-top border-dark">
					{product.length !== 0 ? (
						this.renderTableBody()
					) : (
						<div>
							<Spinner color="primary" />
						</div>
					)}
				</div>
				<div className="d-flex flex-column justify-content-center align-items-end">
					<h1 style={{ fontWeight: "600" }}>
						Your cart total is Rp. {this.renderGrandTotal().toLocaleString()}
					</h1>
					<Button
						color="primary"
						style={{ width: "200px" }}
						onClick={this.checkOut}
					>
						Check Out
					</Button>
				</div>
			</div>
		);
	}
}

const mapStatetoProps = ({ user, cart, products }) => {
	return {
		userID: user.id,
		cartList: cart.cart,
		product: products.productList,
	};
};

export default connect(mapStatetoProps, {
	getCartByIdAction,
	deleteCartAction,
	checkOutAction,
	increaseQtyAction,
	decreaseQtyAction,
	fetchProductsAction,
})(CartPage);
