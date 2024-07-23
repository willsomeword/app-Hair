import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";





const PerfilOptions = ({Icon,title, desc, action}) =>{
    return(
        <TouchableOpacity
        style={styles.mainContainer}
        activeOpacity={0.6}
        onPress={()=> action()}
        >
            <View style={styles.leftSide}>{Icon}</View>
            <View>
             <Text>{title}</Text>
             {desc && <Text style={{color:"#BCBCBC"}}>{desc}</Text>}
            </View>
            <View style={styles.rightSide}>
                <MaterialIcons name="arrow-forward-ios" size={24} color="#BCBCBC"/>
            </View>
        </TouchableOpacity>
    )
}

export default PerfilOptions;