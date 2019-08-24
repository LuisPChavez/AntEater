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

import {useQuery} from "@apollo/react-hooks";
import {gql} from "apollo-boost";

function Items() {
  const {loading, error, data} = useQuery(gql`
    {
      allOrganizations {
        name
        email
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);
}

export default class ItemsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    Items();
    var data = require("../data");

    allEvents = [];

    data.data.map(org => {
      org.events.map(eventItem => <MenuItem title={eventItem.name} />);
    });

    for (let i = 0; i < data.data.length; ++i) {
      for (let j = 0; j < data.data[i].events.length; ++j) {
        allEvents.push(
          <MenuItem
            title={data.data[i].events[j].title}
            pricing={data.data[i].events[j].pricing}
            org={data.data[i].name}
            location={data.data[i].events[j].location}
            key={data.data[i].events[j].key}
          />
        );
      }
    }
    console.log(allEvents);

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: "#DEE2E2"}}>
        <Text
          style={{
            fontSize: 28,
            fontFamily: "Avenir Next",
            fontWeight: "600",
            marginLeft: 40,
            marginTop: 20
          }}
        >
          Events
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
          {allEvents.map(item => {
            return item;
          })}
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
