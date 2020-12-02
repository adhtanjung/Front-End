import Axios from "axios";
import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

class RegisterPage extends Component {
	state = {
		loginInfo: {
			username: "",
			password: "",
			confirm: "",
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

	clickToRegister = () => {
		let username = this.state.loginInfo.username;
		let password = this.state.loginInfo.password;
		let confirm = this.state.loginInfo.confirm;

		if (username && password && confirm) {
			if (password === confirm) {
				alert("lanjut");
				Axios.post(`http://localhost:2000/users`, {
					username,
					password,
				})
					.then((res) => {
						console.log("masuk");
					})
					.catch((err) => {
						console.log(err);
					});
			} else {
				alert("Password does not match");
			}
		} else {
			alert("fill the forms");
		}
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
					<div className="my-1">
						<Input
							placeholder="Password"
							id="confirm"
							onChange={this.onChangeInput}
						/>
					</div>
					<div className="my-1 d-flex justify-content-between">
						<Button onClick={this.clickToRegister}>Register</Button>
						<Link to="/login">
							<Button>or Login</Button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default RegisterPage;
