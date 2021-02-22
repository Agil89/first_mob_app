import React,{useEffect} from 'react'
// import {View, Text,StyleSheet,Button, FlatList,Alert} from 'react-native'
// import { DATA } from '../data'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import { useDispatch ,useSelector } from 'react-redux'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'
import { loadPosts } from '../store/actions/postActions'

export const MainScreen = (props) =>{
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(loadPosts())
    },[dispatch])

    const allPosts = useSelector(state=>state.post.allPosts)

    const goToPost = (post) =>{
        props.navigation.navigate('Post',{ postId : post.id, booked:post.booked })
    }
    return <PostList data={allPosts} goToPost={goToPost} />
}


MainScreen.navigationOptions= (props) =>({
    headerTitle:'Main screen',
    headerRight:(
        <HeaderButtons 
        HeaderButtonComponent={AppHeaderIcon}>
                <Item title='Take photo'
                iconName='camera'
                onPress={()=> props.navigation.push('Create')} />
            </HeaderButtons>
        ),
    headerLeft:(
        <HeaderButtons 
        HeaderButtonComponent={AppHeaderIcon}>
                <Item title='Toggle Drawer'
                iconName='ios-menu'
                onPress={()=> props.navigation.toggleDrawer()} />
            </HeaderButtons>
        ),
})
// const styles = StyleSheet.create({
//     center:{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center'
//     }
// })