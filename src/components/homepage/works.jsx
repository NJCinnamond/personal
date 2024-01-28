import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./belfry.png"
								alt="belfry"
								className="work-image"
							/>
							<div className="work-title">Belfry</div>
							<div className="work-subtitle">
								Senior Software Engineer
							</div>
							<div className="work-duration">2023 -</div>
						</div>

						<div className="work">
							<img
								src="./gs.png"
								alt="goldmansachs"
								className="work-image"
							/>
							<div className="work-title">Goldman Sachs</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2021 - 2023</div>
						</div>

						<div className="work">
							<img
								src="./thoughtmachine.jpg"
								alt="thoughtmachine"
								className="work-image"
							/>
							<div className="work-title">Thought Machine</div>
							<div className="work-subtitle">
								Backend Engineer
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
