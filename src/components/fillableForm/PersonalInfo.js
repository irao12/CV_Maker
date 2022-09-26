import React, { Component } from "react";
import InputField from "./InputField";
import TextareaField from "./TextareaField";

export default class PersonalInfo extends Component {
	render() {
		const { onChange, personalInfo } = this.props;
		return (
			<section className="personal-info">
				<h2>Personal Information</h2>
				<InputField
					section="name"
					onChange={onChange}
					personalInfo={personalInfo}
				></InputField>
				<InputField
					section="title"
					onChange={onChange}
					personalInfo={personalInfo}
				></InputField>
				<InputField
					section="phone"
					onChange={onChange}
					personalInfo={personalInfo}
				></InputField>
				<InputField
					section="email"
					onChange={onChange}
					personalInfo={personalInfo}
				></InputField>
				<InputField
					section="location"
					onChange={onChange}
					personalInfo={personalInfo}
				></InputField>
				<TextareaField
					section="description"
					onChange={onChange}
					personalInfo={personalInfo}
				></TextareaField>
			</section>
		);
	}
}
