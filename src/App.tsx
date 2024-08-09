import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Navigation
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//Screens
import Home from './screens/Home';
import Detail from './screens/Detail';

export type RootStackParamList = {
  Home: undefined;
  Details: {product: Product}
}

const Stack = createNativeStackNavigator<RootStackParamList>();




export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{title: "Trending Products"}}/>
        <Stack.Screen name='Details' component={Detail} options={{title: "Product Details"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

