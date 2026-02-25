import { useEffect, useRef, useState } from "react";
import { UserQueries } from "../../DBQueries";

interface INotLoggedProps {
  style: CSSModuleClasses;
  currentColors: { [key: string]: string };
  setCurrentUser: React.Dispatch<React.SetStateAction<string>>;
}

export default function NotLogged({
  style,
  currentColors,
  setCurrentUser,
}: INotLoggedProps) {
  const nameRef = useRef<HTMLInputElement>(null);
  const loginRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);
  const [errorText, setError] = useState("");
  const pwdRegex = /^(?=.*[A-Za-z])(?=.*\d).{7,}$/;

  const handleRegister = () => {
    if (nameRef.current && loginRef.current && pwdRef.current) {
      if (
        !nameRef.current.value ||
        !loginRef.current.value ||
        !pwdRef.current.value
      ) {
        setError("Missing fields!");
        return;
      }
      if (!pwdRegex.test(pwdRef.current.value)) {
        setError("This password is not secure");
        return;
      }
      const addedUser = UserQueries.add({
        id: UserQueries.getAllUsers().length,
        login: loginRef.current.value,
        password: pwdRef.current.value,
        name: nameRef.current.value,
        role: "User",
        foodList: [],
        isActive: true,
      });
      if (addedUser) {
        setError(addedUser.errorMessage);
        return;
      }
      setCurrentUser(loginRef.current.value);
    }
  };

  useEffect(() => {
    const timeout: number = setTimeout(() => setError(""), 5000);
    return () => clearTimeout(timeout);
  }, [errorText]);

  return (
    <>
      <div
        style={{
          backgroundColor: currentColors.card,
          color: currentColors.text,
        }}
        className={style.not_logged_container}
      >
        <h2>Registration form</h2>
        <form>
          <div className={style.input_container}>
            <label htmlFor="name_input">Name</label>
            <input ref={nameRef} maxLength={30} type="text" id="name_input" />
          </div>
          <div className={style.input_container}>
            <label htmlFor="login_input">Login</label>
            <input ref={loginRef} maxLength={30} type="text" id="login_input" />
          </div>
          <div className={style.input_container}>
            <label htmlFor="pwd_input">Password</label>
            <input ref={pwdRef} maxLength={15} type="password" id="pwd_input" />
          </div>
        </form>
        <button
          onClick={() => handleRegister()}
          style={{
            backgroundColor: currentColors.button,
          }}
        >
          Register
        </button>
        <p>{errorText}</p>
      </div>
    </>
  );
}
