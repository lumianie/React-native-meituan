import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default class TagMenu extends Component {

    constructor() {
        super()
        this.state = {
            selectedTag: 0
        }
    }

    render() {
        return (
            <View style={style.container}>
                {this.props.tags.map((tag, index) => this.renderTagItem(tag, index))}
            </View>
        )
    }

    renderTagItem(tag, index) {
        let textColor = index === this.state.selectedTag ? 'white' : '#515151'
        let backgroundColor = index === this.state.selectedTag ? '#FA3C5B' : 'white'
        let screenWidth = require('Dimensions').get('window').width
        return (
            <TouchableOpacity onPress={() => this.press(index)} key={index}>
                <View style={{backgroundColor: backgroundColor, width: (screenWidth - 50) / 4, height: 30, marginLeft: 10, marginTop: 6, marginBottom: 6, borderRadius: 20, justifyContent: 'center', overflow:'hidden'}}>
                    <Text style={{color: textColor, textAlign: 'center'}}>{this.props.tags[index]}</Text>
                </View> 
            </TouchableOpacity>
        )
    }

    press(index) {
        this.setState({
            selectedTag: index
        })
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#F0F0F0'
    }
})