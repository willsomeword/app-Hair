import AsyncStorage from "@react-native-async-storage/async-storage";
export default class UserRepoCliente {
    constructor() {
        this.API_URL = process.env.EXPO_PUBLIC_API_URL;
    }

    async findUserById(userId) {
        const token = await AsyncStorage.getItem("token");

        if (!token) return;
        console.log(userId);
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
            `${process.env.EXPO_PUBLIC_API_URL}/cliente/${userId}`,
            options
        );

        if (response.ok) {
            return (await response.json());
        } else {
            return undefined;
        }
    }
    async findAll() {
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

        const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/cliente`, options)

        if (response.ok) {
            return (await response.json());
        } else {
            return undefined;
        }
    }
    async createCliente(data) {
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
            `${process.env.EXPO_PUBLIC_API_URL}/cliente`,

            options
        );

        if (response.ok) {
            return (await response.json());

        } else {
            return undefined;
        }
    }

    async UpdateCliente(data, idcliente) {
        const token = await AsyncStorage.getItem("token");


        if (!token) return;


        const header = new Headers({
            "content-Type": "application/json",
            authorization: token,
        });

        const options = {
            method: "put",
            headers: header,
            mode: 'cors',
            body: JSON.stringify(data),
        };


        const response = await fetch(
            `${process.env.EXPO_PUBLIC_API_URL}/cliente/${userId}`,

            options
        );

        if (response.ok) {
            return (await response.json());

        } else {
            return undefined;
        }
    }

}