import React, { Component } from "react";
import {
    View, Text, Image
} from "react-native";
import ContentHots from "../../content/Home/ContentHots";

export default class HotsComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Tin hot';
        return { tabBarLabel }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#F5F5F5', }}>
                <ContentHots  {...this.props} />
            </View>
        )
    }
}
