import React, { Component } from "react";
import {
    View, Text
} from "react-native";
import HeaderComponent from "../headers/HeaderComponent";
import ContentHBLM from "./main/ContentHBLM";

export default class HBLMComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent {...this.props} />
                <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
                    <ContentHBLM {...this.props} />
                    {/* <Text>abc</Text> */}
                </View>
            </View>
        )
    }
}