import { type IDish} from "./index.ts";

export interface IUser {
  id: number;
  login: string;
  password: string;
  name: string;
  role: string;
  foodList: IDish[];
  isActive: boolean;
}
