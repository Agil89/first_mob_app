import React from 'react'
import {FlatList, View, Text,StyleSheet} from 'react-native'
import { Post } from './Post'


export const PostList = (props) =>{
    if (props.data.length === 0){
        return (
            <View style={styles.textView}>
                <Text style={styles.text}>
                    No Posts here
                </Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList 
            keyExtractor={post=>post.id}
            data={props.data}
            renderItem={({item})=><Post post={item} goToPost={props.goToPost} />} />
        </View>
    )
} 

const styles = StyleSheet.create({
    textView:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    },
    text:{
        fontFamily:'open-bold',
        fontSize:20
    }
})