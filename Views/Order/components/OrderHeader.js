import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default class OrderHeader extends Component {

    render() {
        return (
            <View style={style.container}>
                <TouchableOpacity>
                    <View style={style.allOrder}>
                        <View style={{ paddingLeft: 10 }}>
                            <Text>我的订单</Text>
                        </View>
                        <View style={{ paddingRight: 10 }}>
                            <Text style={{ color: '#979797' }}>全部订单 ></Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={style.payMenu}>
                    <TouchableOpacity style={style.payItem}>
                        <View style={{alignItems: 'center'}}>
                            <Image style={style.image} source={require('../../../Source/images/Order/order_tab_need_pay.png')} />
                            <Text style={style.title}>待付款</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.payItem}>
                        <View style={{alignItems: 'center'}}>
                            <Image style={style.image} source={require('../../../Source/images/Order/order_tab_need_use.png')} />
                            <Text style={style.title}>待使用</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.payItem}>
                        <View style={{alignItems: 'center'}}>
                            <Image style={style.image} source={require('../../../Source/images/Order/order_tab_need_review.png')} />
                            <Text style={style.title}>待评价</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={style.payItem}>
                        <View style={{alignItems: 'center'}}>
                            <Image style={style.image} source={require('../../../Source/images/Order/order_tab_needoffer_aftersale.png')} />
                            <Text style={style.title}>退款/售后</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <View style={style.allCollection}>
                        <View style={{ paddingLeft: 10 }}>
                            <Text>我的收藏</Text>
                        </View>
                        <View style={{ paddingRight: 10 }}>
                            <Text style={{ color: '#979797' }}>查看全部 ></Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        paddingTop: 1,
        paddingBottom: 1
    },
    allOrder: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 35,
        alignItems: 'center'
    },
    payMenu: {
        flexDirection: 'row',
        marginTop: 1,
        backgroundColor: 'white'
    },
    payItem: {
        flex: 1,
        height: require('Dimensions').get('window').width / 4 - 20,
        alignItems: 'center'
    },
    image: {
        marginTop: 12,
    },
    title: {
        textAlign: 'center',
        marginTop: 5
    },
    allCollection: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 35,
        alignItems: 'center',
        marginTop: 1
    }
})