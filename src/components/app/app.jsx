import React from "react";
import ReactDOM from "react-dom";
import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { CART } from "../../utils/data";

class App extends React.Component {
  render() {
    return (
      <>
        <AppHeader />
        <main className={styles.main}>
          <BurgerIngredients cart={CART} />
          <BurgerConstructor cart={CART} />
        </main>
      </>
    );
  }
}

export default App;
