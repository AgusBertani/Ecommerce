import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../styles/EmptyCart.scss";

const EmptyCart = () => {
  return (
    <div className="containerEmptyCart">
      <BiShoppingBag className="bigIConCart" />
      <h2 className="titleEmptyCart">¡Tu carrito está vacío!</h2>
      <p className="descriptionEmptyCart">
        Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo para
        empezar?
      </p>
      <Link to="/">
        <button className="button-fw ">Empezar</button>
      </Link>
    </div>
  );
};

export default EmptyCart;
