import React, { useState } from "react";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { burger } from "../../utils/data";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerIngredients() {
  const [current, setCurrent] = React.useState("булки");
  return (
    <div className="mt-10" style={{ maxWidth: "600px" }}>
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div style={{ display: "flex" }} className="mt-5 mb-10">
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
        <ul
          className="mt-6 ml-4 mb-10"
          style={{
            padding: "0",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {burger.map((bun) => {
            if (bun.type === "bun") {
              return (
                <li className={styles.card}>
                  <img src={bun.image} className="ml-4 mr-4"></img>
                  <div
                    className="mt-1 mb-1"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <p className="text text_type_digits-default mr-1">
                      {bun.price}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p
                    className="text text_type_main-small"
                    style={{ textAlign: "center", height: "48px" }}
                  >
                    {bun.name}
                  </p>
                </li>
              );
            }
          })}
        </ul>
        <p className="text text_type_main-medium">Соусы</p>
        <ul
          className="mt-6 ml-4 mb-10"
          style={{
            padding: "0",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {burger.map((sauce) => {
            if (sauce.type === "sauce") {
              return (
                <li className={styles.card}>
                  <img src={sauce.image} className="ml-4 mr-4"></img>
                  <div
                    className="mt-1 mb-1"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <p className="text text_type_digits-default mr-1">
                      {sauce.price}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p
                    className="text text_type_main-small"
                    style={{ textAlign: "center", height: "48px" }}
                  >
                    {sauce.name}
                  </p>
                </li>
              );
            }
          })}
        </ul>
        <p className="text text_type_main-medium">Начинки</p>
        <ul
          className="mt-6 ml-4 mb-10"
          style={{
            padding: "0",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {burger.map((main) => {
            if (main.type === "main") {
              return (
                <li className={styles.card}>
                  <img src={main.image} className="ml-4 mr-4"></img>
                  <div
                    className="mt-1 mb-1"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <p className="text text_type_digits-default mr-1">
                      {main.price}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p
                    className="text text_type_main-small"
                    style={{ textAlign: "center", height: "48px" }}
                  >
                    {main.name}
                  </p>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default BurgerIngredients;
