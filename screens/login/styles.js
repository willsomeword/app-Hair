import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    maincontainer:{
        width:"100%",
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#BCBCBC",
    },
    textInputWrapper:{
        alignItems:"center",
        justifyContent:"center",
        marginBottom:20,
    },
    input:{
   
        padding:5,
        paddingHorizontal:10,
        width:200,
        borderRadius:8,
        backgroundColor: "#fff",
        boder:1,
        borderWidth:1,
        borderColor:"white",
    },

    mainText:{
        fontSize:50,
        fontStyle:'bold',
       
    },

    formWrapp:{
        width:"100%",
        height:"80%",
        alignItems:"center",
        marginTop:150
  
    },
    Button:{
        marginTop:20,
        paddingVertical:10,
        paddingHorizontal:60,
        borderRadius:20,
        backgroundColor:"#B5C222",
        
    }
})