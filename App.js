import { NavigationContainer } from '@react-navigation/native';
import Route from './src/Screen/Navigation/Route';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import DashBoard from './src/Screen/DashBoard/DashBoard';
import { en, hi } from './src/Component/LocalizedString/LocalizedString';

export default function App() {
  let [fontLoaded] = useFonts({
    "ProductSans-BlackItalic": require('./assets/fonts/ProductSans-BlackItalic.ttf'),
    "ProductSans-Regular": require('./assets/fonts/ProductSans-Regular.ttf'),
    "ProductSans-Medium": require('./assets/fonts/ProductSans-Medium.ttf'),
    "ProductSans-Black": require('./assets/fonts/ProductSans-Black.ttf'),
    "ProductSans-Bold": require('./assets/fonts/ProductSans-Bold.ttf'),

  })
  return (
    <>
 {fontLoaded&& 
 <SafeAreaProvider>
    <NavigationContainer>
      <Provider store={store}>
      <Route/>
      {/* <DashBoard/> */}
      </Provider>
    </NavigationContainer>
  </SafeAreaProvider>}
    </>
  );
}
