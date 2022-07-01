import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    dark: "#212121",
    white: "#FFFFFF",
    danger: "#FF2121",
    primary: "#FF4081",
    secondary: "#512DA8",
    light_secondary: "#673AB7",
    lighter_secondary: "#D1C4E9",
    dark_grey: "#757575",
    light_grey: "#BDBDBD",
  },
  devices: {
    small: "600px",
    medium: "1200px",
    large: "1440px",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
