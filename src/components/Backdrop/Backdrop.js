import React from "react";
import "./Backdrop.css";

const backdrop = (props) => {
	return props.show ? (
		<div onClick={props.change} className="Backdrop"></div>
	) : null;
};

export default backdrop;
