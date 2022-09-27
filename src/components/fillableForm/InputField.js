import React, { Component } from "react";
import "./InputField.css";

export default class InputField extends Component {
	render() {
		const { onChange, value, section } = this.props;
		return (
			<div>
				<input
					type="text"
					name={section}
					placeholder={section}
					value={value}
					onChange={onChange}
				></input>
			</div>
		);
	}
}
