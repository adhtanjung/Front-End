import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { fakeUrl } from "../helpers/fake-api-url";
import { registerAction } from "../redux/actions";

class RegisterPage extends Component {
	state = {
		registerInfo: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	};
	onChangeInput = (e) => {
		this.setState({
			registerInfo: {
				...this.state.registerInfo,
				[e.target.id]: e.target.value,
			},
		});
	};
	clickToRegister = () => {
		const { email, password, confirmPassword } = this.state.registerInfo;
		if (email && password && confirmPassword) {
			if (password !== confirmPassword) {
				alert("Password does not match");
			} else {
				Axios.get(`${fakeUrl}/users?email=${email}`)
					.then((res) => {
						if (res.data.length === 0) {
							Axios.post(`${fakeUrl}/users`, {
								email,
								password,
							});
							Axios.get(`${fakeUrl}/users`)
								.then((res) => {
									this.props.registerAction({
										email: email,
										id: res.data.length + 1,
									});
								})
								.catch((err) => {
									console.log(err);
								});
						} else {
							alert("Email already taken");
						}
					})
					.catch();
			}
		} else {
			alert("Fill all the forms");
		}
	};
	render() {
		if (this.props.email !== "") {
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
					<Input
						placeholder="confirm password"
						type="password"
						id="confirmPassword"
						onChange={this.onChangeInput}
					/>
					<Button onClick={this.clickToRegister}>Register</Button>
				</div>
			</div>
		);
	}
}
const mapStatetoProps = (state) => {
	return {
		id: state.user.id,
		email: state.user.email,
	};
};
export default connect(mapStatetoProps, { registerAction })(RegisterPage);
