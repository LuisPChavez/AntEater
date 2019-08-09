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
          <View style={{flexDirection: "row"}}>
            <Text style={{margin: 20, flex: 2, fontSize: 18}}>Event Name</Text>
            <Text style={{flex: 1, margin: 20}}>$$</Text>
          </View>
          <Text style={{margin: 20}}>Club Name</Text>
          <Text style={{margin: 5}}>TEST</Text>
        </View>
      </View>
    );
  }
}
