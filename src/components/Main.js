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

	render() {
		return (
			<main>
				<FillableForm
					addNewExperience={this.addNewExperience}
					handlePersonalChange={this.handlePersonalChange}
					handleExperienceChange={this.handleExperienceChange}
					deleteExperience={this.deleteExperience}
					personalInfo={this.state.personalInfo}
					experience={this.state.experience}
				></FillableForm>
				<ViewForm personalInfo={this.state.personalInfo}></ViewForm>
			</main>
		);
	}
}
