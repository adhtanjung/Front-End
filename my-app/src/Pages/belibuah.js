import React, { Component } from "react";
import { Container } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class BeliBuah extends Component {
	state = { qty: 0, price: 20000, stock: 20, modal: false };
	toggle = () => {
		this.setState({ modal: !this.state.modal });
	};
	kurang = () => {
		if (this.state.qty > 0) {
			this.setState({ qty: this.state.qty - 1 });
		}
	};
	tambah = () => {
		this.setState({ qty: this.state.qty + 1 });
	};

	render() {
		return (
			<>
				<Container className="themed-container">
					<div style={{ display: "flex", alignItems: "center" }}>
						<div>
							<img
								src="https://www.pngarts.com/files/1/Mango-PNG-Photo.png"
								alt=""
							/>
						</div>

						<div>
							<h1>Mangga</h1>
							<p>Price: {this.state.price}</p>
							<p>Stock: {this.state.stock}</p>
							<Button color="secondary" onClick={this.kurang}>
								-
							</Button>
							<span style={{ margin: "0 10px 0 10px" }}>{this.state.qty}</span>
							<Button color="secondary" onClick={this.tambah}>
								+
							</Button>{" "}
							<div style={{ marginTop: "15px" }}>
								<Button color="danger" onClick={this.toggle}>
									Buy
								</Button>
								<Modal isOpen={this.state.modal} toggle={this.state.toggle}>
									<ModalHeader toggle={this.toggle}>Mangga</ModalHeader>
									<ModalBody>
										<img
											src="https://www.pngarts.com/files/1/Mango-PNG-Photo.png"
											alt=""
											width="100%"
										/>
										<span>Kuantitas: {this.state.qty}</span>
										<br />
										<span>Total: {this.state.qty * this.state.price}</span>
									</ModalBody>
									<ModalFooter>
										<Button color="primary" onClick={this.toggle}>
											Do Something
										</Button>{" "}
										<Button color="secondary" onClick={this.toggle}>
											Cancel
										</Button>
									</ModalFooter>
								</Modal>
							</div>
						</div>
					</div>
				</Container>
			</>
		);
	}
}

export default BeliBuah;
