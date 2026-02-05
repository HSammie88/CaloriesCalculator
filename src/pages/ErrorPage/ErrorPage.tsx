import { useContext } from 'react'
import { ContextProvider } from '../../components/Context/Context'

interface IErrorProps{
    errorMessage?: string,
}

export default function ErrorPage({errorMessage = "Page not found, error 404"}: IErrorProps){
    const {currentColors} = useContext(ContextProvider)!
    
    return (
        <div style={{color: currentColors.text}} className='error-page'>
            <p>{errorMessage}</p>
        </div>
    )
}