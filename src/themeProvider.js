import {
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem("theme") || "medium";
	});

	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(theme));
	}, [theme]);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => {
	return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
