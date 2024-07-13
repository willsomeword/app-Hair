import { SafeAreaView, StyleSheet, Text, View } from 'react-native';


export const style = StyleSheet.create({
    MainContainer: {
        height: 120,
        width: "80%",
        borderRadius: 16,
        shadowColor: "#181818",
        shadowOffset: 1,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        backgroundColor: "#ffffff",
        paddingHorizontal:2,
        marginBottom:10
       

   
   

    },
    conainerLeft: {
        borderRadius: 16,
        height: "100%",
        width: "100%",
        backgroundColor: "#ffffff",
        justifyContent: "center",
     
      
    },

    button: {
        position: 'absolute',
        right: -20,
        top: 30,
        borderRadius: 999,
        border: 1,
        borderWidth: 5,
        borderColor: '#081225',
        padding: 12,
        backgroundColor: "#081225",
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",

    },

    containerDesc: {
        margintop: -20,
        height: "20%",
        paddingLeft: 15
    },

    title: {
        top: -30,
        marginBottom: -2,
        fontSize: 20,
        fontWeight: 'bold',

    },

    desc: {
        top: -10,
        fontSize: 15,
        color: "#6A7175",

    }
})