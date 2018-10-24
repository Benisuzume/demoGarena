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
// let tabNavigatorConfig = {
//   animationEnabled: false,
//   swipeEnabled: false,
//   tabBarOptions: {
//     activeTintColor: 'red',
//     upperCaseLabel: false,
//     showIcon: true,
//     style: {
//       width: '100%',
//       backgroundColor: 'white',
//       height: 60,
//       borderTopWidth: 1,
//       borderColor: 'gray'
//     },
//     indicatorStyle: {
//       backgroundColor: 'transparent'
//     },
//     labelStyle: {
//       fontSize: 11,
//       color: "grey",
//     },
//   },
// };
let tabNavigatorConfig = {
  animationEnabled: false,
  swipeEnabled: false,
  showIcon: false,
  upperCaseLabel: false, //duong ke cho tab khi acitve
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
    //style cho mỗi tab 
    tabStyle: {
      flex: 1,
    },
  }
};

export default App = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);

