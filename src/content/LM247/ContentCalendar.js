import React, { Component } from "react";
import {
    View, Text, Image,
    SectionList, StyleSheet
} from "react-native";
import dataFlatListCalendar from "../../data/dataFlatListCalendar";

class SectionListItem extends Component {
    render() {
        return (
            <View style={styles.Container}>
                {/* Start */}
                <View style={styles.Start}>
                    <Image source={this.props.item.logoTeam1} style={styles.FixImg} />
                    <View style={{ flex: 1 }}>
                        <Text numberOfLines={1}
                            style={{ color: 'black', paddingLeft: 5, fontSize: 16 }}>
                            {this.props.item.nameTeam1}
                        </Text>
                    </View>
                </View>

                {/* center */}
                <View style={styles.Center}>
                    <Text style={{ color: 'black', fontSize: 25 }}>
                        {this.props.item.number1}
                    </Text>
                    <View style={styles.Result}>
                        <Text numberOfLines={1} style={{ color: 'black', paddingHorizontal: 3 }}>
                            {this.props.item.status}
                        </Text>
                    </View>
                    <Text style={{ color: 'black', fontSize: 25 }}>
                        {this.props.item.number2}
                    </Text>
                </View>

                {/* End */}
                <View style={styles.End}>
                    <View style={{ flex: 1 }}>
                        <Text numberOfLines={1}
                            style={{ color: 'black', paddingRight: 5, fontSize: 16 }}>
                            {this.props.item.nameTeam2}
                        </Text>
                    </View>
                    <Image source={this.props.item.logoTeam2} style={styles.FixImg} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'row',
        height: 110,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: '#F5F5F5'
    },
    Start: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    FixImg: {
        width: 32,
        height: 32,
        resizeMode: 'contain',
    },
    Center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        // backgroundColor: 'red'
    },
    Result: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        marginHorizontal: 10,
    },
    End: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
    },
});

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
                    fontSize: 18,
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
            <View style={{
                flex: 1,
                justifyContent: 'flex-end',
                // alignItems: 'flex-end'
            }}>
                <SectionList
                    renderItem={({ item, index }) => {
                        return (
                            <SectionListItem item={item} index={index} />
                        );
                    }}
                    renderSectionHeader={({ section }) => {
                        return (
                            <SectionHeader section={section} />
                        )
                    }}
                    sections={dataFlatListCalendar}
                    keyExtractor={(item, index) => item.time}
                    stickySectionHeadersEnabled={true} >
                </SectionList>
                <View style={{
                    position: 'absolute',
                    width: '30%',
                    height: 30,
                    backgroundColor: 'gray',
                    opacity: 0.7,
                    alignSelf: 'flex-end',
                    // alignContent: 'flex-end',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                    marginBottom: 20,
                    zIndex: 1,
                    bottom: 10
                }}>
                    <Image
                        source={require('../../icons/refresh.png')}
                        style={{
                            width: 14, height: 14,
                            resizeMode: 'contain',
                            tintColor: 'white',
                            marginLeft: 2
                        }} />
                    <Text style={{
                        color: 'white',
                        fontSize: 14
                    }}>
                        Làm mới
                    </Text>
                </View>
            </View>

        )
    }
}