import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  Text
} from "react-native";
import {MenuItem} from "../components/MenuItem";

export default class ItemsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: "#E8E8E8"}}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Avenir Next",
            fontWeight: "600",
            marginLeft: 40,
            marginTop: 20
          }}
        >
          Items
        </Text>
        {/* <View style={{justifyContent: "center", alignItems: "center"}}>
          <TextInput
            style={{
              width: 270,
              height: 50,
              borderWidth: 0.1,
              borderColor: "black",
              marginTop: 15,
              padding: 10,
              backgroundColor: "white",
              borderRadius: 14,
              fontFamily: "Avenir Next",
              fontSize: 20
            }}
            placeholder="  Search"
            clearButtonMode="always"
          />
        </View> */}
        <ScrollView style={styles.container}>
          <MenuItem
            title={"5$ Banh Mi"}
            pricing={"$"}
            org={"ASUCI"}
            location={"Ring Road"}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  }
});
