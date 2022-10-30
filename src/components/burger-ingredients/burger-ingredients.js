import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { burger } from "../../utils/data";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState("булки");
  return (
    <div className={`${styles.section} mt-10`}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={`${styles.nav} mt-5 mb-10`}>
        <Tab value="булки" active={current === "булки"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="соусы" active={current === "соусы"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab
          value="начинки"
          active={current === "начинки"}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </div>
      <div className={styles.burger}>
        <p className="text text_type_main-medium">Булки</p>
        <ul className={`${styles.list} mt-6 ml-4 mb-10`}>
          {burger.map((bun) => {
            const k = props.cart.reduce(function (prev, item) {
              return prev + (item._id === bun._id);
            }, 0);
            if (bun.type === "bun") {
              return (
                <li className={styles.card}>
                  <img src={bun.image} className="ml-4 mr-4"></img>
                  <div className={`${styles.price} mt-1 mb-1`}>
                    <p className="text text_type_digits-default mr-1">
                      {bun.price}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p className={`${styles.name} text text_type_main-small`}>
                    {bun.name}
                  </p>
                  {k > 0 ? <Counter count={k} size="default" /> : null}
                </li>
              );
            }
          })}
        </ul>
        <p className="text text_type_main-medium">Соусы</p>
        <ul className={`${styles.list} mt-6 ml-4 mb-10`}>
          {burger.map((sauce) => {
            const k = props.cart.reduce(function (prev, item) {
              return prev + (item._id === sauce._id);
            }, 0);
            if (sauce.type === "sauce") {
              return (
                <li className={styles.card}>
                  <img src={sauce.image} className="ml-4 mr-4"></img>
                  <div className={`${styles.price} mt-1 mb-1`}>
                    <p className="text text_type_digits-default mr-1">
                      {sauce.price}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p className={`${styles.name} text text_type_main-small`}>
                    {sauce.name}
                  </p>
                  {k > 0 ? <Counter count={k} size="default" /> : null}
                </li>
              );
            }
          })}
        </ul>
        <p className="text text_type_main-medium">Начинки</p>
        <ul className={`${styles.list} mt-6 ml-4 mb-10`}>
          {burger.map((main) => {
            const k = props.cart.reduce(function (prev, item) {
              return prev + (item._id === main._id);
            }, 0);
            if (main.type === "main") {
              return (
                <li className={styles.card}>
                  <img src={main.image} className="ml-4 mr-4"></img>
                  <div className={`${styles.price} mt-1 mb-1`}>
                    <p className="text text_type_digits-default mr-1">
                      {main.price}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p className={`${styles.name} text text_type_main-small`}>
                    {main.name}
                  </p>
                  {k > 0 ? <Counter count={k} size="default" /> : null}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

BurgerIngredients.propTypes = {
  cart: PropTypes.array,
};

export default BurgerIngredients;
