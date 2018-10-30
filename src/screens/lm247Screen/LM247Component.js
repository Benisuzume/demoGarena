import React, { Component } from "react";
import {
    View, Text, Image
} from "react-native";
import HeaderComponent from "../headers/HeaderComponent";
import { createMaterialTopTabNavigator } from "react-navigation";
import CalendarComponent from "./main/CalendarComponent";
import TeamComponent from "./main/TeamComponent";

let routeConfigs = {
    Calendar: {
        screen: props => <CalendarComponent {...props} />,
        navigationOptions: {
            tabBarLabel: 'LỊCH'
        }
    },
    Team: {
        screen: props => <TeamComponent {...props} />,
        navigationOptions: {
            tabBarLabel: 'ĐỘI HÌNH'
        }
    },
};
let tabNavigatorConfig = {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        showIcon: false,
        upperCaseLabel: false,
        indicatorStyle: {
            height: 2,
            backgroundColor: 'red'
        },
        style: {
            backgroundColor: 'white',
            elevation: 0,
            height: 50,
            borderBottomWidth: 1,
            borderColor: '#F5F5F5'
        },
        labelStyle: {
            fontSize: 15,
            alignSelf: 'center',
            textAlign: 'center',
            fontWeight: 'bold'
        },
        tabStyle: {
            flex: 1
        },
    }
};

const LM247Tab = createMaterialTopTabNavigator(routeConfigs, tabNavigatorConfig)

export default class LM247Component extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent {...this.props} />
                <LM247Tab screenProps={{ goToGeneralNews: this.props.screenProps.goToGeneralNews }} />
                {/* <Text>abc</Text> */}
            </View>
        )
    }
}