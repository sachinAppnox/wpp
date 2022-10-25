import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale } from 'react-native-size-matters'
import { grey, h4, iconSize, lightFont, mainColor, mediumFont, mediumText, semiBoldFont } from '../../Component/DesignTheme'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useSelector } from 'react-redux'

const ProductInformation = ({route}) => {
    const productData=useSelector((state)=>state.ProductInformationReducer)

    console.log(productData,'------------')
    return (
        <View style={styles.conatiner}>
            {
                //#region param product Image
                <View style={styles.imageConatiner}>
                    <Image source={require('../../../assets/ProductImages/c.jpeg')} style={{ height: '100%', width: '100%' }} />
                </View>
                //#endregion
            }

            {
                //#region  product Image
                <>
                    <View style={{marginTop:scale(10),flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text style={styles.productName}>Badly Staebery</Text>
                        <Text style={styles.price}>85 L.E/30 Pices Plate</Text>
                    </View>

                    <View style={styles.addTocart}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                        <TouchableOpacity style={styles.btn}>
                            <AntDesign name='minuscircleo' size={iconSize-5} color={grey} />
                        </TouchableOpacity>
                        <Text style={[styles.price,{color:'#000',fontFamily:semiBoldFont,fontSize:mediumText+2}]}>0</Text>
                        <TouchableOpacity style={styles.btn}>
                            <AntDesign name='pluscircleo' size={iconSize-3} color={grey} />
                        </TouchableOpacity>
                        </View>
 
                        <Text style={styles.qunatity}><Text style={{ color: mainColor }}>85</Text> <Text>L.E</Text></Text>
                    </View>
                </>
                //#endregion
            }
        </View>
    )
}

export default ProductInformation

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: scale(10)
    },
    img: {
        height: '100%',
        width: "100%"
    },
    imageConatiner: {
        height: moderateScale(260),
        width: "100%"
    },
    price:{
        fontFamily:lightFont,
        fontSize:h4+3,
        color:grey,
        marginVertical:moderateScale(3)
    },
    qunatity:{
        fontFamily:lightFont,
        fontSize:h4+3
    },
    addTocart:{
        flexDirection:'row',
        width:"100%",
        alignSelf:'center',
        justifyContent:"space-between",
        alignItems:'center',
        marginTop:scale(10)
    },
    productName:{
        fontFamily:mediumFont,
        fontSize:mediumText+4
    },
    btn:{
        marginHorizontal:scale(5)
    }
})