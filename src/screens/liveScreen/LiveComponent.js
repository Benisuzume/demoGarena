import React, { Component } from "react";
import {
    View, Text, Image
} from "react-native";
import HeaderComponent from "../headers/HeaderComponent";

export default class LiveComponent extends Component {
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