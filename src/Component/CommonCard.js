import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters';
import { danger, green, grey, iconSize, lightFont, mediumFont, normalText, white } from './DesignTheme';
import AntDesign from 'react-native-vector-icons/AntDesign'
const CommonCard = ({item}) => {
  // console.log(item)

  
  return (
    <View style={styles.Card}>
      <Image source={item.img} style={{height:moderateScale(130),width:"100%"}} resizeMode='cover'/>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:moderateScale(5)}}>
      <Text style={[styles.foodName]}>{item.name}</Text>
      <AntDesign name='heart' size={iconSize-7} color={item.like?danger:white}/>
      </View>
      <View style={{paddingHorizontal:scale(5)}}>
        <Text style={{color:grey,fontFamily:mediumFont}}>{item.off}</Text>
      </View>

      <Text style={styles.rating}>3 <AntDesign name='star' size={iconSize-15.6} color={white}/></Text>
    </View>
  )
}
const styles = StyleSheet.create({
    Card:{
        width:scale(200),
        height:moderateScale(185),
        marginRight:scale(10),
        borderRadius:moderateScale(10),
        backgroundColor:"#efefef",
        overflow:'hidden'
    },
    foodName:{
      fontSize:normalText+2,
      fontFamily:lightFont,
      color:grey
    },
    rating:{
      fontSize:normalText+1,
      color:white,
      fontFamily:mediumFont,
      backgroundColor:green,
      paddingHorizontal:scale(10),
      borderRadius:moderateScale(8),
      width:scale(40),
      position:'absolute',
      textAlignVertical:'center',
      // bottom:scale(-5),
      right:0,
      borderBottomEndRadius:0,
      borderBottomRightRadius:0

    }
});
export default CommonCard