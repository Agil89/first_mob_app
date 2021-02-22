import React from 'react'
import {View,Text,ImageBackground,StyleSheet,TouchableOpacity} from 'react-native'


export const Post = (props) =>{

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={()=>props.goToPost(props.post)}>
            <View style={styles.post}>
                <ImageBackground style={styles.image} source={{uri:props.post.img}} >
                    <View style={styles.textWrap}>
                        <Text style={styles.title}>
                            {new Date(props.post.date).toLocaleDateString()}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    post:{
        marginBottom:10,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:200
    },
    textWrap:{
        backgroundColor:'rgba(0,0,0,0.5)',
        paddingVertical:5,
        alignItems:'center',
        width:'100%'
    },
    title:{
        color:'#fff',
        fontFamily:'open-regular'
    }

})