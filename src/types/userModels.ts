import { IBaseModel } from "./IBaseModel";

export interface UserDTO {
  username: string;
  email: string;
  password: string;
}

export interface IUser extends UserDTO, IBaseModel{}