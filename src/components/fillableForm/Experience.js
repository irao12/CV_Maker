import React, { Component } from "react";
import Button from "./Button";
import ExperienceSection from "./ExperienceSection";

export default class Experience extends Component {
	render() {
		const { addNewExperience, handleExperienceChange, experience } =
			this.props;

		return (
			<section className="experience">
				<h2>Experience</h2>
				{experience.map((exp, index) => {
					return (
						<ExperienceSection
							onChange={handleExperienceChange}
							experience={exp}
							index={index}
							key={index}
						></ExperienceSection>
					);
				})}
				<Button handleClick={addNewExperience} text="Add New"></Button>
			</section>
		);
	}
}
