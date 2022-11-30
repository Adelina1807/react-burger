import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./burger-ingredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { typeIngredient } from "../../utils/prop-types";

function BurgerIngredients(props) {
  const [popup, setPopup] = useState(null);
  const [open, setOpen] = useState(false);

  const openModal = (e) => {
    setOpen(true);
    const info = props.ingredients.find((item) => {
      return item._id === e.currentTarget.id;
    });
    setPopup(info);
  };

  const closeModal = () => {
    setOpen(false);
    setPopup({});
  };

  const [current, setCurrent] = React.useState("bun");
  const buns = React.useMemo(() => {
    return props.ingredients.filter((item) => item.type === "bun");
  }, [props.ingredients]);
  const mains = React.useMemo(() => {
    return props.ingredients.filter((item) => item.type === "main");
  }, [props.ingredients]);
  const sauces = React.useMemo(() => {
    return props.ingredients.filter((item) => item.type === "sauce");
  }, [props.ingredients]);
  return (
    <>
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
                <li
                  className={styles.card}
                  key={bun._id}
                  id={bun._id}
                  onClick={openModal}
                >
                  <img src={bun.image} alt={bun.name} className="ml-4 mr-4" />
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
                <li
                  className={styles.card}
                  key={sauce._id}
                  id={sauce._id}
                  onClick={openModal}
                >
                  <img
                    src={sauce.image}
                    alt={sauce.name}
                    className="ml-4 mr-4"
                  />
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
                <li
                  className={styles.card}
                  key={main._id}
                  id={main._id}
                  onClick={openModal}
                >
                  <img src={main.image} alt={main.name} className="ml-4 mr-4" />
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
      {open && (
        <Modal close={closeModal} title={true}>
          <IngredientDetails info={popup}></IngredientDetails>
        </Modal>
      )}
    </>
  );
}

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(typeIngredient),
};

export default BurgerIngredients;
