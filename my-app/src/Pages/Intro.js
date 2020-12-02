import React from "react";
// import CustomButton from "../components/CustomButton";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class Intro extends React.Component {
	state = {
		nama: "Adhi",
		arr: [1, 2, 3],
		counter: 0,
		userData: {
			username: "",
			password: "",
			email: "",
		},
		obj: {
			arr: ["true", "false"],
			contoh: {
				arr: [1, 2, [4, 5]],
			},
		},
	};
	funcParam = (param) => {
		console.log(param);
	};
	kurang = () => {
		this.setState({ counter: this.state.counter - 1 });
	};
	tambah = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	gantiNama = () => {
		this.setState({ nama: this.refs.nama.value });
	};
	register = () => {
		this.setState({
			userData: {
				username: this.refs.userName.value,
				password: this.refs.password.value,
				email: this.refs.password.value,
			},
		});
		console.log(this.state.userData);
	};
	render() {
		return (
			<div>
				{/* <input type="text" ref="nama" />
				<h1>{this.state.nama}</h1>
				<button onClick={() => this.funcParam("hello world")}>
					bukan button biasa
				</button>
				<CustomButton
					backgroundColor="red"
					onclick={this.gantiNama}
					color="white"
				>
					Tombol Biru{" "}
				</CustomButton>
				<CustomButton warna="green" />
				<CustomButton warna="blue" /> */}
				{/* <button onClick={this.gantiNama}>Ganti Nama</button> */}
				{/* <button onClick={this.kurang}>-</button>
				<div>{this.state.counter}</div>
				<button onClick={this.tambah}>+</button> */}
				{/* <div>Hello {this.state.nama}</div>
				<div>{this.state.arr.join("")}</div>
				<div>{this.state.obj.arr[1]}</div>
				<div>{this.state.obj.contoh.arr[2][0]}</div>
				<div>
					<button>Click Me!</button>
				</div> */}
				<div>
					<input type="text" name="" ref="userName" />
				</div>

				<div>
					<input type="email" name="" ref="email" />
				</div>
				<div>
					<input type="password" name="" ref="password" />
				</div>
				<div>
					<Button color="info">Click Me!</Button>{" "}
					{/* <CustomButton onclick={this.register}>Click Me!</CustomButton> */}
				</div>
				<div>
					<Link to="/Method">Go to method</Link>
				</div>
			</div>
		);
	}
}

export default Intro;
