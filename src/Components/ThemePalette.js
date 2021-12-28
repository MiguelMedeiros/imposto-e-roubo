import red from "@material-ui/core/colors/red";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { createTheme } from '@material-ui/core/styles'

let theme = createTheme({
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
        paddingLeft: 5,
        display: "inline-block",
      },
      h2: {
        color: "#f9f9f9",
        fontWeight: "bold",
        textShadow: "-5px 5px 0px #2a2a2a",
        fontFamily: "Saira Stencil One",
        fontSize: 35,
        marginBottom: 10,
      },
      h3: {
        color: "#f9f9f9",
        fontWeight: "bold",
        textShadow: "-5px 5px 0px #2a2a2a",
        fontFamily: "Saira Stencil One",
        fontSize: 25,
        marginBottom: 10,
      },
    },
  },
});

function ThemePalette(props) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default ThemePalette;
