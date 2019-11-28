import React, { PureComponent } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { MenuItem } from "../components/MenuItem";

function Items() {
  const { loading, error, data } = useQuery(
    gql`
      query($organizationId: String!) {
        getAllItemsFromOneOrganization(organizationId: $organizationId) {
          name
          price
          coordinateX
          coordinateY
          description
          locationName
        }
      }
    `,
    {
      variables: {
        organizationId: "5d747f60b8c7d724bc344a59"
      }
    }
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error :(</Text>;

  console.log(data.getAllItemsFromOneOrganization);
  return data.getAllItemsFromOneOrganization.map(item => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.locationName}</Text>
        <Text>{item.price}</Text>
        <Text>{item.coordinateX}</Text>
        <Text>{item.coordinateY}</Text>
      </View>
    );
  });
}

export default class ProfileScreen extends PureComponent {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      email: "",
      password: "",
      orgName: "",
      onSelect: false
    };
  }

  signOut = () => {
    this.setState({ signedIn: false });
  };
  signIn = () => {
    //check db if credentials exist and match
    var data = require("../data");

    data.data.forEach(element => {
      if (this.state.email === element.email) {
        if (this.state.password === element.password) {
          this.setState({ signedIn: "true", orgName: element.name });
        }
      }
    });
  };

  render() {
    if (!this.state.signedIn)
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
            Profile
          </Text>
          <View
            style={{
              flexDirection: "row",
              margin: 20,
              justifyContent: "space-between"
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Avenir Next",
                fontWeight: "500",
                margin: 6
              }}
            >
              Email
            </Text>
            <TextInput
              clearButtonMode={"always"}
              style={{ backgroundColor: "white", width: 200 }}
              returnKeyType={"next"}
              blurOnSubmit={false}
              onSubmitEditing={() => {
                this.password.focus();
              }}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              textContentType={"emailAddress"}
              autoCompleteType={"email"}
              keyboardType={"email-address"}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              margin: 20,
              justifyContent: "space-between"
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Avenir Next",
                fontWeight: "500",
                margin: 6
              }}
            >
              Password
            </Text>
            <TextInput
              autoCompleteType={"password"}
              secureTextEntry
              textContentType={"password"}
              clearButtonMode={"always"}
              style={{ backgroundColor: "white", width: 200 }}
              ref={input => {
                this.password = input;
              }}
              onSubmitEditing={() => {
                this.signIn(this.state.email, this.state.password);
              }}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            ></TextInput>
          </View>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={this.signIn}
          >
            <Text
              style={{
                marginTop: 50,
                fontFamily: "Avenir Next",
                fontSize: 20,
                fontWeight: "500"
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ alignItems: "center" }}
            onPress={() => alert("create an account pressed")}
          >
            <Text
              style={{
                marginTop: 50,
                fontFamily: "Avenir Next",
                fontSize: 20,
                fontWeight: "500"
              }}
            >
              Create an Account
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      );
    else {
      return (
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: "#DEE2E2"
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontSize: 28,
                fontFamily: "Avenir Next",
                fontWeight: "600",
                marginLeft: 40,
                marginTop: 20
              }}
            >
              Profile
            </Text>
            <TouchableOpacity
              onPress={this.signOut}
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <Text>Sign Out</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {/* <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: 'red',
                borderRadius: 100,
                marginTop: 40
              }}
            /> */}
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Avenir Next",
                fontWeight: "600",
                marginTop: 15
              }}
            >
              {this.state.orgName}
            </Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                fontSize: 28,
                fontFamily: "Avenir Next",
                fontWeight: "600",
                marginLeft: 40,
                marginTop: 20
              }}
            >
              Your Items
            </Text>

            <TouchableOpacity
              onPress={() => {
                this.setState({ onSelect: !this.state.onSelect });
              }}
            >
              <Text style={{ color: "blue" }}>Select</Text>
            </TouchableOpacity>
          </View>
          <Items />
          <FlatList
            data={allEvents}
            renderItem={({ item, index, separators }) => <View>{item}</View>}
          ></FlatList>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("AddItems")}
            style={{
              height: 50,
              width: 50,
              backgroundColor: "green",
              position: "absolute",
              bottom: 20,
              right: 20,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 25,
                color: "white"
              }}
            >
              +
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      );
    }
  }
}
