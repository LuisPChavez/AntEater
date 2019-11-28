import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  Text,
  ActivityIndicator
} from "react-native";
import { MenuItem } from "../components/MenuItem";

import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

function Items(navigation) {
  const { loading, error, data } = useQuery(gql`
    {
      allOrganizations {
        name
        email
        items {
          _id
          price
          name
          description
          locationName
          coordinateX
          coordinateY
        }
      }
    }
  `);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  return data.allOrganizations.map(element => {
    return (
      <MenuItem
        title={element.name}
        org={element.org}
        key={Math.random()}
        navigation={navigation}
      ></MenuItem>
    );
  });
}
export default class ItemsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    // var data = require('../data');

    // allEvents = [];

    // data.data.map(org => {
    //   org.events.map(eventItem => <MenuItem title={eventItem.name} />);
    // });

    // for (let i = 0; i < data.data.length; ++i) {
    //   for (let j = 0; j < data.data[i].events.length; ++j) {
    //     allEvents.push(
    //       <MenuItem
    //         title={data.data[i].events[j].title}
    //         pricing={data.data[i].events[j].pricing}
    //         org={data.data[i].name}
    //         location={data.data[i].events[j].location}
    //         key={data.data[i].events[j].key}
    //       />
    //     );
    //   }
    // }

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
        <Items navigation={this.props.navigation} />
        <ScrollView style={styles.container}>
          {/* {allEvents.map(item => {
            return item;
          })} */}
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
