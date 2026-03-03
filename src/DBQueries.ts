import { type IDish, type IFood, type IUser} from "./types/index";

interface IQueryError {
  errorID: number;
  errorMessage: string;
}

interface IFoodQueries{
  add: (food: IFood) => void | IQueryError;
  get: () => IFood[];
  update: (name: string) => void | IQueryError;
  delete: (name: string) => void | IQueryError;
}

interface IDishQueries{
  add: (dish: IDish) => void | IQueryError;
  get: (login: string) => IDish[];
  update: (login: string, dishID: Partial<IDish>) => void | IQueryError;
  delete: (login: string, dishID: number) => void | IQueryError;
}

interface IUserQueries {
  add: (user: IUser) => void | IQueryError;
  getOneUser: (login: string) => IUser | IQueryError;
  getAllUsers: () => IUser[];
  update: (login: string, newUser: Partial<IUser>) => void | IQueryError;
  delete: (login: string) => void | IQueryError;
}

export const UserQueries: IUserQueries = {
  add: (newUser: IUser) => {
    const userList: IUser[] = UserQueries.getAllUsers();
    const foundUser: IUser | undefined = userList.find(
      (user) => user.login === newUser.login
    );
    if (foundUser) return { errorID: 105, errorMessage: "User is existing" };
    else {
      localStorage.setItem("users", JSON.stringify([...userList, newUser]));
    }
  },

  getOneUser: (login: string) => {
    const userList: IUser[] = UserQueries.getAllUsers();
    const foundUser: IUser | undefined = userList.find(
      (user) => user.login === login
    );
    if (!foundUser) return { errorID: 104, errorMessage: "User not found" };
    if (!foundUser.isActive) return { errorID: 404, errorMessage: "User was deleted"}
    return foundUser;
  },

  getAllUsers: () => {
    const userData = localStorage.getItem("users");
    if (!userData) return [];
    return JSON.parse(userData);
  },

  update: (login: string, newUser: Partial<IUser>) => {
    const userList: IUser[] = UserQueries.getAllUsers();
    const foundUser = userList.findIndex((user) => user.login === login);
    if (foundUser === -1)
      return { errorID: 104, errorMessage: "User not found" };
    userList[foundUser] = { ...userList[foundUser], ...newUser };
    localStorage.setItem("users", JSON.stringify(userList));
  },

  delete(login: string) {
    const userList: IUser[] = UserQueries.getAllUsers();
    const foundUser = userList.findIndex((user) => user.login === login);
    if (foundUser === -1)
      return { errorID: 104, errorMessage: "User not found" };
    userList.splice(foundUser, 1);
    localStorage.setItem("users", JSON.stringify(userList));
  },
};
