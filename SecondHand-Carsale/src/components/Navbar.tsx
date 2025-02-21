import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import "./css/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get the current path

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">Carspace</div>
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={location.pathname === "/about" ? "active-link" : ""}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/certified"
              className={location.pathname === "/certified" ? "active-link" : ""}
            >
              Certified Pre-Owned
            </Link>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="compare-btn">Compare cars</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
