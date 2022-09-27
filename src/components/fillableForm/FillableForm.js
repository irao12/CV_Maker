import React, { Component } from "react";
import Experience from "./Experience";
import "./FillableForm.css";
import PersonalInfo from "./PersonalInfo";

export default class FillableForm extends Component {
	render() {
		const {
			addNewExperience,
			handlePersonalChange,
			handleExperienceChange,
			personalInfo,
			experience,
		} = this.props;
		return (
			<div className="fillable-form">
				<PersonalInfo
					onChange={handlePersonalChange}
					personalInfo={personalInfo}
				></PersonalInfo>
				<Experience
					addNewExperience={addNewExperience}
					experience={experience}
					handleExperienceChange={handleExperienceChange}
				></Experience>
			</div>
		);
	}
}
