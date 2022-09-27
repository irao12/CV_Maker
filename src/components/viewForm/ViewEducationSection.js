import React, { Component } from "react";
import "./ViewEducationSection.css";

export default class ViewEducationSection extends Component {
	render() {
		const { education } = this.props;
		return (
			<div className="view-education-section">
				<div className="education-info">
					<div className="uni-and-program">
						<h4 className="education-university">
							{education.university}
						</h4>
						<p className="education-program">{education.program}</p>
					</div>
					<div className="education-dates">
						<p>{`${education.start} - ${education.end}`}</p>
					</div>
				</div>
				<div className="education-description">
					{education.description}
				</div>
			</div>
		);
	}
}
