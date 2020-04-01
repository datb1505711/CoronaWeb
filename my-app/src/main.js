import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./page/login/login";
import HomePage from "./page/home/home";

class MainRoute extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default MainRoute;
