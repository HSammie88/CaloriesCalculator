import { useContext } from "react";
import style from "./AddFood.module.css";
import { ContextProvider } from "../../components/Context/Context";
import { UserQueries } from "../../DBQueries";

export default function AddFood() {
  const { currentUser, currentColors } = useContext(ContextProvider)!;
  const userData = UserQueries.getOneUser(currentUser);
  return (
    <div style={{
        color: currentColors.text,
    }} className={style.container}>
      <div className={style.buttonContainer}>
        <div
          style={{
            backgroundColor: currentColors.card,
          }}
          className={style.addBtn}
        >
            <h2>Add Food</h2>
        </div>
        {!('errorMessage' in userData) && userData.foodList.length > 0? 
        
        <div
          style={{
            backgroundColor: currentColors.card,
          }}
          className={style.addBtn}
        >
            <h2>Add Dish</h2>
        </div>
        :
        null}
      </div>
    </div>
  );
}
