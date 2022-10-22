import { StyleSheet, Text, TextInput, View,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { lightFont, mainColor, mediumFont, mediumText, normalText, white } from '../../Component/DesignTheme'
import { moderateScale, scale } from 'react-native-size-matters'

const Login = () => {
  // all state
  const [phoneNumber, setphoneNumber] = useState()

  // all function start here
  
  // const loginHandler=async()=>{
  //   let objtosend={}
  //   objtosend.phoneNumber
  //   let response=await getLoginServices(objtosend)
  // }
  return (
    <View style={styles.container}>
        {
          //#region Login View start
          <View style={styles.CardContainer}>
              <Text style={styles.Logintext}>Login / Register with Phone number </Text>

              {/* input feild here */}
              <TextInput style={styles.textInput} value={phoneNumber} keyboardType='number-pad' placeholder='Enter mobile Number'/>

              {/* Verfify button is here */}

              <TouchableOpacity style={styles.confirmButton}>
              <Text style={styles.btnText}>continue</Text>
            </TouchableOpacity>
          </View>
          //#endregion
        }
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:white,
    alignItems:'center'
  },
  CardContainer:{
    width:'90%',
    borderWidth:1,
    padding:moderateScale(5),
    borderColor:'#efefef',
    backgroundColor:'#fff',
    paddingVertical:moderateScale(15),
    marginTop:moderateScale(15)
  },
  textInput:{
    borderWidth:1,
    borderColor:'#dadada',
    marginVertical:moderateScale(10),
    paddingVertical:moderateScale(10),
    borderRadius:moderateScale(4),
    paddingHorizontal:scale(10),
    fontFamily:lightFont,
    width:'95%',
    alignSelf:'center'
  },
  confirmButton:{
    width:'95%',
    alignItems:'center',
    alignSelf:'center',
    backgroundColor:mainColor,
    paddingVertical:moderateScale(10),
    borderRadius:8
  },
  btnText:{
    color:white,
    fontFamily:mediumFont,
    fontSize:mediumText+3
  },
  Logintext:{
    fontSize:normalText+1,
    fontFamily:lightFont,
    marginLeft:scale(10),
    paddingVertical:moderateScale(5)
  }
})