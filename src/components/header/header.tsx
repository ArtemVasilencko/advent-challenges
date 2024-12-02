import { Link } from "react-router";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        <Link to="/"> Advent challenges</Link>
      </h1>
      <p>01/12/2024 - 25/12/2024</p>
    </header>
  );
}
