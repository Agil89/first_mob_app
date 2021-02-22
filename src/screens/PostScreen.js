import React,{ useEffect,useCallback } from 'react'
import {View, Text,StyleSheet,Image,Button,ScrollView,Alert} from 'react-native'
import { THEME } from '../theme'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { useDispatch,useSelector } from 'react-redux'
import { removePost, toggleBooked } from '../store/actions/postActions'



export const PostScreen = ({navigation}) =>{

    const dispatch = useDispatch()


    const postId = navigation.getParam('postId')

    const toggleHandler = useCallback(() =>{
        dispatch(toggleBooked(postId))
    },[dispatch,postId])

    useEffect(()=>{
        navigation.setParams({toggleHandler})
    },[toggleHandler])

    const booked = useSelector(state=> state.post.bookedPosts.some(post=>post.id === postId))

    useEffect(()=>{
        navigation.setParams({booked})
    },[booked])

    const post = useSelector(state=>state.post.allPosts.find(p=> p.id===postId ))

    const onDeleteHandler = () =>{
        Alert.alert(
            "Deleting post",
            "Are you sure?",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              { text: "OK", onPress: () => {
                  navigation.navigate('Main')
                  dispatch(removePost(postId))} }
            ],
            { cancelable: false }
          );
      
    }
    if (!post){
        return null;
    }

    return (
        <ScrollView style={styles.ImageView}>
            <View>
                <Image style={styles.image} source={{uri:post.img}} />
            </View>
            <View style={styles.textView}>
                <Text>{post.text}</Text>
            </View>
            <View style={styles.buttonView}>
                <Button title='Delete' color={THEME.DANGER_COLOR} onPress={onDeleteHandler} />
            </View>
        </ScrollView>
    )
}


PostScreen.navigationOptions=({navigation})=>{
     const postId = navigation.getParam('postId')
     const booked = navigation.getParam('booked')
     const toggleHandler = navigation.getParam('toggleHandler')
     const iconNamee = booked ? 'ios-star' : 'ios-star-outline'
     
    return{
        headerTitle:'Post number '+ postId,
        headerRight:(
            <HeaderButtons 
            HeaderButtonComponent={AppHeaderIcon}>
                    <Item title='Booked star'
                    iconName={iconNamee}
                    onPress={toggleHandler} />
                </HeaderButtons>
            ),
    }
}

const styles = StyleSheet.create({
    ImageView:{
        padding:5
    },
    image:{
        width:'100%',
        height:200
    },
    textView:{
        alignItems:'center',
        paddingVertical:10
    },
    buttonView:{
        padding:5,
        justifyContent:'flex-end',
    }
})