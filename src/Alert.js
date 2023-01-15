function Alert() {
	function alertFun() {
		alert("Welcome to React!");
	}
	return (
		<div className="container">
			<p>Welcome to REACT!</p>
			<button onClick={alertFun}>Click Me</button>
		</div>
	);
}

export default Alert;
