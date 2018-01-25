import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Api from '../../../Api'
import RecommendItem from './RecommendItem'
import Menu from './Menu'
import Promotion from './Promotion'

export default class RecommendList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            refreshing: false
        }
        this.onRefresh = this.onRefresh.bind(this)
    }


    render() {
        return (
            <FlatList
                ListHeaderComponent={this.props.header}
                style={style.container}
                data={this.props.data}
                renderItem={(item) => this.renderItem(item)}
                keyExtractor={(item) => this.keyExtractor(item)}
                automaticallyAdjustContentInsets={true}
                onRefresh={this.onRefresh}
                refreshing={this.state.refreshing}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={{ backgroundColor: '#E4E3EB', height: 1 }} />
                    )
                }}>
            </FlatList>
        )
    }

    
    renderItem(item) {
        return (
            <RecommendItem
                dataSource={this.props.data[item.index]}
                navigation={this.props.navigation}
            />
        )
    }
    keyExtractor(item) {
        return item.id
    }
    onRefresh() {
        this.setState({
            refreshing: true,
            dataArray: []
        })
        this.props.callbackRefresh()
        const timer = setTimeout(() => {
            clearTimeout(timer);
            this.setState({
                refreshing: false
            })
        }, 1500)
    }

}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
})