import React, { Component } from "react";
import {
    View, Text
} from "react-native";
import { createMaterialTopTabNavigator } from "react-navigation";
import HeaderComponent from "../headers/HeaderComponent";
import NewsComponent from "./main/NewsComponent";
import ForumComponent from "./main/ForumComponent";
import HotsComponent from "./main/HotsComponent";

let routeConfig = {
    NewsComponent: {
        screen: props => <NewsComponent {...props} />,
        navigationOptions: {
            tabBarLabel: 'Mới nhất'
        }
    },
    ForumComponent: {
        screen: props => <ForumComponent {...props} />,
        navigationOptions: {
            tabBarLabel: 'Diễn đàn'
        }
    },
    HotsComponent: {
        screen: props => <HotsComponent {...props} />,
        navigationOptions: {
            tabBarLabel: 'Tin hot'
        }
    }
};
let tabNavigationOptions = {
    animationEnabled: true,
    swipeEnabled: true,
    showIcon: false,
    upperCaseLabel: false, //duong ke cho tab khi acitve
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        indicatorStyle: {
            height: 2,
            backgroundColor: 'red',
        },
        style: {
            backgroundColor: 'white',
            elevation: 0,
            height: 50
        },
        labelStyle: {
            fontSize: 15,
            alignSelf: 'center',
            fontWeight: 'bold',
            textAlign: 'center'
        },
        //style cho mỗi tab 
        tabStyle: {
            flex: 1,
            flexDirection: 'row'
        },
    }
}

const HomeTab = createMaterialTopTabNavigator(routeConfig, tabNavigationOptions)

export default class HomeComponent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <HeaderComponent {...this.props} />
                <HomeTab screenProps={{ goToGeneralNews: this.props.screenProps.goToGeneralNews }} />
                {/* <Text>abc</Text> */}
            </View>
        )
    }
}