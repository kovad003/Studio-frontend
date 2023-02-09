import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	*, *::before, *::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html, body {
		font-family: 'Lexend', sans-serif;
	}

	a{
		text-decoration: none;
	}
`;

export default GlobalStyles;
