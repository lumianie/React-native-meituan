import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import HomeDetail from '../HomeDetail'
export default class RecommendItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => this.onPress()}>
                <View style={style.container}>
                    <Image
                        style={style.image}
                        source={{url: this.props.dataSource.imgurl.replace('w.h', '120.0')}}
                        resizeMode='cover'
                    />
                    <View style={style.content}>
                        <Text style={style.name}>{this.props.dataSource.mname}</Text>
                        <Text style={style.title}>{this.props.dataSource.mtitle}</Text>
                        <Text style={style.price}>{this.props.dataSource.price + '元'}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    onPress() {
        this.props.navigation.navigate('HomeDetail', {
            data: this.props.dataSource
        })
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        borderRadius: 5,
        width: 80,
        height: 80,
        margin: 10
    },
    content: {
        marginTop: 10,
        marginLeft: 5,
        width: require('Dimensions').get('window').width - 80 - 35,
        height: 80
    },
    name: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    title: {
        color: '#979797',
        fontSize: 14,
        color: '#979797'
    },
    price: {
        position: 'absolute',
        color: '#06C1AE',
        marginBottom: 0,
        fontWeight: 'bold',
        color: '#06C1AE',
        bottom: 0
    }
})