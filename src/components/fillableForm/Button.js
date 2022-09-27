import React, { Component } from "react";
import "./Button.css";

export default class Button extends Component {
	render() {
		const { handleClick, text, className } = this.props;

		return (
			<button
				className={className ? className : ""}
				onClick={handleClick}
			>
				{text}
			</button>
		);
	}
}
