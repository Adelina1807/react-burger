import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  const url = "https://norma.nomoreparties.space/api/ingredients";

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getIngredients = () => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setIngredients(data.data);
          console.log(data.data);
        })
        .catch((e) => console.log(e));
    };

    getIngredients();
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
