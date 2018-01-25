import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'


export default class PageControl extends Component {

    componentDidMount() {
    }

    render() {
        var indicatorArray = []
        for(let i = 0; i < this.props.dataArray.length; i++) {
            let indicator = (
                <View
                    style={this.props.pageNumber === i ? style.selected : style.normal}
                    key={i}

                 />
            )
            indicatorArray.push(indicator)
        }

        return (
            <View
                style={style.container}>
                {indicatorArray}
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    selected: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#06C1AE',
        margin: 5
    },
    normal: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: 'gray',
        margin: 5
    }
})