import React, { Component } from "react";
import {
    View, Text, Image
} from "react-native";

export default class LM247Component extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Me';
        let tabBarIcon = () => (
            <Image
                source={require('../icons/user.png')}
                style={{
                    width: 26, height: 26,
                    tintColor: 'grey',
                }}
            />
        )
        return { tabBarLabel, tabBarIcon }
    }
    render() {
        return (
            <View style={{ flex: 1 }} />
        )
    }
}