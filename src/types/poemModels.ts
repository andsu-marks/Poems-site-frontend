import { IBaseModel } from "./IBaseModel";

export interface PoemDTO {
  title: string;
  content: string;
}

export interface IPoem extends IBaseModel, PoemDTO {}