import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import ItemCount from "./ItemCount";
import KeepBuying from "./KeepBuying";
import { Toaster } from "react-hot-toast";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/Main.scss";
import "../styles/ProductsDetails.scss";
import "../styles/ItemCountStyle.scss";
import "../styles/Sliderimg.scss";

const ItemDetail = ({ producto }) => {
  const [exchange, setExchange] = useState("button-fw");
  const { addToCart } = useContext(AppContext);

  const onAdd = (cant) => {
    addToCart({ ...producto, cantidad: cant });
  };
  const handleInter = () => {
    setExchange("change");
  };

  return (
    // SECTION SWIPE IMAGEN
    <div className="content">
      <Carousel>
        <div className="image">
          <img src={producto.imagen} alt={producto.nombre} />
        </div>
        <div className="image">
          <img src={producto.thumbnail1} alt={producto.nombre} />
        </div>
        <div className="image">
          <img src={producto.thumbnail2} alt={producto.nombre} />
        </div>
        <div className="image">
          <img src={producto.thumbnail3} alt={producto.nombre} />
        </div>
        <div className="image">
          <img src={producto.thumbnail4} alt={producto.nombre} />
        </div>
      </Carousel>
      {/* SECTION PRODUCT DETAILS */}
      <section className="product" id={`${producto.id}`}>
        <div className="company-name">
          {producto.categoria} • {producto.uso}
        </div>
        <div className="title">{producto.nombre}</div>
        <div className="description">{producto.marca}</div>
        <div className="price-wrapper">
          <div className="group">
            <div className="price">${producto.precio}</div>
            {/* <div className="discount">10%</div>  */}
          </div>
          {/* <div className="old-price">$250.00</div>  */}
        </div>
        {exchange === "button-fw" ? (
          <div className="productActions">
            <ItemCount
              producto={producto}
              key={producto.id}
              onAdd={onAdd}
              stock={producto.stock}
              countInitial={1}
              handleInter={handleInter}
            />
          </div>
        ) : (
          <div className="productActions">
            <Link to="/cart">
              <button className="button-fw" onClick={handleInter}>
                Ir a Pagar
              </button>
            </Link>
            <KeepBuying handleInter={handleInter} />
          </div>
        )}
      </section>
      <Toaster
        position="bottom-center"
        toastOptions={{
          duration: 5000,
          style: {
            background: "#fff",
            color: "#141414",
            fontWeight: 600,
            border: "2px solid #141414",
          },
        }}
      />
    </div>
  );
};

export default ItemDetail;
