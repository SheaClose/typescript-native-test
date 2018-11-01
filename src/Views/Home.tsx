import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

interface State {
  name: string;
  tempName: string;
}

export default class App extends React.Component<State> {
  state: State = {
    name: "Shea",
    tempName: ""
  };
  handleChange = (e: string): void => {
    this.setState(() => ({ tempName: e }));
  };
  handleNameSubmit = () => {
    if (this.state.tempName) {
      this.setState(() => ({ name: this.state.tempName, tempName: "" }));
    }
  };
  render() {
    let { name } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.tempName}
          style={styles.textInput}
          placeholder="This is a placeholder"
          onChangeText={this.handleChange}
          onSubmitEditing={this.handleNameSubmit}
          blurOnSubmit={false}
        />
        <Text style={styles.text}>This is not a test!</Text>
        <Text style={styles.text}>Hello, {name}!</Text>
        <Button onPress={this.handleNameSubmit} title="HomeSubmit">
          <Text>Submit</Text>
        </Button>
      </View>
    );
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
