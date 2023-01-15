import { Component } from "react";
import "./ComponentStyling.css";

const style = {
	spanText: {
		color: "#62fbfd",
		fontSize: "bold",
	},
};

class ClassComponent extends Component {
	render() {
		return (
			<div className="Component-container" style={{ backgroundColor: "#d27fd2" }}>
				<h1>
					This is Created using <span style={style.spanText}>Class</span> Component!
				</h1>
				<div>This is styled using external CSS.</div>
				<div style={{ color: "blue" }}>This is styled using Inline CSS.</div>
			</div>
		);
	}
}

export default ClassComponent;
