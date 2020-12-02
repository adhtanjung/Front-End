import React from "react";
// import CardProduct from "../components/CardProducts";
import { Link } from "react-router-dom";
import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from "reactstrap";

class Method extends React.Component {
	state = { counter: 0, data: [] };
	componentDidMount() {
		this.setState({
			data: [
				{
					nama: "Mangga",
					link: "https://www.pngarts.com/files/1/Mango-PNG-Photo.png",
					keterangan: "wah enak mangga",
				},
				{
					nama: "Kelapa",
					link:
						"https://www.pngarts.com/files/6/Coconut-Water-Splash-PNG-Transparent-Image.png",
					keterangan: "wah enak semangka",
				},
				{
					nama: "Jeruk",
					link:
						"http://www.pngall.com/wp-content/uploads/2016/05/Orange-PNG-Image.png",
					keterangan: "wah enak jeruk",
				},
			],
		});
	}
	mapProducts = () => {
		let newArr = this.state.data.map((val, index) => {
			return (
				// <Link to={`/belibuah?id=${index}`}>
				// {/* <CardProduct
				// nama={val.nama}
				// link={val.link}
				// keterangan={val.keterangan}
				// /> */}

				<Card style={{ margin: "20px", width: "20%", height: "fit-content" }}>
					<CardImg
						top
						width="100%"
						src={`${val.link}`}
						alt="Card image cap"
						style={{ width: "100px", height: "100px" }}
					/>
					<CardBody>
						<CardTitle tag="h5">{val.nama}</CardTitle>
						<CardSubtitle tag="h6" className="mb-2 text-muted">
							Ini {val.nama}
						</CardSubtitle>
						<CardText>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
							soluta voluptas ut tempora nesciunt libero. Impedit ut ea
							quibusdam consequuntur laudantium voluptate ipsa doloribus facere
							blanditiis, ullam excepturi? Hic, numquam!
						</CardText>
						<Link to={`/belibuah?id=${index}`}>
							<Button>Item Details</Button>
						</Link>
					</CardBody>
				</Card>

				// </Link>
			);
		});
		return newArr;
	};
	tambahBuah = () => {
		let namabuah = this.refs.namabuah.value;
		let urlbuah = this.refs.urlbuah.value;
		let ketbuah = this.refs.keteranganbuah.value;
		let obj = { nama: namabuah, link: urlbuah, keterangan: ketbuah };
		this.setState({
			data: [...this.state.data, obj],
		});
		// this.mapProducts();
	};
	render() {
		return (
			<div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					{this.mapProducts()}
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					<div>
						<input type="text" ref="namabuah" placeholder="Nama Buah" />
					</div>
					<div>
						<input type="text" ref="urlbuah" placeholder="Url" />
					</div>
					<div>
						<input type="text" ref="keteranganbuah" placeholder="Keterangan" />
					</div>
					<div>
						<button onClick={this.tambahBuah}>Click!</button>
					</div>
					<div>
						<Link to="/">
							<button>Pindah ke Home</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
//  
export default Method;
