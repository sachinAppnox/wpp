import 'react-native-gesture-handler';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';
import { AntDesign } from 'react-native-vector-icons';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import { Button, Image, SafeAreaView, Text, TouchableOpacity, View, Share } from 'react-native';
import { moderateScale, scale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import DashBoard from '../DashBoard/DashBoard';
import Cart from '../Cart/Cart';
import { useNavigation } from '@react-navigation/native';
import { drawerIconSize, grey, headingText, iconSize, mainColor } from '../../Component/DesignTheme';
import { en, hi } from '../../Component/LocalizedString/LocalizedString';
import { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CategoryTypeList from '../CategoryTypeList/CategoryTypeList';
import ProductInformation from '../ProductInformation/ProductInformation';
import Inbox from '../ContactScreens/Inbox';
import Login from '../Auth/Login';
import Email from '../ContactScreens/Email';


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function CustomDrawerContent(props) {

  let [locale, setLocale] = useState(Localization.locale);
  i18n.fallbacks = true;
  i18n.translations = { en, hi };
  i18n.locale = locale;

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }

  };
  return (
    <>
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1, }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View>
            <View style={{ borderWidth:2, height: moderateScale(100), borderRadius: 300, overflow: 'hidden', width: moderateScale(100), alignSelf: 'center',borderColor:mainColor,alignItems:'center',justifyContent:'center'}}>
              {/* <Image source={require('../../../assets/Carasol/NoDat.png')} style={{ height: '100%', width: '100%' }} /> */}
              <AntDesign name='user' size={drawerIconSize+30} color={mainColor}/>
              </View>

            <View style={{ alignItems: 'center', paddingVertical: moderateScale(15) }}>
              <Text style={{ fontSize: headingText }}>Welcome :)</Text>
            </View>

            <DrawerItemList {...props} />

            <TouchableOpacity onPress={onShare}
              style={{
                width:220,
                  alignSelf:'center',
                flexDirection:'row',
                marginTop:moderateScale(5),
                paddingHorizontal:scale(5)
              }}
                >
                  <MaterialCommunityIcons name="home" color={mainColor} size={drawerIconSize} />
              <Text style={{marginLeft:moderateScale(30),fontSize:headingText-1,color:grey}}>Call Us</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onShare}
              style={{
                width:220,
                  alignSelf:'center',
                flexDirection:'row',
                marginTop:moderateScale(15),
                paddingHorizontal:scale(5)
              }}
                >
                  <MaterialCommunityIcons name="home" color={mainColor} size={drawerIconSize} />
              <Text style={{marginLeft:moderateScale(30),fontSize:headingText-1,color:grey}}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                   style={{
                    width:220,
                          alignSelf:'center',
                    flexDirection:'row',
                    marginTop:moderateScale(15),
                    paddingHorizontal:scale(5)
                  }}
            onPress={() => setLocale("en")}>
              <MaterialCommunityIcons name="home" color={mainColor} size={drawerIconSize} />
              <Text style={{marginLeft:moderateScale(30),fontSize:headingText-1,color:grey}}>Change Language</Text>
            </TouchableOpacity>
          </View>

        </SafeAreaView>

      </DrawerContentScrollView>
    </>
  );
}
const DrawerRoute = ({ navigation }) => {

  return (
    <PaperProvider>
      <Drawer.Navigator initialRouteName={i18n.t('name')} drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          
          drawerLabelStyle: { fontSize: moderateScale(15) },
          drawerType: "front",
          drawerStyle: {
            backgroundColor: '#fff',
            width:scale(270)
          },
          drawerActiveTintColor: mainColor,
          drawerActiveBackgroundColor: '#fff'

        }}>







        <Drawer.Screen name={i18n.t('name')} children={() => <DashBoard />}
          options={{
            drawerItemStyle: {
              marginTop:moderateScale(68),
              width:220,
              justifyContent:'space-evenly',
              alignSelf:'center'
            },

            
            drawerIcon: () => { return (<MaterialCommunityIcons name="home" color={mainColor} size={drawerIconSize} />) },

            gestureEnabled: false,
            headerRight: () => (
              <TouchableOpacity style={{ marginLeft: scale(10), width: scale(60) }}
                onPress={() => {
                  navigation.navigate('Cart')
                }}>
                <MaterialCommunityIcons name='cart' size={iconSize + 3} color={mainColor} />
              </TouchableOpacity>
            ),
          }}
        />
        <Drawer.Screen name='Inbox' children={() => <Inbox />}
          options={{
            drawerItemStyle: {
              width:220,
              justifyContent:'space-evenly',
              alignSelf:'center',
              marginTop:-5
            },
            drawerIcon: () => { return (<MaterialCommunityIcons name="cart" color={mainColor} size={drawerIconSize} />) },

            gestureEnabled: false,
            headerRight: () => (
              <TouchableOpacity style={{ marginLeft: scale(10), width: scale(60) }}
                onPress={() => {
                  navigation.navigate('Cart')
                }}>
                <AntDesign name='arrowright' size={iconSize} />
              </TouchableOpacity>
            ),
          }}
        />

<Drawer.Screen name='Email' children={() => <Email />}
          options={{
            drawerItemStyle: {
              width:220,
              justifyContent:'space-evenly',
              alignSelf:'center',
              marginTop:-5
            },
            drawerIcon: () => { return (<MaterialCommunityIcons name="cart" color={mainColor} size={drawerIconSize} />) },

            gestureEnabled: false,
            headerRight: () => (
              <TouchableOpacity style={{ marginLeft: scale(10), width: scale(60) }}
                onPress={() => {
                  navigation.navigate('Cart')
                }}>
                <AntDesign name='arrowright' size={iconSize} />
              </TouchableOpacity>
            ),
          }}
        />
        <Drawer.Screen name='Cart' children={() => <Cart />}
          options={{
            gestureEnabled: false,
            drawerItemStyle: {
              display: "none",
            },
            drawerIcon: () => { return (<AntDesign name="home" color={mainColor} size={moderateScale(18)} />) },
            headerRight: () => (
              <TouchableOpacity style={{ marginLeft: scale(10), width: scale(40) }}
                onPress={() => {
                  navigation.goBack()
                }}>
                <AntDesign name='arrowright' size={iconSize} />
              </TouchableOpacity>
            ),
          }}
        />
        <Drawer.Screen name='CategoryTypeList' children={() => <CategoryTypeList />}
          options={{
            gestureEnabled: false,
            drawerItemStyle: {
              display: "none",
            },
            drawerIcon: () => { return (<AntDesign name="home" color={mainColor} size={moderateScale(18)} />) },
            headerRight: () => (
              <TouchableOpacity style={{ marginLeft: scale(10), width: scale(40) }}
                onPress={() => {
                  navigation.goBack()
                }}>
                <AntDesign name='arrowright' size={iconSize} />
              </TouchableOpacity>
            ),
          }}
        />
        <Drawer.Screen name='ProductInformation' children={() => <ProductInformation />}
          options={{
            gestureEnabled: false,
            drawerItemStyle: {
              display: "none",
            },

            drawerIcon: () => { return (<AntDesign name="home" color={mainColor} size={moderateScale(18)} />) },
            headerRight: () => (
              <TouchableOpacity style={{ marginLeft: scale(10), width: scale(40) }}
                onPress={() => {
                  navigation.navigate('CategoryTypeList')
                }}>
                <AntDesign name='arrowright' size={iconSize} />
              </TouchableOpacity>
            ),
          }}
        />


        <Drawer.Screen name='Login/Register' children={() => <Login />}
          options={{
            gestureEnabled: false,
            drawerItemStyle: {
              display: "flex",
              position:'absolute',
              marginTop:moderateScale(170),
              width:220,
              justifyContent:'space-evenly',
              alignSelf:'center',
              borderBottomWidth:1,
              borderTopWidth:1,
              borderColor:mainColor
            },

            drawerIcon: () => { return (<AntDesign name="home" color={mainColor} size={drawerIconSize} />) },
            headerRight: () => (
              <TouchableOpacity style={{ marginLeft: scale(10), width: scale(40) }}
                // onPress={() => {
                //   navigation.goBack()
                // }}>
                onPress={() => {
                  navigation.goBack()
                }}>
                <AntDesign name='arrowright' size={iconSize} />
              </TouchableOpacity>
            ),
          }}
        />
      </Drawer.Navigator>
    </PaperProvider>
  );
};

const Routes = () => {
  const navigation = useNavigation()

  return (
    <Stack.Navigator >
      <Stack.Screen name="DashBoard" children={() => <DrawerRoute navigation={navigation} />} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};





export default Routes
