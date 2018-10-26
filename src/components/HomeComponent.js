import React, { Component } from "react";
import {
    View, Text, Image
} from "react-native";
import HeaderComponent from "./HeaderComponent";
import HomeView from "../views/Home/index";

export default class HomeComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Home';
        let tabBarIcon = () => (
            <Image
                source={require('../icons/home.png')}
                style={{
                    width: 26, height: 26,
                    tintColor: 'grey'
                }}
            />
        );
        return { tabBarLabel, tabBarIcon }
    }
    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <HeaderComponent {...this.props} />
                <View style={{
                    flex: 1,
                    // backgroundColor: 'red'
                }}>
                    <HomeView />
                </View>
            </View>
        )
    }
}