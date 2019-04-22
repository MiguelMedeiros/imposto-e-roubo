import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./Helpers/history";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Home from "./Containers/Home";
import Libertarians from "./Containers/Libertarians";
import Donation from "./Containers/Donation";
import About from "./Containers/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ffeb3b" },
    secondary: { main: "#fff" },
  },
  typography: { useNextVariants: true },
});

class App extends Component {
  constructor(props) {
    super(props);

    // ReactGA.initialize("UA-59725926-1");
    // ReactGA.pageview(window.location.pathname + window.location.search);
    // const options = {
    //   autoConfig: true, // set pixel's autoConfig
    //   debug: false, // enable logs
    // };
    // ReactPixel.init("1842096992562323", null, options);
    // ReactPixel.pageView();
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/sobre" component={About} exact />
            <Route path="/libertarios" component={Libertarians} exact />
            <Route path="/contribua" component={Donation} exact />
          </Switch>
          <Footer />
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
