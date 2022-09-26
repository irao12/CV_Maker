import React, { Component } from "react";
import "./ViewPersonal.css";
import phoneIcon from "../../phone.svg";
import emailIcon from "../../email.svg";
import locationIcon from "../../location.svg";

export default class ViewPersonal extends Component {
	render() {
		const { personalInfo } = this.props;
		console.log(personalInfo);
		return (
			<>
				<section className="personal-info">
					<div className="intro">
						<h2 className="name">{personalInfo.name}</h2>
						<h3 className="title">{personalInfo.title}</h3>
					</div>
					<div className="contact-info">
						<div className="phone-section contact-section">
							<img src={phoneIcon} alt="phone" />
							<p className="phone-number">{personalInfo.phone}</p>
						</div>
						<div className="email-section contact-section">
							<img src={emailIcon} alt="email" />
							<p className="email">{personalInfo.email}</p>
						</div>
						<div className="location-section contact-section">
							<img src={locationIcon} alt="location" />
							<p className="location">{personalInfo.location}</p>
						</div>
					</div>
				</section>

				<div className="line-break"></div>

				<div className="description">
					<p className="location">{personalInfo.description}</p>
				</div>
			</>
		);
	}
}
