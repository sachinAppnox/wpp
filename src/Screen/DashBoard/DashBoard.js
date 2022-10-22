// import { View, Text, StatusBar, FlatList, TouchableOpacity, Image, Modal } from 'react-native'
// import React, { useState } from 'react'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { danger, mediumFont, mediumText } from '../../Component/DesignTheme'
// import { moderateScale, scale } from 'react-native-size-matters'
// import * as Localization from 'expo-localization';
// import i18n from 'i18n-js'
// import { en, hi } from '../../Component/LocalizedString/LocalizedString'
// const DashBoard = () => {

//     const [localLang,setLocalLang]=useState(Localization.locale);
//     i18n.fallbacks=true
//     i18n.traslation={en,hi}
//     i18n.locale=locale
//     const data=[
//         {name:'Fruit',id:1},
//         {name:'VegeTable',id:2},
//         {name:'Rustic BreakFast',id:3},
//         {name:'Fruit',id:4},
//         {name:'Fruit',id:5},
//         {name:'Fruit',id:6},
//     ]

//     return (
//         <>
//             <StatusBar backgroundColor={danger} />
//             <SafeAreaView style={{ flex: 1, backgroundColor: "#fafafa" }}>
// <View style={{ flex: 1 }}>
//     {//#region  headre View Start
//         <View style={{ height: "30%", borderWidth: 1 }}>
//             {/* <Modal>
//                 <View style={{}}>
//                     <TouchableOpacity>
//                             <Text>sdlkhf</Text>
//                     </TouchableOpacity>
//                 </View>
//             </Modal> */}
//         </View>
//         //#endregion
//     }

//                     {//#region item list start here
// <View style={{width:'90%',alignSelf:'center',marginBottom:moderateScale(260),borderWidth:1}}>
//     <FlatList
//     scrollEnabled
//     keyExtractor={itemId => itemId.id}
//     data={data}
//     renderItem={({ item, index }) => (
//         <TouchableOpacity style={{borderWidth:1,borderColor:danger,marginVertical:moderateScale(10),height:moderateScale(100),borderRadius:moderateScale(6),
//         flexDirection:'row',alignItems:'center',justifyContent:"space-between",paddingHorizontal:scale(10)}}>
//             <Image source={{uri:'https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg?w=2000'}} style={{height:moderateScale(60),width:moderateScale(100)}}/>
//             <Text style={{fontFamily:mediumFont,fontSize:mediumText}}>{item.name}</Text>
//         </TouchableOpacity>
//     )}
//     />
//     </View>
//                         //#endregion
//                     }
//                 </View>
//             </SafeAreaView>
//         </>
//     )
// }

// export default DashBoard



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View, FlatList, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { en, hi } from '../../Component/LocalizedString/LocalizedString';
import { moderateScale, scale } from 'react-native-size-matters';
import { danger, mediumFont, mediumText } from '../../Component/DesignTheme';
import { useNavigation } from '@react-navigation/native';


export default function DashBoard() {
    const navigation=useNavigation()
    let [locale, setLocale] = useState(Localization.locale);
    i18n.fallbacks = true;
    i18n.translations = { en, hi };
    i18n.locale = locale;


    
    const data = [
        { name: 'Fruit', id: 1 },
        { name: 'VegeTable', id: 2 },
        { name: 'Rustic BreakFast', id: 3 },
        { name: 'Fruit', id: 4 },
        { name: 'Fruit', id: 5 },
        { name: 'Fruit', id: 6 },
        { name: 'Fruit', id: 6 },
        { name: 'Fruit', id: 6 },
        { name: 'Fruit', id: 6 },
        { name: 'Fruit', id: 6 },
    ]

    return (
        <View style={styles.container}>



            {/* {//#region  headre View Start
                // <View style={{ height: "30%",  width: '90%',marginTop:200,justifyContent:"center" }}>
                //     {locale !== "en" ? <Button style={{backgroundColor:danger}} title="Switch to English" onPress={() => setLocale("en")} /> : undefined}
                //     {locale !== "hi" ? <Button title="Switch to Hindi" onPress={() => setLocale("hi")} /> : undefined}
                // </View>
                //#endregion
            } */}
                {/* <FlatList
                    scrollEnabled
                    keyExtractor={itemId => itemId.id}
                    data={data}
                    renderItem={({ item, index }) => ( */}

                    {/* )}
                /> */}
        <View style={{ width: '90%', alignSelf: 'center', }}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{height:moderateScale(130),width:moderateScale(130),alignSelf:"center"}}>
                <Image source={{uri:'https://t3.ftcdn.net/jpg/01/74/77/10/360_F_174771091_vawZDnwPc4cBiit579V6FPpWhcrC2hQo.jpg'}} style={{height:"100%",width:"100%"}}/>
            </View>
                {data.map((index)=>{
                    return(
                        <TouchableOpacity key={Math.random()} onPress={()=>navigation.navigate('CategoryTypeList')}
                        style={{
                           borderWidth: 1, borderColor: danger, marginVertical: moderateScale(10), height: moderateScale(100), borderRadius: moderateScale(6),
                           flexDirection: 'row', alignItems: 'center', justifyContent: "space-between", paddingHorizontal: scale(10)
                       }}>
                           <Image source={{ uri:'https://t4.ftcdn.net/jpg/02/75/80/29/360_F_275802958_kyNUhZaZFcscm3v4vJHFNP9a8O6xm03N.jpg' }} style={{ height: moderateScale(60), width: moderateScale(100) }} />
                           <Text style={{ fontFamily: mediumFont, fontSize: mediumText }}>{i18n.t('name')}</Text>
                       </TouchableOpacity>
                    )
                })}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
