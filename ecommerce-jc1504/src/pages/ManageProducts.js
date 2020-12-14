import Axios from "axios";
import React, { Component } from "react";
import { Button, Input, Table } from "reactstrap";
import { api_url } from "../helpers/api_url";

class ManageProducts extends Component {
	state = { data: [], selectedData: null, addedData: {}, editData: {} };

	componentDidMount() {
		this.fetchProducts();
	}

	fetchProducts = () => {
		Axios.get(`${api_url}/products`)
			.then((res) => {
				this.setState({ data: res.data });
			})
			.catch((err) => {
				console.log(err);
			});
	};
	deleteBtn = (id) => {
		Axios.delete(`${api_url}/products/${id}`)
			.then((res) => {
				this.fetchProducts();
			})
			.catch((err) => {
				console.log(err);
			});
	};
	editBtn = (id) => {
		const data = this.state.data.find((val) => val.id === id);
		this.setState({ selectedData: id, addedData: data });
	};
	cancelEditBtn = () => {
		this.setState({ selectedData: null });
	};
	addBtn = () => {
		const { addedData } = this.state;
		Axios.post(`${api_url}/products`, {
			...addedData,
			categoryID: parseInt(addedData.categoryID),
			price: parseInt(addedData.price),
			stock: parseInt(addedData.stock),
		})
			.then((res) => {
				this.fetchProducts();
				this.setState({ addedData: {} });
			})
			.catch((err) => {
				console.log(err);
			});
	};
	onChangeInput = (e) => {
		this.setState({
			addedData: {
				...this.state.addedData,
				[e.target.id]: e.target.value,
			},
		});
	};
	saveEditBtn = (id) => {
		const { addedData } = this.state;
		Axios.patch(`${api_url}/products/${id}`, {
			...addedData,
			categoryID: parseInt(addedData.categoryID),
			price: parseInt(addedData.price),
			stock: parseInt(addedData.stock),
		})
			.then((res) => {
				this.cancelEditBtn();
				this.fetchProducts();
				this.setState({ addedData: {} });
			})
			.catch((err) => {
				console.log(err);
			});
	};
	renderProducts = () => {
		const { data, selectedData } = this.state;
		return data.map((val, index) => {
			if (val.id === selectedData) {
				return (
					<tr key={val.id}>
						<td>#</td>
						<td>
							<Input
								id="name"
								onChange={this.onChangeInput}
								defaultValue={val.name}
							/>
						</td>
						<td>
							<Input
								id="categoryID"
								onChange={this.onChangeInput}
								defaultValue={val.categoryID}
								type="number"
							/>
						</td>
						<td>
							<Input
								id="image"
								onChange={this.onChangeInput}
								defaultValue={val.image}
							/>
						</td>
						<td>
							<Input
								id="price"
								onChange={this.onChangeInput}
								defaultValue={val.price}
								type="number"
							/>
						</td>
						<td>
							<Input
								id="stock"
								onChange={this.onChangeInput}
								defaultValue={val.stock}
								type="number"
							/>
						</td>
						<td>
							<Button onClick={() => this.saveEditBtn(val.id)}>Save</Button>
						</td>
						<td>
							<Button onClick={this.cancelEditBtn}>Cancel</Button>
						</td>
					</tr>
				);
			} else {
				return (
					<tr key={val.id}>
						<td>{val.id}</td>
						<td>{val.name}</td>
						<td>{val.categoryID}</td>
						<td>
							<img src={val.image} alt="img not found" height="70px" />
						</td>
						<td>{val.price.toLocaleString()}</td>
						<td>{val.stock}</td>
						<td>
							<Button onClick={() => this.editBtn(val.id)}>Edit</Button>
						</td>
						<td>
							<Button onClick={() => this.deleteBtn(val.id)}>Delete</Button>
						</td>
					</tr>
				);
			}
		});
	};
	render() {
		return (
			<div>
				<Table style={{ textAlign: "center" }}>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Category ID</th>
							<th>Image</th>
							<th>Price</th>
							<th>Stock</th>
							<th colSpan="2">Actions</th>
						</tr>
					</thead>
					<tbody>{this.renderProducts()}</tbody>
					<tfoot>
						<tr>
							<td>#</td>
							<td>
								<Input
									placeholder="name"
									id="name"
									onChange={this.onChangeInput}
								/>
							</td>
							<td>
								<Input
									placeholder="category id"
									id="categoryID"
									onChange={this.onChangeInput}
									type="number"
								/>
							</td>
							<td>
								<Input
									placeholder="image"
									id="image"
									onChange={this.onChangeInput}
								/>
							</td>
							<td>
								<Input
									placeholder="price"
									id="price"
									onChange={this.onChangeInput}
									type="number"
								/>
							</td>
							<td>
								<Input
									placeholder="stock"
									id="stock"
									onChange={this.onChangeInput}
									type="number"
								/>
							</td>
							<td>
								<Button onClick={this.addBtn}>Add</Button>
							</td>
						</tr>
					</tfoot>
				</Table>
			</div>
		);
	}
}

export default ManageProducts;
