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
		// console.log(productID);
		fetchProductByIdAction(productID);
		getCartByIdAction(userID);
	}

	increaseQty = () => {
		const { qtySelected } = this.state;
		const { cartList, productById } = this.props;
		let res = cartList.find((val) => {
			return productById.name === val.name;
		});
		if (res) {
			if (qtySelected + res.qty < productById.stock) {
				this.setState({
					qtySelected: this.state.qtySelected + 1,
				});
			} else {
				alert("im so sorry you've reached the max amount of stock");
			}
		} else if (qtySelected < productById.stock) {
			this.setState({
				qtySelected: this.state.qtySelected + 1,
			});
		}
	};

	decreaseQty = () => {
		this.setState({
			qtySelected: this.state.qtySelected - 1,
		});
	};

	addToCart = () => {
		const { productById, userID, addToCartAction, cartList } = this.props;
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
		let res = cartList.find((val) => {
			return productById.name === val.name;
		});
		if (res) {
			if (productById.stock < qtySelected + res.qty) {
				alert("im so sorry we cant proceed your request");
			} else {
				addToCartAction(dataCart);
			}
		} else {
			addToCartAction(dataCart);
		}
	};

	render() {
		const { name, price, stock, image } = this.props.productById;

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
								onClick={() => this.decreaseQty()}
								style={{ backgroundColor: "#561c99" }}
								disabled={this.state.qtySelected === 1}
							>
								-
							</Button>
							{this.state.qtySelected}
							<Button
								onClick={() => this.increaseQty()}
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
								// disabled={cartList[0].qty === stock}
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
