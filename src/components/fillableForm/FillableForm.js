import React, { Component } from "react";
import "./FillableForm.css";
import PersonalInfo from "./PersonalInfo";

export default class FillableForm extends Component {
	render() {
		const { handlePersonalChange, personalInfo } = this.props;
		return (
			<div className="fillable-form">
				<PersonalInfo
					onChange={handlePersonalChange}
					personalInfo={personalInfo}
				></PersonalInfo>
			</div>
		);
	}
}
