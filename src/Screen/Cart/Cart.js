import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React, { useEffect, useState, } from 'react'
import { useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { moderateScale, scale } from 'react-native-size-matters'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { danger, dark, grey, iconSize, lightFont, mainColor, mediumFont, mediumText, normalText, semiBoldFont, white } from '../../Component/DesignTheme'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Cart = () => {
  const isFoucus = useIsFocused()
  const response = useSelector((state) => state.AddToCartReducers)
  const [itemValue, setItemValue] = useState(1)
  console.log(response, '================')
  const [cartData, setCartData] = useState([])
  const getCartData = () => {
    setCartData(response.cartItem)
  }



  const data = [
    { name: 'Fruit', id: 1, img: require('../../../assets/ProductImages/A.jpeg') },
    { name: 'VegeTable', id: 2, img: require('../../../assets/ProductImages/b.jpeg') },
    { name: 'Rustic BreakFast', id: 3, img: require('../../../assets/ProductImages/c.jpeg') },
    { name: 'Fruit', id: 4, img: require('../../../assets/ProductImages/d.jpeg') },
    { name: 'Fruit', id: 5, img: require('../../../assets/ProductImages/e.jpeg') },
    { name: 'Fruit', id: 6, img: require('../../../assets/ProductImages/f.jpeg') },
    { name: 'Fruit', id: 7, img: require('../../../assets/ProductImages/g.jpeg') },
    { name: 'Fruit', id: 8, img: require('../../../assets/ProductImages/h.jpeg') },
    { name: 'Fruit', id: 9, img: require('../../../assets/ProductImages/i.jpeg') },
    { name: 'Fruit', id: 10, img: require('../../../assets/ProductImages/j.jpeg') }
  ]


  const getTotalPrice = (p) => {
    return p * itemValue
  }

  useEffect(() => {
    getCartData()
  }, [isFoucus])

  useEffect(() => {
    getCartData()
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: white }}>
      <ScrollView>
        <View style={{ marginBottom: scale(30) }}>
          {data != undefined && data.map((item, i) => {
            return (
              <View key={i} style={styles.CartCard}>
                <View style={styles.img}>
                  <Image source={item.img} style={{ height: '100%', width: '100%' }} resizeMode='cover' />
                </View>
                <View style={{ width: '70%', height: '80%', justifyContent: 'space-between', paddingStart: moderateScale(5) }}>
                  <View style={{}}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.price}>85 L.E/30 Pices Plate</Text>
                  </View>

                  <View style={styles.Cart}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <TouchableOpacity style={{ marginRight: scale(5) }}>
                        <AntDesign name='minuscircleo' size={iconSize - 5} color={grey} />
                      </TouchableOpacity>
                      <Text style={[styles.price, { color: '#000', fontFamily: semiBoldFont, fontSize: mediumText + 2, color: mainColor }]}>0</Text>
                      <TouchableOpacity style={styles.btn}>
                        <AntDesign name='pluscircleo' size={iconSize - 3} color={grey} />
                      </TouchableOpacity>
                    </View>

                    <Text style={styles.qunatity}><Text style={{ color: mainColor }}>85</Text> <Text>L.E</Text></Text>
                  </View>
                </View>
              </View>
            )
          })}

          {data.length == 0 &&
            <View style={{ height: moderateScale(300), width: scale(300), alignSelf: 'center', marginTop: scale(100) }}>
              <Image source={require('../../../assets/Carasol/NoDat.png')} resizeMode='cover' style={{ heght: "100%", width: '100%' }} />
              <Text style={{ fontFamily: lightFont, fontSize: normalText + 10, color: danger, textAlign: 'center' }}>No Data in Cart</Text>
            </View>}

          {//#region product price information Detail
            <View style={{ borderWidth: 1, width: '90%', alignSelf: 'center', marginVertical: scale(10), borderColor: '#efefef', paddingVertical: moderateScale(5) }}>
              <View style={styles.priceInfo}>
                <Text style={styles.priceDetail}>Price</Text>
                <Text style={styles.qunatity}><Text style={{ color: dark }}>85</Text> <Text style={{ color: 'grey' }}>L.E</Text></Text>
              </View>

              <View style={styles.priceInfo}>
                <Text style={styles.priceDetail}>Delivery</Text>
                <Text style={styles.qunatity}><Text style={{ color: dark }}>85</Text> <Text style={{ color: 'grey' }}>L.E</Text></Text>
              </View>

              <View style={styles.priceInfo}>
                <Text style={styles.priceDetail}>Total</Text>
                <Text style={styles.qunatity}><Text style={{ color: dark }}>85</Text> <Text style={{ color: 'grey' }}>L.E</Text></Text>
              </View>
            </View>
            //#endregion
          }

          {
            //#region continue button View
            <TouchableOpacity style={styles.confirmButton}>
              <Text style={styles.btnText}>continue</Text>
            </TouchableOpacity>
            //#endregion
          }
        </View>

      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  CartCard: {
    height: moderateScale(120),
    width: '90%',
    alignSelf: 'center',
    marginTop: scale(10),
    borderWidth: 1,
    borderRadius: moderateScale(4),
    backgroundColor: '#ffff',
    borderColor: '#efefef',
    overflow: "hidden",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(10)
  },
  img: {
    height: moderateScale(90),
    width: scale(80),
  },
  icons: {
    backgroundColor: danger,
    padding: moderateScale(6),
    borderRadius: 4,
    marginHorizontal: scale(4)
  },
  itemValue: {
    padding: moderateScale(4),
  },
  itemValueText: {
    fontSize: normalText + 5,
    fontFamily: semiBoldFont
  },
  Cart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  btn: {
    marginHorizontal: scale(5)
  },
  productName: {
    fontSize: mediumText + 2,
    paddingVertical: scale(3)
  },
  price: {
    color: grey,
    fontFamily: lightFont
  },
  priceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: scale(7),
  },
  priceDetail: { fontFamily: mediumFont, fontSize: mediumText, color: grey, paddingVertical: moderateScale(5) },
  confirmButton: {
    width: '90%',
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
  }
});
export default Cart