import React, { Component } from "react";
import { connect } from "react-redux";
import {
	fetchCategoriesAction,
	fetchProductsAction,
	fetchProductByCategoryAction,
} from "../redux/actions";
import Select from "react-select";
import { ProductCards } from "../components";
import { Link } from "react-router-dom";
import Axios from "axios";
import { fakeUrl } from "../helpers/fake-api-url";

class ProductsPage extends Component {
	state = { selectedCategory: 0 };
	componentDidMount() {
		const { fetchCategoriesAction, fetchProductsAction } = this.props;
		fetchCategoriesAction();
		fetchProductsAction();
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevState.selectedCategory !== this.state.selectedCategory) {
			// Axios.get(`${fakeUrl}/categories?category=`)
			// console.log(this.state);
			const id = this.state.selectedCategory;
			this.props.fetchProductByCategoryAction(id);
			console.log(this.props.filteredProduct);
		}
	}
	handleChange = (e) => {
		this.setState({ selectedCategory: e.id });
		// console.log(this.state);
	};
	renderCategoryList = () => {
		let newArr = this.props.categories.map((val) => {
			return { value: val.category, label: val.category, id: val.id };
		});
		return <Select options={newArr} onChange={this.handleChange} />;
	};
	renderProducts = () => {
		return this.props.productlist.map((val) => {
			return (
				<div className="mr-4">
					<Link to={`/product-detail?id=${val.id}`}>
						<ProductCards image={val.image} name={val.name} price={val.price} />
					</Link>
				</div>
			);
		});
	};
	render() {
		return (
			<div>
				<div className="container">
					<div>
						<h3>Categories</h3>
					</div>
					<div>{this.renderCategoryList()}</div>
				</div>
				<div className="d-flex justify-content-center mt-5">
					{this.renderProducts()}
				</div>
			</div>
		);
	}
}
const mapStatetoProps = (state) => {
	return {
		categories: state.product.categories,
		productlist: state.product.productlist,
		// filteredProduct: state.product.productCategory,
	};
};

export default connect(mapStatetoProps, {
	fetchCategoriesAction,
	fetchProductsAction,
	fetchProductByCategoryAction,
})(ProductsPage);
