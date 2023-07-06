import React from "react";
import Logo from "../assets/logo.png";

export const Header = () => {
	return (
		<header className="header">
			<div className="logo flex-container">
				<img src={Logo} alt="logo" />
				<h2>Taskmate</h2>
			</div>

			<div className="themeSelector flex-container">
				<span className="light"></span>
				<span className="medium"></span>
				<span className="dark"></span>
				<span className="gOne"></span>
				<span className="gTwo"></span>
				<span className="gThree"></span>
			</div>
		</header>
	);
};
