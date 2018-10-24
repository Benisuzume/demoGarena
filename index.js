import React, { Component } from "react";
import { AppRegistry, SafeAreaView, Text } from 'react-native';
import App from "./App";

export default class demoGarena extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <App {...this.props} />

            </SafeAreaView>

        )
    }
}
AppRegistry.registerComponent('demoGarena', () => demoGarena);
