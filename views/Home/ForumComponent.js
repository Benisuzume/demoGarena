import React, { Component } from "react";
import {
    View, Text, Image
} from "react-native";

export default class ForumComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Diễn đàn';
        return { tabBarLabel }
    }
    render() {
        return (
            <View style={{
                flex: 1,
                borderTopWidth: 1,
                borderColor: '#F5F5F5'
            }}>

            </View>
        )
    }
}