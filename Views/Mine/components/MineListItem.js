import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default class MineListItem extends Component {
    render() {
        return (
            <View style={style.item}>
                <View style={style.leftView}>
                    <Image source={this.props.image} />
                    <Text style={{marginLeft: 5}}>{this.props.title}</Text>
                </View>
                <View style={style.rightView}>
                    <Text style={{color: '#979797', marginRight: 5}}>{this.props.detail}</Text>
                    <Image source={require('../../../Source/images/Public/cell_arrow.png')} style={{height: 14, width: 14}} />
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftView: {
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightView: {
        paddingRight: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})