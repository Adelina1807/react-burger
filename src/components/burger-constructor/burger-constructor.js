import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./burger-constructor.module.css";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

class BurgerConstructor extends React.Component {
  render() {
    return (
      <div className="mt-25 ml-4">
        <div className={styles.section}>
          <div className="ml-8 mb-4">
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${this.props.cart[0].name} (верх)`}
              price={this.props.cart[0].price}
              thumbnail={this.props.cart[0].image}
            />
          </div>
          <ul className={styles.main}>
            {this.props.cart.map((item) => {
              if (item.type !== "bun") {
                return (
                  <li className={styles.elem}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image}
                    />
                  </li>
                );
              }
            })}
          </ul>
          <div className="ml-8 mt-4">
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${this.props.cart[1].name} (низ)`}
              price={this.props.cart[1].price}
              thumbnail={this.props.cart[1].image}
            />
          </div>
          <div className={`${styles.total} mt-10`}>
            <p className={`${styles.price} text text_type_digits-medium`}>
              {this.props.cart.reduce(function (previousValue, elem) {
                return previousValue + elem.price;
              }, 0)}
            </p>
            <CurrencyIcon type="primary" />
            <div className="ml-10">
              <Button type="primary" size="large">
                Оформить заказ
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

BurgerConstructor.propTypes = {
  cart: PropTypes.array,
};

export default BurgerConstructor;
