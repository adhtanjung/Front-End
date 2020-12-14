import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { api_url } from "../helpers/api_url";
import { Table } from "reactstrap";
import { Button } from "reactstrap";
import HistoryModal from "../components/HistoryModal";

class historyPage extends Component {
	state = {
		data: [],
		modalOpen: false,
		selectedData: null,
	};
	componentDidMount() {
		this.fetchHistory();
	}
	componentDidUpdate(prevProps, prevState) {
		if (prevProps.userID !== this.props.userID) {
			this.fetchHistory();
		}
	}
	fetchHistory = () => {
		Axios.get(`${api_url}/transaction?userID=${this.props.userID}`)
			.then((result) => {
				this.setState({ data: result.data });
			})
			.catch((err) => {});
	};
	renderTableBody = () => {
		const { data } = this.state;
		let newArr = data.map((val, index) => {
			return (
				<tr key={val.id}>
					<td>@mdo</td>
					<td>{val.date}</td>
					<td>{val.total}</td>
					<td>
						<Button color="info" onClick={() => this.toggle(index)}>
							Items
						</Button>
					</td>
				</tr>
			);
		});

		return newArr;
	};

	toggle = (index) => {
		this.setState({ modalOpen: !this.state.modalOpen, selectedData: index });
	};
	render() {
		const { modalOpen, data, selectedData } = this.state;
		return (
			<div>
				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>Date</th>
							<th>Total</th>
							<th>Items</th>
						</tr>
					</thead>
					<tbody>{this.renderTableBody()}</tbody>
				</Table>
				<HistoryModal
					toggle={this.toggle}
					modalOpen={modalOpen}
					data={data[selectedData]}
				/>
			</div>
		);
	}
}
const mapStatetoProps = (state) => {
	return {
		userID: state.user.id,
	};
};

export default connect(mapStatetoProps)(historyPage);
