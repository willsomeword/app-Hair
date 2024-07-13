import { serviceModuleRepo } from "../repository";


export default class ServicoModuleService {
    async createServico(data) {
        return serviceModuleRepo.createService(data);
    }

    async getAllService() {
        return serviceModuleRepo.getAllService();
    }

    async updateServico(id, servicoDTO){
        return serviceModuleRepo.updateService(id,servicoDTO);
    } 

    async getServiceById(serviceId){
        return serviceModuleRepo.getServiceById(serviceId);
    }
}