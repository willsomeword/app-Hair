import { View, Text } from "react-native";
import { style } from "./style";
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native";
import Service from "../../screens/service/service";
import { NavigationContainer } from '@react-navigation/native';


export default function Cards({ navigation, servInfo }) {
    return (
        <View style={style.MainContainer}>
            {/*containerinfo*/}
            <View style={style.conainerLeft}>
                {/*botao*/}
                <View style={style.containerDesc}>
                    <Text style={style.title}>{servInfo.nome}</Text>
                    <Text style={style.desc}>{servInfo.descricao}</Text>
                </View >
                <TouchableOpacity style={style.button}
                    activeOpacity={0.7}
                    onPress={(ev) =>
                        navigation.navigate("Service", {serviceId: servInfo._id})
                     } 
                    >
                <Feather name="arrow-right" size={24} color="#647775" />
            </TouchableOpacity>

        </View>

        </View >
    );

};