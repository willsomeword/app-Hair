import { authRepo } from "../repository";

export default class AuthService{
     static Login() {
         throw new Error('Method not implemented.');
     }
     async Login(LoginDTO){
        return authRepo.Login(LoginDTO);

     }
}