import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {MenuItem} from "../components/MenuItem";

export default class LinksScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{justifyContent: "center", alignItems: "center"}}>
          <View
            style={{
              backgroundColor: "grey",
              width: 270,
              height: 50,
              borderWidth: 0.2,
              borderColor: "black",
              marginTop: 15
            }}
          />
        </View>
        <ScrollView style={styles.container}>
          <MenuItem />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
