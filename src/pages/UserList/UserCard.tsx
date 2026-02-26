import { useContext, useState, type CSSProperties } from "react";
import type { IUser } from "../../types";
import { ContextProvider } from "../../components/Context/Context";

interface ICardProps {
  user: IUser;
  style: CSSModuleClasses;
  selectedUser: IUser | undefined;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export default function UserCard({
  style,
  user,
  selectedUser,
  setUser,
}: ICardProps) {
  const { currentColors } = useContext(ContextProvider)!;
  const [cursor, setCursor] = useState("pointer");
  const cardStyle: CSSProperties & {
    [key: `--${string}`]: string | number;
  } = {
    "--bg-color": currentColors.card,
    "--hover-color": currentColors.cardHover,
    color: currentColors.text,
    cursor: cursor,
  };

  const handleClick = () => {
    if (!selectedUser) setUser(user);
  };

  const handleEnter = () => {
    if (selectedUser) setCursor("not-allowed");
    else setCursor("pointer");
  };

  return (
    <div
      onMouseEnter={() => handleEnter()}
      onClick={() => handleClick()}
      style={cardStyle}
      className={style.user_card}
    >
      <h3>{`Name: ${user.name}`}</h3>
      <h4>{`Login: ${user.login}`}</h4>
      <h4>{`Role: ${user.role}`}</h4>
      <h4>{`Active: ${user.isActive}`}</h4>
    </div>
  );
}
