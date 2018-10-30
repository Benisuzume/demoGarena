import React, { Component } from "react";
import {
    View, Text, Image,
    ScrollView, TouchableOpacity, FlatList
} from "react-native";
import ImageSlider from "react-native-image-slider";
import { getNewsFromServer } from "../../../networking/Server";

class FlatListItem extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.parentFlatList.screenProps.goToGeneralNews()}
            >
                <View style={{
                    height: 115,
                    paddingVertical: 12,
                    marginHorizontal: 12,
                    borderBottomWidth: 1,
                    borderColor: '#DCDCDC',
                    flexDirection: 'row'
                }}>
                    <View style={{ width: '60%', justifyContent: 'flex-start', height: 91 }}>
                        <Text style={{ fontSize: 18, color: 'black' }} numberOfLines={3}>
                            {this.props.item.body}
                        </Text>
                        <Text style={{ fontSize: 12 }}>
                            {this.props.item.created_at}
                        </Text>
                    </View>
                    <Image
                        source={{ uri: 'https://picsum.photos/200/300/?random' }}
                        style={{ width: 150, marginLeft: 12 }} />
                </View>
            </TouchableOpacity>

        )
    }
}

export default class NewsComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newsFromServer: [],
        }
    }

    componentDidMount() {
        this.refreshDataFromServer();
    }

    refreshDataFromServer = () => {
        getNewsFromServer().then((news) => {
            this.setState({ newsFromServer: news })
        }).catch((error) => {
            this.setState({ newsFromServer: [] })
        })
    }

    render() {
        const images = [
            'http://lienminh360.vn/wp-content/uploads/2018/10/Landing-LoL-1055x718.jpg',
            'https://lienminh.garena.vn/images/Lan_h3lpm3/10_2018/dragon_trainer/heimerdinger%20luyen%20rong%20600x338.jpg',
            'https://lienminh.garena.vn/images/Lan_h3lpm3/10_2018/Banner-bai-viet-600x338.jpg',
            'https://lienminh.garena.vn/images/Lan_h3lpm3/10_2018/hop%20sieu%20pham%20600x338.jpg',
        ];
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{
                        height: 115,
                        // backgroundColor: 'red'
                    }}>
                        <ImageSlider
                            loopBothSides
                            autoPlayWithInterval={3000}
                            images={images}
                            customSlide={({ index, item, style, width }) => (
                                <View key={index} style={[style, { flex: 1 }]}>
                                    <Image
                                        source={{ uri: item }}
                                        style={{ width: '100%', flex: 1 }} />
                                </View>
                            )}
                        />
                    </View>
                    <View style={{
                        height: 70,
                        // backgroundColor: 'red',
                        flexDirection: 'row',
                        borderBottomWidth: 7,
                        borderColor: '#DCDCDC'
                    }}>
                        <TouchableOpacity style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                            onPress={() => this.props.screenProps.goToGeneralNews()}
                        >
                            <Image
                                source={require('../../../icons/live.png')}
                                style={{ width: 26, height: 26, tintColor: '#0000FF', marginBottom: 4 }} />
                            <Text style={{ fontSize: 14, color: 'black' }}>
                                LIVE
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                            onPress={() => {
                                alert(`You touch button`)
                            }}>
                            <Image
                                source={require('../../../icons/hblm.png')}
                                style={{ width: 26, height: 26, tintColor: '#009900', marginBottom: 4 }} />
                            <Text style={{ fontSize: 14, color: 'black' }}>
                                HBLM
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                            onPress={() => {
                                alert(`You touch button`)
                            }}>
                            <Image
                                source={require('../../../icons/vqmm.png')}
                                style={{ width: 26, height: 26, tintColor: '#CC0000', marginBottom: 4 }} />
                            <Text style={{ fontSize: 14, color: 'black' }}>
                                VQMM
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={this.state.newsFromServer}
                        extraData={this.state}
                        renderItem={({ item, index }) => {
                            return (
                                <FlatListItem item={item} index={index} parentFlatList={this.props} />
                            )
                        }}
                        keyExtractor={(item, index) => item.id}
                    >
                    </FlatList>
                </View>
            </ScrollView>
        )
    }
}