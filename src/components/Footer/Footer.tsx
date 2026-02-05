import style from './Footer.module.css'
import { useContext } from 'react'
import { ContextProvider } from '../Context/Context'

export default function Footer(){
    const {currentColors} = useContext(ContextProvider)!
    
    const styleContainer: React.CSSProperties ={
        backgroundColor: currentColors.header,
        color: currentColors.text,
    }
    return (
        <footer style={styleContainer} className={style.container}>
            
        </footer>
    )
}