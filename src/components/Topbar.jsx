import fast from "../assets/img/fast.png";
import tick from "../assets/img/tick.png";
import "../styles/Topbar.scss";

const Topbar = () => {
  return (
    <div className="tb">
      <div className="tb-left">
        <img src={fast} alt="icon-topbar" className="tb-icon" />
        <p className="tb-text">
          ¡Envío Gratis a partir de tu compra mayor a $10.000 !
        </p>
        <img src={tick} alt="icon-topbar" className="tb-icon" />
        <p className="tb-text">Aprovechá hasta 3 cutoas sin interés</p>
      </div>
    </div>
  );
};
export default Topbar;
