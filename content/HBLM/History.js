import React, { Component } from "react";
import {
    View, Text, Image,
    FlatList
} from "react-native";
import dataFlatListHistory from "../../data/dataFlatListHistory";

class FlatListItem extends Component{
    render(){
        return(
            <View style={{
                height: 110,
                marginHorizontal: 10,
                paddingVertical: 15,
                
            }}>

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