/*
 * @Author: Rishav Goswami
 * @Date: 2020-05-04 21:54:49
 * @Last Modified by: Rishav G
 * @Last Modified time: 2020-06-19 19:49:06
 */
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import { DashboardScreen } from "../screens";
import { ProfileScreen } from "../screens";

const mainRoute = createStackNavigator(
  {
    dashboard: DashboardScreen,
    profile: ProfileScreen,
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      mainStack: mainRoute,
    },
    {
      initialRouteName: "mainStack",
    }
  )
);
