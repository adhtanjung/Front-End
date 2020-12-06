import React, { Component } from "react";
import { Route } from "react-router-dom";
import { NavBar } from "./components/";
import { Landing, LoginPage, ProfilePage, ProductsPage } from "./Pages";
import RegisterPage from "./Pages/RegisterPage";

class App extends Component {
	state = {};
	render() {
		return (
			<div>
				<NavBar />
				<Route path="/" exact component={Landing} />
				<Route path="/login" component={LoginPage} />
				<Route path="/register" component={RegisterPage} />
				<Route path="/profile" component={ProfilePage} />
				<Route path="/product" component={ProductsPage} />
			</div>
		);
	}
}

export default App;
