import React,{useState, useRef} from 'react'
import {View, Text,StyleSheet,TextInput, Image,Button,ScrollView,TouchableWithoutFeedback,Keyboard} from 'react-native'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import { AntDesign } from '@expo/vector-icons'
import { THEME } from '../theme'
import { useDispatch } from 'react-redux'
import { addPost } from '../store/actions/postActions'
import { PhotoPicker } from '../components/PhotoPicker'


export const CreateScreen = ({navigation}) =>{
    const dispatch = useDispatch()
    const [text,setText] = useState('')
    const imgRef = useRef()
    
    const saveHandler = () =>{
        const post = {
            date: new Date().toJSON(),
            text:text,
            img:imgRef.current,
            booked:false
        }
        dispatch(addPost(post))
        navigation.navigate('Main')
    }

    const photoPickHandler= uri =>{
        imgRef.current = uri
    }
    
    return (
            <ScrollView>
               <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
                <View style={styles.center}>
                    <View style={styles.titleParent}>
                     <Text style={styles.title}>Create Post</Text>
                    </View>
                    <TextInput 
                    style={styles.textArea} 
                    placeholder='Type your text here' 
                    value={text} 
                    onChangeText={setText} 
                    multiline
                    />
                    <PhotoPicker onPick={photoPickHandler} />
                    <Button style={styles.button} 
                    title='Add post' 
                    color={THEME.MAIN_COLOR} 
                    onPress={saveHandler}
                    disabled={!text || !imgRef.current}/>
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
    )
}



CreateScreen.navigationOptions= ({navigation}) =>({
    headerTitle:'Create',
    headerRight:(
        <HeaderButtons 
        HeaderButtonComponent={AppHeaderIcon}>
                <Item title='Take photo'
                iconName='camera'
                onPress={()=> console.log('taking photo')} />
            </HeaderButtons>
        ),
    headerLeft:(
        <HeaderButtons 
        HeaderButtonComponent={AppHeaderIcon}>
                <Item title='Toggle Drawer'
                iconName='ios-menu'
                onPress={()=> navigation.toggleDrawer()} />
            </HeaderButtons>
        ),
})

const styles = StyleSheet.create({
    titleParent:{
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10
    },
    center:{
        
    },
    title:{
        fontFamily:'open-bold'
    },
    textArea:{
        paddingHorizontal:10,
        paddingVertical:15
    },
    image:{
        width:'100%',
        height:200,
        marginBottom:10
    },
    button:{
        marginTop:20
    }
})