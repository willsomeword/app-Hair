import UserRepo from "../repository/user";



export default class User{
    static findUserById() {
      throw new Error('Method not implemented.');
    }
    async findUserById(){
        const userRepo = new UserRepo(); // Instantiate UserRepo
       const gettingUserById = userRepo.findUserById(userId);
        return gettingUserById;
    }
    async findAll(){
      const userRepo = new UserRepo();
      const gettingUser = await userRepo.findAll();
      return gettingUser;
  }
  async createFuncionario(data){
    const FuncRepo = new UserRepo();
    const FuncionarioCreate = await FuncRepo.createFuncionario(data);
    return FuncionarioCreate;
  }
  async updateFuncionario (data) {
    const Funcionario = new UserRepo();
    const postFuncionario = await Funcionario.updateFuncionario(data,  id);
    return postFuncionario;
  }
   
}