import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, s } from 'react-native-size-matters'
import { grey, h4, iconSize, lightFont, mainColor, mediumFont, mediumText, semiBoldFont, white } from '../../Component/DesignTheme'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { color } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'


const CategoryTypeList = () => {
    const navigation=useNavigation()
  return (
        <View style={{flex:1,backgroundColor:"#fafafa"}}>
            {//#region product List Start
                    <View style={{width:"95%",alignSelf:"center"}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{width:'100%',flexDirection:'row',flexWrap:'wrap'}}>
                        {[1,1,1,1,1,1,1,1,1,1,].map((d,i)=>{
                            return(
                                <TouchableOpacity onPress={()=>navigation.navigate('ProductInformation')} style={styles.card}>
                                    {/* //#region product image */}
                                    <View style={styles.imageConatiner}>
                                    <Image source={{uri:'https://www.licious.in/blog/wp-content/uploads/2022/03/Classic-Egg.jpg'}} style={{ height: '100%', width: '100%' }} />
                                    </View>

                                    {/* product details */}
                                    <View>
                                        <Text style={styles.productName}>Badly Egg</Text>
                                        <Text style={styles.price}>85 L.E/30 Pices Plate</Text>
                                        <Text style={styles.qunatity}><Text style={{color:mainColor}}>85</Text> <Text>L.E</Text></Text>
                                    </View>

                                    <View style={styles.addTocart}>
                                        <TouchableOpacity>
                                        <AntDesign name='minuscircleo' size={iconSize -3} color={grey} />
                                        </TouchableOpacity>
                                        <Text style={{color:'#000',fontFamily:semiBoldFont,fontSize:mediumText+2}}>0</Text>
                                        <TouchableOpacity>
                                        <AntDesign name='pluscircleo' size={iconSize -3} color={grey} />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                </ScrollView>
                    </View>
            //#endregion
            }
        </View>

  )
}

export default CategoryTypeList

const styles = StyleSheet.create({
    card:{
        height:moderateScale(270),
        width:'48%',
        backgroundColor:white,
        marginHorizontal:moderateScale(3),
        marginVertical:moderateScale(10),
        borderColor:'#dadada',
        elevation:1,
        borderRadius:8,
        alignItems:"center",
        paddingVertical:moderateScale(3),
        justifyContent:"space-around"
    
    },
    img:{
        height:'100%',
        width:"100%"
    },
    imageConatiner:{
        height:moderateScale(100),
        width:"80%"
    },
    productName:{
        fontFamily:mediumFont,
        fontSize:mediumText
    },
    price:{
        fontFamily:lightFont,
        fontSize:h4,
        color:grey,
        marginVertical:moderateScale(3)
    },
    qunatity:{
        fontFamily:lightFont,
        fontSize:h4
    },
    addTocart:{
        flexDirection:'row',
        width:"90%",
        alignSelf:'center',
        justifyContent:"space-around"
    }
    
})