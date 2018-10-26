import React, { Component } from "react";
import {
    View, Text, Image,
    FlatList, Dimensions
} from "react-native";
import { getNewsFromServer } from "../../networking/Server";

const width = Dimensions.get('window');
class FlatListItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                height: 200,
                marginBottom: 10,
                marginRight: this.props.index % 2 == 0 ? 10 : 0,
                backgroundColor: 'white',
                padding: 10
            }}>
                <Text style={{
                    fontSize: 16,
                    color: 'black'
                }}
                    numberOfLines={2}>
                    {this.props.item.body}
                </Text>
                <Image
                    source={require('../../images/champion.jpg')}
                    style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain'
                    }}

                />
            </View>
        )
    }
}

export default class ContentNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotsFromServer: [],
        }
    }

    componentDidMount() {
        this.refreshDataFromServer();
    }

    refreshDataFromServer = () => {
        getNewsFromServer().then((hots) => {
            this.setState({ hotsFromServer: hots })
            // alert(JSON.stringify(this.state.hotsFromServer))
        }).catch((error) => {
            this.setState({ hotsFromServer: [] })
        })
    }

    render() {
        return (
            <FlatList
                columnWrapperStyle={{ flexWrap: 'wrap', flex: 1 }}
                numColumns={2}
                data={this.state.hotsFromServer}
                extraData={this.state}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <FlatListItem item={item} index={index} parentFlatList={this} />
                    )
                }}
            >

            </FlatList>
        )
    }
}