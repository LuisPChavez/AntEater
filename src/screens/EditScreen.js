import React, { PureComponent } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";

export default class EditScreen extends PureComponent {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ backgroundColor: "#DEE2E2", flex: 1 }}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Avenir Next",
            fontWeight: "600",
            marginLeft: 40,
            marginTop: 20
          }}
        >
          Edit Items
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: Dimensions.get("window").width - 100,
              margin: 10
            }}
          >
            <Text> Title </Text>
            <TextInput
              defaultValue={navigation.state.params.title}
              style={{ height: 30, width: 200, backgroundColor: "#CDD8D8" }}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: Dimensions.get("window").width - 100,
              margin: 10
            }}
          >
            <Text> Location </Text>
            <TextInput
              defaultValue={navigation.state.params.location}
              style={{ height: 30, width: 200, backgroundColor: "#CDD8D8" }}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: Dimensions.get("window").width - 100,
              margin: 10
            }}
          >
            <Text> Date </Text>
            <TextInput
              style={{ height: 30, width: 200, backgroundColor: "#CDD8D8" }}
            ></TextInput>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: Dimensions.get("window").width - 100,
              margin: 10
            }}
          >
            <Text> Price </Text>
            <TextInput
              defaultValue={navigation.state.params.price}
              style={{ height: 30, width: 200, backgroundColor: "#CDD8D8" }}
            ></TextInput>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#CDD8D8",
              height: 30,
              width: 100,
              alignItems: "center",
              justifyContent: "center",
              margin: 10,
              marginTop: 30
            }}
          >
            <Text>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#CDD8D8",
              height: 30,
              width: 100,
              alignItems: "center",
              justifyContent: "center",
              margin: 10
            }}
          >
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
