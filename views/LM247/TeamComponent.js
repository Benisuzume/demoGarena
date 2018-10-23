import React, { Component } from "react";
import {
    View, Text
} from "react-native";
import ContentTeam from "../../content/LM247/ContentTeam";

export default class TeamComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'ĐỘI HÌNH'
        return { tabBarLabel }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ContentTeam {...this.props} />
            </View>
        )
    }
}