import React from 'react';
import {Text, View} from 'react-native';
import MapView from 'react-native-maps';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <MapView
        region={{
          latitude: 33.646064,
          longitude: -117.842823,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        style={{flex: 1}}
      >
        <MapView.Marker
          coordinate={{latitude: 33.645872, longitude: -117.84273}}
          title='My Marker'
          description='Some description'
        />
      </MapView>
    );
  }
}
