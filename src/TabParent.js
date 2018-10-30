import React, { Component } from "react";
import { View, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
//Component
import HomeComponent from "./screens/homeScreen/HomeComponent";
import HBLMComponent from "./screens/hblmScreen/HBLMComponent";
import LiveComponent from "./screens/liveScreen/LiveComponent";
import LM247Component from "./screens/lm247Screen/LM247Component";
import MeComponent from "./screens/meScreen/MeComponent";

let routeConfigs = {
  Home: {
    screen: props => <HomeComponent {...props} />,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({ tintColor, focused }) => (
        focused ?
          <Image
            source={require('./icons/home.png')}
            style={{
              width: 26, height: 26,
              tintColor: 'red',
            }}
          />
          :
          <Image
            source={require('./icons/home.png')}
            style={{
              width: 26, height: 26,
              tintColor: 'grey',
            }}
          />
      )
    }
  },
  HBLM: {
    screen: props => <HBLMComponent {...props} />,
    navigationOptions: {
      tabBarLabel: 'HBLM',
      tabBarIcon: ({ tintColor, focused }) => (
        focused ?
          <Image
            source={require('./icons/hblm.png')}
            style={{
              width: 26, height: 26,
              tintColor: 'red',
            }}
          />
          :
          <Image
            source={require('./icons/hblm.png')}
            style={{
              width: 26, height: 26,
              tintColor: 'grey',
            }}
          />
      )
    }
  },
  LIVE: {
    screen: LiveComponent,
    navigationOptions: {
      tabBarLabel: 'LIVE',
      tabBarIcon: ({ tintColor, focused }) => (
        focused ?
          <Image
            source={require('./icons/live.png')}
            style={{
              width: 26, height: 26,
              tintColor: 'red',
            }}
          />
          :
          <Image
            source={require('./icons/live.png')}
            style={{
              width: 26, height: 26,
              tintColor: 'grey',
            }}
          />
      )
    }
  },
  LM247: {
    screen: LM247Component,
    navigationOptions: {
      tabBarLabel: 'LM247',
      tabBarIcon: ({ tintColor, focused }) => (
        focused ?
          <Image
            source={require('./icons/lm247.png')}
            style={{
              width: 26, height: 26,
              tintColor: 'red',
            }}
          />
          :
          <Image
            source={require('./icons/lm247.png')}
            style={{
              width: 26, height: 26,
              tintColor: 'grey',
            }}
          />
      )
    }
  },
  Me: {
    screen: MeComponent,
    navigationOptions: {
      tabBarLabel: 'ME',
      tabBarIcon: ({ tintColor, focused }) => (
        focused ?
          <Image
            source={require('./icons/user.png')}
            style={{
              width: 26, height: 26,
              tintColor: 'red',
            }}
          />
          :
          <Image
            source={require('./icons/user.png')}
            style={{
              width: 26, height: 26,
              tintColor: 'grey',
            }}
          />
      )
    }
  }
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

const AppScreen = createBottomTabNavigator(routeConfigs, tabNavigatorConfig);

export default class TabParent extends Component {
  goToGeneralNews = () => {
    this.props.navigation.navigate('GeneralNews')
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppScreen screenProps={{ goToGeneralNews: this.goToGeneralNews }} />
      </View>
    )
  }
}