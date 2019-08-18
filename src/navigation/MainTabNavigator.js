import React from "react";
import {Platform} from "react-native";
import {createStackNavigator, createBottomTabNavigator} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import MapScreen from "../screens/HomeScreen";
import ItemsScreen from "../screens/ItemsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const MapStack = createStackNavigator({
  Map: MapScreen
});

MapStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `md-globe` : "md-globe"}
    />
  )
};

const ItemsStack = createStackNavigator({
  Items: ItemsScreen
});

ItemsStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "md-list" : "md-link"}
    />
  )
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: " ",
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};

export default createBottomTabNavigator({
  MapStack,
  ItemsStack,
  ProfileStack
});
