import { NavLink } from "react-router-dom";

interface INavProps{
    text: string,
    destination: string,
}

export default function NavigationLink({text, destination}: INavProps){
    return (
        <NavLink to={destination}>
            {text}
        </NavLink>
    )
}