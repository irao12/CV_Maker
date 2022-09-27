import React, { Component } from "react";
import InputField from "./InputField";
import Button from "./Button";
import TextareaField from "./TextareaField";

export default class EducationSection extends Component {
	render() {
		const { education, index, onChange, deleteEducation } = this.props;

		return (
			<div className="education-section">
				<p>{`Education ${index + 1}`}</p>
				<InputField
					onChange={(event) => {
						onChange(event, index);
					}}
					section="program"
					value={education.program}
				></InputField>
				<InputField
					onChange={(event) => {
						onChange(event, index);
					}}
					section="university"
					value={education.university}
				></InputField>
				<InputField
					onChange={(event) => {
						onChange(event, index);
					}}
					section="start"
					value={education.start}
				></InputField>
				<InputField
					onChange={(event) => {
						onChange(event, index);
					}}
					section="end"
					value={education.end}
				></InputField>
				<TextareaField
					onChange={(event) => {
						onChange(event, index);
					}}
					section="description"
					value={education.description}
				></TextareaField>
				<Button
					handleClick={(event) => deleteEducation(event, index)}
					className="delete-button"
					text="delete"
				></Button>
			</div>
		);
	}
}
