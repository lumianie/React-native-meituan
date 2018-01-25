import React, { Component } from 'react';
import {Text, TouchableOpacity, View, Image, StyleSheet, SectionList} from 'react-native'
import MineListItem from './components/MineListItem'
export default class Mine extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerRight: (
            <View style={{flexDirection: 'row', paddingRight: 10}}>
                <TouchableOpacity>
                    <Image 
                    source={require('../../Source/images/Mine/icon_navigationItem_set_white.png')} 
                    style={style.image}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                    source={require('../../Source/images/Home/icon_navigationItem_message_white.png')} 
                    style={style.image}/>
                </TouchableOpacity>
            </View>
        ),
        headerStyle: {
            backgroundColor: '#06C1AE'
        }
    })

    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        var sections = [
            { key: "0", data: [{ title: "我的钱包", src: require('../../Source/images/Mine/icon_mine_wallet.png'), detail: '666' }, { title: "余额", src: require('../../Source/images/Mine/icon_mine_balance.png'), detail: '123' }, { title: "抵用券", src: require('../../Source/images/Mine/icon_mine_voucher.png'), detail: '2' }, {title: "会员卡", src: require('../../Source/images/Mine/icon_mine_membercard.png'), detail: '10'}] },
            { key: "1", data: [{ title: "好友去哪儿", src: require('../../Source/images/Mine/icon_mine_friends.png'), detail: '' }, { title: "我的评价", src: require('../../Source/images/Mine/icon_mine_comment.png'), detail: '' }, { title: "我的收藏", src: require('../../Source/images/Mine/icon_mine_collection.png'), detail: '' }, { title: "会员中心", src: require('../../Source/images/Mine/icon_mine_membercenter.png'), detail: '' }, { title: "积分商城", src: require('../../Source/images/Mine/icon_mine_member.png'), detail: '' }] },
            { key: "2", data: [{ title: "客服中心", src: require('../../Source/images/Mine/icon_mine_customerService.png'), detail: '' }, { title: '关于美团', src: require('../../Source/images/Mine/icon_mine_aboutmeituan.png'), detail: ''}] }
          ];
        return (
            <SectionList 
                renderSectionHeader={() => this.renderSectionHeader()}
                keyExtractor={(item) => this.keyExtractor(item)}
                ListHeaderComponent={this.renderHeader()}
                ItemSeparatorComponent={() => this.renderSeparator()}
                renderItem={(info) => this.renderItem(info)}
                sections={sections}
            />
        )
    }

    keyExtractor(item) {
        return item.title
    }
    
    renderSeparator() {
        return (
            <View style={{backgroundColor: '#F0F0F0', height: 1}} />
        )
    }

    renderHeader() {
        return (
            <View style={style.container}>
                <View style={style.content}>
                    <Image source={require('../../Source/images/Mine/avatar.png')} style={style.avatar} />
                    <View style={{justifyContent: 'center', marginLeft: 5}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: 'white'}}>Hello</Text>
                            <Image source={require('../../Source/images/Mine/beauty_technician_v15.png')} />
                        </View>
                        <TouchableOpacity>
                            <Text style={{color: 'white', marginTop: 10}}>个人信息 ></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    renderSectionHeader() {
        return (
            <View style={{backgroundColor: '#F0F0F0', height: 12}} />
        )
    }

    renderItem(info) {
        return (
            <MineListItem title={info.item.title} image={info.item.src} detail={info.item.detail} />
        )
    }
}

const style = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: '#06C1AE',
        justifyContent: 'center'
    },
    content: {
        marginLeft: 10,
        flexDirection: 'row'
    },
    avatar: {
        borderRadius: 25,
        width: 50,
        height: 50
    },
    image: {
        marginLeft: 10
    }
})