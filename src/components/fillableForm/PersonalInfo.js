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
					value={personalInfo.name}
				></InputField>
				<InputField
					section="title"
					onChange={onChange}
					value={personalInfo.title}
				></InputField>
				<InputField
					section="phone"
					onChange={onChange}
					value={personalInfo.phone}
				></InputField>
				<InputField
					section="email"
					onChange={onChange}
					value={personalInfo.email}
				></InputField>
				<InputField
					section="location"
					onChange={onChange}
					value={personalInfo.location}
				></InputField>
				<TextareaField
					section="description"
					onChange={onChange}
					value={personalInfo.description}
				></TextareaField>
			</section>
		);
	}
}
