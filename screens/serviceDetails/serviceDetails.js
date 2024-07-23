import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderService from "../../Components/header/header_service";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { servicoService } from "../../modules/service_module/service";



const ServiceDetails = ({navigation, route}) => {
const {currService} = route.params;
const [service, setService] = useState(currService);
const [isUpdatingObs, setIsUpdatingObs] = useState(false);
const [newObs, setNewObs] = useState("");


useEffect(() => {
    if (service && service?.descricao) setNewObs(service?.descricao);
  }, [service?.descricao]);

  const savingUpdateDesc = async () => {
    const serviceDTO = {
      ...currService,
      descricao: newObs.trim(),
    };

    const savedOne = await servicoService.updateServico(
      currService._id,
      serviceDTO
    );

    if (savedOne) {
      const auxAtt = {
        ...currService,
        descricao: savedOne?.descricao ?? "",
      };

      setService(auxAtt);
      alert("salvo com sucesso!!");
    }
  };

  const updatingObservacao = () => {
    if (isUpdatingObs) {
      // update
      savingUpdateDesc();
      setIsUpdatingObs(false);
    } else {
      setIsUpdatingObs(true);
    }
  };






    return (
        <SafeAreaView style={styles.mainContainer}>
            <HeaderService title={service?.nome ?? ""} isFromServiceDetails={true} />
            <View style={styles.containerHrsValues}>
                <View style={styles.containerHrs}>
                    <Text>Duração</Text>
                    <Text style={{ ...styles.titleHrsValue }}>
                        {service?.tempoServico ?? ""}
                    </Text>
                    <Text style={styles.titleHrsValue}>Horas</Text>
                </View>

                <View style={styles.containerValues}>
                    <Text>Valor</Text>
                    <Text numberOfLines={1} style={{ ...styles.titleHrsValue }}>
                        {service?.valor ?? ""}
                    </Text>
                    <Text style={styles.titleHrsValue}>Reais</Text>
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
                            value={newObs}
                            onChange={setNewObs}
                            placeholder="value"
                            style={styles.inputDesc}
                            multiline={true}
                        />

                    ) : (
                        <Text>{service?.descricao}</Text>

                    )}
                </View>
            </View>
        </SafeAreaView>

    )
}

export default ServiceDetails;