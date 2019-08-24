import MainTabNavigator from "./src/navigation/MainTabNavigator";
import React, {Component} from "react";

import ApolloClient, {gql} from "apollo-boost";
import {ApolloProvider} from "@apollo/react-hooks";

const client = new ApolloClient({
  uri: "http://192.168.1.149:4000"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <MainTabNavigator />
      </ApolloProvider>
    );
  }
}

export default App;
