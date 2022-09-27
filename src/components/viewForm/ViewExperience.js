import React, { Component } from "react";
import ViewExperienceSection from "./ViewExperienceSection";
import "./ViewExperience.css";

export default class ViewExperience extends Component {
	render() {
		const { experience } = this.props;
		return (
			<section className="view-experience">
				<h3 className="experience-header">Experience</h3>
				{experience.map((exp, index) => (
					<ViewExperienceSection
						experience={exp}
						key={index}
					></ViewExperienceSection>
				))}
			</section>
		);
	}
}
