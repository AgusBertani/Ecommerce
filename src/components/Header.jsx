import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";
import Cart from "./Cart";
import { FaAlignJustify, FaWindowClose } from "react-icons/fa";
import "../styles/Header.scss";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" className="nav-logo" />
      </Link>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        {(isMobile || screenWidth > 768) && (
          <>
            <Link to="/" className="all">
              <li className="hover-nav">Todos</li>
            </Link>

            <Link to="/categoria/hombres" className="men">
              <li className="hover-nav">Hombres</li>
            </Link>

            <Link to="/categoria/mujer" className="women">
              <li className="hover-nav">Mujer</li>
            </Link>

            <Link to="/categoria/niños" className="boys">
              <li className="hover-nav">Niños</li>
            </Link>

            <Link to="/categoria/unisex" className="others">
              <li className="hover-nav">Otros</li>
            </Link>
          </>
        )}
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <FaWindowClose alt="icon-close" className="icon-close" />
        ) : (
          <FaAlignJustify alt="icon-menu" className="menu" />
        )}
      </button>
      <div className="navbar-right">
        <ul>
          <Cart />
        </ul>
      </div>
    </nav>
  );
};

export default Header;
