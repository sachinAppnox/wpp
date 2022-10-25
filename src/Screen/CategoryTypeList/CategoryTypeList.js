import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, s } from 'react-native-size-matters'
import { grey, h4, iconSize, lightFont, mainColor, mediumFont, mediumText, semiBoldFont, white } from '../../Component/DesignTheme'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { color } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'


const CategoryTypeList = () => {
    const navigation=useNavigation()
    const distpatch=useDispatch()
    const data = [
        { name: 'Fruit', id: 1,img:require('../../../assets/ProductImages/A.jpeg')},
        { name: 'VegeTable', id: 2 ,img:require('../../../assets/ProductImages/b.jpeg')},
        { name: 'Rustic BreakFast', id: 3,img:require('../../../assets/ProductImages/c.jpeg')},
        { name: 'Fruit', id: 4,img:require('../../../assets/ProductImages/d.jpeg') },
        { name: 'Fruit', id: 5 ,img:require('../../../assets/ProductImages/e.jpeg')},
        { name: 'Fruit', id: 6,img:require('../../../assets/ProductImages/f.jpeg')},
        { name: 'Fruit', id: 7,img:require('../../../assets/ProductImages/g.jpeg')},
        { name: 'Fruit', id: 8,img:require('../../../assets/ProductImages/h.jpeg')},
        { name: 'Fruit', id: 9,img:require('../../../assets/ProductImages/i.jpeg')},
        { name: 'Fruit', id:10,img:require('../../../assets/ProductImages/j.jpeg')}
    ]
  return (
        <View style={{flex:1,backgroundColor:"#fafafa"}}>
            {//#region product List Start
                    <View style={{width:"95%",alignSelf:"center"}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{width:'100%',flexDirection:'row',flexWrap:'wrap'}}>
                        {data.map((d,i)=>{
                            // console.log(d)
                            return(
                                <TouchableOpacity 
                                onPress={()=>{
                                    distpatch({
                                        type:'Product_Information',
                                        payload:d
                                    })
                                    navigation.navigate('ProductInformation',{product:d})} 
                                }
                                style={styles.card}>
                                    {/* //#region product image */}
                                    <View style={styles.imageConatiner}>
                                    <Image source={d.img} style={{ height: '100%', width: '100%' }} />
                                    </View>

                                    {/* product details */}
                                    <View>
                                        <Text style={styles.productName}>{d.name}</Text>
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