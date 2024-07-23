import AsyncStorage from "@react-native-async-storage/async-storage"

export default class ServiceModule {
    constructor(){
        this.API_URL = process.env.EXPO_PUBLIC_API_URL;
    }
    async createService(data) {
        const token = await AsyncStorage.getItem("token");


        if (!token) return;


        const header = new Headers({
            "content-Type": "application/json",
            authorization: token,
        });

        const options = {
            method: "post",
            headers: header,
            mode: 'cors',
            body: JSON.stringify(data),
        };


        const response = await fetch(
            `${process.env.EXPO_PUBLIC_API_URL}/servico`,

            options
        );

        if (response.ok) {
            return (await response.json());

        } else {
            return undefined;
        }
    }




    async getAllService() {
        const token = await AsyncStorage.getItem("token");

        if (!token) return;

        const header = new Headers({
            "Content-Type": "application/json",
            authorization: token,
        });

        const options = {
            method: "GET",
            headers: header,
            mode: "cors",

        };

        const response = await fetch(`${this.API_URL}/servico`, options);

        if (response.ok){
            return(await response.json()) ;
            
        } else {
            return undefined;
        }
    }

     async updateService(idServico, servicoDTO){
        const token = await AsyncStorage.getItem("token");
        if (!token) return ;

        const header = new Headers({
            "Content-Type" :" application/json",
            authorization:token,
        });

        const options = {
            method:"PUT",
            headers:header,
            mode:"cors",
            body: JSON.stringify(servicoDTO),

        };

        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/servico/${idServico}`,options);

        if(response.ok){
            return (await response.json()) ;
        } else {
            return undefined;
        }
     }
    


     async getServiceById(serviceId){
        const token = await AsyncStorage.getItem("token");
        if(!token) return;
        
        const header = new Headers({
            "Content-Type":"application/json",
            authorization:token,
        });

        const options ={
            method:"GET",
            headers:header,
            mode:"cors",

        };

        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/servico/${serviceId}`, options);

        if(response.ok){
            return await response.json();

        } else {
            return undefined;
        }
     }

}