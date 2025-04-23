import { NavLink } from "react-router-dom";
import '../css/Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-border">
      <h2 className="header-title">Adrià Berjaga</h2>
      <nav className="header-navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About me</NavLink>
        <NavLink to="/">Projects</NavLink>
        <NavLink to="/">Contact</NavLink>
      </nav>
      </div>
    </header>
  );
}
