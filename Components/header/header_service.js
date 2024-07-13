import React from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";

const HeaderService = ({ title, isFromServiceDetails = false }) => {
  const rederingBorder = () => {
    if (isFromServiceDetails) {
      return { borderBottomWidth: 0, borderBottomColor: "none" };
    } else {
      return {};
    }
  };

  return (
    <View style={{ ...styles.mainContainer, ...rederingBorder() }}>
      <Text style={styles.secondTitle}>Tipo de Serviço</Text>
      <Text style={styles.mainTitle}>{title}</Text>
    </View>
  );
};

export default HeaderService;