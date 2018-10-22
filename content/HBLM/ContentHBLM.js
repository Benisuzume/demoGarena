import React, { Component } from "react";
import {
    View, Text, Image,
    TouchableOpacity,
    ScrollView, FlatList,
    Dimensions
} from "react-native";
import History from "./History";
const { width, height } = Dimensions.get('window');
export default class ContentHBLM extends Component {
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{
                        height: 85,
                        flexDirection: 'row',
                        padding: 10,
                        backgroundColor: 'white',
                        marginTop: 1,
                        alignItems: 'center',
                        // backgroundColor: 'red',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Image
                                source={require('../../images/logos/cloud9.jpg')}
                                style={{
                                    width: 50,
                                    height: 50,
                                    resizeMode: 'contain'
                                }} />
                            <View style={{
                                justifyContent: 'center',
                                marginLeft: 10,
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    color: 'black',
                                    marginBottom: 3
                                }}>
                                    BánhĐâuXanh
                        </Text>
                                <Text style={{
                                    fontSize: 14
                                }}>
                                    Kỹ năng: 8,497 Bạch Kim IV
                        </Text>
                            </View>
                        </View>
                        <View style={{
                            width: 80,
                            height: 35,
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: '#FFC125',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'flex-end'
                        }}>
                            <Text style={{
                                fontSize: 20,
                                color: '#FFC125'
                            }}>
                                LIVE
                        </Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: 'white',
                        marginTop: 8,
                    }}>
                        <View style={{
                            height: 70,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            width: '95%'
                        }}>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 14
                                }}>
                                    Tổng Số Trận
                        </Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: 'black'
                                }}>
                                    4,443
                        </Text>
                            </View>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Text style={{
                                    fontSize: 14
                                }}>
                                    Tỉ Lệ Thắng
                        </Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: 'black'
                                }}>
                                    51,7%
                        </Text>
                            </View>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 14
                                }}>
                                    Tuổi Tài Khoản
                        </Text>
                                <Text style={{
                                    fontSize: 14,
                                    color: 'black'
                                }}>
                                    2,031 ngày
                        </Text>
                            </View>
                        </View>

                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '5%',
                        }}>
                            <Image
                                source={require('../../icons/arrow-point-to-right.png')}
                                style={{ width: 14, height: 14, tintColor: '#BEBEBE' }} />
                        </View>
                    </View>
                    <View style={{
                        height: 125,
                        backgroundColor: '#F5F5F5',
                        marginVertical: 8,
                        flexDirection: 'row'
                    }}>
                        <View style={{
                            flex: 1,
                            marginRight: 8,
                            backgroundColor: 'white'
                        }}>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: 5,
                            }}>
                                <Text style={{
                                    fontSize: 15,
                                    marginLeft: 5
                                }}>
                                    Tướng Của Tôi
                            </Text>
                                <Image
                                    source={require('../../icons/arrow-point-to-right.png')}
                                    style={{ width: 14, height: 14, tintColor: '#BEBEBE' }}
                                />
                            </View>
                            <View style={{ flex: 3 }}>
                                <Image
                                    source={require('../../images/tristana.jpg')}
                                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                                />
                            </View>
                        </View>
                        <View style={{
                            flex: 1,
                            backgroundColor: 'white'
                        }}>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: 5,
                            }}>
                                <Text style={{
                                    fontSize: 15,
                                    marginLeft: 5
                                }}>
                                    Xu Hướng
                            </Text>
                                <Image
                                    source={require('../../icons/arrow-point-to-right.png')}
                                    style={{ width: 14, height: 14, tintColor: '#BEBEBE' }}
                                />
                            </View>
                            <View style={{ flex: 3 }}>
                                <Image
                                    source={require('../../images/leesin.jpg')}
                                    style={{ width: '100%', height: '100%', resizeMode: 'cover' }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{
                        height: 15,
                        backgroundColor: 'white'
                    }}>
                    </View>
                    <View style={{
                        height: 30,
                        backgroundColor: 'white',
                        borderLeftWidth: 4,
                        borderColor: 'blue',
                        paddingHorizontal: 8,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 22,
                            color: 'black'
                        }}>
                            Lịch Sử Trận Đấu
                    </Text>
                        <View style={{
                            width: 80,
                            height: 25,
                            flexDirection: 'row',
                            paddingHorizontal: 5,
                            justifyContent: 'space-between',
                            borderWidth: 1,
                            borderColor: '#9C9C9C',
                            alignItems: 'center'
                        }}>
                            <Image
                                source={require('../../icons/friend.png')}
                                style={{ width: 14, height: 14 }} />
                            <Text style={{
                                fontSize: 14,
                                color: 'black'
                            }}>
                                Bạn Bè
                        </Text>
                        </View>
                    </View>
                    <View style={{
                        width: width,
                        backgroundColor: '#F5F5F5'
                    }}>
                        <History {...this.props} />
                    </View>
                </View>
            </ScrollView >
        )
    }
}