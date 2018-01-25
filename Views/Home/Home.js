import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View, Fetch } from "react-native"
import Api from '../../Api'
import RecommendList from './components/RecommendList'
import Menu from './components/Menu'
import Promotion from './components/Promotion'

export default class Home extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: '#06C1AE'
        },
        headerLeft: (
            <TouchableOpacity>
                <Text
                    style={style.address}
                    onPress={() => {

                    }}>
                    福州
                </Text>
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity>
                <Image
                    style={style.noti}
                    source={require('../../Source/images/Home/icon_navigationItem_message_white.png')}
                    onPress={() => {

                    }}>
                </Image>
            </TouchableOpacity>
        ),
        headerTitle: (
            <TouchableOpacity>
                <View style={style.searchBox}>
                    <Image
                        style={style.searchIcon}
                        source={require('../../Source/images/Home/search_icon.png')}
                    />
                    <Text style={style.text}>
                        一点点
                    </Text>
                </View>
            </TouchableOpacity>
        )
    })
    constructor(props) {
        super(props)
        this.state = {
            dataArray: []
        }
    }

    render() {
        return (
            <View>
                <RecommendList 
                    navigation={this.props.navigation}
                    header={this.renderHeader()}
                    data={this.state.dataArray}
                    callbackRefresh={this.getData.bind(this)}
                />
            </View>
        )
    }

    componentWillMount() {
        this.getData()
    }

    getData() {
        fetch(Api.recommend)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    dataArray: responseJson.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    renderHeader() {
        return (
            <View style={style.menuContainer}>
                <Menu />
                <Promotion
                    navigation={this.props.navigation}
                />
                <View style={style.favTitle}>
                    <Text style={style.title}>
                        猜你喜欢
                    </Text>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    address: {
        color: 'white',
        marginLeft: 8
    },
    noti: {
        marginRight: 8
    },
    searchBox: {
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
        width: require('Dimensions').get('window').width * 0.75,
        height: 30,
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchIcon: {
        width: 20,
        height: 20
    },
    text: {
        color: '#979797'
    },
    title: {
        marginLeft: 15,
        color: '#979797'
    },
    menuContainer: {
        backgroundColor: '#F0F0F0',
    },
    favTitle: {
        marginTop: 10,
        backgroundColor: 'white',
        height: 30,
        justifyContent: 'center',
        marginBottom: 1,
        paddingLeft: 10
    }
})