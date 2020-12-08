import React, { Component } from "react";

class Landing extends Component {
	state = {};
	render() {
		return (
			<div
				className="container-fluid d-flex align-items-center"
				style={{ margin: "0" }}
			>
				<div
					style={{
						objectFit: "cover",
						width: "30%",
						fontFamily: "dohyon",
						wordSpacing: "1px",
					}}
				>
					<div
						className="p-5"
						style={{
							backgroundColor: "#561c99",
							color: "white",

							height: "200px",
						}}
					>
						<h1>WEBSITE </h1>
						<h5>Under Construction!!!</h5>
					</div>
				</div>
				<div
					style={{
						maxWidth: "100%",
						maxHeight: "100%",
						borderColor: "#4b53dc",
					}}
					className="d-flex justify-content-center w-50"
				>
					<img
						src="https://www.commissionpdx.com/wp-content/uploads/2019/08/CPDX-City.gif"
						alt=""
					/>
				</div>
				<div
					className="p-5 d-flex align-items-center"
					style={{
						backgroundColor: "#561c99",
						color: "white",
						height: "200px",
					}}
				>
					<p style={{ fontFamily: "dohyon", fontSize: "16px" }}>
						Welcome to{" "}
						<span style={{ color: "#ebc634", fontWeight: "bolder" }}>
							yStore
						</span>{" "}
						, we are currently working on this site
					</p>
				</div>
			</div>
		);
	}
}

export default Landing;
