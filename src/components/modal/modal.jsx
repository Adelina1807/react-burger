import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect } from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
const modalRoot = document.getElementById("root");

function Modal(props) {
  const closeByEscape = (evt) => {
    if (evt.key === "Escape") {
      props.close();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeByEscape);
    return () => {
      document.removeEventListener("keydown", closeByEscape);
    };
  }, []);

  return ReactDOM.createPortal(
    <ModalOverlay close={props.close}>
      <div className={styles.modal}>
        <div className={`${styles.header} pt-10 pr-10 pl-10`}>
          <p className="text text_type_main-large">
            {props.title && "Детали ингредиента"}
          </p>
          <CloseIcon type="primary" onClick={props.close} />
        </div>
        {props.children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
}

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  title: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
