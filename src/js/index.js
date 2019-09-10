//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";

class SecondsCounter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
	}

	render() {
		return (
			<div>
				<h1>
					<i className="fa fa-clock-o" aria-hidden="true" />
					{("00000" + this.state.count).slice(-6)}
				</h1>
			</div>
		);
	}

	componentDidMount() {
		this.myInterval = setInterval(() => {
			this.setState(prevState => ({
				count: prevState.count + 1
			}));
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.myInterval);
	}
}

//render your react application
ReactDOM.render(<SecondsCounter />, document.querySelector("#app"));
