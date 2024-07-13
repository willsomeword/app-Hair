import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, keyboardAvoidingView } from 'react-native';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { servicoService } from '../modules/service_module/service';
import Cards from '../Components/card/card';






export default function Home({ navigation }) {
    const [filter, setFilter] = useState("");
    const [data, setData] = useState([]);


    const gettingData = async () => {
        const gettingDataService = await servicoService.getAllService();
        setData(gettingDataService);

    };

    useEffect(() => {
        gettingData();
    }, []);

    const filtering = (item) => {
        if (

            item.nome
                .toString()
                .toLowerCase()
                .includes(filter.toString().toLowerCase()) ||
            item.descricao
                .toString()
                .toLowerCase()
                .includes(filter.toString().toLowerCase())
        ) {
            return true;
        } else {
            return false;
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                {/**left */}
                <View style={styles.containerLeftHeader}>
                    <View style={styles.containerHeaderRight}>
                        <AntDesign name="questioncircleo" size={24} color="black" />
                    </View>
                    <Text style={styles.mainTitleHeader}>Ola, Seja Bem Vindo(a) !</Text>

                    <View style={styles.inputHeaderContainer} >
                        <TextInput value={filter}
                            onChangeText={setFilter}
                            style={styles.inputHeader}
                            placeholder='Filtrar Serviços'
                        />
                        <FontAwesome name="filter" size={24} color="black" />
                    </View>
                </View >
                {/**right */}

            </View>
            <View style={styles.horizontalLinear} />

            <ScrollView contentContainerStyle={{
                flexGrow: 1,
                alignItems: "center", paddingBottom: 10, marginBottom: 50,
            }}
                style={styles.containerCards}
                showsHorizontalScrollIndicator={false}
            >
                {data.filter((item) => filtering(item))
                .            
                map((item, index) => (
                <Cards key={index} navigation={navigation} servInfo={item} />
                ))}
            </ScrollView>



        </View>
    );
}

