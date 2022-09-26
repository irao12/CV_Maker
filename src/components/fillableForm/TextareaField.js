import React, { Component } from "react";

export default class TextareaField extends Component {
	render() {
		const { onChange, personalInfo } = this.props;
		return (
			<div>
				<textarea
					name={this.props.section}
					placeholder={this.props.section}
					value={personalInfo[this.props.section]}
					onChange={onChange}
					maxLength="400"
				></textarea>
			</div>
		);
	}
}
