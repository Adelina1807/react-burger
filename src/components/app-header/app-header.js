import React from "react";
import styles from "./app-header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

class AppHeader extends React.Component {
  render() {
    return (
      <header
        style={{
          backgroundColor: "#1c1c21",
        }}
        className="pb-4 pt-4"
      >
        <div className={styles.header}>
          <nav className={styles.nav}>
            <div className={`${styles.icon} ml-5 mr-5`}>
              <BurgerIcon type="primary" />
              <p className="ml-2 text text_type_main-default">Конструктор</p>
            </div>
            <div className={`${styles.icon} ml-5 mr-5`}>
              <ListIcon type="secondary" />
              <p className="ml-2 text text_type_main-default text_color_inactive">
                Лента заказов
              </p>
            </div>
          </nav>
          <div className={styles.logo}>
            <Logo />
          </div>

          <div className={`${styles.profile} ml-5 mr-5`}>
            <ProfileIcon type="secondary" />
            <p className=" ml-2 text text_type_main-default text_color_inactive">
              Личный кабинет
            </p>
          </div>
        </div>
      </header>
    );
  }
}

export default AppHeader;
