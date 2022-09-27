import React, { Component } from "react";
import InputField from "./InputField";
import "./ExperienceSection.css";
import Button from "./Button";

export default class ExperienceSection extends Component {
	render() {
		const { experience, onChange, deleteExperience, index } = this.props;

		return (
			<div className="experience-section">
				<p>{`Experience ${index + 1}`}</p>
				<InputField
					onChange={(event) => {
						onChange(event, index);
					}}
					section="company"
					value={experience.company}
				></InputField>
				<InputField
					onChange={(event) => {
						onChange(event, index);
					}}
					section="position"
					value={experience.position}
				></InputField>
				<InputField
					onChange={(event) => {
						onChange(event, index);
					}}
					section="start"
					value={experience.start}
				></InputField>
				<InputField
					onChange={(event) => {
						onChange(event, index);
					}}
					section="end"
					value={experience.end}
				></InputField>
				<InputField
					onChange={(event) => {
						onChange(event, index);
					}}
					section="description"
					value={experience.description}
				></InputField>
				<Button
					handleClick={(event) => deleteExperience(event, index)}
					className="delete-button"
					text="delete"
				></Button>
			</div>
		);
	}
}
