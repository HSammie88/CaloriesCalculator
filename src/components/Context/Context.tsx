import { createContext, useState, type Dispatch, type SetStateAction } from "react";

interface IContextProps{
    children: React.ReactNode,
}

interface IContextValues{
    isDark: boolean,
    currentUser: string,
    setCurrentUser: Dispatch<SetStateAction<string>>
    changeTheme: () => void
}

const ContextProvider = createContext<IContextValues | undefined>(undefined)

const Context = ({children}: IContextProps) =>{
    const [isDark, setDark] = useState(true)
    const [currentUser, setCurrentUser] = useState('')
    const changeTheme = (): void => {setDark(!isDark)}

    const contextValues: IContextValues = {
        isDark,
        currentUser,
        setCurrentUser,
        changeTheme
    }

    return(
        <ContextProvider.Provider value={contextValues}>
            {children}
        </ContextProvider.Provider>
    )
}

export { Context, ContextProvider }