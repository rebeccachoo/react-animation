import React, { Component } from "react";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CSSTransition from "react-transition-group/CSSTransition";
import "./Lists.css";

// TransitionGroup needs to work with CSSTransition

class Lists extends Component {
	state = {
		lists: [1, 2, 3, 4, 5, 6, 7, 8],
	};
	addListHandler = () => {
		this.setState((prevState) => {
			return {
				lists: prevState.lists.concat(prevState.lists.length + 1),
			};
		});
	};
	removeListHandler = (index) => {
		this.setState((prevState) => {
			return {
				lists: prevState.lists.filter((list, listIndex) => index !== listIndex),
			};
		});
	};

	render() {
		const showList = this.state.lists.map((item, index) => (
			<CSSTransition key={index} classNames="fadeout" timeout={300}>
				<li className="ListItem" onClick={() => this.removeListHandler(index)}>
					{item}
				</li>
			</CSSTransition>
		));

		return (
			<div>
				<div>
					<button onClick={this.addListHandler}>Add Item</button>
				</div>
				<br />
				<div>Click Item to Remove.</div>
				<TransitionGroup component="ul" className="Lists">
					{showList}
				</TransitionGroup>
			</div>
		);
	}
}

export default Lists;
