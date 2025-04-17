import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h2>Adrià Berjaga</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About me</NavLink>
        <NavLink to="/">Projects</NavLink>
        <NavLink to="/">Contact</NavLink>
      </nav>
    </header>
  );
}
