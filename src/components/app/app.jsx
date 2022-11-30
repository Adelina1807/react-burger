import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIngredients } from "../../utils/burger-api";

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getIngredients()
      .then((res) => {
        setIngredients(res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients} />
        <BurgerConstructor ingredients={ingredients} />
      </main>
    </>
  );
}

export default App;
