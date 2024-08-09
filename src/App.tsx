//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

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

