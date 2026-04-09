import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav>
      {/* TOP BAR */}
      <div className="nav-top">
        <div className="nav-top-inner">
          <span> ✉ info@tandishpharma.com</span>
          <span>
            <a href="#">ISO 9001:2015</a>
          </span>
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="nav-main">
        
        {/* LOGO */}
        <div className="logo" onClick={() => navigate("/")}>
          <div className="logo-icon">
            <img src="logo.png" alt="Logo" className="logo-img" />
          </div>
          <div className="logo-text">
            <h1>Tandish Pharmaceuticals</h1>
            <p>Pvt. Ltd. · Est. 2017</p>
          </div>
        </div>

        {/* HAMBURGER */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>

        </div>

      </div>
    </nav>
  );
}