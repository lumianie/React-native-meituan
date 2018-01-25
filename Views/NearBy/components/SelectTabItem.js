import React, { Component } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

export default class SelectTabItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <View style={style.container}>
                {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
            </View>
        )
    }

    renderTabOption(tab, i) {
        const textColor = this.props.activeTab == i ? '#FA3C5B' : '#515151'
        const indicatorColor = this.props.activeTab == i ? '#FA3C5B' : 'white'
        return (
            <TouchableOpacity onPress={() => this.props.goToPage(i)} style={style.tabItem} key={i}>
                <View>
                    <Text style={{ color: textColor, lineHeight: 46, textAlign: 'center' }}>
                        {this.props.tabNames[i]}
                    </Text>
                    <View style={{height: 4, backgroundColor: indicatorColor}} />
                </View>
            </TouchableOpacity>
        )
    }
}

const style = StyleSheet.create({
    container: {
        marginTop: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 50
    },
    tabItem: {
        flex: 1
    }
})