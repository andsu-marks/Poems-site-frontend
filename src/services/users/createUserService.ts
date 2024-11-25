import { IUser, UserDTO } from "@/types/userModels";
import { UsersRepo } from "@/repositories/userRepo";

export class CreateUserService {
  async execute(data: UserDTO): Promise<IUser> {
    const userRepo = new UsersRepo();
    
    return userRepo.create(data);
  }
}