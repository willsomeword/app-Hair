import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import  styles  from "./styles";
import { EvilIcons, Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import PerfilOptions from "../../Components/perfil_option/perfilOptions";
import HeaderPerfil from "../../Components/header_perfil/headerPerfil";
import JWT from "expo-jwt";
import { UserService } from "../../modules/user/service/user";

const Perfil = () => {
    const [data, setData] = React.useState();
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        gettingCurrentUser();
    },[refresh]);

    const gettingCurrentUser = useCallback( async ()=>{
        const TokenFromAs = await AsyncStorage.getItem("token");
      
        if(TokenFromAs){
            const decodedData = JWT.decode(
                TokenFromAs,
                process.env.EXPO_PUBLIC_API_KEY
            );

            const idCurrUser = decodedData && decodedData.id ? decodedData.id :"";
            
            if (idCurrUser){

                const dataCurrUser = await UserService.findUserById(idCurrUser);
                setData(dataCurrUser);
            }
        }
        }, []);
        
        const defaultAction =() =>{
            return;
        }
 
        const updatedDataRefresh = () =>{
            setRefresh(!refresh);
        }

        const goToPerfilData = () =>{
            navigation.navigate("perfilData",{
                currUserData:data,
                refresh:() => updatedDataRefresh(),
            });
        };



    return (
        <SafeAreaView>

            <View style={styles.wrapOpt}>
                <HeaderPerfil nome={data?.nome ??""} />
                <View style={styles.containerOptions}>
                    <PerfilOptions
                        Icon={
                            <Ionicons name="newspaper-outline" size={24} color="#BCBCBC" />
                        }
                        title={"ultimos Serviços"}
                        desc={"Minhas Informações da Conta"}
                        action={defaultAction}
                     
                    />

                    <PerfilOptions
                        Icon={
                            <MaterialCommunityIcons
                                name="newspaper-variant-multiple" size={24}
                                color="#BCBCBC"
                            />

                        }
                        title={"Meus dados"}
                        desc={"Minhas Informações da Conta"}
                        action={goToPerfilData}
                    
                    />

                </View>
                <View style={styles.containerOptions}>
                    <PerfilOptions
                        Icon={<Feather name="help-circle" size={24} color="#BCBCBC" />}
                        title={"Ajuda"}
                        desc={""}
                        action={defaultAction}
                  
                    />
                    <PerfilOptions
                        Icon={<EvilIcons name="gear" size={24} color="#BCBCBC" />}
                        title={"Configurações"}
                        desc={""}
                        action={defaultAction}
                     
                    />
                </View>
            </View>
        </SafeAreaView>

    )
}

export default Perfil;