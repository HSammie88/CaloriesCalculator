import style from './Footer.module.css'
import { useContext } from 'react'
import { ContextProvider } from '../Context/Context'

export default function Footer(){
    const {currentColors} = useContext(ContextProvider)!
    
    const styleContainer: React.CSSProperties & {
        [key: `--${string}`]: string | number;
      } = {
        "--footer-color": currentColors.header,
        color: currentColors.text,
      };
    return (
        <footer style={styleContainer} className={style.container}>
            <p>Developed by HSammie88, 2026</p>
            <a href="https://github.com/HSammie88/CaloriesCalculator">My Repo</a>
        </footer>
    )
}