import React, { Component } from "react";
import {
    View, Text, Image
} from "react-native";
import HeaderComponent from "./HeaderComponent";

export default class LiveComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'LIVE';
        let tabBarIcon = () => (
            <Image
                source={require('../icons/live.png')}
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
            <View style={{ flex: 1 }}>
                <HeaderComponent {...this.props} />
                <View style={{ flex: 1, backgroundColor: 'pink' }}>

                </View>
            </View>
        )
    }
}