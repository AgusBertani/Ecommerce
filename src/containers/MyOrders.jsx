import React, { useContext } from "react";
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext";
import arrow from "../assets/img/flechita.svg";
import { NavLink } from "react-router-dom";
import "../styles/MyOrders.scss";

const MyOrder = () => {
  const { state, totalPrice, emptyCart } = useContext(AppContext);
  return (
    <aside className="MyOrder">
      {state.length > 0 ? (
        <>
          <div className="title-container">
            <img src={arrow} alt="arrow" />
            <p className="title">Tu Carrito</p>
          </div>
          <div className="my-order-content">
            {state.map((producto, index) => (
              <OrderItem indexValue={index} key={index} producto={producto} />
            ))}

            <div className="order">
              <p>
                <span>Total</span>
              </p>
              <p>${totalPrice() !== 0 && totalPrice()}</p>
            </div>

            <NavLink to="/cart">
              <button className="primary-button">IR A PAGAR</button>
            </NavLink>
            <button className="primary-button" onClick={emptyCart}>
              VACIAR CARRITO
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="empty-cart-notififaction">El carrito está vacío</h2>
        </>
      )}
    </aside>
  );
};

export default MyOrder;
