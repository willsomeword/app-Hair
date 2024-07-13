
export default class UserRepoCliente {
    
    async findUserById(userId) {
        const token = sessionStorage.getItem("token");

        if (!token) return;
        console.log(userId);
        const header = new Headers({
            "content-Type": "application/json",
            authorization: token,
        });


        const options= {
            method: "GET",
            headers: header,
            mode: "cors",

        };

        const response = await fetch(
            `http://localhost:3002/cliente/${userId}`,
            options
        );

        if (response.ok) {
            return (await response.json());
        } else {
            return undefined;
        }
    }
    async findAll(){
        const token = sessionStorage.getItem("token");

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

        const response = await fetch("http://localhost:3002/cliente", options)
  
        if(response.ok){
            return(await response.json());
        }else {
            return undefined;
        }
    }
    async createCliente(data) {
        const token = sessionStorage.getItem("token");


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
            `http://localhost:3002/cliente`,

            options
        );

        if (response.ok) {
            return (await response.json()) ;

        } else {
            return undefined;
        }
    }

    async UpdateCliente(data, idcliente) {
        const token = sessionStorage.getItem("token");


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
            `http://localhost:3002/cliente/${idcliente}`,

            options
        );

        if (response.ok) {
            return (await response.json());

        } else {
            return undefined;
        }
    }

}