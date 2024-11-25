import prisma from "@/lib/prisma";
import { IUser, UserDTO } from "@/types/userModels";

export class UsersRepo {
  public async create(data: UserDTO): Promise<IUser> {
    return prisma.user.create({
      data: {
        username: data.username,
        email: data.email,
        password: data.password
      }
    })
  }
}