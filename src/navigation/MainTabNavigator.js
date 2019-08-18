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
  tabBarLabel: "Map",
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-map` : "android-map"}
    />
  )
};

const ItemsStack = createStackNavigator({
  Items: ItemsScreen
});

ItemsStack.navigationOptions = {
  tabBarLabel: "Items",
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list" : "md-link"}
    />
  )
};

const ProfileStack = createStackNavigator({
  Profile: ProfileScreen
});

ProfileStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list" : "md-link"}
    />
  )
};

export default createBottomTabNavigator({
  MapStack,
  ItemsStack,
  ProfileScreen
});
