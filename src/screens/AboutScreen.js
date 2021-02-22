import React from 'react'
import {View, Text,StyleSheet} from 'react-native'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'


export const AboutScreen = ({navigation}) =>{
    return (
        <View style={styles.center}>
            <Text>AboutScreen</Text>
        </View>
    )
}

AboutScreen.navigationOptions= ({navigation}) =>({
    headerTitle:'About',
    // headerRight:(
    //     <HeaderButtons 
    //     HeaderButtonComponent={AppHeaderIcon}>
    //             <Item title='Take photo'
    //             iconName='camera'
    //             onPress={()=> console.log('taking photo')} />
    //         </HeaderButtons>
    //     ),
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
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


