import React, { useContext, useState } from "react";
import styles from "./burger-constructor.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { IngredientsContext } from "../../utils/ingredientsContext";
import { sendCart } from "../../utils/burger-api";

const emptyCart = {
  ingredients: [],
  price: 0,
  bun: false,
};

function addIngredient(cart, ingredient) {
  if (ingredient.type === "bun") {
    if (!cart.bun) {
      return {
        ingredients: [...cart.ingredients, ingredient],
        price: cart.price + 2 * ingredient.price,
        bun: true,
      };
    } else {
      return { ...cart };
    }
  } else {
    return {
      ingredients: [...cart.ingredients, ingredient],
      price: cart.price + ingredient.price,
      bun: cart.bun,
    };
  }
}

function BurgerConstructor() {
  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState(null);

  const openModal = () => {
    sendCart(
      cart.ingredients.map((item) => {
        return item._id;
      })
    )
      .then((res) => {
        setOpen(true);
        setPopup({
          id: res.order.number,
          status: "Ваш заказ начали готовить",
          phrase: "Дождитесь готовности на орбитальной станции",
        });
      })
      .catch((e) => console.log(e));
  };

  const closeModal = () => {
    setOpen(false);
    setPopup({});
  };

  const ingredients = useContext(IngredientsContext);

  const [cart, cartDispatch] = React.useReducer(addIngredient, emptyCart);

  React.useEffect(() => {
    if (cart.price === 0) {
      for (let i = 0; i < ingredients.length; i += 1) {
        cartDispatch(ingredients[i]);
      }
    }
  }, [ingredients]);

  const bun = React.useMemo(() => {
    return cart.ingredients.find((ingredient) => ingredient.type === "bun");
  }, [cart]);
  const otherIngredients = React.useMemo(() => {
    return cart.ingredients.filter((ingredient) => ingredient.type !== "bun");
  }, [cart]);

  if (ingredients.length === 0) {
    return null;
  }
  return (
    <>
      <div className="mt-25 ml-4">
        <div className={styles.section}>
          {cart.bun && (
            <div className="ml-8 mb-4">
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${bun.name} (верх)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </div>
          )}
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
          {cart.bun && (
            <div className="ml-8 mt-4">
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${bun.name} (низ)`}
                price={bun.price}
                thumbnail={bun.image}
              />
            </div>
          )}
          <div className={`${styles.total} mt-10`}>
            <p className={`${styles.price} text text_type_digits-medium`}>
              {cart.price}
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

export default BurgerConstructor;
