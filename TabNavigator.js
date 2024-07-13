import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/home";
import { Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
        screenOptions={{tabBarHideOnKeyboard:true}}
        >
            <Tab.Screen name="Home" 
            component={Home} 
            options={{headerShown:false}}
           
              />


        </Tab.Navigator>

    )

}

