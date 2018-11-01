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
                    {/* <YouTube
                        videoId="HXkh7EOqcQ4"   // The YouTube video ID
                        play={true}             // control playback of video with true/false
                        fullscreen={false}       // control whether the video should play in fullscreen or inline
                        loop={true}             // control whether the video should loop when ended
                        // playlistId='RDGMEMHDXYb1_DDSgDsobPsOFxpAVMCPkGTSW34_I'

                        onReady={e => this.setState({ isReady: true })}
                        onChangeState={e => this.setState({ status: e.state })}
                        onChangeQuality={e => this.setState({ quality: e.quality })}
                        onError={e => this.setState({ error: e.error })}

                        style={{ alignSelf: 'stretch', height: 300 }}
                    /> */}
                    <ScreenVideo />
                </View>
            </View>
        )
    }
}