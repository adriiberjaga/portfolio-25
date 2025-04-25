import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="header-border">
        <h2 className="header-title">Adrià Berjaga</h2>
        
        {!menuOpen ? (
          <button type="button" className="hamburger" onClick={toggleMenu}>
            &#9776;
          </button>
        ) : (
          <button onClick={toggleMenu} className="header-btn__close">
            &#10005;
          </button>
        )}

        <nav className={`header-navbar ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About me
          </NavLink>
          <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
