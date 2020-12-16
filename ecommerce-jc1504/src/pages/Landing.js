import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductsAction } from "../redux/action";

class LandingPage extends Component {
	state = {};

	componentDidMount() {
		const { fetchProductsAction, userID } = this.props;
		fetchProductsAction(userID);
	}

	render() {
		return <div>ini landing page</div>;
	}
}

const mapStatetoProps = (state) => {
	return {
		userID: state.user.id,
	};
};
export default connect(mapStatetoProps, { fetchProductsAction })(LandingPage);
