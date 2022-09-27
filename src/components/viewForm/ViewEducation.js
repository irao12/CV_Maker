import React, { Component } from "react";
import "./ViewEducation.css";
import ViewEducationSection from "./ViewEducationSection";

export default class ViewEducation extends Component {
	render() {
		const { education } = this.props;
		return (
			<section className="view-education">
				<h3 className="education-header">Education</h3>
				{education.map((edu, index) => (
					<ViewEducationSection
						education={edu}
						key={index}
					></ViewEducationSection>
				))}
			</section>
		);
	}
}
