import { Box } from "@material-ui/core";
// import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Router } from "react-router-dom";

import Header from "./Components/Header";
import ThemePalette from "./Components/ThemePalette";
import history from "./Helpers/history";
import Routes from "./routes";

const useStyles = makeStyles((theme) => ({
  app: {
    minWidth: "320px",
    fontFamily: "Montserrat",
    fontWeight: 300,
    background: "#181818",
    minHeight: "100vh",
  },
  appContainer: {
    padding: "30px 0px",
    color: "#fff",
  },
  offset: theme.mixins.toolbar,
}));

function App(props) {
  const classes = useStyles();

  const startAnalytics = () => {
    ReactGA.initialize("UA-138744306-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  };

  useEffect(() => {
    startAnalytics();
  }, []);

  return (
    <div className={classes.app}>
      <CssBaseline />
      <ThemePalette props={props}>
        <Router history={history}>
          <Header />
          <div className={classes.offset} />
          <Box className={classes.appContainer}>
            <Routes />
          </Box>
        </Router>
      </ThemePalette>
    </div>
  );
}

export default App;
