import MainTabNavigator from "./src/navigation/MainTabNavigator";
import React, { Component } from "react";

import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import * as Font from "expo-font";

const client = new ApolloClient({
  uri: "http://174.77.34.4:4000"
});

class App extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      "Avenir Next": require("./src/assets/fonts/AvenirNext-Regular.ttf")
    });
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <MainTabNavigator />
      </ApolloProvider>
    );
  }
}

export default App;
