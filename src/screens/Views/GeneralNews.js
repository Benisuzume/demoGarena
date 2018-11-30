import React, { Component } from 'react';
import {
    Text, View, Image,
    TouchableOpacity,
    WebView, Platform,
    Dimensions,
} from 'react-native';
import AutoHeightWebView from "react-native-autoheight-webview";
var { width, height } = Dimensions.get('window');
export default class GeneralNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.navigation.state.params.index,
            title: this.props.navigation.state.params.title
        }
        // alert(JSON.stringify(this.props.navigation.state.params.index))
        // alert(JSON.stringify(this.props.navigation.state.params.abc))
    }
    componentDidMount = () => {

    }
    render() {
        return (
            
            <View style={{ flex: 1 }}>
                <View style={{
                    height: 60,
                    alignItems: 'center',
                    flexDirection: 'row',
                    // backgroundColor: 'red'
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.goBack();
                        }}
                    >
                        <Image
                            source={require('../../icons/left-arrow.png')}
                            style={{
                                width: 26,
                                height: 26,
                                tintColor: 'black',
                                resizeMode: 'contain',
                                marginHorizontal: 10
                            }} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>
                        {this.state.title}
                    </Text>
                </View>
                <WebView
                    source={{
                        uri: 'https://garena.live/?region=vn'
                    }}
                />
            </View>
        );
    }
}
