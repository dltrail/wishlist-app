import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">Wishlish</div>
      <ul className="navigation">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
