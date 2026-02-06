import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";
import colors from "../../colors.json";
import { UserQueries } from "../../DBQueries";

type ColorsFields = typeof colors.dark;

interface IContextProps {
  children: React.ReactNode;
}

interface IContextValues {
  currentColors: ColorsFields;
  currentUser: string;
  setCurrentUser: Dispatch<SetStateAction<string>>;
  changeTheme: () => void;
}

const ContextProvider = createContext<IContextValues | undefined>(undefined);

const Context = ({ children }: IContextProps) => {
  const [isDark, setDark] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const changeTheme = (): void => {
    setDark(!isDark);
  };
  const currentColors: ColorsFields = isDark ? colors.dark : colors.light;

  if (
    !localStorage.getItem("users") ||
    localStorage.getItem("users")?.length === 0
  )
    UserQueries.add({
      id: 0,
      login: "admin",
      password: "admin",
      name: "admin",
      role: "Administrator",
      foodList: [],
    });

  useEffect(() => {
    document.body.style.backgroundColor = currentColors.document;
  }, [currentColors]);

  const contextValues: IContextValues = {
    currentColors,
    currentUser,
    setCurrentUser,
    changeTheme,
  };

  return (
    <ContextProvider.Provider value={contextValues}>
      {children}
    </ContextProvider.Provider>
  );
};

export { Context, ContextProvider };
