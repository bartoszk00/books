import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon,NativeBaseProvider,extendTheme} from 'native-base';
import {useState} from 'react';
import HomeScreenStack from './screens/HomeScreenStack';
import Screen1F from './screens/Screen1F';
import Screen2F from './screens/Screen2F';
import Screen3F from './screens/Screen3F';
import ScreenTab1F from './screens/ScreenTab1F';
import ScreenTab2F from './screens/ScreenTab2F';
import ScreenTab3F from './screens/ScreenTab3F';
import ScreenTab4F from './screens/ScreenTab4F';
import ScreenTab5F from './screens/ScreenTab5F';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Input,
  Button,
} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator()

function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{headerShown: false}}>
      <Stack.Screen name="Domowa" component={HomeScreenStack} />
      <Stack.Screen name="Opis" component={Screen2F} />
      <Stack.Screen name="Screen1" component={Screen1F} />
      <Stack.Screen name="Historia" component={Screen3F} />
      <Stack.Screen name="BottomTabNavigation" component={BottomTabs} />
    </Stack.Navigator>
  );
}

function BottomTabs() {
  return (
      <Tab.Navigator>
      <Tab.Screen name="Popularne" component={ScreenTab1F} />
      <Tab.Screen name="Rejestr" component={ScreenTab2F} />
      <Tab.Screen name="Rezerwacje" component={ScreenTab3F} />
      <Tab.Screen name="Ulubione" component={ScreenTab4F} />
      <Tab.Screen name="Profil" component={ScreenTab5F} />
    </Tab.Navigator>
  );
}
function MyStackTab()
{
  return (
    <Tab.Navigator>
      <Stack.Screen name="HomeStackTab" component={HomeScreenStack} />
      <Stack.Screen name="Screen2" component={Screen2F} />
      <Stack.Screen name="Screen1" component={Screen1F} />
      <Stack.Screen name="Screen3" component={Screen3F} />
    </Tab.Navigator>
  );
}
const newColorTheme = {
  brand: {
    900: '#5B8DF6',
    800: '#DA8129',
    700: '#29DA31',
  },
};

const theme = extendTheme({
colors: newColorTheme,
});

function App()
 {
  return (
    <NativeBaseProvider theme={theme}>
    <NavigationContainer>
   <Drawer.Navigator useLegacyImplementation={true}
    screenOptions={{
      headerTitle: 'Books',
      headerStyle:{
        backgroundColor: 'gray',
      },
      headerTintColor: 'white',
    }}
   >
      <Drawer.Screen name="Logowanie" component={MyStack}  />
      <Drawer.Screen name="Books" component={BottomTabs} />
    </Drawer.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}
export default App;
