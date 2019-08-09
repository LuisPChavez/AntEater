import React, {Component} from "react";
import {Text, View, TouchableOpacity} from "react-native";

export class MenuItem extends Component {
  render() {
    const {title, pricing, org, location} = this.props;
    return (
      <TouchableOpacity
        style={{
          height: 150,
          flexDirection: "row",
          borderBottomColor: "grey",
          borderBottomWidth: 0.2
        }}
      >
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
          <View
            style={{
              backgroundColor: "black",
              height: 100,
              width: 90,
              borderRadius: 10,
              shadowColor: "black",
              shadowOpacity: 0.1
            }}
          />
        </View>
        <View style={{flex: 2}}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              marginHorizontal: 20
            }}
          >
            <Text style={{flex: 2, fontSize: 22, fontWeight: "bold"}}>
              {title}
            </Text>
            <Text
              style={{
                flex: 1,
                right: 0,
                position: "absolute",
                fontSize: 16,
                color: "grey"
              }}
            >
              {pricing}
            </Text>
          </View>
          <Text
            style={{marginLeft: 20, marginTop: 10, color: "grey", fontSize: 16}}
          >
            {org}
          </Text>
          <Text
            style={{marginLeft: 20, marginTop: 20, color: "grey", fontSize: 15}}
          >
            {location}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
