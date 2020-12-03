import Axios from "axios";
import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { increaseCount, decreaseCount, loginAction } from "../Redux";

class LoginPage extends Component {
	state = {
		loginInfo: {
			username: "",
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
		// console.log(this.state.loginInfo);
	};

	clickToLogin = () => {
		let userN = this.state.loginInfo.username;
		let passw = this.state.loginInfo.password;

		this.props.loginAction(userN);
		Axios.get(`http://localhost:2000/users?username=${userN}&password=${passw}`)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<div
				style={{
					display: "flex",
					height: "100vh",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{" "}
				<div style={{ width: "300px" }}>
					<div className="my-1">
						<Input
							placeholder="Username"
							id="username"
							onChange={this.onChangeInput}
						/>
					</div>
					<div className="my-1">
						<Input
							placeholder="Password"
							id="password"
							onChange={this.onChangeInput}
						/>
					</div>
					<div className="my-1 d-flex justify-content-between">
						<Button onClick={this.clickToLogin}>Login</Button>
						<Link to="/register">
							<Button>or Register</Button>
						</Link>
					</div>
					<div>{this.props.count}</div>
					<Button onClick={this.props.decreaseCount}>-</Button>
					<Button onClick={this.props.increaseCount}>+</Button>
					<div>{this.props.nama}</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return { count: state.count, nama: state.username };
};
export default connect(mapStateToProps, {
	decreaseCount,
	increaseCount,
	loginAction,
})(LoginPage);
