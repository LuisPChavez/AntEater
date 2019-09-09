import React, { PureComponent } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import * as Google from "expo-google-app-auth";
import { iosClientId, androidClientId } from "../../keys";
import { Ionicons } from "@expo/vector-icons";

export default class ProfileScreen extends PureComponent {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = { signedIn: false };
  }

  signInWithGoogle = async () => {
    // First- obtain access token from Expo's Google API
    const config = {
      iosClientId,
      androidClientId,
      scopes: ["profile", "email", "openid"]
    };

    let email;
    let id;

    const { type, accessToken, user } = await Google.logInAsync(config);
    if (user !== undefined) {
      email = user.email;
      id = user.id;
      email = email.split("@");
      console.log(email[email.length - 1]);
      console.log(id);
    }
  };

  render() {
    const {
      googleSignInButtonStyle,
      googleButtonTextStyle,
      googleButtonContainer
    } = this.styles;
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
            style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
          >
            <TouchableOpacity
              onPress={this.signInWithGoogle}
              style={googleSignInButtonStyle}
            >
              <View style={googleButtonContainer}>
                <Ionicons name="logo-google" size={32} color="white" />
                <Text style={googleButtonTextStyle}>
                  Create Account With Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    else {
      return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#DEE2E2" }}>
          <View>
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
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "red",
                borderRadius: 100,
                marginTop: 40
              }}
            />
            <Text
              style={{
                fontSize: 22,
                fontFamily: "Avenir Next",
                fontWeight: "600",
                marginTop: 15
              }}
            >
              Organization Name
            </Text>
          </View>
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
          <ScrollView></ScrollView>
        </SafeAreaView>
      );
    }
  }

  styles = {
    googleSignInButtonStyle: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: "#3374FF",
      borderRadius: 6
    },
    googleButtonTextStyle: {
      fontSize: 18,
      fontFamily: "Avenir Next",
      fontWeight: "600",
      color: "#FFFFFF",
      marginLeft: 10,
      marginTop: 3
    },
    googleButtonContainer: {
      flexDirection: "row",
      justifyContent: "space-between"
    }
  };
}
