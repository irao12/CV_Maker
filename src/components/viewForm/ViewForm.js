import React, { Component } from "react";
import "./ViewForm.css";
import ViewPersonal from "./ViewPersonal";

export default class ViewForm extends Component {
	render() {
		const { personalInfo } = this.props;
		return (
			<div className="view-form">
				<ViewPersonal personalInfo={personalInfo}></ViewPersonal>
			</div>
		);
	}
}
