import React, { Component } from "react";
import "./ViewForm.css";
import ViewExperience from "./ViewExperience";
import ViewPersonal from "./ViewPersonal";
import ViewEducation from "./ViewEducation";

export default class ViewForm extends Component {
	render() {
		const { personalInfo, experience, education } = this.props;
		return (
			<div className="view-form">
				<ViewPersonal personalInfo={personalInfo}></ViewPersonal>
				{experience.length > 0 && (
					<ViewExperience experience={experience}></ViewExperience>
				)}
				{education.length > 0 && (
					<ViewEducation education={education}></ViewEducation>
				)}
			</div>
		);
	}
}
