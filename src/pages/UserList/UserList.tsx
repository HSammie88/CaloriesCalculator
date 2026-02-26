import { UserQueries } from "../../DBQueries";
import style from "./UserList.module.css";
import UserCard from "./UserCard";
import { useState } from "react";
import type { IUser } from "../../types";
import UserFullInfo from "./UserFullInfo";

export default function UserList() {
  const [selectedUser, setUser] = useState<IUser>();
  const allUsers = UserQueries.getAllUsers();
  return (
    <>
      <div className={style.container}>
        {allUsers.map((user, index) => {
          return (
            <UserCard
              key={index}
              user={user}
              style={style}
              selectedUser={selectedUser}
              setUser={setUser}
            />
          );
        })}
        {selectedUser ? (
          <UserFullInfo style={style} selectedUser={selectedUser} setUser={setUser} />
        ) : null}
      </div>
    </>
  );
}
