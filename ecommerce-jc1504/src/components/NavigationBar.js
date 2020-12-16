import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
	Collapse,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Nav,
	Navbar,
	NavbarToggler,
	NavItem,
	UncontrolledDropdown,
} from "reactstrap";
import { logoutAction, getCartByIdAction } from "../redux/action";
import "./navbar.css";
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
	componentDidUpdate(prevProps, prevState) {
		const { getCartByIdAction, cart, userID } = this.props;
		if (prevProps.cart !== cart) {
			getCartByIdAction(userID);
		}
	}
	// renderDropdown = () => {
	// 	if (this.props.email !== "") {
	// 		return (
	// 			<DropdownMenu right>
	// 				<Link to="/">
	// 					<DropdownItem>Profile</DropdownItem>
	// 				</Link>
	// 				<Link to="/cart">
	// 					<DropdownItem>Cart</DropdownItem>
	// 				</Link>
	// 				<Link to="/">
	// 					<DropdownItem onClick={this.props.logoutAction}>
	// 						Log Out
	// 					</DropdownItem>
	// 				</Link>
	// 			</DropdownMenu>
	// 		);
	// 	} else {
	// 		return (
	// 			<DropdownMenu right>
	// 				<Link to="/login">
	// 					<DropdownItem>Login</DropdownItem>
	// 				</Link>
	// 				<Link to="/register">
	// 					<DropdownItem>Register</DropdownItem>
	// 				</Link>
	// 			</DropdownMenu>
	// 		);
	// 	}
	// };
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
						{/* <NavbarBrand> */}
						<img src={logo} alt="" width="80px" />
						{/* </NavbarBrand> */}
					</Link>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<Link to="/products">Products</Link>
							</NavItem>
						</Nav>
					</Collapse>
					{this.props.email === "" ? (
						<Nav className="d-flex justify-content-end" navbar>
							<NavItem>
								<Link
									to="/login"
									style={{ textDecoration: "none" }}
									className="clickable-link mr-3  px-3 py-2"
								>
									{/* <NavLink > */}
									Log in
									{/* </NavLink> */}
								</Link>
							</NavItem>
							<NavItem>
								<Link
									to="/Register"
									style={{ textDecoration: "none" }}
									className="register-btn mr-5 px-3 py-2"
								>
									{/* <NavLink > */}
									Register
									{/* </NavLink> */}
								</Link>
							</NavItem>
						</Nav>
					) : (
						<Nav>
							<Link to="/cart" class="notification">
								<img src={cart} alt="" height="40px" />
								<span class="badge">{this.props.cart.length}</span>
							</Link>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret style={{ color: "black" }}>
									{this.props.email}
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>My Account</DropdownItem>
									<Link to="/manage-product">
										<DropdownItem>Manage Products</DropdownItem>
									</Link>
									<Link to="/history-transaction">
										<DropdownItem>Transaction History</DropdownItem>
									</Link>
								</DropdownMenu>
							</UncontrolledDropdown>
							<Link
								to="/"
								style={{ textDecoration: "none" }}
								onClick={this.props.logoutAction}
								className="clickable-link mr-3  px-3 py-2"
							>
								{/* <NavLink
									
									
								> */}
								Logout
								{/* </NavLink> */}
							</Link>
						</Nav>
					)}
				</Navbar>
			</div>
		);
	}
}

const mapStatetoProps = ({ user, cart }) => {
	return {
		email: user.email,
		cart: cart.cart,
		userID: user.id,
	};
};

export default connect(mapStatetoProps, { logoutAction, getCartByIdAction })(
	NavigationBar
);
