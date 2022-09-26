import React, { Component } from "react";

export default class InputField extends Component {
	render() {
		const { onChange, personalInfo } = this.props;
		return (
			<div>
				<input
					type="text"
					name={this.props.section}
					placeholder={this.props.section}
					value={personalInfo[this.props.section]}
					onChange={onChange}
				></input>
			</div>
		);
	}
}
