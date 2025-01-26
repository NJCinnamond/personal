import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{`
									I’m Nathan, a software engineer with full stack web and embedded systems development experience across multiple industries and disciplines. Currently, I’m working at Belfry Software to empower the security guard services industry to better manage their services, employees and clients through dedicated web and mobile platforms. Please reach out if you’d like to join us! 
									
									Outside of work, I push myself to explore new technologies and frameworks through side projects and community engagement. Most recently, I have been exploring web3 platforms as a democratic and privacy-preserving alternative to existing web paradigms. My sports platform, FanRise, offers FanDuel-like betting features exclusively on Ethereum, bringing the trust attributes of blockchain and oracles to a mature market.

									While I’ll be giving an account of my technical development on this website, I also plan to cover other areas of interest, such as book and TV show reviews and possibly even sports commentary, if anything to simply prove to my friends that I do indeed have a life outside of work!

									Hope you enjoy reading whatever it is that I post here. I would ask for feedback but I haven’t build the comments feature yet, so just DM I guess 

									Nathan
									`}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="/about.jpeg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
