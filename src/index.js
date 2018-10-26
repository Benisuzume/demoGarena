import { createBottomTabNavigator } from "react-navigation";
//Component
import HomeComponent from "./components/HomeComponent";
import HBLMComponent from "./components/HBLMComponent";
import LiveComponent from "./components/LiveComponent";
import LM247Component from "./components/LM247Component";
import MeComponent from "./components/MeComponent";
//Screen names
import { Home, HBLM, LIVE, LM247, Me } from "./screenNames";

let routeConfigs = {
  Home: {
    screen: HomeComponent,
  },
  HBLM: {
    screen: HBLMComponent,
  },
  LIVE: {
    screen: LiveComponent,
  },
  LM247: {
    screen: LM247Component,
  },
  Me: {
    screen: MeComponent,
  },
};
let tabNavigatorConfig = {
  animationEnabled: false,
  swipeEnabled: false,
  showIcon: true,
  upperCaseLabel: false,
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    indicatorStyle: {
      backgroundColor: 'transparent',
    },
    style: {
      backgroundColor: 'white',
      elevation: 0,
      height: 60
    },
    labelStyle: {
      fontSize: 15,
      alignSelf: 'center',
      textAlign: 'center'
    },
    tabStyle: {
      flex: 1,
    },
  }
};

export default AppStack = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);

