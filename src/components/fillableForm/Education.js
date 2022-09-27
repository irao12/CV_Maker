import React, { Component } from "react";
import Button from "./Button";
import EducationSection from "./EducationSection";
import "./EducationSection.css";

export default class Education extends Component {
	render() {
		const {
			addNewEducation,
			handleEducationChange,
			deleteEducation,
			education,
		} = this.props;
		return (
			<section className="education">
				<h2>Education</h2>
				{education.map((edu, index) => (
					<EducationSection
						index={index}
						education={edu}
						onChange={handleEducationChange}
						deleteEducation={deleteEducation}
					></EducationSection>
				))}
				<Button handleClick={addNewEducation} text="Add New"></Button>
			</section>
		);
	}
}
