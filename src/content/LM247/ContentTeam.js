import React, { Component } from "react";
import {
    View, Text, Image,
    FlatList
} from "react-native";
import dataFlatListTeam from "../../data/dataFlatListTeam";

class FlatListItem extends Component {
    render() {
        return (
            <View style={{
                height: 65,
                backgroundColor: 'white'
            }}>
                <View style={{
                    flexDirection: 'row',
                    height: 65,
                    marginLeft: 15,
                    paddingRight: 10,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: '#F5F5F5'
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <Image
                            source={this.props.item.logo}
                            style={{
                                width: 32, height: 32,
                                resizeMode: 'contain',
                                marginRight: 15,
                                marginLeft: 5
                            }} />
                        <Text style={{
                            fontSize: 18,
                            color: 'black'
                        }}>
                            {this.props.item.name}
                        </Text>
                    </View>
                    <Image
                        source={require('../../icons/arrow-point-to-right.png')}
                        style={{
                            width: 12, height: 12,
                            resizeMode: 'contain',
                            tintColor: '#DCDCDC'
                        }} />
                </View>
            </View>
        )
    }
}

export default class ContentTeam extends Component {
    render() {
        return (
            <FlatList
                data={dataFlatListTeam}
                keyExtractor={(item, index) => item.name}
                renderItem={({ item, index }) => {
                    return (
                        <FlatListItem item={item} index={index}>

                        </FlatListItem>
                    )
                }}  >
            </FlatList>
        )
    }
}