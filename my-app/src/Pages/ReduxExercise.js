import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxAction, globalArray } from "../Redux";
import { Button, Input } from "reactstrap";

class ReduxExercise extends Component {
	state = {};
	componentDidMount() {
		// this.boolUpdate();
	}
	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevProps.bool !== this.props.bool) {
	// 		this.boolUpdate();
	// 	}
	// }

	// boolUpdate = () => {
	// 	return this.props.bool;
	// };

	toggleBool = () => {
		if (this.props.bool) {
			this.props.reduxAction(false);
		} else {
			this.props.reduxAction(true);
		}
	};
	pushToGlobalArray = () => {
		let n = Math.random() * 100;
		this.props.globalArray([n]);
		// console.log(this.props.data);
	};

	// pushInput = (e) => {
	// 	this.props.globalArray([e.target.value]);
	// };
	render() {
		return (
			<div>
				<div>{this.props.bool ? "TRUE" : "FALSE"}</div>
				<div>
					<Button onClick={this.toggleBool}>Toggle</Button>
				</div>
				<div>
					<Input
						placeholder="Global Array Input Field"
						id="data"
						onChange={this.pushInput}
					></Input>
					<Button onClick={this.pushToGlobalArray}>Click Me</Button>

					<div className="d-flex flex-wrap container-fluid border border-primary">
						{this.props.data}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { bool: state.bool, data: state.data };
};

export default connect(mapStateToProps, { reduxAction, globalArray })(
	ReduxExercise
);
