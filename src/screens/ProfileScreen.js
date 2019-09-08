import React, {PureComponent} from 'react';
import {Text, View, SafeAreaView, TextInput, ScrollView} from 'react-native';

export default class ProfileScreen extends PureComponent {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {signedIn: false};
  }
  render() {
    if (!this.state.signedIn)
      return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#DEE2E2'}}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: 'Avenir Next',
              fontWeight: '600',
              marginLeft: 40,
              marginTop: 20
            }}
          >
            Profile
          </Text>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', margin: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Avenir Next',
                  fontWeight: '500',
                  margin: 10
                }}
              >
                Email
              </Text>
              <TextInput
                style={{backgroundColor: 'red', width: 200}}
              ></TextInput>
            </View>
            <View style={{flexDirection: 'row', margin: 10}}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Avenir Next',
                  fontWeight: '500',
                  margin: 10
                }}
              >
                Password
              </Text>
              <TextInput
                style={{backgroundColor: 'red', width: 200}}
              ></TextInput>
            </View>
            <Text
              style={{
                marginTop: 50,
                fontFamily: 'Avenir Next',
                fontSize: 20,
                fontWeight: '500'
              }}
            >
              Sign In
            </Text>
          </View>
        </SafeAreaView>
      );
    else {
      return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#DEE2E2'}}>
          <View>
            <Text
              style={{
                fontSize: 28,
                fontFamily: 'Avenir Next',
                fontWeight: '600',
                marginLeft: 40,
                marginTop: 20
              }}
            >
              Profile
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: 'red',
                borderRadius: 100,
                marginTop: 40
              }}
            />
            <Text
              style={{
                fontSize: 22,
                fontFamily: 'Avenir Next',
                fontWeight: '600',
                marginTop: 15
              }}
            >
              Organization Name
            </Text>
          </View>
          <Text
            style={{
              fontSize: 28,
              fontFamily: 'Avenir Next',
              fontWeight: '600',
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
}
