import React from "react";
import { Route, Switch } from "react-router-native";
import { Text } from "react-native";
import Home from "./Views/Home";
export default (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/About" render={props => <Text>About Route Component</Text>} />
  </Switch>
);
