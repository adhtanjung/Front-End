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
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from "reactstrap";
import "./navbar.css";
import { logoutAction } from "../redux/actions";
import logo from "./logo_transparent.png";
import cart from "./order.png";
class NavigationBar extends Component {
	state = {
		isOpen: false,
	};
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	};
	logoutBtn = () => {
		this.props.logoutAction();
		localStorage.removeItem("id");
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
						<NavbarBrand>
							<img src={logo} alt="" width="80px" />
						</NavbarBrand>
					</Link>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<Link to="/products">
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
						<Nav>
							<Link>
								<img src={cart} alt="" height="40px" />
							</Link>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret style={{ color: "black" }}>
									{this.props.userEmail}
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>My Account</DropdownItem>

									<DropdownItem>Settings</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Reset</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
							<Link to="/" style={{ textDecoration: "none" }}>
								<NavLink
									className="clickable-link mr-3  px-3 py-2"
									onClick={this.logoutBtn}
								>
									Logout
								</NavLink>
							</Link>
						</Nav>
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
