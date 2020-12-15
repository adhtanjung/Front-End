import React, { Component } from "react";
import { Route } from "react-router-dom";
import { NavBar } from "./components/";
import {
	Landing,
	LoginPage,
	ProfilePage,
	ProductsPage,
	CartPage,
} from "./Pages";
import RegisterPage from "./Pages/RegisterPage";
import { keepLogin } from "./redux/actions";
import { connect } from "react-redux";
import ProductDetail from "./Pages/ProductDetail";

class App extends Component {
	state = {};
	componentDidMount() {
		const id = localStorage.getItem("id");
		if (id) {
			this.props.keepLogin(id);
		} else {
			localStorage.clear();
		}
	}

	render() {
		return (
			<div>
				<NavBar />
				<Route path="/" exact component={Landing} />
				<Route path="/login" component={LoginPage} />
				<Route path="/register" component={RegisterPage} />
				<Route path="/profile" component={ProfilePage} />
				<Route path="/products" component={ProductsPage} />
				<Route path="/product-detail" component={ProductDetail} />
				<Route path="/cart" component={CartPage} />
			</div>
		);
	}
}
// const mapStatetoProps = () => {};
export default connect(null, { keepLogin })(App);
