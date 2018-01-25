import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import PromotionPage from '../PromotionPage'

export default class Promotion extends Component {
    render() {
        let imageURL = this.props.imageSource.replace('w.h', '120.0')
        return (
            <TouchableOpacity onPress={() => this.pushToPromotionPage()}>
                <View style={style.container}>
                    <View style={style.titleContainer}>
                        <Text
                            style={{ color: this.props.color, textAlign: 'center', marginBottom: 10, fontSize: 13 }}>
                            {this.props.title}
                        </Text>
                        <Text style={style.content}>{this.props.content}</Text>
                    </View>
                    <Image
                        style={style.image}
                        source={{ url: imageURL }}
                    />
                </View>
            </TouchableOpacity>
        )
    }
    pushToPromotionPage() {
        console.log(this.props.tplurl)
        this.props.navigation.navigate('PromotionPage', {'tplurl': this.props.tplurl})
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: (require('Dimensions').get('window').width - 1) / 2,
        height: (require('Dimensions').get('window').width - 1) / 4,
        marginBottom: 1
    },
    titleContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: 80,
        height: (require('Dimensions').get('window').width - 1) / 4
    },
    image: {
        width: require('Dimensions').get('window').width / 5,
        height: require('Dimensions').get('window').width / 5
    },
    content: {
        textAlign: 'center',
        color: '#979797'
    }
})