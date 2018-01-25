import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
export default class MenuItem extends Component {
    render() {
        return (
            <TouchableOpacity>
                <View style={style.container}>
                    <Image
                        source={this.props.image}
                        style={style.image}
                        resizeMode='cover'>
                    </Image>
                    <Text style={style.title}>
                        {this.props.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: require('Dimensions').get('window').width / 5,
        height: require('Dimensions').get('window').width / 5
    },
    image: {
        width: require('Dimensions').get('window').width / 9,
        height: require('Dimensions').get('window').width / 9
    },
    title: {
        color: '#979797',
        fontSize: 14
    }
}) 