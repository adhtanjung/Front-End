import React from "react";

const CustomButton = (props) => {
	return (
		<button
			onClick={props.onclick}
			style={{
				padding: "10px",
				backgroundColor: props.backgroundColor,
				color: props.color,
				border: "none",
				outline: "none",
			}}
		>
			{props.children}
		</button>
	);
};

export default CustomButton;
