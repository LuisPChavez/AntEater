import MainTabNavigator from "./src/navigation/MainTabNavigator";
import React, { Component } from "react";

import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import * as Font from "expo-font";
import EditScreen from "./src/screens/EditScreen";
import AddItemsScreen from "./src/screens/AddItemsScreen";
import { createAppContainer, createStackNavigator } from "react-navigation";

const client = new ApolloClient({
  uri: "http://192.168.1.149:4000"
});

class App extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      "Avenir Next": require("./src/assets/fonts/AvenirNext-Regular.ttf")
    });
  }

  render() {
    const StackNav = createAppContainer(
      createStackNavigator({
        Main: MainTabNavigator,
        Edit: EditScreen,
        AddItems: AddItemsScreen
      })
    );
    return (
      <ApolloProvider client={client}>
        <StackNav />
      </ApolloProvider>
    );
  }
}

export default App;
