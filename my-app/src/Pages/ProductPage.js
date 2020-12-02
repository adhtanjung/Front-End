import Axios from "axios";
import React, { Component } from "react";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Button,
	Input,
} from "reactstrap";

class ProductPage extends Component {
	state = {
		data: [],
		updated: { nama: "", link: "", keterangan: "" },
	};
	componentDidMount() {
		Axios.get(`http://localhost:2000/products`)
			.then((res) => {
				this.setState({ data: res.data });

				// console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.updated !== this.state.updated) {
			this.productsMap();
		}
	}
	productsMap = () => {
		return this.state.data.map((val) => {
			return (
				<div style={{ width: "300px" }} className="my-2 mx-2">
					<Card style={{ height: "400px" }}>
						<CardImg
							top
							width="100%"
							src={val.link}
							alt="Card image cap"
							className="h-50"
						/>
						<CardBody className="d-flex flex-column align-items-end h-auto justify-content-start">
							<CardTitle tag="h5">{val.nama}</CardTitle>

							<CardText>{val.keterangan}</CardText>
							<Button>Button</Button>
						</CardBody>
					</Card>
				</div>
			);
		});
	};

	tambahBuah = () => {
		const { nama, link, keterangan } = this.state.updated;

		Axios.post(`http://localhost:2000/products`, {
			nama,
			link,
			keterangan,
		})
			.then((res) => {
				Axios.get(`http://localhost:2000/products`)
					.then((res) => {
						this.setState({ data: res.data });

						// console.log(res.data);
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	onChangeInput = (e) => {
		this.setState({
			updated: {
				...this.state.updated,
				[e.target.id]: e.target.value,
			},
		});
		console.log(this.state.updated);
	};
	render() {
		return (
			<div>
				<div className="d-flex flex-wrap">{this.productsMap()}</div>
				<div className="ml-2" style={{ width: "400px" }}>
					<Input
						className="my-2"
						placeholder="Nama Buah"
						id="nama"
						onChange={this.onChangeInput}
					></Input>
					<Input
						className="my-2"
						placeholder="URL Buah"
						id="link"
						onChange={this.onChangeInput}
					></Input>
					<Input
						className="my-2"
						placeholder="Keterangan Buah"
						id="keterangan"
						onChange={this.onChangeInput}
					></Input>
					<Button onClick={this.tambahBuah} className="my-2">
						Tambah Buah
					</Button>
				</div>
			</div>
		);
	}
}

export default ProductPage;
