import { BURGER_ARI_URL } from "./constants";

const checkReponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredients = () => {
  return fetch(`${BURGER_ARI_URL}/ingredients`).then(checkReponse);
};

export const sendCart = (cart) => {
  return fetch(`${BURGER_ARI_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: cart,
    }),
  }).then(checkReponse);
};
