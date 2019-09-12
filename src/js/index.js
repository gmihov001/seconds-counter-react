//import react into the bundle
//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import { Home } from "./component/home.js";

let seconds = 0;
var counter;
setInterval(myTimer, 1000);

function myTimer() {
	seconds += 1;
	counter = ("000000" + seconds).slice(-6);
	ReactDOM.render(
		<Home
			char1={counter.charAt(0)}
			char2={counter.charAt(1)}
			char3={counter.charAt(2)}
			char4={counter.charAt(3)}
			char5={counter.charAt(4)}
			char6={counter.charAt(5)}
		/>,
		document.querySelector("#app")
	);
}

function Home(props) {
	return (
		<div className="row mx-0 px-5 py-1 d-flex justify-content-center">
			<div className="col col-1 text-white p-0 mx-2">
				<i className="far fa-clock" />
			</div>
			<div className="col col-1 text-white p-0 mx-2">{props.char1}</div>
			<div className="col col-1 text-white p-0 mx-2">{props.char2}</div>
			<div className="col col-1 text-white p-0 mx-2">{props.char3}</div>
			<div className="col col-1 text-white p-0 mx-2">{props.char4}</div>
			<div className="col col-1 text-white p-0 mx-2">{props.char5}</div>
			<div className="col col-1 text-white p-0 mx-2">{props.char6}</div>
		</div>
	);
}

Home.propTypes = {
	char1: PropTypes.number,
	char2: PropTypes.number,
	char3: PropTypes.number,
	char4: PropTypes.number,
	char5: PropTypes.number,
	char6: PropTypes.number
};
