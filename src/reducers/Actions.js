export const addToCart = (id) => {
  return {
      type: "ADDTOCART",
      payload: id
  };
};

export const removeOne = (id) => {
  return {
    type: "REMOVEONE",
    payload: id
  };
};

export const removeAll = (id) => {
  return {
    type: "REMOVEALL",
    payload: id
  };
};

export const checkout = () => {
  return {
    type: "CHECKOUT",
  };
};
