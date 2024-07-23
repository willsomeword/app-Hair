import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer:{
    flexGrow:1,

    },
    containerHrsValues:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:40,
        padding: 40,

    },

    containerHrs:{
        gap:2,
        width:130,
        height:130,
        borderRadius:16,
        backgroundColor:"#B5C2CA",
        alignItems:"center",
        justifyContent:"center",
    },
    containerValues:{
        gap:2,
        width:130,
        height:130,
        borderRadius:16,
        backgroundColor:"#B5C2CA",
        alignItems:"center", 
        justifyContent:"center",
    },

    titleHrsValue:{
        fontSize:20,
        fontWeight:"bold",
        alignItems:"center",
    },

    containerServiceDesc:{
        flexGrow:1,
        alignItems:"center",
        paddingTop:40,
        gap:8,
    },

    containerDesc:{
        width:"80%",
        height:"40%",
        padding: 10,
        paddingTop:20,
        borderRadius:16,
        alignItems:"center",
        backgroundColor:"#B5C2CA",
    },

    inputDesc:{
        borderWidth:1,
        width:200,
        height:100,
    }
})