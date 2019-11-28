import React, { PureComponent, useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { useQuery, useMutation } from "@apollo/react-hooks";
import ApolloClient, { gql } from "apollo-boost";
import { Query } from "react-apollo";

function Items() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [addItemToOrganization, { loading, error, data }] = useMutation(gql`
    mutation(
      $organizationId: String!
      $coordinateX: Float!
      $coordinateY: Float!
      $price: Int!
      $name: String!
      $description: String
      $locationName: String
    ) {
      addItemToOrganization(
        organizationId: $organizationId
        coordinateX: $coordinateX
        coordinateY: $coordinateY
        price: $price
        name: $name
        description: $description
        locationName: $locationName
      ) {
        name
        coordinateX
        price
      }
    }
  `);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

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
        Add Items
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
            onChangeText={evt => setTitle(evt)}
            value={title}
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
            value={location}
            onChangeText={evt => setLocation(evt)}
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
            value={date}
            onChangeText={evt => setDate(evt)}
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
            value={price}
            onChangeText={evt => setPrice(evt)}
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
          <Text> Description </Text>
          <TextInput
            value={description}
            onChangeText={evt => setDescription(evt)}
            style={{ height: 30, width: 200, backgroundColor: "#CDD8D8" }}
          ></TextInput>
        </View>

        <TouchableOpacity
          onPress={() =>
            addItemToOrganization({
              variables: {
                organizationId: "5d747f60b8c7d724bc344a59",
                coordinateY: 4.1205,
                coordinateX: 1.1205,
                price: parseInt(price),
                name: title,
                description: description,
                locationName: location
              }
            })
          }
          style={{
            backgroundColor: "#CDD8D8",
            height: 30,
            width: 100,
            alignItems: "center",
            justifyContent: "center",
            margin: 30
          }}
        >
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default class AddItemsScreen extends PureComponent {
  render() {
    return <Items></Items>;
  }
}
