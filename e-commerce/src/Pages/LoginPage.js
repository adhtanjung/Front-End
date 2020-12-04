import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { fakeUrl } from "../helpers/fake-api-url";
import { loginAction } from "../redux/actions";

class LoginPage extends Component {
	state = {
		loginInfo: {
			email: "",
			password: "",
		},
	};
	onChangeInput = (e) => {
		this.setState({
			loginInfo: {
				...this.state.loginInfo,
				[e.target.id]: e.target.value,
			},
		});
	};

	clickToLogin = () => {
		const { email, password } = this.state.loginInfo;
		Axios.get(`${fakeUrl}/users?email=${email}&password=${password}`)
			.then((res) => {
				if (res.data.length !== 0) {
					this.props.loginAction(res.data[0]);
					console.log(res.data);
				} else {
					alert("Invalid username");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		if (this.props.emailUser !== "") {
			return <Redirect to="/" />;
		}
		return (
			<div>
				<div>
					<Input
						placeholder="email"
						type="email"
						id="email"
						onChange={this.onChangeInput}
					/>
					<Input
						placeholder="password"
						type="password"
						id="password"
						onChange={this.onChangeInput}
					/>
					<Button onClick={this.clickToLogin}>Login</Button>
				</div>
			</div>
		);
	}
}
const mapStatetoProps = (state) => {
	return {
		emailUser: state.user.email,
	};
};
export default connect(mapStatetoProps, { loginAction })(LoginPage);
