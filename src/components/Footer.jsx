import "../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <p className="copy-footer">
        2023 &#169;{" "}
        <a
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Agustin Bertani
        </a>
        . Todos los derechos reservados.
      </p>
    </footer>
  );
};
export default Footer;
