import React from 'react'
// import { DATA } from '../data'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList'
import { useSelector } from 'react-redux'

export const BookedScreen = (props) =>{
    
    const goToPost = (post) =>{
        props.navigation.navigate('Post',{ postId : post.id, booked:post.booked })
    }

    const bookedPosts = useSelector(state=>state.post.bookedPosts) 

    return <PostList data={bookedPosts} goToPost={goToPost} />
}


BookedScreen.navigationOptions=(props)=>({
    headerTitle:'Main screen',
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