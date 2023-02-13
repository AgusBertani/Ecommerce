import { useState } from "react";
import "../styles/ItemCountStyle.scss";
import "../styles/AddToCart.scss";

const ItemCount = ({ countInitial, stock, onAdd, handleInter }) => {
  const [count, setCount] = useState(countInitial);

  const addition = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const subtraction = () => {
    if (count > countInitial) {
      setCount(count - 1);
    }
  };
  const add = () => {
    onAdd(count);
    handleInter();
  };

  return (
    <>
      <div className="productCounter">
        <button
          className="countMinusMore"
          onClick={subtraction}
          disabled={count === countInitial ? true : null}
        >
          -
        </button>
        <span className="countNumber">{count}</span>
        <button
          className="countMinusMore"
          onClick={addition}
          disabled={count === stock ? true : null}
        >
          +
        </button>
      </div>
      <button className="button-fw  btn-add" onClick={add}>
        Agregar
      </button>
    </>
  );
};

export default ItemCount;
