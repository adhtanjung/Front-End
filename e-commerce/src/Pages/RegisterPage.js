import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Button, Input } from "reactstrap";
import { fakeUrl } from "../helpers/fake-api-url";
import { registerAction } from "../redux/actions";
import "./registerpage.css";
import bg from "./bg.png";

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
							})
								.then((res) => {
									console.log(res);
									this.props.registerAction(res.data);
									localStorage.setItem("id", res.data.id);
								})
								.catch((err) => {
									console.log(err);
								});
						} else {
							alert("Email is already taken");
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
			<div className="container-fluid d-flex  align-items-start m-0">
				<div className="w-50 ml-5">
					<h4 className="mb-4" style={{ fontWeight: "bold" }}>
						Register Now!
					</h4>
					<div
						className="w-75 d-flex flex-column fnt"
						style={{ fontSize: "14px" }}
					>
						<span>Email</span>
						<Input
							type="email"
							id="email"
							onChange={this.onChangeInput}
							className="my-2 "
						/>
						<span>Password</span>
						<Input
							type="password"
							id="password"
							onChange={this.onChangeInput}
							className="my-2 "
						/>
						<span>Confirm Password</span>
						<Input
							type="password"
							id="confirmPassword"
							onChange={this.onChangeInput}
							className="my-2 "
						/>
						<Button
							onClick={this.clickToRegister}
							className="my-2 register-btn py-3"
						>
							Start shopping now
						</Button>
						<span
							style={{ fontSize: "12px", fontWeight: "700", color: "#141c3a" }}
							className="mb-2"
						>
							By signing up for YudhoStore, you agree to YudhoStore's Terms of
							Service & Privacy Policy.
						</span>
						<div>
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
								<svg width="18" height="18">
									<title>Github</title>
									<path
										d="M9 0C4.027 0 0 4.03 0 9a9 9 0 0 0 6.154 8.539c.45.084.615-.194.615-.433 0-.214-.008-.78-.011-1.53-2.504.543-3.032-1.208-3.032-1.208-.41-1.039-1.001-1.316-1.001-1.316-.816-.558.063-.546.063-.546.903.063 1.378.926 1.378.926.803 1.376 2.107.98 2.621.749.081-.582.313-.98.57-1.204-1.999-.225-4.099-1-4.099-4.447 0-.982.349-1.786.926-2.416-.101-.227-.405-1.141.079-2.381 0 0 .753-.242 2.475.922a8.66 8.66 0 0 1 2.25-.304 8.66 8.66 0 0 1 2.25.304c1.71-1.164 2.463-.922 2.463-.922.484 1.24.18 2.154.09 2.381.574.63.923 1.434.923 2.416 0 3.457-2.104 4.219-4.106 4.44.315.27.607.821.607 1.665 0 1.204-.011 2.171-.011 2.464 0 .236.157.517.619.427A8.968 8.968 0 0 0 18 9a9 9 0 0 0-9-9"
										fill-rule="evenodd"
									></path>
								</svg>
							</Button>{" "}
						</div>
					</div>
				</div>
				<div className="d-flex align-items-center w-50">
					<img
						src={bg}
						alt="img not found"
						style={{ maxHeight: "450px", maxWidth: "100%", float: "top" }}
						className="d-flex align-self-start"
					/>
					{/* <h1>JOIN US NOW!</h1> */}
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
