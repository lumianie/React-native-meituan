import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import TagMenu from './components/TagMenu'
import RecommendList from '../Home/components/RecommendList'
import Api from '../../Api'

export default class Food extends Component {

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
            <TagMenu tags={this.props.tagArray} />
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