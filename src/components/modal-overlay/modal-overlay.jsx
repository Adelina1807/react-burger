import PropTypes from "prop-types";
import styles from "./modal-overlay.module.css";

function ModalOverlay(props) {
  const clickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      props.close();
    }
  };

  return (
    <div className={styles.popup} onClick={clickOverlay}>
      {props.children}
    </div>
  );
}

ModalOverlay.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default ModalOverlay;
