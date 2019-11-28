import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import MapScreen from '../screens/HomeScreen';
import ItemsScreen from '../screens/ItemsScreen';
import ProfileScreen from '../screens/ProfileScreen';

allEvents = [];

allData = () => {
  var data = require('../data');

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
};

MapScreen.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `md-globe` : 'md-globe'}
    />
  )
};

ItemsScreen.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'md-list' : 'md-link'}
    />
  )
};

ProfileScreen.navigationOptions = {
  tabBarLabel: ' ',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
    />
  )
};

const TabNavigator = createBottomTabNavigator({
  Home: ProfileScreen,
  Settings: MapScreen,
  Items: ItemsScreen
});

export default TabNavigator;
