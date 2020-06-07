import red from "@material-ui/core/colors/red";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#202020",
    },
    secondary: {
      main: "#f3c011",
    },
    error: {
      main: red[500],
    },
  },
  overrides: {
    MuiStepContent: {
      root: {
        paddingLeft: 10,
      },
      last: {
        marginLeft: 0,
      },
    },
    MuiTypography: {
      h1: {
        color: "#f9f9f9",
        fontWeight: "bold",
        textShadow: "-5px 5px 0px #2a2a2a",
        fontFamily: "Saira Stencil One",
        fontSize: 45,
        marginBottom: 10,
      },
      h2: {
        color: "#f9f9f9",
        fontWeight: "bold",
        textShadow: "-5px 5px 0px #2a2a2a",
        fontFamily: "Saira Stencil One",
        fontSize: 35,
        marginBottom: 10,
      },
    },
  },
});

function ThemePalette(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default ThemePalette;
