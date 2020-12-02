import React from "react";

const CardProduct = (props) => {
	return (
		<div
			style={{
				border: "1px solid black",
				margin: "10px",
				width: "200px",
				height: "200px",
			}}
		>
			<h1>{props.nama}</h1>
			<img src={props.link} alt="img not found" width="auto" height="50px" />
			<p>{props.keterangan}</p>
		</div>
	);
};

export default CardProduct;
