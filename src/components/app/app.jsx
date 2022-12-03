import React, { useEffect, useState } from "react";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIngredients } from "../../utils/burger-api";
import { IngredientsContext } from "../../utils/ingredientsContext";
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
      <IngredientsContext.Provider value={ingredients}>
        <main className={styles.main}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      </IngredientsContext.Provider>
    </>
  );
}

export default App;
