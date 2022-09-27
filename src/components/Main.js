import React, { Component } from "react";
import FillableForm from "./fillableForm/FillableForm";
import ViewForm from "./viewForm/ViewForm";

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			personalInfo: {
				name: "",
				title: "",
				phone: "",
				email: "",
				location: "",
				description: "",
			},
			experience: [],
			education: [],
		};

		this.handlePersonalChange = this.handlePersonalChange.bind(this);

		this.addNewExperience = this.addNewExperience.bind(this);
		this.handleExperienceChange = this.handleExperienceChange.bind(this);
		this.deleteExperience = this.deleteExperience.bind(this);

		this.addNewEducation = this.addNewEducation.bind(this);
		this.handleEducationChange = this.handleEducationChange.bind(this);
		this.deleteEducation = this.deleteEducation.bind(this);
	}

	handlePersonalChange(event) {
		const name = event.target.name;
		this.setState({
			...this.state,
			personalInfo: {
				...this.state.personalInfo,
				[name]: event.target.value,
			},
		});
	}

	addNewExperience(event) {
		this.setState({
			...this.state,
			experience: [
				...this.state.experience,
				{
					company: "",
					position: "",
					start: "",
					end: "",
					description: "",
				},
			],
		});
	}

	handleExperienceChange(event, index) {
		const name = event.target.name;
		this.setState({
			...this.state,
			experience: [
				...this.state.experience.slice(0, index),
				{
					...this.state.experience[index],
					[name]: event.target.value,
				},
				...this.state.experience.slice(index + 1),
			],
		});
	}

	deleteExperience(event, index) {
		this.setState({
			...this.state,
			experience: [
				...this.state.experience.slice(0, index),
				...this.state.experience.slice(index + 1),
			],
		});
	}

	addNewEducation(event) {
		this.setState({
			...this.state,
			education: [
				...this.state.education,
				{
					program: "",
					university: "",
					start: "",
					end: "",
					description: "",
				},
			],
		});
	}

	handleEducationChange(event, index) {
		const name = event.target.name;
		this.setState({
			...this.state,
			education: [
				...this.state.education.slice(0, index),
				{
					...this.state.education[index],
					[name]: event.target.value,
				},
				...this.state.education.slice(index + 1),
			],
		});
	}

	deleteEducation(event, index) {
		this.setState({
			...this.state,
			education: [
				...this.state.education.slice(0, index),
				...this.state.education.slice(index + 1),
			],
		});
	}

	render() {
		return (
			<main>
				<FillableForm
					addNewExperience={this.addNewExperience}
					// personalInfo
					personalInfo={this.state.personalInfo}
					handlePersonalChange={this.handlePersonalChange}
					// experience
					handleExperienceChange={this.handleExperienceChange}
					deleteExperience={this.deleteExperience}
					experience={this.state.experience}
					// education
					education={this.state.education}
					addNewEducation={this.addNewEducation}
					handleEducationChange={this.handleEducationChange}
					deleteEducation={this.deleteEducation}
				></FillableForm>
				<ViewForm
					personalInfo={this.state.personalInfo}
					experience={this.state.experience}
					education={this.state.education}
				></ViewForm>
			</main>
		);
	}
}
