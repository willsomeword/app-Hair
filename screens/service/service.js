
import {
    View,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    RefreshControl,
    Animated,
    onRefresh,
    Platform,
    refreshing,
    DevSettings,
    ScrollView,

} from 'react-native';
import { styles } from './styles';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useCallback, useEffect, useRef, useState } from 'react';
import HeaderService from '../../Components/header/header_service';
import Button from '../../Components/button/button';
import { servicoService } from '../../modules/service_module/service';
import Animation from './animation';


export default function Service({ route, navigation }) {
    const { serviceId } = route.params;
    const [isUpdatingObs, setIsUpdatingObs] = useState(false);
    const [currService, setCurrService] = useState();
    const [descricaoObs, setDescricaoObs] = useState("");
    const [colorCorrect, setColorCorrect] = useState("#FF5733");


    const gettingServiceById = useCallback(async () => {
        if (serviceId) {
            const serviceResp = await servicoService.getServiceById(serviceId);
            if (serviceResp) {
                setCurrService(serviceResp);

            }
        }
    }, [serviceId]);

    useEffect(() => {
        gettingServiceById();

    }, []);








    const savingUpdateDesc = async () => {
        const serviceDTO = {
            ...currService,
            descricao: descricaoObs,
        };


        const savedOne = await servicoService.updateServico
            (
                currService._id, serviceDTO

            );

        if (savedOne) {
            const auxAtt = {
                ...currService,
                descricao: savedOne?.descricao ?? "",
            }
            setCurrService(auxAtt);
            alert("salvo com sucesso");
        }
    };


    const initAtendimento = async () => {
        const serviceDTO = {
            ...currService,
            status: 1,
        };

        const updatedStatus = await
            servicoService.updateServico
                (serviceDTO._id, serviceDTO);

        if (updatedStatus) {
            const updatingState = {
                ...currService,
                status: updatedStatus.status,
            };
            setCurrService(updatingState);
            alert("Atendimento Iniciado")
        }
    };

    const finalizarAtendimento = async () => {
        const serviceDTO = {
            ...currService,
            status: 2,
        };

        const updatedStatus = await
            servicoService.updateServico
                (serviceDTO._id, serviceDTO);

        if (updatedStatus) {
            const updatingState = {
                ...currService,
                status: updatedStatus.status,
            };
            setCurrService(updatingState);
            alert("Atendimento Finalizado")
        }
    }

    const updatingObservacao = () => {
        if (isUpdatingObs) {
            savingUpdateDesc();
            setIsUpdatingObs(false);
        } else {
            setIsUpdatingObs(true);
        }

    }

    useEffect(() => {
        if (currService && currService.descricao) setDescricaoObs(currService.descricao);
    }, [currService]);
    console.log(currService);


    useEffect(() => {
        switch (currService?.status) {
            case 0: //agendado
                //Baby Blue
                setColorCorrect("#89CFF0");
                break;
            case 1: //em atendimento
                // green
                setColorCorrect("#43c101");
                break;
            case 2: //finalizado
                // green
                setColorCorrect("#5F8575");
                break;
            case 3: //cancelado
                // vermelho
                setColorCorrect("#FF5733");
                break;
            default:
                setColorCorrect("#89CFF0");
        }
    }, [currService?.status]);



    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView
                contentContainerStyle={Platform.OS === "android" ? { flexGrow: 1 } : {}}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <HeaderService title={currService?.nome ?? ""} />
                <View style={styles.clienteNameFotoContainer}>
                    <Image style={styles.iconCliente}
                    />
                    <View>
                        <Text>
                            Agendado para{""}
                            <Text style={styles.nameCliente}>
                                {currService?.cliente?.nome ?? ""}
                            </Text>
                        </Text>

                    </View>
                </View>
                <View style={styles.containerServiceDesc}>
                    <View style={styles.containerDesc}>
                        <View
                            style={{ alignItems: "flex-end", width: "100%", paddingRight: 10 }}
                        >
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    updatingObservacao();
                                }}
                            >
                                <AntDesign name="edit" size={24} color="black" />
                            </TouchableOpacity>
                        </View>

                        {isUpdatingObs ? (
                            <TextInput
                                value={descricaoObs}
                                onChangeText={setDescricaoObs}
                                placeholder="value"
                                style={styles.inputDesc}
                                multiline={true}
                            />
                        ) : (
                            <Text>{currService?.descricao}</Text>
                        )}
                    </View>
                    <View style={styles.containerObs}>
                        {/*container info*/}
                        <View style={styles.containerLeft}>
                            <View style={styles.containerDescBtn}>
                                <Text style={styles.title}>Observações</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.buton}
                                activeOpacity={0.8}
                                onPress={(ev) => navigation.navigate("ServiceDetails",{
                                    currService: currService,
                                })}
                            >
                                <MaterialIcons
                                    name="arrow-forward-ios"
                                    size={31}
                                    color="#6A7175"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        {currService?.status == 1 ? (
                            <>
                                <Button
                                    width={200}
                                    height={40}
                                    bgColor={"#081225"}
                                    color={"white"}
                                    action={finalizarAtendimento}
                                    label={"Finalizar atendimento"}
                                />
                            </>
                        ) : (
                            <>
                                <Button
                                    width={200}
                                    height={40}
                                    bgColor={"#081225"}
                                    color={"white"}
                                    action={initAtendimento}
                                    label={"Iniciar Atendimento"}
                                />
                            </>
                        )}
                    </View>
                    <View>

                    </View>

                    <View style={styles.containerCircle}>
                        <Animation statusCode={currService?.status}>
                            <View style={{
                                ...styles.circle,
                                backgroundColor: colorCorrect

                            }} />
                        </Animation>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

