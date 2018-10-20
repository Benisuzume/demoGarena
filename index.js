import { AppRegistry } from 'react-native';
// import { TabNavigator } from "react-navigation";
// //Component
// import HomeComponent from "./components/HomeComponent";
// import HBLMComponent from "./components/HBLMComponent";
// import LiveComponent from "./components/LiveComponent";
// import LM247Component from "./components/LM247Component";
// import MeComponent from "./components/MeComponent";
// //Screen names
// import { Home, HBLM, LIVE, LM247, Me } from "./screenNames";

// let routeConfigs = {
//     Home: {
//         screen: HomeComponent,
//     },
//     HBLM: {
//         screen: HBLMComponent,
//     },
//     LIVE: {
//         screen: LiveComponent,
//     },
//     LM247: {
//         screen: LM247Component,
//     },
//     Me: {
//         screen: MeComponent,
//     },
// };
// let tabNavigatorConfig = {
//     tabBarPosition: 'bottom',
//     animationEnabled: false,
//     swipeEnabled: false,
//     tabBarOptions: {
//         activeTintColor: '#DF0029',
//         upperCaseLabel: false,
//         showIcon: true,
//         style: {
//             width: '100%',
//             backgroundColor: 'white',
//             padding: -10,
//             height: 60,
//             borderTopWidth: 1,
//             borderColor: 'gray'
//         },
//         indicatorStyle: {
//             backgroundColor: 'transparent'
//         },
//         labelStyle: {
//             fontSize: 11,
//             color: "grey",
//             fontFamily: "kohinoor"
//         },
//     },
// };

// const App = TabNavigator(routeConfigs, tabNavigatorConfig);
import App from "./App";

AppRegistry.registerComponent('demoGarena', () => App);
