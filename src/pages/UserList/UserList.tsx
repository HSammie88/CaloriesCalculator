import { UserQueries } from '../../DBQueries'
import style from './UserList.module.css'
import UserCard from './UserCard'

export default function UserList(){
    const allUsers = UserQueries.getAllUsers()
    return <>
        <div className={style.container}>
            {allUsers.map((user, index) => {
                return <UserCard key={index} user={user} style={style}/>
            })}
        </div>
    </>
}