import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand text-white fw-bold fs-3" to="/">
          SkillCert
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >
          {/* Center Menu */}
          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Certifications
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/courses">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/tests">
                    Tests
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

          </ul>

          {/* Right Side */}
          <div className="d-flex align-items-center gap-2">
            {!user ? (
              <>
                <Link
                  className="btn login-btn"
                  to="/login"
                >
                  Login
                </Link>

                <Link
                  className="btn started-btn"
                  to="/register"
                >
                  Get Started →
                </Link>
              </>
            ) : (
              <>
                <span className="text-white me-3">
                  Hi, {user.name}
                </span>

                <button
                  className="btn btn-danger"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;