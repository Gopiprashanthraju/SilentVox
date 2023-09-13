import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
const theme = {
  paddings: {
    small: "1rem",
    medium: "1.25rem",
    large: "1.5rem",
  },
  fonts: {
    title: "Roboto, sans-serif",
    navlink: "Roboto, sans-serif",
    text: "Montserrat, sans-serif",
  },
  fontSizes: {
    small: "1rem",
    medium: "1.25rem",
    large: "1.5rem",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    bold: 700,
  },
  lineHeights: {
    small: "1rem",
    medium: "1.25rem",
    large: "1.5rem",
  },
  spacings: {
    small: "1rem",
    medium: "1.25rem",
    large: "1.5rem",
  },
  borderRadius: {
    small: "0.5rem",
    medium: "1rem",
    large: "2rem",
  },
};
const darkTheme = {
  colors: {
    primary: "#ff7ac6",
    secondary: "#bf95f9",
    accent: "#ffb86b",
    neutral: "#414558",
    info: "#8be8fd",
    base: "#272935",
    success: "#52fa7c",
    warning: "#f1fa89",
    error: "#ff5757",
  },
  ...theme,
};
const lightTheme = {
  colors: {
    primary: "#65c3c8",
    secondary: "#ef9fbc",
    accent: "#eeaf3a",
    neutral: "#291334",
    base: "#faf7f5",
    info: "#3abff8",
    success: "#36d399",
    warning: "#fbbd23",
    error: "#f87272",
  },
  ...theme,
};
function App() {
  return (
    <>
      <ThemeProvider
        theme={
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? darkTheme
            : lightTheme
        }
      >
        <Navbar />
      </ThemeProvider>
    </>
  );
}
export default App;
