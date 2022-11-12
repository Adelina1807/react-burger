import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";
import { typeIngredient } from "../../utils/prop-types";

function IngredientDetails({ info }) {
  return (
    <div className={styles.main}>
      <img src={info.image_large} alt={info.name} className="mb-4"></img>
      <p className="text text_type_main-medium">{info.name}</p>
      <ul className={styles.list}>
        <li className={styles.elem}>
          <p className="text text_type_main-default text_color_inactive">
            Калории,ккал
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {info.calories}
          </p>
        </li>
        <li className={styles.elem}>
          <p className="text text_type_main-default text_color_inactive">
            Белки, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {info.proteins}
          </p>
        </li>
        <li className={styles.elem}>
          <p className="text text_type_main-default text_color_inactive">
            Жиры, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {info.fat}
          </p>
        </li>
        <li className={styles.elem}>
          <p className="text text_type_main-default text_color_inactive">
            Углеводы, г
          </p>
          <p className="text text_type_main-default text_color_inactive">
            {info.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {
  info: typeIngredient,
};

export default IngredientDetails;
