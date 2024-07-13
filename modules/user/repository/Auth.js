export default class Auth{
      static async Login(LoginDTO) {
        const API_URL = process.env.EXPO_PUBLIC_API_URL;
        const header = new Headers({
            "Content-Type": "application/json",
        });


        const options={
            method:"POST",
            headers: header,
            mode:"cors",
            body: JSON.stringify(LoginDTO),
        };

        const response = await fetch(`${API_URL}/login`, options);

        if (response.ok) {
            return await response.json();
        } else {
            return undefined;
        }
        
    }
}


