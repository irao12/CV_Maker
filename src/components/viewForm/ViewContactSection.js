import React, { Component } from "react";
import "./ViewContactSection.css";

export default class ContactSection extends Component {
	render() {
		const { icon, sectionName, text } = this.props;

		return (
			<div className={`${sectionName}-section contact-section`}>
				<img src={icon} alt={sectionName} />
				<p className={sectionName}>{text}</p>
			</div>
		);
	}
}
