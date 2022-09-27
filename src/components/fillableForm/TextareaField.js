import React, { Component } from "react";
import "./TextareaField.css";

export default class TextareaField extends Component {
	render() {
		const { onChange, value } = this.props;
		return (
			<div>
				<textarea
					name={this.props.section}
					placeholder={this.props.section}
					value={value}
					onChange={onChange}
					maxLength="400"
				></textarea>
			</div>
		);
	}
}
