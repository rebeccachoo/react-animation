import React, { Component } from "react";
import "./App.css";
import Transition from "react-transition-group/Transition";

class App extends Component {
	state = { show: false, timer: 500 };
	render() {
		return (
			<div className="App">
				<button
					onClick={() =>
						this.setState((prevState) => ({
							show: !prevState.show,
						}))
					}
				>
					Show it
				</button>
				<Transition timeout={this.state.timer} in={this.state.show}>
					{(state) => (
						<div
							style={{
								width: 100,
								height: 100,
								margin: "auto",
								backgroundColor: "purple",
								color: "white",
								marginTop: "50px",
								opacity: state === "exited" ? 0 : 1,
								transition: "opacity 1s ease-out",
							}}
						>
							Hi, there!
						</div>
					)}
				</Transition>
			</div>
		);
	}
}

export default App;
