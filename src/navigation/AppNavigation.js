import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { MainScreen } from '../screens/MainScreen'
import { PostScreen } from '../screens/PostScreen'
import { THEME } from '../theme'
import { Ionicons } from '@expo/vector-icons'
import { BookedScreen } from '../screens/BookedScreen'
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { Platform } from 'react-native'
import { AboutScreen } from '../screens/AboutScreen'
import { CreateScreen } from '../screens/CreateScreen'



const navigatorOptions = {
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: THEME.MAIN_COLOR,
        },
        headerTintColor:'white'
    }
}

const PostNavigator = createStackNavigator(
    {
    Main:MainScreen,
    Post:PostScreen
    },
    navigatorOptions)

const BookedNavigator = createStackNavigator({
    Booked:BookedScreen,
    Post:PostScreen
},navigatorOptions)

const bottomTabsConfig ={
    Post:{
        screen: PostNavigator,
        navigationOptions:{
            tabBarLabel:'All',
            tabBarIcon:info =>(
            <Ionicons name='ios-albums' size = {25} color={info.tintColor} />)
        }
    },
    Booked:{
        screen:BookedNavigator,
        navigationOptions:{
            tabBarLabel:'Choosed',
            tabBarIcon:info=>(
            <Ionicons name='ios-star' size = {25} color={info.tintColor} />)
        }
    }
}


const BottomNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(bottomTabsConfig,{
    activeTintColor:'#fff',
    shifting:true,
    barStyle:{
        backgroundColor: THEME.MAIN_COLOR
    }
}) 
: createBottomTabNavigator(
    bottomTabsConfig,
{
    tabBarOptions:{
        activeTintColor:THEME.MAIN_COLOR
    }
})

const AboutNavigator = createStackNavigator({
    About: AboutScreen
},navigatorOptions)

const CreateNavigator = createStackNavigator({
    Create: CreateScreen
},navigatorOptions)

const MainNavigator = createDrawerNavigator({
    PostTabs:{
        screen:BottomNavigator,
        navigationOptions:{
            drawerLabel:'Main screen'
        }
    },
    About :{
        screen: AboutNavigator,
        navigationOptions:{
            drawerLabel:'About us'
        }
    },
    Create:{
        screen:CreateNavigator,
        navigationOptions:{
            drawerLabel:'Create post'
        }
    }
},{
    contentOptions:{
        activeTintColor:THEME.MAIN_COLOR,
        labelStyle:{
            fontFamily:'open-bold'
        }
    }
})

export const AppNavigation = createAppContainer(MainNavigator)