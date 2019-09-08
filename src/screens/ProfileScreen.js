import React, { PureComponent } from "react";
import { Text, View, SafeAreaView } from "react-native";

export default class ProfileScreen extends PureComponent {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#DEE2E2" }}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Avenir Next",
            fontWeight: "600",
            marginLeft: 40,
            marginTop: 20
          }}
        >
          Profile
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              width: 150,
              height: 150,
              backgroundColor: "red",
              borderRadius: 100,
              marginTop: 40
            }}
          />
          <Text
            style={{
              fontSize: 22,
              fontFamily: "Avenir Next",
              fontWeight: "600",
              marginTop: 15
            }}
          >
            Organization Name
          </Text>
          <Text
            style={{
              marginTop: 50,
              fontFamily: "Avenir Next",
              fontSize: 20,
              fontWeight: "500"
            }}
          >
            Sign In
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}
