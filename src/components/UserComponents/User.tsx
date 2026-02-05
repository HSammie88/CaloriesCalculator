import { LogOut } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

interface IUserProps {
  currentUser: string;
  setCurrentUser: Dispatch<SetStateAction<string>>;
}

export default function User({ currentUser, setCurrentUser }: IUserProps) {
  return (
    <>
      <h3
        style={{
          fontSize: "25px",
        }}
      >{`Greetings, ${currentUser}`}</h3>
      <LogOut
        style={{
          cursor: "pointer",
          width: "40px",
          height: "40px",
        }}
        onClick={() => setCurrentUser("")}
      />
    </>
  );
}
