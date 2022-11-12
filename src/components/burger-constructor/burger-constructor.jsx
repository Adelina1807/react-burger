import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";

function BurgerConstructor(props) {
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState({});

  const closeByEscape = (evt) => {
    if (evt.key === "Escape") {
      closeModal();
    }
  };

  const openModal = () => {
    setOpen(true);
    setPopup({
      id: "034536",
      status: "Ваш заказ начали готовить",
      phrase: "Дождитесь готовности на орбитальной станции",
    });
    document.addEventListener("keydown", closeByEscape);
  };

  const closeModal = () => {
    setOpen(false);
    setPopup({});
    document.removeEventListener("keydown", closeByEscape);
  };

  const bun = props.ingredients.find((ingredient) => ingredient.type === "bun");
  const otherIngredients = props.ingredients.filter(
    (ingredient) => ingredient.type !== "bun"
  );
  const sum = props.ingredients.reduce(function (previousValue, elem) {
    return previousValue + elem.price;
  }, 0);
  if (props.ingredients.length === 0) {
    return null;
  }
  return (
    <>
      <div className="mt-25 ml-4">
        <div className={styles.section}>
          <div className="ml-8 mb-4">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
          <ul className={styles.main}>
            {otherIngredients.map((item, index) => {
              return (
                <li className={styles.elem} key={index}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image}
                  />
                </li>
              );
            })}
          </ul>
          <div className="ml-8 mt-4">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (низ)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </div>
          <div className={`${styles.total} mt-10`}>
            <p className={`${styles.price} text text_type_digits-medium`}>
              {sum}
            </p>
            <CurrencyIcon type="primary" />
            <div className="ml-10">
              <Button type="primary" size="large" onClick={openModal}>
                Оформить заказ
              </Button>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <ModalOverlay
          type="order"
          info={popup}
          close={closeModal}
        ></ModalOverlay>
      )}
    </>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(
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

export default BurgerConstructor;
