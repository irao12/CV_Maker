import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import "./FillableForm.css";
import PersonalInfo from "./PersonalInfo";

export default class FillableForm extends Component {
	render() {
		const {
			addNewExperience,
			personalInfo,
			handlePersonalChange,
			experience,
			handleExperienceChange,
			deleteExperience,
			education,
			addNewEducation,
			handleEducationChange,
			deleteEducation,
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
					deleteExperience={deleteExperience}
				></Experience>
				<Education
					addNewEducation={addNewEducation}
					handleEducationChange={handleEducationChange}
					deleteEducation={deleteEducation}
					education={education}
				></Education>
			</div>
		);
	}
}
