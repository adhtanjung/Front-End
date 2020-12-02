import Axios from "axios";
import React, { Component } from "react";
import { API_KEY } from "../helper/Zomato";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from "reactstrap";
// import Home2 from "./Home2";
import { Link } from "react-router-dom";

class Home extends Component {
	state = { categories: [], seleted: "", restaurants: [] };
	componentDidMount() {
		Axios.get("https://developers.zomato.com/api/v2.1/categories", {
			headers: {
				"user-key": API_KEY,
			},
		})
			.then((res) => {
				this.setState({
					categories: res.data.categories,
				});
				Axios.get(
					"https://developers.zomato.com/api/v2.1/search?count=10&category=Takeaway",
					{
						headers: {
							"user-key": API_KEY,
						},
					}
				).then((res) => {
					// console.log(res.data.restaurants[0].restaurant.featured_image);
					this.setState({ restaurants: res.data.restaurants });
				});
			})
			.catch((err) => {
				console.log(err, "ini error");
			});
	}

	renderButtons = () => {
		let newArr = this.state.categories.map((val) => {
			return (
				<div className="my-1">
					<Button
						color="danger"
						style={{ width: "200px" }}
						onClick={() => this.changeSelected(val.categories.name)}
					>
						{val.categories.name}
					</Button>{" "}
				</div>
			);
		});
		return newArr;
	};
	changeSelected = (category) => {
		return this.setState({
			seleted: category,
		});
	};
	restaurantsMap = () => {
		return this.state.restaurants.map((val, index) => {
			return (
				<div className="mx-3 my-1">
					<Card style={{ width: "250px", height: "460px" }}>
						<CardImg
							top
							width="100%"
							src={val.restaurant.featured_image}
							alt="Card image cap"
						/>
						<CardBody>
							<CardTitle tag="h5">{val.restaurant.name}</CardTitle>
							<CardSubtitle tag="h6" className="mb-2 text-muted">
								{val.restaurant.cuisines}
							</CardSubtitle>
							<CardText>
								Some quick example text to build on the card title and make up
								the bulk of the card's content.
							</CardText>
							<Button>Button</Button>
						</CardBody>
					</Card>
				</div>
			);
		});
	};
	render() {
		return (
			<div className="container-fluid d-flex">
				<div className="w-25">{this.renderButtons()}</div>
				<div>
					<div className="mx-3">{this.state.seleted}</div>
					<div className="w-auto d-flex flex-wrap">{this.restaurantsMap()}</div>
					{/* ! link dibwh ini ditentuin dulu di app.js */}
					<Link to="/home-2">CLick me</Link>
					<Link to="/login">Loginpage</Link>
				</div>
			</div>
		);
	}
}

export default Home;
