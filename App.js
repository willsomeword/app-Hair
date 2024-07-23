import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Service from './screens/service/service';
import Home from './screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigator from './TabNavigator';
import login from './screens/login/login';
import ServiceDetails from './screens/serviceDetails/serviceDetails';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'>
        <Stack.Screen name="Home" component={TabNavigator} options={{headerShown:false}} />
        <Stack.Screen name="Service" component={Service} options={{headerShown:false}} />
        <Stack.Screen name="login" component={login} options={{headerShown:false}}/>
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} options={{headerShown:false}}/>    
     </Stack.Navigator>
    </NavigationContainer>
  );
}

