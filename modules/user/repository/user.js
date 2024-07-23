import AsyncStorage from "@react-native-async-storage/async-storage";


export default class UserRepo {
 
    async findUserById(userId) {
        const token = await AsyncStorage.getItem("token");

        if (!token) return;
     
        const header = new Headers({
            "content-Type": "application/json",
            authorization: token,
        });

        

        const options = {
            method: "GET",
            headers: header,
            mode: "cors",

        };

        const response = await fetch(
            `${process.env.EXPO_PUBLIC_API_URL}/funcionario/${userId}`,
            options
        );
        console.log(response);

        if (response.ok) {
            return (await response.json());
        } else {
            return undefined;
        }
    };
    async findAll(){
        const token = await AsyncStorage.getItem("token");

        if (!token)return;

        const header = new Headers({
            "content-Type": "application/json",
            authorization: token,
        });

        const options ={
            method:"GET",
            headers:header,
            mode:"cors",
        };

        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/funcionario`, options)
      
        if(response.ok){
            return(await response.json()) ;
        }else {
            return undefined;
        }
    }
    
    async createFuncionario(data){
        const token =await AsyncStorage.getItem("token");

        if (!token)return;

        const header = new Headers({
            "content-Type": "application/json",
            authorization: token,
        });

        const options ={
            method:"POST",
            headers:header,
            mode:"cors",
            body: JSON.stringify(data),
        };

        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/funcionario`, options);
    
        if(response.ok){
            return(await response.json());
        }else {
            return undefined;
        }
    }


    async updateFuncionario(data, id){
        const token = await AsyncStorage.getItem("token");

        if (!token)return;

        const header = new Headers({
            "content-Type": "application/json",
            authorization: token,
        });

        const options ={
            method:"put",
            headers:header,
            mode:"cors",
            body: JSON.stringify(data),
        };

        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/funcionario/${id}`, options);
    
        if(response.ok){
            return(await response.json());
        }else {
            return undefined;
        }
    }
}