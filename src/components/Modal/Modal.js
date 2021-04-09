import React from "react";
import "./Modal.css";
import CSSTransition from "react-transition-group/CSSTransition";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
	return (
		<div>
			<Backdrop show={props.show} change={props.change} />
			<CSSTransition
				mountOnEnter
				unmountOnExit
				in={props.show}
				timeout={500}
				classNames={{
					enter: "",
					enterActive: "ModalOpen",
					exit: "",
					exitActive: "ModalClosed",
				}}
			>
				<div className="Modal">
					Here is a modal
					<br />
					<br />
					<br />
					<button onClick={props.change}>Close Modal</button>
				</div>
			</CSSTransition>
		</div>
	);
};

export default modal;
