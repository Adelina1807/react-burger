import PropTypes from "prop-types";
import styles from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
function Modal(props) {
  return (
    <>
      <div className={styles.modal}>
        <div className={`${styles.header} pt-10 pr-10 pl-10`}>
          <p className="text text_type_main-large">{props.children}</p>
          <CloseIcon type="primary" onClick={props.close} />
        </div>
        {props.type === "order" ? (
          <OrderDetails info={props.info}></OrderDetails>
        ) : (
          <IngredientDetails info={props.info}></IngredientDetails>
        )}
      </div>
    </>
  );
}

Modal.propTypes = {
  type: PropTypes.string,
  close: PropTypes.func,
  info: PropTypes.object,
};
export default Modal;
