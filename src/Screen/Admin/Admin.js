import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { grey, iconSize, lightFont, mainColor, normalText, samllText, white } from '../../Component/DesignTheme'
import { moderateScale, scale } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Admin = () => {

    const [activetab, setActivetab] = useState('Dashboard')

    
  return (
    <View style={styles.container}>
        {
            //#region call all component
            <View style={styles.ComponetsContainer}>
                <ScrollView>
                    <View style={{
                        width:'95%',
                        borderWidth:1,
                        backgroundColor:'red',
                        alignSelf:'center',
                        paddingVertical:moderateScale(5),
                        paddingHorizontal:scale(5)
                    }}>
                        <View style={{flexDirection:'row'}}>
                            <Text>Name</Text>
                            <Text> Sachin</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text>Location</Text>
                            <Text> Sachin</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text>Phone</Text>
                            <Text> Sachin</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
            //#endregion
        }
        {
            //#region  header start
            <View style={styles.bottomNaviagtion}>
                <View style={styles.bottomNaviagtionInner}>
                    <TouchableOpacity style={styles.navigationBtn}> 
                        <AntDesign name='appstore1' color={activetab=='Dashboard'?mainColor:grey} size={iconSize}/>
                        <Text style={[styles.btnText,{color:activetab=='Dashboard'?mainColor:grey}]}>DashBoard</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navigationBtn}> 
                        <AntDesign name='database' color={activetab=='WareHouse'?mainColor:grey} size={iconSize}/>
                        <Text style={[styles.btnText,{color:activetab=='WareHouse'?mainColor:grey}]}>WareHouse</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navigationBtn}> 
                        <MaterialCommunityIcons name='bike-fast' color={activetab=='Delivery'?mainColor:grey} size={iconSize}/>
                        <Text style={[styles.btnText,{color:activetab=='Delivery'?mainColor:grey}]}>Delivery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navigationBtn}> 
                        <AntDesign name='appstore1' color={activetab=='Dashboard1'?mainColor:grey} size={iconSize}/>
                        <Text style={[styles.btnText,{color:activetab=='Dashboard1'?mainColor:grey}]}>DashBoard1</Text>
                    </TouchableOpacity>
                </View>
            </View>
            //#endregion
        }
    </View>
  )
}

export default Admin

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:white
    },
    bottomNaviagtion:{
        height: moderateScale(55),
    },
    ComponetsContainer:{
        flex:9,
        
    },
    navigationBtn:{
        alignItems:'center',
        justifyContent:'center'
    },
    bottomNaviagtionInner:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:scale(10)
    },
    btnText:{
        color:grey,
        fontSize:samllText,
        fontFamily:lightFont,
        marginTop:moderateScale(3)
    }
})