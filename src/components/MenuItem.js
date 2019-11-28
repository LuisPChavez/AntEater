import React, {PureComponent} from 'react';
import {Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

export class MenuItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {highlighted: false};
  }

  render() {
    const {title, pricing, org, location, onSelect, navigation} = this.props;
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            // onSelect
            //   ? this.setState({highlighted: !this.state.highlighted})
            //   : null;
            // navigation.navigation.navigate('Edit', {
            //   title,
            //   pricing,
            //   org,
            //   location,
            //   onSelect
            // });
          }}
          style={{
            height: 100,
            width: Dimensions.get('window').width - 40,
            flexDirection: 'row',
            borderRadius: 20,
            backgroundColor: this.state.highlighted ? 'red' : '#F2F2F2',
            shadowColor: 'black',
            shadowRadius: 5,
            shadowOpacity: 0.1,
            shadowOffset: {height: 2},
            marginTop: 15
          }}
        >
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
          >
            <Image
              source={require('../assets/banhmi.jpg')}
              style={{
                backgroundColor: 'white',
                height: 80,
                width: 80,
                borderRadius: 40,
                borderColor: 'white',
                borderWidth: 5
              }}
            />
          </View>
          <View style={{flex: 2}}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                marginHorizontal: 20
              }}
            >
              <Text
                style={{
                  flex: 2,
                  fontSize: 18,
                  fontWeight: 'bold',
                  fontFamily: 'Avenir Next'
                }}
              >
                {title}
              </Text>
              <Text
                style={{
                  flex: 1,
                  top: 5,
                  right: 0,
                  position: 'absolute',
                  fontSize: 16,
                  color: 'grey',
                  fontFamily: 'Avenir Next'
                }}
              >
                {pricing}
              </Text>
            </View>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 5,
                color: 'grey',
                fontSize: 16,
                fontFamily: 'Avenir Next'
              }}
            >
              {org}
            </Text>
            <Text
              style={{
                marginLeft: 20,
                marginTop: 0,
                color: 'grey',
                fontSize: 15,
                fontFamily: 'Avenir Next'
              }}
            >
              {location}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
