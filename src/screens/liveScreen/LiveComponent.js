import React, { Component } from "react";
import {
    View, Text, Image
} from "react-native";
import { StackNavigator } from "react-navigation";
import HeaderComponent from "../headers/HeaderComponent";
import ListVideos from "./main/ListVideos";
import PlayVideo from "./main/PlayVideo";

let routeConfigs = {
    ListVideos: {
        screen: ListVideos
    },
    PlayVideo: {
        screen: PlayVideo
    }
};
let tabNavigationOptions = {
    initiaRouteName: 'ListVideos',
    headerMode: 'none'
};

const ScreenVideo = StackNavigator(routeConfigs, tabNavigationOptions);

export default class LiveComponent extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderComponent {...this.props} />
                <View style={{
                    flex: 1,
                    // backgroundColor: 'pink'
                }}>
                    <ScreenVideo />
                </View>
            </View>
        )
    }
}