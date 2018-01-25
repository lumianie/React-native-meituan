import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import PromotionItem from './PromotionItem'
import Api from '../../../Api'
export default class Promotion extends Component {

    constructor(props) {
        super(props)
        this.state = {
            dataArray: []
        }
    }


    render() {
        return (
            <View style={style.container} ref='container'>
                {
                    this.state.dataArray.map((value, index) => (
                        <PromotionItem
                        key={index}
                        title={value.maintitle}
                        content={value.deputytitle}
                        imageSource={value.imageurl}
                        tplurl={value.tplurl}
                        color={value.typeface_color}
                        navigation={this.props.navigation}>
                        </PromotionItem>
                    ))
                }
            </View>
        )
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        try {
            let response = await fetch(Api.discount)
            let responseJson = await response.json()
            return this.setState({
                dataArray: responseJson.data
            })
        } catch(error) {
            console.log(error)
        }
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#E4E3EB',
        marginTop: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        alignContent: 'space-around',
        marginBottom: -1
    }
})