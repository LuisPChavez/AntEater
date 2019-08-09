import React, {Component} from "react";
import {Text, View} from "react-native";

export class MenuItem extends Component {
  render() {
    const {color} = this.props;
    return (
      <View
        style={{
          backgroundColor: "grey",
          height: 150,
          flexDirection: "row"
        }}
      >
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <View
            style={{
              backgroundColor: "red",
              height: 100,
              width: 100,
              borderRadius: 10
            }}
          />
        </View>
        <View style={{flex: 2}}>
          <Text>Part 2</Text>
        </View>
      </View>
    );
  }
}
