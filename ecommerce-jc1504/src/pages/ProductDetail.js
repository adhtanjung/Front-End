import React, { Component } from "react";
import queryString from "querystring";
import { connect } from "react-redux";
import {
	fetchProductByIdAction,
	addToCartAction,
	increaseQtyAction,
	decreaseQtyAction,
	getCartByIdAction,
} from "../redux/action";
import { Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import Axios from "axios";
import { api_url } from "../helpers/api_url";

class ProductDetail extends Component {
	state = {
		data: {},
		qtySelected: 1,
	};

	componentDidMount() {
		const { fetchProductByIdAction, getCartByIdAction, userID } = this.props;
		// console.log(this.props.location.search);
		// console.log(this.props.location.search.split("="));
		// const productID = this.props.location.search.split("=")[1];
		const productID = queryString.parse(this.props.location.search)["?id"];
		console.log(productID);
		fetchProductByIdAction(productID);
		getCartByIdAction(userID);
		// Axios.get(`${api_url}/cart/${}`)
	}

	increaseQty = () => {
		this.setState({
			qtySelected: this.state.qtySelected + 1,
		});
	};

	decreaseQty = () => {
		this.setState({
			qtySelected: this.state.qtySelected - 1,
		});
	};
	addQty = (id, qty) => {
		const { increaseQtyAction, getCartByIdAction, userID } = this.props;
		increaseQtyAction(id, qty, userID);
		// const { product } = this.props;
	};
	subQty = (id, qty) => {
		const { decreaseQtyAction, userID } = this.props;
		decreaseQtyAction(id, qty, userID);
	};

	addToCart = () => {
		const { productById, userID, addToCartAction } = this.props;
		const { qtySelected } = this.state;
		const { name, price, image } = productById;
		const dataCart = {
			name,
			qty: qtySelected,
			price,
			userID,
			image,
		};
		// tidak ada = addtocartaction
		// ada = editcartaction
		addToCartAction(dataCart);
	};
	// renderButtons = () => {
	// 	const { name, price, stock, image, id } = this.props.productById;
	// 	const { cartList } = this.props;
	// 	// let res = cartList.find((val) => {
	// 	// 	return val.name === name;
	// 	// });
	// 	return (
	// 		<div>
	// 			<div>
	// 				<Button
	// 					onClick={() => this.subQty(id, res.qty)}
	// 					style={{ backgroundColor: "#561c99" }}
	// 					disabled={this.state.qtySelected === 1}
	// 				>
	// 					-
	// 				</Button>
	// 				{this.state.qtySelected}
	// 				<Button
	// 					onClick={() => this.addQty(id, res.qty)}
	// 					style={{ backgroundColor: "#561c99" }}
	// 					// disabled={stock === res.qty}
	// 				>
	// 					+
	// 				</Button>
	// 			</div>
	// 			<div className="mt-3">
	// 				<Button
	// 					style={{ backgroundColor: "#561c99" }}
	// 					onClick={this.addToCart}
	// 					// disabled={}
	// 				>
	// 					Add to Cart
	// 				</Button>
	// 			</div>
	// 		</div>
	// 	);
	// };
	render() {
		const { name, price, stock, image, id } = this.props.productById;
		// const { cartList } = this.props;
		// let res = cartList.find((val) => {
		// 	return val.name === name;
		// });
		// console.log(res);
		return (
			<div className="d-flex container-fluid align-items-center">
				<div
					className="container d-flex flex-column align-items-center w-50"
					style={{ width: "400px" }}
				>
					<div>
						<Fade bottom>
							<img src={image} alt="" style={{ height: "400px" }} />
						</Fade>
					</div>
				</div>

				<Fade right>
					<div className=" w-50  justify-content-start">
						<div>
							<h1>Buy {name}</h1>
						</div>
						<div>
							<span>Price: Rp. {price ? price.toLocaleString() : null}</span>
						</div>
						<div>
							<span>Stock: {stock}</span> <br />
						</div>
						<div>
							<p className="mt-3">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Eveniet, sint possimus voluptates illum a at praesentium commodi
								mollitia fuga labore molestias facere iure sit repellat
								necessitatibus voluptatem vitae omnis! Doloremque.
							</p>
						</div>
						<div>
							<Button
								onClick={() => this.subQty(id)}
								style={{ backgroundColor: "#561c99" }}
								disabled={this.state.qtySelected === 1}
							>
								-
							</Button>
							{this.state.qtySelected}
							<Button
								onClick={() => this.addQty(id)}
								style={{ backgroundColor: "#561c99" }}
								// disabled={stock === res.qty}
							>
								+
							</Button>
						</div>
						<div className="mt-3">
							<Button
								style={{ backgroundColor: "#561c99" }}
								onClick={this.addToCart}
								// disabled={}
							>
								Add to Cart
							</Button>
						</div>
					</div>
				</Fade>
			</div>
		);
	}
}

const mapStatetoProps = ({ products, user, cart }) => {
	return {
		productById: products.productById,
		userID: user.id,
		product: products.productList,
		cartList: cart.cart,
	};
};

export default connect(mapStatetoProps, {
	fetchProductByIdAction,
	addToCartAction,
	increaseQtyAction,
	decreaseQtyAction,
	getCartByIdAction,
})(ProductDetail);
