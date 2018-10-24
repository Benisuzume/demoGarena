import React, { Component } from "react";
import {
    View, Text, Image
} from "react-native";
import HeaderComponent from "./HeaderComponent";
import LM247View from "../views/LM247/index";

export default class LM247Component extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'LM247';
        let tabBarIcon = () => (
            <Image
                source={require('../icons/LM247.png')}
                style={{
                    width: 26, height: 26,
                    tintColor: 'grey'
                }}
            />
        )
        return { tabBarLabel, tabBarIcon }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent {...this.props} />
                <View style={{ flex: 1 }}>
                    <LM247View />
                </View>
            </View>
        )
    }
}