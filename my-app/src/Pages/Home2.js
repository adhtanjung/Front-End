import React, { Component } from "react";
import Axios from "axios";
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

class Home2 extends Component {
	state = { locations: [] };
	componentDidMount() {
		Axios.get(
			"https://developers.zomato.com/api/v2.1/search?entity_id=6188&entity_type=city&count=20&sort=rating&order=desc",
			{
				headers: { "user-key": API_KEY },
			}
		)
			.then((res) => {
				this.setState({ locations: res.data.restaurants });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	restaurantMapping = () => {
		return this.state.locations.map((val) => {
			return (
				<div>
					<Card>
						<CardImg
							top
							width="100%"
							src={val.restaurant.featured_image}
							alt="Card image cap"
						/>
						<CardBody>
							<CardTitle tag="h5">{val.restaurant.name}</CardTitle>
							<CardSubtitle tag="h6" className="mb-2 text-muted">
								{val.restaurant.timings}
							</CardSubtitle>
							<CardText>{val.restaurant.location.address}</CardText>
							<Button>Button</Button>
						</CardBody>
					</Card>
				</div>
			);
		});
	};
	render() {
		return (
			<>
				<div className="container-fluid">
					<div>
						<h1>This is home 2</h1>
						<div>{this.restaurantMapping()}</div>
					</div>
				</div>
			</>
		);
	}
}

export default Home2;
