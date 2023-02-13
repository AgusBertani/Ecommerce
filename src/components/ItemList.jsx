import React from "react";
import Item from "./ProductItem";
import "../styles/Main.scss";
import "../styles/Global.scss";
import {db} from "../firebase/config"

const ItemList = ({ productos }) => {
  return (
    <main className="l-main ">
      <section className="featured section" id="products-container">
        <div className="featured__container bd-grid">
          {productos.map((producto) => (
            <Item key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ItemList;
