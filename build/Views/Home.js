import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            name: "Shea",
            tempName: ""
        };
        this.handleChange = (e) => {
            this.setState(() => ({ tempName: e }));
        };
        this.handleNameSubmit = () => {
            if (this.state.tempName) {
                this.setState(() => ({ name: this.state.tempName, tempName: "" }));
            }
        };
    }
    render() {
        let { name } = this.state;
        return (React.createElement(View, { style: styles.container },
            React.createElement(TextInput, { value: this.state.tempName, style: styles.textInput, placeholder: "This is a placeholder", onChangeText: this.handleChange, onSubmitEditing: this.handleNameSubmit, blurOnSubmit: false }),
            React.createElement(Text, { style: styles.text }, "This is not a test!"),
            React.createElement(Text, { style: styles.text },
                "Hello, ",
                name,
                "!"),
            React.createElement(Button, { onPress: this.handleNameSubmit, title: "HomeSubmit" },
                React.createElement(Text, null, "Submit"))));
    }
}
const styles = StyleSheet.create({
    textInput: {
        width: "75%"
    },
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c0ffee",
        width: "100%",
        height: "100%"
    },
    text: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    }
});
//# sourceMappingURL=Home.js.map