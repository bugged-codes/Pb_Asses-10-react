import React from "react";

const Header = () => {
	const style = {
		navStyle: {
			color: "black",
			height: "5rem",
			textShadow: "0px 5px 2px #60e8f0",
			textAlign: "center",
			marginTop: "0",
		},
	};
	return (
		<div>
			<h1 style={style.navStyle}>Styling using Functional and Class Components.</h1>
		</div>
	);
};

export default Header;
