import React, { Component } from 'react';

import Home from './Views/Home/Home'
import Mine from './Views/Mine/Mine'
import NearBy from './Views/NearBy/NearBy'
import Order from './Views/Order/Order'
import TabBarItem from './Views/Components/TabBarItem'
import PromotionPage from './Views/Home/PromotionPage'
import HomeDetail from './Views/Home/HomeDetail'
import {
    View,
    StyleSheet,
    Image
} from 'react-native'
import {
    StackNavigator,
    TabNavigator
} from 'react-navigation'



export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: '团购'
        }
    }
    render() {
        return (
            <View style={style.container}>
                <TabBar />
            </View>
        )
    }
}

const HomeTab = StackNavigator(
    {
          Home: {
              screen: Home
          },
          PromotionPage: {
              screen: PromotionPage
          },
          HomeDetail: {
              screen: HomeDetail
          }  
    },
    {
        navigationOptions: {
            headerBackTitle:null,  
            showIcon:true,  
            swipeEnabled:false,  
            animationEnabled:false
        }
    }
)

const NearbyTab = StackNavigator(
    {
        NearBy: {
            screen: NearBy
        },
        HomeDetail: {
            screen: HomeDetail
        } 
    },
    {
        navigationOptions: {
            headerBackTitle:null,  
            showIcon:true,  
            swipeEnabled:false,  
            animationEnabled:false
        }
    }
)

const OrderTab = StackNavigator(
    {
        Order: {
            screen: Order
        },
        HomeDetail: {
            screen: HomeDetail
        }
    },
    {
        navigationOptions: {
            headerBackTitle:null,  
            showIcon:true,  
            swipeEnabled:false,  
            animationEnabled:false
        }
    }
)

const MineTab = StackNavigator(
    {
        Mine: {
            screen: Mine
        }
    },
    {
        navigationOptions: {
            headerBackTitle:null,  
            showIcon:true,  
            swipeEnabled:false,  
            animationEnabled:false
        }
    }
)

const TabBar = TabNavigator(
    {
        Home: {
            screen: HomeTab,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '团购',
                tabBarIcon: ({tintColor, focused}) => (
                    <TabBarItem
                        focused={focused}
                        selectImage={require('./Source/images/tabbar/pfb_tabbar_homepage.png')}
                        selectedImage={require('./Source/images/tabbar/pfb_tabbar_homepage_selected.png')}
                    />
                )
            })
        },
        NearBy: {
            screen: NearbyTab,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '附近',
                tabBarIcon: ({tintColor, focused}) => (
                    <TabBarItem
                        focused={focused}
                        selectImage={require('./Source/images/tabbar/pfb_tabbar_merchant.png')}
                        selectedImage={require('./Source/images/tabbar/pfb_tabbar_merchant_selected.png')}
                     />
                )
            })
        },
        Order: {
            screen: OrderTab,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '订单',
                tabBarIcon: ({tintColor, focused}) => (
                    <TabBarItem
                    focused={focused}
                    selectImage={require('./Source/images/tabbar/pfb_tabbar_order.png')}
                    selectedImage={require('./Source/images/tabbar/pfb_tabbar_order_selected.png')}
                     />
                )
            })
        },
        Mine: {
            screen: MineTab,
            navigationOptions: ({navigation}) => ({
                tabBarLabel: '我的',
                tabBarIcon: ({tintColor, focused}) => (
                    <TabBarItem
                    focused={focused}
                    selectImage={require('./Source/images/tabbar/pfb_tabbar_mine.png')}
                    selectedImage={require('./Source/images/tabbar/pfb_tabbar_mine_selected.png')}
                     />
                )
            })
        }
    },
    {
        tabBarPosition: 'bottom',
        animationEnabled: false,
        lazy: true,
        trueinitialRouteName: HomeTab,
        tabBarOptions: {
            activeTintColor: '#06C1AE',
            inactiveTintColor: '#979797'
        }
    }
)




const style = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        color: '#979797'
    },
    selectText: {
        color: '#06C1AE'
    },
    icon: {
        width: 20,
        height: 20
    }
})
