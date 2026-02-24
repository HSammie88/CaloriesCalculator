import { useContext } from 'react'
import style from './MainPage.module.css'
import { ContextProvider } from '../../components/Context/Context'
import Logged from './Logged'
import NotLogged from './NotLogged'

export default function MainPage(){
    const {currentColors, currentUser, setCurrentUser} = useContext(ContextProvider)!
    
    return <>
        <div className={style.container}>
            {currentUser ? <Logged style={style} currentColors={currentColors}/> : <NotLogged style={style} currentColors={currentColors} setCurrentUser={setCurrentUser}/>}
        </div>
    </>
}