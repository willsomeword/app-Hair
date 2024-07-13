import { SafeAreaView, StyleSheet, Text, View } from 'react-native';



export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#d9d9d9',
      alignItems: 'center',
  
    },
    containerHeader:{
        height:"25%",
        width: "100%",
    },
    containerLeftHeader:{
        height:"100%",
        width:"100%",

        justifyContent:'center',
        alignItems:'flex-end',


    },
    mainTitleHeader:{
        marginTop:-120,
        marginRight:80,
        fontSize:18,
        fontWeight:"bold",

    },
    inputHeaderContainer:{
        marginRight:110,
        width:190,
        border:1,
        borderColor:"#6A7175",
        borderWidth:1,
        borderRadius:999,
        marginTop:25,
        display:'flex',
        flexDirection:"row",
        padding:2,
        paddingRight:10,
        paddingLeft:10,
        justifyContent:"space-between",
        alignItems:"center",

      
    },
    inputHeader:{
        flexGrow:1,
        marginLeft:5,
     
    },
    containerHeaderRight:{
        height: '100%',
        width:'20%',
        alignItems:'center',
        padding:10, 
        Bottom:1,
        top:50,
        paddingTop:25,
    },
    horizontalLinear:{
        marginTop:20,
        width:"100%",
        borderBottomColor:"#6A7175",
        borderBottomWidth:StyleSheet.hairlineWidth,

    },
    containerCards:{
        marginTop:20,
        width:"100%",
 
        paddingBottom:90

        
    },

  });
  