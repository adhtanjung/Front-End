import React, { Component } from "react";
import { Route } from "react-router-dom";
// import Intro from "./Pages/Intro";
// import Method from "./Pages/Method";
// import BeliBuah from "./Pages/belibuah";
// import ComponentMap from "./Pages/ComponentMap";
import Home from "./Pages/Home";
import Home2 from "./Pages/Home2";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register-page";
import ProductPage from "./Pages/ProductPage";
import ReductExercise from "./Pages/ReduxExercise";

class App extends Component {
	state = {};

	render() {
		return (
			<div>
				{/* <Route path="/" exact component={Intro} />
				<Route path="/method" component={Method} />
				<Route path="/belibuah" component={BeliBuah} />
				<Route path="/componentmap" component={ComponentMap} /> */}
				<Route path="/" exact component={Home} />
				<Route path="/home-2" component={Home2} />
				<Route path="/login" component={LoginPage} />
				<Route path="/register" component={RegisterPage} />
				<Route path="/products" component={ProductPage} />
				<Route path="/redux-exercise" component={ReductExercise} />
			</div>
		);
	}
}

export default App;
