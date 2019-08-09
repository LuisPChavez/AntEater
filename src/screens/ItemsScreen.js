import React from "react";
import {ScrollView, StyleSheet, View, TextInput} from "react-native";
import {MenuItem} from "../components/MenuItem";

export default class ItemsScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "#FCFCFC"}}>
        <View style={{justifyContent: "center", alignItems: "center"}}>
          <TextInput
            style={{
              width: 270,
              height: 50,
              borderWidth: 0.2,
              borderColor: "black",
              marginTop: 15,
              padding: 10,
              fontSize: 17
            }}
            placeholder="🔍  Search"
            clearButtonMode="always"
          />
        </View>
        <ScrollView style={styles.container}>
          <MenuItem
            title={"5$ Banh Mi"}
            pricing={"$"}
            org={"ASUCI"}
            location={"Ring Road"}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15
  }
});
