import { type IFood } from "./index.ts";

export interface IUser {
  id: number;
  login: string;
  password: string;
  name: string;
  role: string;
  foodList: IFood[];
  isActive: boolean;
}
