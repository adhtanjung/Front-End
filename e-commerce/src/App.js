import React, { Component } from "react";
import { Route } from "react-router-dom";
import { NavBar } from "./components/";
import { Landing, LoginPage } from "./Pages";
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
			</div>
		);
	}
}

export default App;
