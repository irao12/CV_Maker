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
				locaiton: "",
				description: "",
			},
		};

		this.handlePersonalChange = this.handlePersonalChange.bind(this);
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

	render() {
		return (
			<main>
				<FillableForm
					handlePersonalChange={this.handlePersonalChange}
					personalInfo={this.state.personalInfo}
				></FillableForm>
				<ViewForm personalInfo={this.state.personalInfo}></ViewForm>
			</main>
		);
	}
}
