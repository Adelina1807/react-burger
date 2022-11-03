import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { BURGER } from "../../utils/data";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState("bun");
  const buns = BURGER.filter((item) => item.type === "bun");
  const mains = BURGER.filter((item) => item.type === "main");
  const sauces = BURGER.filter((item) => item.type === "sauce");
  return (
    <div className={`${styles.section} mt-10`}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={`${styles.nav} mt-5 mb-10`}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div className={styles.burger}>
        <p className="text text_type_main-medium">Булки</p>
        <ul className={`${styles.list} mt-6 ml-4 mb-10`}>
          {buns.map((bun) => {
            return (
              <li className={styles.card} key={bun._id}>
                <img src={bun.image} alt={bun.name} className="ml-4 mr-4"></img>
                <div className={`${styles.price} mt-1 mb-1`}>
                  <p className="text text_type_digits-default mr-1">
                    {bun.price}
                  </p>
                  <CurrencyIcon type="primary" />
                </div>
                <p className={`${styles.name} text text_type_main-small`}>
                  {bun.name}
                </p>
                <Counter count={1} size="default" />
              </li>
            );
          })}
        </ul>
        <p className="text text_type_main-medium">Соусы</p>
        <ul className={`${styles.list} mt-6 ml-4 mb-10`}>
          {sauces.map((sauce) => {
            return (
              <li className={styles.card} key={sauce._id}>
                <img
                  src={sauce.image}
                  alt={sauce.name}
                  className="ml-4 mr-4"
                ></img>
                <div className={`${styles.price} mt-1 mb-1`}>
                  <p className="text text_type_digits-default mr-1">
                    {sauce.price}
                  </p>
                  <CurrencyIcon type="primary" />
                </div>
                <p className={`${styles.name} text text_type_main-small`}>
                  {sauce.name}
                </p>
                <Counter count={1} size="default" />
              </li>
            );
          })}
        </ul>
        <p className="text text_type_main-medium">Начинки</p>
        <ul className={`${styles.list} mt-6 ml-4 mb-10`}>
          {mains.map((main) => {
            return (
              <li className={styles.card} key={main._id}>
                <img
                  src={main.image}
                  alt={main.name}
                  className="ml-4 mr-4"
                ></img>
                <div className={`${styles.price} mt-1 mb-1`}>
                  <p className="text text_type_digits-default mr-1">
                    {main.price}
                  </p>
                  <CurrencyIcon type="primary" />
                </div>
                <p className={`${styles.name} text text_type_main-small`}>
                  {main.name}
                </p>
                <Counter count={1} size="default" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number,
    }).isRequired
  ).isRequired,
};

export default BurgerIngredients;
