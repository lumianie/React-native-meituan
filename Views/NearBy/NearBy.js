import React, { Component } from 'react';

import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native'
import SelectTabItem from './components/SelectTabItem'
import ScrollableTab from 'react-native-scrollable-tab-view'
import Food from './Food'

export default class NearBy extends Component {
    static navigationOptions = (navigation) => ({
        headerStyle: {
            backgroundColor: '#FFFFFF'
        },
        headerLeft: (
            <TouchableOpacity>
                <View style={style.addressContainer}>
                    <Image source={require('../../Source/images/Public/icon_food_merchant_address.png')} style={{ marginLeft: 8 }} />
                    <Text
                        style={style.address}
                        onPress={() => {

                        }}>
                        福州 鼓楼
                    </Text>
                </View>
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity>
                <View style={style.searchBox}>
                    <Image
                        style={style.searchIcon}
                        source={require('../../Source/images/Home/search_icon.png')}
                    />
                    <Text style={style.text}>
                        找附近的吃喝玩乐
                    </Text>
                </View>
            </TouchableOpacity>
        )
    })

    render() {
        let tabName = ['享美食', '住酒店', '爱玩乐', '全部']
        let tagName1 = ['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜']
        let tagName2 = ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠', '成人情趣']
        let tagName3 = ['热门', 'KTV', '足疗按摩', '洗浴汗蒸', '大宝剑', '电影院', '美发', '美甲']
        let tagName4 = []
        return (
            <ScrollableTab
                renderTabBar={() => <SelectTabItem tabNames={tabName} />}
                tabBarPosition='top'>
                <View tabLabel='享美食'>
                    <Food navigation={this.props.navigation} tagArray={tagName1} />
                </View>
                <View tabLabel='住酒店'>
                    <Food navigation={this.props.navigation} tagArray={tagName2} />
                </View>
                <View tabLabel='爱玩乐'>
                    <Food navigation={this.props.navigation} tagArray={tagName3} />
                </View>
                <View tabLabel='全部'>
                    <Food navigation={this.props.navigation} tagArray={tagName4} />
                </View>
            </ScrollableTab>
        )
    }
}

const style = StyleSheet.create({
    addressContainer: {
        flexDirection: 'row'
    },
    address: {
        color: 'black',
        marginLeft: 5
    },
    searchBox: {
        flexDirection: 'row',
        width: require('Dimensions').get('window').width - 40 - 80,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 20,
        bottom: 5,
        backgroundColor: '#EAEAEA'
    },
    searchIcon: {
        width: 20,
        height: 20,
        backgroundColor: '#EAEAEA'
    },
    text: {
        color: '#979797'
    }
})