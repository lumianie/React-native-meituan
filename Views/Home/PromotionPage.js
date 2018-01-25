import React, {Component} from 'react'
import {View, Text, StyleSheet, WebView} from 'react-native'


export default class PromotionPage extends Component {
    static navigationOptions = {
        title: '促销',
        tabBarVisible: false
    }
    render() {
        let location = this.props.navigation.state.params.tplurl.indexOf('http')
        let url = this.props.navigation.state.params.tplurl.slice(location)
        console.log(url)
        return (
            <WebView
                source={{url: url}}
            />
        )
    }
}