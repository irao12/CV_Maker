import React, { Component } from "react";
import "./ViewPersonal.css";
import phoneIcon from "../../phone.svg";
import emailIcon from "../../email.svg";
import locationIcon from "../../location.svg";
import ContactSection from "./ContactSection";

export default class ViewPersonal extends Component {
	render() {
		const { personalInfo } = this.props;
		return (
			<>
				<section className="personal-info">
					<div className="intro">
						<h2 className="name">{personalInfo.name}</h2>
						<h3 className="title">{personalInfo.title}</h3>
					</div>
					<div className="contact-info">
						<ContactSection
							icon={phoneIcon}
							sectionName="phone"
							text={personalInfo.phone}
						></ContactSection>

						<ContactSection
							icon={emailIcon}
							sectionName="email"
							text={personalInfo.email}
						></ContactSection>

						<ContactSection
							icon={locationIcon}
							sectionName="location"
							text={personalInfo.location}
						></ContactSection>
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
