import React, { Component } from "react";
import {
    View, Text, Image,
    TouchableOpacity,
    FlatList, Dimensions
} from "react-native";

import moment from 'moment'
import 'moment/locale/vi'
moment.locale('vi')
import { getVideoFromServer } from "../../../networking/ServerVideo";

const { height, width } = Dimensions.get('window');
class FlatListItem extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.navigation.navigate('PlayVideo')
                }}
            >
                <View style={{
                    marginBottom: 10,
                    marginRight: this.props.index % 2 == 0 ? 10 : 0,
                    backgroundColor: 'white',
                }}>
                    <View style={{
                        width: width / 2 - 15,
                        height: (width / 2 - 15) / 16 * 9,
                        marginBottom: 6
                    }}>
                        <Image
                            source={{ uri: this.props.item.snippet.thumbnails.default.url }}
                            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                        />
                    </View>
                    <View style={{
                        height: 50,
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            width: 50,
                            height: 50,
                            alignItems: 'center'
                        }}>
                            <Image
                                source={require('../../../images/boss.jpg')}
                                style={{ width: 28, height: 28, borderRadius: 14 }}
                            />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{
                                fontSize: 16,
                                color: 'black',
                            }}
                                numberOfLines={1}
                            >
                                {this.props.item.snippet.title}
                            </Text>
                            <Text style={{
                                fontSize: 12,
                            }}
                                numberOfLines={1}
                            >
                                {this.props.item.snippet.channelTitle}
                            </Text>
                            <Text style={{
                                fontSize: 8,
                            }}
                                numberOfLines={1}
                            >
                                {this.props.item.snippet.publishedAt}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}
export default class ListVieos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataVideos: []
        }
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }
    refreshDataFromServer = () => {
        getVideoFromServer().then((news) => {
            this.setState({ dataVideos: news.items })
            // alert(JSON.stringify(news))
        }).catch((error) => {
            this.setState({ dataVideos: [] })
        })
    }
    render() {
        return (
            <View style={{
                flex: 1,
                padding: 10,
                borderTopWidth: 1,
                borderColor: '#F5F5F5'
            }}>
                <FlatList
                    columnWrapperStyle={{ flexWrap: 'wrap' }}
                    numColumns={2}
                    data={this.state.dataVideos}
                    extraData={this.state}
                    keyExtractor={(item, index) => item.id.videoId}
                    renderItem={({ item, index }) => {
                        return (
                            <FlatListItem item={item} index={index} {...this.props} />
                        )
                    }}
                >
                </FlatList>
            </View>
        )
    }
}
