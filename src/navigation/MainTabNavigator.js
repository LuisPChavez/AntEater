import React from "react";
import {Platform} from "react-native";
import {createBottomTabNavigator, createAppContainer} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import MapScreen from "../screens/HomeScreen";
import ItemsScreen from "../screens/ItemsScreen";
import ProfileScreen from "../screens/ProfileScreen";

MapScreen.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `md-globe` : "md-globe"}
    />
  )
};

ItemsScreen.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "md-list" : "md-link"}
    />
  )
};

ProfileScreen.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};

export default createAppContainer(
  createBottomTabNavigator({
    MapScreen,
    ItemsScreen,
    ProfileScreen
  })
);
