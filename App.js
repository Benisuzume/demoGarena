import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import TabParent from './src/TabParent'
import GeneralNews from "./src/screens/Views/GeneralNews";
import { StackNavigator } from 'react-navigation'

let routeConfigs = {
  TabParent: {
    screen: TabParent
  },
  GeneralNews: {
    screen: GeneralNews
  }
};
let tabNavigationOptions = {
  initiaRouteName: 'TabParent',
  headerMode: 'none'
};

const AppGarena = StackNavigator(routeConfigs, tabNavigationOptions);

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppGarena />
      </SafeAreaView>
    )
  }
}