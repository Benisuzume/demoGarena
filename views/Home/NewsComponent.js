import React, { Component } from "react";
import {
    View, Text, Image
} from "react-native";
import ContentNews from "../../content/Home/ContentNews";

export default class NewsComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Mới nhất';
        return { tabBarLabel }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ContentNews {...this.props} />
            </View>
        )
    }
}