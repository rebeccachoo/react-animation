import React, { Component } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Transition from "react-transition-group/Transition";
import Lists from "./components/Lists/Lists";

class App extends Component {
	state = { show: false, timer: 500, openModal: false };
	openModalHandler = () => {
		this.setState({ openModal: true });
	};
	closeModalHandler = () => {
		this.setState({ openModal: false });
	};
	render() {
		return (
			<div className="Wrapper">
				{/* First Item */}
				<div className="Item">
					<button
						onClick={() =>
							this.setState((prevState) => ({
								show: !prevState.show,
							}))
						}
					>
						Transition Example
					</button>
					<Transition timeout={this.state.timer} in={this.state.show}>
						{(state) => (
							<div
								style={{
									width: 100,
									height: 100,
									margin: "auto",
									backgroundColor: "#DAA49A",
									color: "white",
									marginTop: "50px",
									padding: "10px",
									opacity: state === "exited" ? 0 : 1,
									transition: "opacity 1s ease-out",
								}}
							>
								Hi, there!
							</div>
						)}
					</Transition>
				</div>

				{/* Second Item */}
				<div className="Item">
					<button onClick={this.openModalHandler}>Open a Modal Example</button>

					<Modal show={this.state.openModal} change={this.closeModalHandler} />
				</div>
				<div className="Item">
					<Lists />
				</div>
			</div>
		);
	}
}

export default App;
