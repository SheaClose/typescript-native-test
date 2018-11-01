import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link, NativeRouter } from "react-router-native";
import routes from "./routes";

class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={style.app}>
          <View style={style.container}>
            <Link underlayColor="#f0f4f7" to="/">
              <Text style={style.fonts}>Home</Text>
            </Link>
            <Link underlayColor="#f0f4f7" to="/About">
              <Text style={style.fonts}>About</Text>
            </Link>
          </View>
          <View>{routes}</View>
        </View>
      </NativeRouter>
    );
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
