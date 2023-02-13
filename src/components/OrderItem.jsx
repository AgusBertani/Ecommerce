import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "../styles/OrderItem.scss";
import iconClose from "../assets/img/icon_close.png";

const OrderItem = (props) => {
  const { producto, indexValue } = props;
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (index) => {
    removeFromCart(index);
  };
  return (
    <div className="OrderItem">
      <figure>
        <img src={producto.imagen} alt={producto.nombre} />
      </figure>
      <p>{producto.nombre}</p>
      <p>{producto.cantidad}</p>
      <p>${producto.precio}</p>
      <img
        src={iconClose}
        alt="close"
        onClick={() => handleRemove(indexValue)}
      />
    </div>
  );
};

export default OrderItem;
