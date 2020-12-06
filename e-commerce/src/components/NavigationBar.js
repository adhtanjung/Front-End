import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import "./navbar.css";
import { logoutAction } from "../redux/actions";

class NavigationBar extends Component {
	state = {
		isOpen: false,
	};
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};

	render() {
		return (
			<div>
				<Navbar
					color="light"
					light
					expand="md"
					className="shadow-sm p-3 mb-5 bg-white rounded"
				>
					<Link to="/">
						<NavbarBrand>yudhostore</NavbarBrand>
					</Link>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<Link to="/product">
									<NavLink>Products</NavLink>
								</Link>
							</NavItem>
						</Nav>
					</Collapse>
					{this.props.userEmail === "" ? (
						<Nav className="d-flex justify-content-end" navbar>
							<NavItem>
								<Link to="/login" style={{ textDecoration: "none" }}>
									<NavLink className="clickable-link mr-3  px-3 py-2">
										Log in
									</NavLink>
								</Link>
							</NavItem>
							<NavItem>
								<Link to="/Register" style={{ textDecoration: "none" }}>
									<NavLink className="register-btn mr-5 px-3 py-2">
										Register
									</NavLink>
								</Link>
							</NavItem>
						</Nav>
					) : (
						<Link to="/" style={{ textDecoration: "none" }}>
							<NavLink
								className="clickable-link mr-3  px-3 py-2"
								onClick={this.props.logoutAction}
							>
								Logout
							</NavLink>
						</Link>
					)}
				</Navbar>
			</div>
		);
	}
}
const mapStatetoPros = (state) => {
	return {
		userEmail: state.user.email,
	};
};

export default connect(mapStatetoPros, { logoutAction })(NavigationBar);
