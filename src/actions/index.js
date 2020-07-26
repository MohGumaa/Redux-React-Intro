export const increment = (num) => {
  return {
    type: "INCREMENT",
    // data: num
    payload: num,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
