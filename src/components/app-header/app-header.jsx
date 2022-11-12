import React from "react";
import styles from "./app-header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header className={`${styles.main} pb-4 pt-4`}>
      <div className={styles.header}>
        <nav className={styles.nav}>
          <a
            href="#"
            className={`${styles.icon} ml-5 mr-5 text text_type_main-default`}
          >
            <BurgerIcon type="primary" /> Конструктор
          </a>
          <a
            href="#"
            className={`${styles.order} ml-5 mr-5 text text_type_main-default`}
          >
            <ListIcon type="secondary" /> Лента заказов
          </a>
        </nav>
        <div className={styles.logo}>
          <Logo />
        </div>
        <a
          href="#"
          className={`${styles.profile} ml-5 mr-5 text text_type_main-default`}
        >
          <ProfileIcon type="secondary" /> Личный кабинет
        </a>
      </div>
    </header>
  );
}

export default AppHeader;
