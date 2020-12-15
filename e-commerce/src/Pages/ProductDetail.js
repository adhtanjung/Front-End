import React, { Component } from "react";
import queryString from "querystring";
import { connect } from "react-redux";
import { fetchProductByIdAction, addToCartAction } from "../redux/actions";
import { Button } from "reactstrap";

class ProductDetail extends Component {
	state = { qty: 1 };
	componentDidMount() {
		const id = queryString.parse(this.props.location.search)["?id"];
		const { fetchProductByIdAction } = this.props;
		fetchProductByIdAction(id);
	}
	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevState.qty !== this.state.qty) {
	// 		this.setState({
	// 			qty: this.state.qty,
	// 		});
	// 	}
	// }

	addBtn = () => {
		let stock = this.props.productID.stock;

		if (this.state.qty < stock) {
			this.setState({
				qty: this.state.qty + 1,
			});
		}
	};
	subBtn = () => {
		if (this.state.qty > 0) {
			this.setState({
				qty: this.state.qty - 1,
			});
		}
	};

	addToCart = () => {
		const { productID, userID, addToCartAction } = this.props;
		const { qty } = this.state;
		const { name, price, image } = productID;
		const dataCart = {
			name,
			qty: qty,
			price,
			userID,
			image,
		};
		// tidak ada = addtocartaction
		// ada = editcartaction
		addToCartAction(dataCart);
	};
	render() {
		const { name, image, price, stock } = this.props.productID;

		return (
			<div className="d-flex container-fluid align-items-center">
				<div
					className="container d-flex flex-column align-items-center w-50"
					style={{ width: "400px" }}
				>
					<div>
						<img src={image} alt="" style={{ height: "400px" }} />
					</div>
				</div>
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
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
							sint possimus voluptates illum a at praesentium commodi mollitia
							fuga labore molestias facere iure sit repellat necessitatibus
							voluptatem vitae omnis! Doloremque.
						</p>
					</div>
					<div>
						<Button
							onClick={this.addBtn}
							style={{ backgroundColor: "#561c99" }}
							disabled={this.state.qty === stock}
						>
							+
						</Button>{" "}
						{this.state.qty}{" "}
						<Button
							onClick={this.subBtn}
							style={{ backgroundColor: "#561c99" }}
							disabled={this.state.qty === 1}
						>
							-
						</Button>
					</div>
					<div className="mt-3">
						<Button style={{ backgroundColor: "#561c99" }}>Buy now!</Button>
						<span className="mx-2">Or</span>
						<Button
							style={{ backgroundColor: "#561c99" }}
							onClick={this.addToCart}
						>
							Add to Cart
						</Button>
					</div>
				</div>
			</div>
		);
	}
}
const mapStatetoProps = (state) => {
	return {
		productID: state.product.productById,
		userID: state.user.id,
	};
};
export default connect(mapStatetoProps, {
	fetchProductByIdAction,
	addToCartAction,
})(ProductDetail);
