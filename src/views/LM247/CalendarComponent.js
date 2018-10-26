import React, { Component } from "react";
import {
    View, Text
} from "react-native";
import ContentCalendar from "../../content/LM247/ContentCalendar";

export default class CalendarComponent extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'LỊCH';
        return { tabBarLabel }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ContentCalendar {...this.props} />
            </View>
        )
    }
}