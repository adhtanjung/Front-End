import React, { Component } from "react";
import queryString from "querystring";
import { connect } from "react-redux";
import { fetchProductByIdAction } from "../redux/actions";

class ProductDetail extends Component {
	state = {};
	componentDidMount() {
		const id = queryString.parse(this.props.location.search)["?id"];
		const { fetchProductByIdAction } = this.props;
		fetchProductByIdAction(id);
		console.log(id);
	}

	render() {
		const { name, image, price, stock } = this.props.productID;
		return (
			<div>
				<div
					className="container d-flex flex-column align-items-center"
					style={{ width: "400px" }}
				>
					<h1>{name}</h1>
					<div>
						<img src={image} alt="" style={{ maxWidth: "100%" }} />
					</div>
					<span>Price: Rp. {price}</span>
					<span>Stock: {stock}</span>
					<p className="mt-3">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
						sint possimus voluptates illum a at praesentium commodi mollitia
						fuga labore molestias facere iure sit repellat necessitatibus
						voluptatem vitae omnis! Doloremque.
					</p>
				</div>
			</div>
		);
	}
}
const mapStatetoProps = (state) => {
	return {
		productID: state.product.productById,
	};
};
export default connect(mapStatetoProps, { fetchProductByIdAction })(
	ProductDetail
);
