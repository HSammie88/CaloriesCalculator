import { LogIn } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { ContextProvider } from "../Context/Context";
import { UserQueries } from "../../DBQueries";

export default function Login() {
  const { currentColors, setCurrentUser } = useContext(ContextProvider)!;
  const [error, setError] = useState<string>();
  const loginRef = useRef<HTMLInputElement>(null);
  const pwdRef = useRef<HTMLInputElement>(null);

  const inputStyle: React.CSSProperties = {
    backgroundColor: currentColors.background,
    border: "1px solid gray",
    margin: "5px 0",
    width: "100%",
    fontSize: "20px",
    color: currentColors.text,
    padding: "0 3px",
    borderRadius: "5px",
  };

  const handleLogin = () => {
    if (loginRef.current && pwdRef.current) {
      if (!loginRef.current.value || !pwdRef.current.value) {
        setError("Empty fields!");
        return;
      }
      const foundUser = UserQueries.getOneUser(loginRef.current.value);
      if ("errorMessage" in foundUser) {
        setError("Wrong credentials");
        return;
      }
      if (foundUser.password !== pwdRef.current.value) {
        setError("Wrong credentials");
        return;
      }
      setCurrentUser(foundUser.login);
    }
  };

  useEffect(() => {
    const timeout: number = setTimeout(() => setError(undefined), 5000);
    return () => clearTimeout(timeout);
  }, [error]);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <input
          placeholder="Login"
          maxLength={15}
          style={inputStyle}
          ref={loginRef}
          type="text"
        />
        <input
          placeholder="Password"
          maxLength={30}
          style={inputStyle}
          ref={pwdRef}
          type="password"
        />
        <p>{error}</p>
      </div>
      <button
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "5px",
          margin: "5px 0",
          backgroundColor: currentColors.button,
        }}
        onClick={() => handleLogin()}
      >
        <LogIn
          style={{
            cursor: "pointer",
            width: "40px",
            height: "40px",
          }}
        />
      </button>
    </>
  );
}
