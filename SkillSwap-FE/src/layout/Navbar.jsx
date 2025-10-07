import { NavLink } from "react-router";

import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-brand">
        Skill-Swap
      </NavLink>
      <nav className="navbar-links">
        <NavLink to="/skillswap" className="navbar-link">
          Skill Exchange
        </NavLink>
        {token ? (
          <button onClick={logout} className="navbar-button logout">
            Log out
          </button>
        ) : (
          <NavLink to="/login" className="navbar-button login">
            Log in
          </NavLink>
        )}
      </nav>
    </header>
  );
}

