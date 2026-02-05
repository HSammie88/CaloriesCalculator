import { createContext, useEffect, useState, type Dispatch, type SetStateAction } from "react";
import colors from '../../colors.json'

type ColorsFields = typeof colors.dark

interface IContextProps{
    children: React.ReactNode,
}

interface IContextValues{
    currentColors: ColorsFields,
    currentUser: string,
    setCurrentUser: Dispatch<SetStateAction<string>>
    changeTheme: () => void
}

const ContextProvider = createContext<IContextValues | undefined>(undefined)

const Context = ({children}: IContextProps) =>{
    const [isDark, setDark] = useState(false)
    const [currentUser, setCurrentUser] = useState('')
    const changeTheme = (): void => {setDark(!isDark)}
    const currentColors: ColorsFields = isDark ? colors.dark : colors.light

    useEffect(()=>{
        document.body.style.backgroundColor = currentColors.document
    },[currentColors])

    const contextValues: IContextValues = {
        currentColors,
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