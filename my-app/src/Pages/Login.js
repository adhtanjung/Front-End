import Axios from "axios";
import React, { Component } from "react";
import { Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

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
				</div>
			</div>
		);
	}
}

export default LoginPage;
