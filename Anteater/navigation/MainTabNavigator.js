import React from "react";
import {Platform} from "react-native";
import {createStackNavigator, createBottomTabNavigator} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import MapScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";

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

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: "Items",
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-list" : "md-link"}
    />
  )
};

export default createBottomTabNavigator({
  MapStack,
  LinksStack
});
