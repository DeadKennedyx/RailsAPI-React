import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Vehicle from "../components/Vehicle";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Vehicle} />
    </Switch>
  </Router>
);
