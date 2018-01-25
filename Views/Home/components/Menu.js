import React, { Component } from 'react'
import { Text, ScrollView, View, StyleSheet } from 'react-native'
import MenuItem from './MenuItem'
import Api from '../../../Api'
import PageControl from '../../Components/PageControl'

export default class Menu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pageCount: 0
        }
    }


    render() {
        //数组转View模型数组
        let itemArray = Api.menuInfo.map((value, index) => (
            <MenuItem
                image={value.icon}
                title={value.title}
                key={index}>
            </MenuItem>
        ))

        let menuViews = []//单个MenuView
        let pageCount = Math.ceil(itemArray.length / 10)

        for (let i = 0; i < pageCount; i++) {
            let items = itemArray.slice(i * 10, i * 10 + 10)

            let menuView = (
                <View style={style.itemsView} key={i}>
                    {items}
                </View>
            )
            menuViews.push(menuView)
        }

        return (
            <View style={style.container}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    contentContainerStyle={style.content}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={(event) => {
                        let x = event.nativeEvent.contentOffset.x / require('Dimensions').get('window').width
                        this.setState({
                            pageCount: x
                        })
                    }}>
                    {menuViews}
                </ScrollView>
                <PageControl
                    dataArray={menuViews}
                    style={style.indicator}
                    pageNumber={this.state.pageCount}>
                </PageControl>
            </View>
        )
    }


}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    content: {
        height: require('Dimensions').get('window').width * 0.4
    },
    itemsView: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        width: require('Dimensions').get('window').width
    },
    indicator: {
        
    }
})

