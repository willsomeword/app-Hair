import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/home";
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import Perfil from "./screens/perfil/perfil";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{ tabBarHideOnKeyboard: true }}
        >
            <Tab.Screen name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <Entypo name="home" size={18} color="black" />
                    }
                }}
            />
            <Tab.Screen name="Perfil"
                component={Perfil}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome5 name="user-alt" size={18} color="black"/>
                    }
                }}
            />

        </Tab.Navigator>

    )

}

