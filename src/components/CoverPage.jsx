import logo from "../assets/img/logo-img-main.png";
import "../styles/CoverPage.scss";

const CoverPage = () => {
  return (
    <section className="cover">
      <div className="cover-container bd-grid">
        <div className="logo-hero">
          <img src={logo} alt="logo" className="logo-hero-img" />
        </div>
        <div className="logo-hero-info">
          <span className="hero-years">2023</span>
          <h1 className="hero-info">
            ENCONTRÁ <br />
            TUS ZAPATILLAS
          </h1>
          <p className="hero-description">El arte de sumar kilometros</p>
          <p className="hero-description">
            Zapatillas de running para distancias largas y mucho más.
          </p>
          <a href="#products-container" className="button">
            Explorar
          </a>
        </div>
      </div>
    </section>
  );
};
export default CoverPage;
