import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <Stack.Navigator>
    <Stack.Screen name='home' component={} />
    <Stack.Screen/>
   </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})