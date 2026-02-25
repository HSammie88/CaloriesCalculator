import { useContext, type CSSProperties } from "react";
import type { IUser } from "../../types";
import { ContextProvider } from "../../components/Context/Context";

interface ICardProps{
    user: IUser,
    style: CSSModuleClasses,
}

export default function UserCard({style, user}: ICardProps){
    const {currentColors} = useContext(ContextProvider)!
    const cardStyle: CSSProperties & {
        [key: `--${string}`]: string | number;
      } ={
        '--bg-color': currentColors.card,
        '--hover-color': currentColors.cardHover,
        color: currentColors.text,
    }
    
    return <div style={cardStyle} className={style.user_card}>
        <h3>{`Name: ${user.name}`}</h3>
        <h4>{`Login: ${user.login}`}</h4>
        <h4>{`Role: ${user.role}`}</h4>
        <h4>{`Active: ${user.isActive}`}</h4>
    </div>
}