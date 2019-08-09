import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {MenuItem} from "../components/MenuItem";

export default class LinksScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <MenuItem />
      </ScrollView>
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
