import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import RecommendList from './components/RecommendList'
import Api from '../../Api'

export default class HomeDetail extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: '团购详情',
        tabBarVisible: false,
        headerRight: (
            <Image 
                source={require('../../Source/images/Public/icon_navigationItem_share.png')}
                style={{marginRight: 10}}
            />
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
            <RecommendList 
                header={this.renderHeader()}
                data={this.state.dataArray}
                callbackRefresh={this.getData.bind(this)}
                navigation={this.props.navigation}
            />
        )
    }

    componentDidMount(){
        this.getData()
    }

    getData() {
        //推荐数据找不到只能用首页数据
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
        let dataArray = this.props.navigation.state.params.data
        return (
            <View style={{backgroundColor: '#F0F0F0'}}>
                <Image
                    style={style.image}
                    source={{url: dataArray.imgurl.replace('w.h', '480.0')}}
                />
                <View style={style.priceContainer}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={style.currency}>
                            <Text style={{color: '#06C1AE', fontSize: 12}}>￥</Text>
                        </View>
                        <View style={style.price}>
                            <Text style={{color: '#06C1AE', fontSize: 30}}>{dataArray.price}</Text>
                        </View>
                        <View style={style.priceTitle}>
                            <Text style={{color: '#979797', fontSize: 12}}>门市价:</Text>
                        </View>
                        <View style={style.localPrice}>
                            <Text style={{color: '#979797', fontSize: 12}}>￥{(dataArray.price * 1.1).toFixed(0)}</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => this.order()}>
                    <View style={{paddingRight: 10}}>
                        <View style={style.order}>
                            <Text style={{color: 'white', fontSize: 14}}>立即抢购</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                </View>
                <View style={style.tips}>
                    <View style={{marginLeft: 10, flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={style.tipsImage}
                            source={require('../../Source/images/Home/icon_deal_anytime_refund.png')} 
                        />
                        <Text style={{marginLeft: 10, color: '#89B24F'}}>随时退</Text>
                    </View>
                    <View style={style.soldsNum}>
                        <Text style={{textAlign:'center', color: '#979797'}}>已售{dataArray.solds}</Text>
                    </View>
                </View>
                <View style={style.favTitle}>
                    <Text style={style.title}>
                        看了本团购的用户还看了
                    </Text>
                </View>
            </View>
        )
    }
    order() {

    }
}

const style = StyleSheet.create({
    image: {
        width: require('Dimensions').get('window').width,
        height: require('Dimensions').get('window').width * 0.5,
    },
    priceContainer: {
        justifyContent: 'space-between',
        backgroundColor: 'white',
        flexDirection: 'row',
        width: require('Dimensions').get('window').width,
        height: 50
    },
    tips: {
        backgroundColor: 'white',
        justifyContent: 'space-between',
        marginTop: 1,
        flexDirection: 'row',
        width: require('Dimensions').get('window').width,
        height: 35,
    },
    favTitle: {
        marginTop: 10,
        backgroundColor: 'white',
        height: 30,
        justifyContent: 'center',
        marginBottom: 1,
        paddingLeft: 10
    },
    title: {
        marginLeft: 15,
        color: '#979797'
    },
    currency: {
        marginLeft: 10,
        paddingBottom: 10,
        justifyContent: 'flex-end'        
    },
    price: {
        paddingBottom: 5,
        justifyContent: 'flex-end',
    },
    priceTitle: {
        paddingBottom: 10,
        justifyContent: 'flex-end',
        marginLeft: 10
    },
    localPrice: {
        paddingBottom: 10,
        justifyContent: 'flex-end',
        marginLeft: 10
    },
    order: {
        width: 70,
        height: 30,
        borderRadius: 5,
        backgroundColor: 'orange',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tipsImage: {
        width: 20,
        height: 20,
    },
    soldsNum: {
        paddingRight: 10,
        alignItems: 'center', 
        justifyContent: 'center',
    }
})