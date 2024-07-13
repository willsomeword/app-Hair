import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    width:"100%",
    height:"100%",



    backgroundColor:"#BCBCBC",
  },
  iconCliente: {
    width: 80,
    height: 80,
    borderRadius: 999,
  },
  nameCliente: {
    fontWeight: "bold",
    fontSize: 16,
  },
  clienteNameFotoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#BCBCBC",
    paddingBottom: 10,
  },
  containerServiceDesc: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 40,
    gap: 8,
  },
  containerDesc: {
    width: "80%",
    height: "40%",
    padding: 10,
    paddingTop: 20,
    borderRadius: 16,
    alignItems: "center",
    backgroundColor: "#B5C2CA",
  },
  containerObs: {
    height: "20%",
    width: "80%",
    paddingVertical: 12,
  },
  containerLeft: {
    borderRadius: 16,
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  buton: {
    position: "absolute",
    right: -18,
    top: 15,
    borderRadius: 999,
    padding: 12,
    backgroundColor: "#081225",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  containerDescBtn: {
    height: "70%",
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },


  containerLeft: {
    borderRadius: 16,
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },


  inputDesc: {
  
    width: 200,
    height: 130,
    
  },


  containerCircle: {
    marginTop: 3,
    width: "100%",
    alignItems: "center",
  },


  circle: {
    width: 50,
    height: 50,
    borderRadius: 999,

  },
});