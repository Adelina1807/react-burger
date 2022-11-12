import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { typeIngredient } from "../../utils/prop-types";

function BurgerConstructor(props) {
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState(null);

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

  const bun = React.useMemo(() => {
    return props.ingredients.find((ingredient) => ingredient.type === "bun");
  }, [props.ingredients]);
  const otherIngredients = React.useMemo(() => {
    return props.ingredients.filter((ingredient) => ingredient.type !== "bun");
  }, [props.ingredients]);
  const sum = React.useMemo(() => {
    return otherIngredients.reduce(function (previousValue, elem) {
      return previousValue + elem.price;
    }, 0);
  }, [otherIngredients]);
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
              {sum + bun.price * 2}
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
        <Modal close={closeModal} title={false}>
          <OrderDetails info={popup}></OrderDetails>
        </Modal>
      )}
    </>
  );
}

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(typeIngredient),
};

export default BurgerConstructor;
