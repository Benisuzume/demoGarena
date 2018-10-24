import React, { Component } from "react";
import {
    View, Text, Image
} from "react-native";
import HeaderComponent from "./HeaderComponent";
import ContentHBLM from "../content/HBLM/ContentHBLM";

export default class HBLMComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'HBLM';
        let tabBarIcon = () => (
            <Image
                source={require('../icons/HBLM.png')}
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
                <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
                    <ContentHBLM {...this.props} />
                </View>
            </View>
        )
    }
}