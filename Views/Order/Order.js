import React, { Component } from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import Header from './components/OrderHeader'
import RecommendList from '../Home/components/RecommendList'
import Api from '../../Api'
export default class Order extends Component {

    static navigationOptions = ({ navigation }) => ({
        headerTitle: '订单'
    })

    constructor() {
        super()
        this.state = {
            dataArray: []
        }
    }

    render() {
        return (
            <RecommendList 
                header={this.renderHeader()}
                data={this.state.dataArray}
                navigation={this.props.navigation}
                callbackRefresh={this.getData.bind(this)}
            />
        )
    }
    renderHeader() {
        return (
            <Header />
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
}