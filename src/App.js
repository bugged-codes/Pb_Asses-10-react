import Header from "./Components/Header.js";
import FunctionalComponent from "./Components/FunctionalComponent.js";
import ClassComponent from "./Components/ClassComponent.js";
// import Alert from "./Alert.js";
import { useState } from "react";
import "./App.css";

function App() {
	const [state1, state1Change] = useState(false);
	const [state2, state2Change] = useState(false);
	// const handleClick = () => {
	// 	stateChange(!state);
	// };
	return (
		<div id="Root-container">
			<Header />
			<div id="Button-container">
				<button id="FunctionalComponent-btn" onClick={() => state1Change(!state1)}>
					To see styling in Function component.
				</button>
				<button id="ClassComponent-btn" onClick={() => state2Change(!state2)}>
					To see styling in Class component.
				</button>
			</div>
			<div id="Content-div">
				{state1 && <FunctionalComponent />}
				{state2 && <ClassComponent />}
			</div>
			{/* <Alert /> */}
		</div>
	);
}

export default App;
