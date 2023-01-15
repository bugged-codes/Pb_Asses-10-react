import React from "react";
import "./ComponentStyling.css";

const style = {
	spanText: {
		color: "#d27fd2",
		fontSize: "bold",
	},
};

const FunctionalComponent = () => {
	return (
		<div className="Component-container">
			<h1>
				This is Created using <span style={style.spanText}>Functional</span> Component!
			</h1>
			<div style={{ color: "blue" }}>This is styled using Inline CSS.</div>
			<div>This is styled using external CSS.</div>
		</div>
	);
};

export default FunctionalComponent;
