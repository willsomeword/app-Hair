import UserRepoCliente from "../repository/user";


export default class UserServiceCliente {
  static findUserById(currentUserId) {
    throw new Error('Method not implemented.');
  }
  async findUserById(userId){
    const userRepo = new UserRepoCliente(); // Instantiate UserRepo
    const gettingUserById = userRepo.findUserById(userId);
    return gettingUserById;
  }
  async findAll(){
    const userRepo = new UserRepoCliente();
    const gettingUser = await userRepo.findAll();
    return gettingUser;

  }
  async createServicoCliente(data){
    const userRepo = new UserRepoCliente();
    const gettingCliente = await userRepo.createCliente(data);
    return gettingCliente;

  }

  async updateCliente(data, idcliente){
    const userRepo = new UserRepoCliente();
    const updateCliente = await userRepo.UpdateCliente(data, idcliente);
    return updateCliente;
  }



}