import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header className="kasa-header">
      <img className="kasa-logo" src="/images/kasa_red.svg" alt="logo" />
      <nav>
        <Link to="/" className="link">
          Accueil
        </Link>
        <Link to="/about" className="link">
          À propos
        </Link>
      </nav>
    </header>
  );
}
