import { useCallback, useEffect, useState } from "react"
import { TextInput, View, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles";
import Auth from "../../modules/user/repository/Auth";
import AuthService from '../../modules/user/service/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function login({navigation}) {
    const [Email, setemail] = useState("");
    const [Senha, setSenha] = useState("");


    const submit = useCallback(async () => {
        try {
            const loginInfo = {
                email: Email,
                senha: Senha,
            };
      
    
          
            const login =  await Auth.Login(loginInfo); // Espera a Promise ser resolvida
    
        
    
            if (login && login.token) {
                try {
                    await AsyncStorage.setItem("token", login.token); // Espera o AsyncStorage ser atualizado
         
                } catch (error) {
                    alert(error);
                }
          
                navigation.navigate('Home');
            } else {
                alert('Something went wrong');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Something went wrong'); // Trata o erro de forma genérica para o usuário
        }
    }, [Senha, Email, navigation]);

    const verifyToken = async () => {
        const myToken = await AsyncStorage.getItem("token");
        if (myToken){
            navigation.navigate("Home");
        }
    };

    useEffect(()=>{
     
        verifyToken();
    },[]);
    



    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={{width:'100%', height:'20%', alignItems:'center', justifyContent:'center',marginTop:150}}>
            <Text style={styles.mainText}>Login</Text>
            </View>
            
            <View style={
                styles.formWrapp
            }>
                <View style={styles.textInputWrapper}>
                    <Text>Email</Text>
                    <TextInput
                         onChangeText={(text) => setemail(text)} 
                        style={styles.input}
                        value={Email}
                        placeholder="work@mail.com"
                    />

                </View >
                <View style={styles.textInputWrapper}>
                    <Text>Senha</Text>
                    <TextInput
                        value={Senha}
                        onChangeText={(text) => setSenha(text)} 
                        placeholder="senha......"
                        style={styles.input}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.Button}>
                    <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={(ev)=> submit()}
                    >
                        <Text>
                            Entrar
                        </Text>

                    </TouchableOpacity>
                </View>
            </View>


        </SafeAreaView>
    )
}