import React, { Component } from "react";
import {
    View, Text, Image,
    TouchableOpacity
} from "react-native";

export default class HeaderComponent extends Component {
    render() {
        return (
            <View style={{
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'white',
                // backgroundColor: 'red',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    flexDirection: 'row', alignItems: 'center'
                }}>
                    <TouchableOpacity style={{
                        marginLeft: 20,
                    }}
                        onPress={() => {
                            alert(`You click button`)
                        }} >
                        <Image
                            source={require('../images/logos/LoL_logo.png')}
                            style={{
                                width: 26, height: 26,
                                borderRadius: 13, borderWidth: 2,
                                borderColor: 'grey'
                            }} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 22, marginLeft: 12,
                        color: 'black'
                    }}>
                        LOLVN
                </Text>
                </View>

                <TouchableOpacity style={{
                    marginRight: 12,
                }}
                    onPress={() => {
                        alert(`You click button`)
                    }} >
                    <Image
                        source={require('../icons/messenger.png')}
                        style={{
                            width: 22, height: 22,
                        }} />
                </TouchableOpacity>
            </View>
        )
    }
}
