import React, { Component } from "react";
import {
    View, Text, Image,
    SectionList
} from "react-native";
import dataFlatListCalendar from "../../data/dataFlatListCalendar";

class SectionListItem extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                height: 110,
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                alignItems: 'center',
                borderTopWidth: 1,
                borderColor: '#F5F5F5'
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Image
                        source={this.props.item.logoTeam1}
                        style={{
                            width: 32, height: 32,
                            resizeMode: 'contain',
                            marginRight: 5
                        }}
                    />
                    <Text style={{
                        fontSize: 18,
                        color: 'black'
                    }}
                        numberOfLines={1}>
                        {this.props.item.nameTeam1}
                    </Text>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: 20
                }}>
                    <Text style={{
                        fontSize: 25,
                        color: 'black'
                    }}>
                        {this.props.item.number1}
                    </Text>
                    <View style={{
                        height: 20,
                        justifyContent: 'center',
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#F5F5F5',
                        flex: 1,
                        marginHorizontal: 5
                    }}>
                        <Text style={{
                            fontSize: 14,
                            color: 'black',
                        }}
                            numberOfLines={1}>
                            {this.props.item.status}
                        </Text>
                    </View>
                    <Text style={{
                        fontSize: 25,
                        color: 'black'
                    }}>
                        {this.props.item.number2}
                    </Text>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                }}>
                    <Text style={{
                        fontSize: 18,
                        color: 'black'
                    }}
                        numberOfLines={1}>
                        {this.props.item.nameTeam2}
                    </Text>
                    <Image
                        source={this.props.item.logoTeam2}
                        style={{
                            width: 32, height: 32,
                            resizeMode: 'contain',
                            marginRight: 5
                        }}
                    />
                </View>
            </View>
        )
    }
}

class SectionHeader extends Component {
    render() {
        return (
            <View style={{
                height: 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F5F5F5'
            }}>
                <Text style={{
                    fontSize: 22,
                    color: 'black'
                }}>
                    {this.props.section.time}
                </Text>
            </View>
        )
    }
}

export default class ContentCalendar extends Component {
    render() {
        return (
            <SectionList
                renderItem={({ item, index }) => {
                    return (
                        <SectionListItem item={item} index={index}>

                        </SectionListItem>
                    );
                }}
                renderSectionHeader={({ section }) => {
                    return (
                        <SectionHeader section={section}>

                        </SectionHeader>
                    )
                }}
                sections={dataFlatListCalendar}
                keyExtractor={(item, index) => item.time}
                stickySectionHeadersEnabled={true} >

            </SectionList>
        )
    }
}