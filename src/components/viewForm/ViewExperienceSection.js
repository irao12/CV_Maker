import React, { Component } from "react";
import "./ViewExperienceSection.css";

export default class hi extends Component {
	render() {
		const { experience } = this.props;
		return (
			<div className="view-experience-section">
				<div className="experience-heading">
					<div className="position-company">
						<h4 className="experience-position">
							{experience.position}
						</h4>
						<p className="experience-company">
							{" "}
							{experience.company}
						</p>
					</div>
					<div className="experience-dates">
						<p>{`${experience.start} - ${experience.end}`}</p>
					</div>
				</div>
				<div className="experience-description">
					{experience.description}
				</div>
			</div>
		);
	}
}
