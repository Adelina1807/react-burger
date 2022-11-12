import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import styles from "./modal-overlay.module.css";
import Modal from "../modal/modal";

const modalRoot = document.getElementById("root");

function ModalOverlay(props) {
  const clickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      props.close();
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className={styles.popup} onClick={clickOverlay}>
        <Modal info={props.info} close={props.close} type={props.type}>
          {props.children}
        </Modal>
      </div>
    </>,
    modalRoot
  );
}

ModalOverlay.propTypes = {
  type: PropTypes.string,
  close: PropTypes.func,
  info: PropTypes.object,
};

export default ModalOverlay;
