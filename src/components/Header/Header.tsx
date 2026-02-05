import style from "./Header.module.css";
import { useContext } from "react";
import { ContextProvider } from "../Context/Context";
import NavigationLink from "../NavigationLink/NavigationLink";
import Login from "../UserComponents/Login";
import User from "../UserComponents/User";

export default function Header() {
  const { currentColors, currentUser, setCurrentUser } =
    useContext(ContextProvider)!;

  const styleContainer: React.CSSProperties & {
    [key: `--${string}`]: string | number;
  } = {
    "--header-color": currentColors.header,
    color: currentColors.text,
  };

  return (
    <header className={style.container} style={styleContainer}>
      <h1 className={style.logo}>Calories Calculator</h1>
      <nav className={style["nav-container"]}>
        <NavigationLink destination="/" text="Main Page" />
        <NavigationLink destination="/addFood" text="Add Food" />
        <NavigationLink destination="/foodList" text="Food List" />
      </nav>
      <div className={style["user-container"]}>
        {currentUser ? (
          <User currentUser={currentUser} setCurrentUser={setCurrentUser} />
        ) : (
          <Login />
        )}
      </div>
    </header>
  );
}
