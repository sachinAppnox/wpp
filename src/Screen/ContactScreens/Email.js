import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { iconSize, lightFont, mainColor, mediumFont, mediumText, normalText, white } from '../../Component/DesignTheme'
import { moderateScale, scale } from 'react-native-size-matters'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Email = () => {
  // all state
  const [email, setEmail] = useState()

  // all function start here

  // const loginHandler=async()=>{
  //   let objtosend={}
  //   objtosend.email
  //   let response=await getLoginServices(objtosend)
  // }
  return (
    <View style={styles.container}>

      <View style={styles.tollTipBox}>
        <Ionicons name='information-circle-outline' size={iconSize} color={mainColor}/>
        <Text style={styles.info}>You can tell us anythings , if you want us to reply don`t forget to include your email or phone number</Text>
      </View>
      <TextInput multiline style={styles.textInput} value={email} placeholder='Message' />
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.btnText}>Send</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Email

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: 'center'
  },
  CardContainer: {
    width: '90%',
    borderWidth: 1,
    padding: moderateScale(5),
    borderColor: '#efefef',
    backgroundColor: '#fff',
    paddingVertical: moderateScale(15),
    marginTop: moderateScale(15)
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#dadada',
    marginVertical: moderateScale(10),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(4),
    paddingHorizontal: scale(10),
    fontFamily: lightFont,
    width: '95%',
    alignSelf: 'center',
    minHeight: moderateScale(100),
    textAlignVertical: 'top'
  },
  confirmButton: {
    width: '95%',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: mainColor,
    paddingVertical: moderateScale(10),
    borderRadius: 8
  },
  btnText: {
    color: white,
    fontFamily: mediumFont,
    fontSize: mediumText + 3
  },
  Logintext: {
    fontSize: normalText + 1,
    fontFamily: lightFont,
    marginLeft: scale(10),
    paddingVertical: moderateScale(5)
  },
  tollTipBox:{
    width:'95%',
    flexDirection:'row',
    alignItems:'center',
    borderWidth:1,
    padding:moderateScale(7),
    borderRadius:moderateScale(4),
    borderColor:mainColor,
    paddingVertical:moderateScale(10),
    marginVertical:moderateScale(10)
  },
  info:{
    width:'90%',
    fontSize:normalText+0.5,
    marginLeft:scale(5),
    color:mainColor
  }
})