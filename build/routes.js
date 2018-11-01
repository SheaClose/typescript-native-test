import React from "react";
import { Route, Switch } from "react-router-native";
import { Text } from "react-native";
import Home from "./Views/Home";
export default (React.createElement(Switch, null,
    React.createElement(Route, { path: "/", exact: true, component: Home }),
    React.createElement(Route, { path: "/About", render: props => React.createElement(Text, null, "About Route Component") })));
//# sourceMappingURL=routes.js.map