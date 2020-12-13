import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import { Button } from "reactstrap";
import { fakeUrl } from "../helpers/fake-api-url";
// import { Spinner } from "reactstrap";
import {
	getCartActionById,
	deleteCartAction,
	checkOutAction,
} from "../redux/actions";
import { Table } from "reactstrap";

class CartPage extends Component {
	state = { products: [], qty: [] };
	// componentDidMount() {
	// 	const { getCartActionById, userId } = this.props;
	// 	getCartActionById(userId);
	// }

	componentDidUpdate(prevProps, prevState) {
		const { getCartActionById, userId, products } = this.props;
		if (prevProps.products !== products) {
			getCartActionById(userId);
		}
	}
	addQty = (i) => {
		// this.setState({
		// 	products: [
		// 		...this.props.products,
		// 		(this.state.products[i].qty = this.state.products[i].qty + 1),
		// 	],
		// });
		this.props.products[i].qty = this.props.products[i].qty + 1;
		console.log(this.props.products);
	};
	subQty = (i) => {
		// this.setState({
		// 	products: [
		// 		...this.props.products,
		// 		(this.state.products[i].qty = this.state.products[i].qty - 1),
		// 	],
		// });
		this.props.products[i].qty = this.props.products[i].qty - 1;
		console.log(this.props.products);
	};

	deleteCart = (id) => {
		const { userId, deleteCartAction } = this.props;
		deleteCartAction(id, userId);
	};
	mapCart = () => {
		let newArr = this.props.products.map((val, i) => {
			let total = val.price * val.qty;
			return (
				<Fade bottom>
					<div
						className="d-flex align-items-center"
						style={{ borderBottom: "1px solid grey" }}
					>
						<div style={{ width: "30%" }}>
							<img
								src={val.image}
								alt="img not found"
								height="250px"
								// width="250px"
								// style={{ objectFit: "contain" }}
							/>
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
									onClick={() => this.subQty(val.id)}
								>
									-
								</Button>
								<h3 className="mx-2">{val.qty} </h3>
								<Button
									className="btn btn-light"
									onClick={() => this.addQty(val.id)}
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
	};
	renderTotal = () => {
		const { products } = this.props;
		let total = 0;
		// for (let i = 0; i < this.props.products.length; i++) {
		// 	total += this.props.products[i].price * this.props.products[i].qty;
		// }
		products.forEach((val) => {
			total += val.price * val.qty;
		});
		// console.log(this.props.products);
		// this.setState({
		// 	total: 200000,
		// });
		return total;
	};
	checkOut = () => {
		const date = new Date();
		let day = date.getDate();
		let month = date.getMonth();
		let year = date.getFullYear();

		let checkout = {
			date: `${day}-${month}-${year}`,
			total: this.renderTotal(),
			items: this.props.products,
			userId: this.props.userId,
		};

		this.props.checkOutAction(checkout);
	};
	render() {
		// if (!this.state.products) {
		// 	return (
		// 		<div>
		// 			<Spinner type="grow" color="primary" />
		// 			<Spinner type="grow" color="secondary" />
		// 			<Spinner type="grow" color="success" />
		// 			<Spinner type="grow" color="danger" />
		// 			<Spinner type="grow" color="warning" />
		// 			<Spinner type="grow" color="info" />
		// 			<Spinner type="grow" color="light" />
		// 			<Spinner type="grow" color="dark" />
		// 		</div>
		// 	);
		// }
		console.log(this.props.products);

		return (
			<div className="container">
				<div>
					<h1 style={{ fontWeight: "600", marginBottom: "15px" }}>
						Review your cart.
					</h1>
				</div>

				<div className="border-top border-dark">{this.mapCart()}</div>
				<div className="d-flex flex-column justify-content-center align-items-end">
					<h1 style={{ fontWeight: "600" }}>
						Your cart total is Rp. {this.renderTotal().toLocaleString()}
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
const mapStatetoProps = (state) => {
	return { products: state.cart.cart, userId: state.user.id };
};
export default connect(mapStatetoProps, {
	getCartActionById,
	deleteCartAction,
	checkOutAction,
})(CartPage);
