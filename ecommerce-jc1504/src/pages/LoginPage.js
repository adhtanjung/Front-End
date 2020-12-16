import Axios from "axios";
import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { api_url } from "../helpers/api_url";
import { loginAction, getCartByIdAction } from "../redux/action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

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

	clickLogin = () => {
		const { userID } = this.props;
		const { email, password } = this.state.loginInfo;
		Axios.get(`${api_url}/users?email=${email}&password=${password}`)
			.then((res) => {
				if (res.data.length !== 0) {
					this.props.loginAction(res.data[0]);
					localStorage.setItem("id", res.data[0].id);
					this.props.getCartByIdAction(userID);
				} else {
					alert("User Invalid");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		const { email, password } = this.state.loginInfo;
		if (this.props.emailUser !== "") {
			return <Redirect to="/" />;
		}
		return (
			<div className="container-fluid d-flex justify-content-center">
				<div className="w-25">
					<h4 className="mb-4" style={{ fontWeight: "600" }}>
						Log in to YudhoStore
					</h4>
					<div className="d-flex flex-column">
						<span className="my-2">Email</span>
						<Input
							placeholder="Email"
							id="email"
							type="email"
							value={email}
							onChange={this.onChangeInput}
							style={{ textAlign: "center" }}
						/>
						<span className="my-2">Password</span>
						<Input
							placeholder="Password"
							id="password"
							type="password"
							value={password}
							onChange={this.onChangeInput}
							style={{ textAlign: "center" }}
						/>
						<a href="/" className="my-2">
							I forgot my password
						</a>
						<Button
							onClick={this.clickLogin}
							className="my-2 mb-3 register-btn py-3"
						>
							Login
						</Button>
						<div className="mb-2">
							<span style={{ fontSize: "16px" }}>Or signup using:</span>
						</div>
						<div className="mt-2 w-100 d-flex justify-content-between">
							<Button className="btn btn-light w-25">
								<svg
									width="18"
									height="18"
									viewBox="0 0 980 980"
									xmlns="http://www.w3.org/2000/svg"
								>
									<title>LinkedIn</title>
									<path
										d="M882 0H98C44.1 0 0 44.1 0 98v784c0 53.9 44.1 98 98 98h784c53.9 0 98-44.1 98-98V98c0-53.9-44.1-98-98-98zM294 833H147V392h147v441zm-73.5-524.3c-49 0-88.2-39.2-88.2-88.2s39.2-88.2 88.2-88.2 88.2 39.2 88.2 88.2-39.2 88.2-88.2 88.2zM833 833H686V573.3c0-39.2-34.3-73.5-73.5-73.5S539 534.1 539 573.3V833H392V392h147v58.8c24.5-39.2 78.4-68.6 122.5-68.6 93.1 0 171.5 78.4 171.5 171.5V833z"
										fill="#0E76A8"
										fill-rule="nonzero"
									></path>
								</svg>
							</Button>{" "}
							<Button className="btn btn-light w-25 mx-1">
								<svg width="18" height="18">
									<title>Google</title>
									<g fill="none" fill-rule="evenodd">
										<path
											d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
											fill="#EA4335"
										></path>
										<path
											d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
											fill="#4285F4"
										></path>
										<path
											d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
											fill="#FBBC05"
										></path>
										<path
											d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
											fill="#34A853"
										></path>
										<path d="M0 0h18v18H0V0z"></path>
									</g>
								</svg>
							</Button>{" "}
							<Button className="btn btn-light w-25 mr-1">
								<svg width="18" height="18">
									<title>Facebook</title>
									<path
										d="M18 1v16c0 .5-.4 1-1 1h-4.6v-7h2.3l.3-2.7h-2.7V6.6c0-.8.2-1.3 1.4-1.3h1.4V2.8c-.2 0-1.1-.1-2.1-.1-2 0-3.4 1.3-3.4 3.6v2H7.3V11h2.3v7H1c-.5 0-1-.4-1-1V1c0-.5.4-1 1-1h16c.6 0 1 .4 1 1z"
										fill="#3B5998"
										fill-rule="evenodd"
									></path>
								</svg>
							</Button>{" "}
							<Button className="btn btn-light w-25">
								<svg
									width="18"
									height="18"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 300 244.187"
								>
									<title>Twitter</title>
									<path
										d="M94.72 243.18c112.46 0 173.96-93.168 173.96-173.96 0-2.646-.054-5.28-.173-7.903a124.338 124.338 0 0 0 30.498-31.66c-10.955 4.87-22.744 8.147-35.11 9.625 12.622-7.569 22.313-19.543 26.885-33.817a122.62 122.62 0 0 1-38.824 14.841C240.8 8.422 224.916.99 207.327.99c-33.764 0-61.144 27.381-61.144 61.132 0 4.798.537 9.465 1.586 13.941-50.815-2.556-95.874-26.886-126.03-63.88a60.977 60.977 0 0 0-8.279 30.73c0 21.212 10.794 39.938 27.208 50.893a60.685 60.685 0 0 1-27.69-7.646c-.009.256-.009.506-.009.78 0 29.61 21.075 54.332 49.051 59.934a61.218 61.218 0 0 1-16.122 2.152c-3.933 0-7.766-.387-11.49-1.103 7.783 24.293 30.354 41.971 57.114 42.465-20.926 16.402-47.287 26.171-75.937 26.171-4.929 0-9.798-.28-14.584-.846 27.06 17.344 59.19 27.464 93.722 27.464"
										fill="#1da1f2"
									></path>
								</svg>
							</Button>{" "}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStatetoProps = (state) => {
	return {
		emailUser: state.user.email,
		userID: state.user.id,
	};
};

export default connect(mapStatetoProps, { loginAction, getCartByIdAction })(
	LoginPage
);
