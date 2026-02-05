import style from './Header.module.css'
import { useContext } from 'react'
import { ContextProvider } from '../Context/Context'

export default function Header(){
    const {changeTheme, currentColors} = useContext(ContextProvider)!
    
    const styleContainer: React.CSSProperties ={
        backgroundColor: currentColors.header,
        color: currentColors.text,
    }
    
    return(
        <header className={style.container} style={styleContainer}>
            
        </header>
    )
}