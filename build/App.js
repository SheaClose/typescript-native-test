import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link, NativeRouter } from "react-router-native";
import routes from "./routes";
class App extends React.Component {
    render() {
        return (React.createElement(NativeRouter, null,
            React.createElement(View, { style: style.app },
                React.createElement(View, { style: style.container },
                    React.createElement(Link, { underlayColor: "#f0f4f7", to: "/" },
                        React.createElement(Text, { style: style.fonts }, "Home")),
                    React.createElement(Link, { underlayColor: "#f0f4f7", to: "/About" },
                        React.createElement(Text, { style: style.fonts }, "About"))),
                React.createElement(View, null, routes))));
    }
}
export default App;
const style = StyleSheet.create({
    app: {
        height: "100%",
        backgroundColor: "#c0ffee"
    },
    container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 30
    },
    fonts: {
        fontSize: 20
    }
});
//# sourceMappingURL=App.js.map