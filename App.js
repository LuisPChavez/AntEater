import {createAppContainer, createSwitchNavigator} from "react-navigation";
import MainTabNavigator from "./src/navigation/MainTabNavigator";

export default createAppContainer(
  createSwitchNavigator({
    Main: MainTabNavigator
  })
);
