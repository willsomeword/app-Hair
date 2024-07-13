
export default class UserRepo {
    
    async findUserById(userId) {
        const token = sessionStorage.getItem("token");

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
            `http://localhost:3002/funcionario/${userId}`,
            options
        );

        if (response.ok) {
            return (await response.json());
        } else {
            return undefined;
        }
    };
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

        const response = await fetch("http://localhost:3002/funcionario", options)
      
        if(response.ok){
            return(await response.json()) ;
        }else {
            return undefined;
        }
    }
    
    async createFuncionario(data){
        const token = sessionStorage.getItem("token");

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

        const response = await fetch("http://localhost:3002/funcionario", options);
    
        if(response.ok){
            return(await response.json());
        }else {
            return undefined;
        }
    }


    async updateFuncionario(data, id){
        const token = sessionStorage.getItem("token");

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

        const response = await fetch(`http://localhost:3002/funcionario/${id}`, options);
    
        if(response.ok){
            return(await response.json());
        }else {
            return undefined;
        }
    }
}