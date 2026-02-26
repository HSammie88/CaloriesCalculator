import { useContext, useState } from "react";
import type { IUser } from "../../types";
import { ContextProvider } from "../../components/Context/Context";
import { Check, Trash, X } from "lucide-react";
import { UserQueries } from "../../DBQueries";
import { useSpring, animated } from "react-spring";

interface IUserInfo {
  style: CSSModuleClasses;
  selectedUser: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

export default function UserFullInfo({
  style,
  selectedUser,
  setUser,
}: IUserInfo) {
  const { currentColors } = useContext(ContextProvider)!;
  const [isOpened, setIsOpened] = useState(true)
  const handleCloseClick = () => {
    setIsOpened(false)
    setTimeout(()=>setUser(undefined), 300)
  };
  const handleDeleteClick = () => {
    UserQueries.update(selectedUser.login, {
      isActive: !selectedUser.isActive,
    });
    handleCloseClick();
  };
  const [springs] = useSpring(()=>({
    from: {opacity: isOpened ? 0 : 1, height: isOpened ? '0%' : '100%'},
    to: {opacity: isOpened ? 1 : 0, height: isOpened ? '100%': '0%'},
    config: {duration: 250}
  }), [isOpened])
  return (
    <animated.div
      style={{
        ...springs,
        backgroundColor: currentColors.card,
        color: currentColors.text,
      }}
      className={style.user_info_container}
    >
      <h2>{`User Name: ${selectedUser.name}`}</h2>
      <h4>{`User ID: ${selectedUser.id}`}</h4>
      <h4>{`User login: ${selectedUser.login}`}</h4>
      <h4>{`User is active: ${selectedUser.isActive}`}</h4>
      <h4>{`User role: ${selectedUser.role}`}</h4>
      <button
        className={style.close_button}
        onClick={() => handleCloseClick()}
        style={{ backgroundColor: currentColors.button }}
      >
        <X />
      </button>
      <button
        onClick={() => handleDeleteClick()}
        style={{ backgroundColor: currentColors.button }}
        className={style.delete_button}
      >
        {selectedUser.isActive ? <Trash /> : <Check />}
      </button>
    </animated.div>
  );
}
