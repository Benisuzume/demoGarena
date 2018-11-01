import React, { Component } from "react";
import {
    View, Text, Image,
    TouchableOpacity
} from "react-native";
import YouTube from "react-native-youtube";
export default class PlayVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFromList: this.props.navigation.state
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'black',
                    flexDirection: 'row'
                }}>
                    <Image
                        source={require('../../../icons/scroll-arrow-to-left.png')}
                        style={{
                            width: 32, height: 32,
                            resizeMode: 'contain', tintColor: '#4876FF',
                            alignSelf: 'flex-start'
                        }}
                    />
                    <Text style={{
                        fontSize: 26,
                        color: 'white',
                        fontWeight: 'bold'
                    }}>
                        YouTube
                    </Text>
                </View>
                <View style={{
                    flex: 1,
                    // backgroundColor: 'pink'
                }}>
                    <YouTube
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
                    />
                    {/* <ListVieos {...this.props} /> */}
                </View>
            </View>
        )
    }
}