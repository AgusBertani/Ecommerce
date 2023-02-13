import { useState } from "react";
import toast from "react-hot-toast";

const useInitialState = () => {
  const [state, setState] = useState([]);

  const addToCart = (item) => {
    const idX = state.findIndex((prod) => item.id === prod.id);
    toast.success(`Agregaste ${item.cantidad} ${item.nombre}`);
    if (idX !== -1) {
      const newArray = [...state];
      const newCant = state[idX].cantidad + item.cantidad;
      newArray[idX].cantidad = newCant;
      setState(newArray);
    } else {
      setState([...state, item]);
    }
  };

  const emptyCart = () => {
    setState([]);
  };

  const removeFromCart = (indexValue) => {
    setState(state.filter((prod, index) => index !== indexValue));
  };
  const totalPrice = () => {
    return state.reduce((acum, prod) => acum + prod.cantidad * prod.precio, 0);
  };
  const totalItemQuantity = () => {
    return state.reduce((acum, prod) => (acum += prod.cantidad), 0);
  };
  return {
    state,
    addToCart,
    emptyCart,
    removeFromCart,
    totalPrice,
    totalItemQuantity,
  };
};

export default useInitialState;
