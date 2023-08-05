import React from "react";
import Logo from "../assets/logo.png";

export const Header = ({ children, theme, setTheme }) => {
	return (
		<header className="header">
			<div className="logo flex-container">
				<img src={Logo} alt="logo" />
				<h2>{children}</h2>
			</div>

			<div className="themeSelector flex-container">
				<span
					className={
						theme === "light"
							? "light activeTheme"
							: "light"
					}
					onClick={() => setTheme("light")}
				></span>
				<span
					className={
						theme === "medium"
							? "medium activeTheme"
							: "medium"
					}
					onClick={() => setTheme("medium")}
				></span>
				<span
					className={
						theme === "dark" ? "dark activeTheme" : "dark"
					}
					onClick={() => setTheme("dark")}
				></span>
				<span
					className={
						theme === "gradientOne"
							? "gradientOne activeTheme"
							: "gradientOne"
					}
					onClick={() => setTheme("gradientOne")}
				></span>
				<span
					className={
						theme === "gradientTwo"
							? "gradientTwo activeTheme"
							: "gradientTwo"
					}
					onClick={() => setTheme("gradientTwo")}
				></span>
				<span
					className={
						theme === "gradientThree"
							? "gradientThree activeTheme"
							: "gradientThree"
					}
					onClick={() => setTheme("gradientThree")}
				></span>
			</div>
		</header>
	);
};
