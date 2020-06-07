import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Containers/Home";
import News from "./Containers/News";
import Quiz from "./Containers/Quiz";
import About from "./Containers/About";
import Libertarians from "./Containers/Libertarians";
import Library from "./Containers/Library";

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/noticias" component={News} exact />
      <Route path="/quiz" component={Quiz} exact />
      <Route path="/sobre" component={About} exact />
      <Route path="/libertarios" component={Libertarians} exact />
      <Route path="/biblioteca" component={Library} exact />
    </Switch>
  );
}

export default Routes;
