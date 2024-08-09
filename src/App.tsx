import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
type HomeProps = NativeStackNavigationProp<{
  
}>

export default function App() {
  return (
   <Stack.Navigator>
    <Stack.Screen name='home' component={} />
    <Stack.Screen/>
   </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})