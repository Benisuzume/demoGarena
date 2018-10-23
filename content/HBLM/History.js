import React, { Component } from "react";
import {
    View, Text, Image,
    FlatList
} from "react-native";
import dataFlatListHistory from "../../data/dataFlatListHistory";

class FlatListItem extends Component {
    render() {
        return (
            <View style={{
                height: 105,
                paddingHorizontal: 10,
                justifyContent: 'center',
                borderBottomWidth: 1,
                borderColor: '#F5F5F5',
                backgroundColor: 'white'
            }}>
                <View style={{
                    height: 50,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <Image
                            source={this.props.item.hero}
                            style={{
                                width: 50, height: 50,
                                resizeMode: 'contain', marginRight: 10
                            }} />
                        <View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{
                                    color: 'black',
                                    fontSize: 15
                                }}>
                                    {this.props.item.kind}
                                </Text>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                width: 180,
                                justifyContent: 'space-between'
                            }}>
                                <View style={{
                                    width: 25, height: 25,
                                    backgroundColor: '#F5F5F5',
                                }}>
                                    <Image
                                        source={this.props.item.item1}
                                        style={{
                                            width: 25, height: 25,
                                            resizeMode: 'contain'
                                        }} />
                                </View>
                                <View style={{
                                    width: 25, height: 25,
                                    backgroundColor: '#F5F5F5',
                                }}>
                                    <Image
                                        source={this.props.item.item2}
                                        style={{
                                            width: 25, height: 25,
                                            resizeMode: 'contain'
                                        }} />
                                </View>
                                <View style={{
                                    width: 25, height: 25,
                                    backgroundColor: '#F5F5F5',
                                }}>
                                    <Image
                                        source={this.props.item.item3}
                                        style={{
                                            width: 25, height: 25,
                                            resizeMode: 'contain'
                                        }} />
                                </View>
                                <View style={{
                                    width: 25, height: 25,
                                    backgroundColor: '#F5F5F5',
                                }}>
                                    <Image
                                        source={this.props.item.item4}
                                        style={{
                                            width: 25, height: 25,
                                            resizeMode: 'contain'
                                        }} />
                                </View>
                                <View style={{
                                    width: 25, height: 25,
                                    backgroundColor: '#F5F5F5',
                                }}>
                                    <Image
                                        source={this.props.item.item5}
                                        style={{
                                            width: 25, height: 25,
                                            resizeMode: 'contain'
                                        }} />
                                </View>
                                <View style={{
                                    width: 25, height: 25,
                                    backgroundColor: '#F5F5F5',
                                }}>
                                    <Image
                                        source={this.props.item.item6}
                                        style={{
                                            width: 25, height: 25,
                                            resizeMode: 'contain'
                                        }} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Image
                            source={require('../../icons/arrow-point-to-right.png')}
                            style={{ width: 12, height: 12, resizeMode: 'contain' }} />
                    </View>
                </View>
                <View style={{
                    height: 25,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            width: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 10
                        }}>
                            <Text style={{
                                fontSize: 15,
                                color: this.props.item.result == 'Thua' ? 'red' : 'blue'
                            }}>
                                {this.props.item.result}
                            </Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            width: 180,
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            // backgroundColor: 'black'
                        }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../icons/kill.png')}
                                    style={{
                                        width: 12, height: 12,
                                        resizeMode: 'contain',
                                        marginRight: 2,
                                        tintColor: this.props.item.result == 'Thua' ? 'red' : 'blue'
                                    }} />
                                <Text style={{
                                    fontSize: 12,
                                    color: this.props.item.result == 'Thua' ? 'red' : 'blue'
                                }}>
                                    {this.props.item.kill}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../icons/death.png')}
                                    style={{
                                        width: 12, height: 12,
                                        resizeMode: 'contain',
                                        marginRight: 2,
                                        tintColor: this.props.item.result == 'Thua' ? 'red' : 'blue'
                                    }} />
                                <Text style={{
                                    fontSize: 12,
                                    color: this.props.item.result == 'Thua' ? 'red' : 'blue'
                                }}>
                                    {this.props.item.death}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../icons/assist.png')}
                                    style={{
                                        width: 12, height: 12,
                                        resizeMode: 'contain',
                                        marginRight: 2,
                                        tintColor: this.props.item.result == 'Thua' ? 'red' : 'blue'
                                    }} />
                                <Text style={{
                                    fontSize: 12,
                                    color: this.props.item.result == 'Thua' ? 'red' : 'blue'
                                }}>
                                    {this.props.item.assist}
                                </Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    source={require('../../icons/gold.png')}
                                    style={{
                                        width: 12, height: 12,
                                        resizeMode: 'contain',
                                        marginRight: 2,
                                        tintColor: this.props.item.result == 'Thua' ? 'red' : 'blue'
                                    }} />
                                <Text style={{
                                    fontSize: 12,
                                    color: this.props.item.result == 'Thua' ? 'red' : 'blue'
                                }}>
                                    {this.props.item.gold}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 12 }}>
                            {this.props.item.time}
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default class History extends Component {
    render() {
        return (
            <FlatList
                data={dataFlatListHistory}
                keyExtractor={(item, index) => item.time}
                renderItem={({ item, index }) => {
                    return (
                        <FlatListItem item={item} index={index} >

                        </FlatListItem>
                    )
                }} >

            </FlatList>
        )
    }
}