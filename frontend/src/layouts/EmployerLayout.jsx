import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function EmployerLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 992
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);

      if (window.innerWidth >= 992) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, []);

  const closeSidebar = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <div
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      {/* Overlay */}
      {sidebarOpen && isMobile && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "rgba(0,0,0,0.5)",
            zIndex: 1040,
          }}
        />
      )}

      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3"
        style={{
          width: "260px",
          minHeight: "100vh",
          position: "fixed",
          top: 0,
          left:
            !isMobile || sidebarOpen
              ? "0"
              : "-260px",
          transition:
            "all 0.3s ease-in-out",
          zIndex: 1050,
          overflowY: "auto",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold mb-0">
            Employer Panel
          </h3>

          {isMobile && (
            <button
              className="btn btn-light btn-sm"
              onClick={() =>
                setSidebarOpen(false)
              }
            >
              <FaTimes />
            </button>
          )}
        </div>

        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link
              to="/employer/dashboard"
              className="nav-link text-white"
              onClick={closeSidebar}
            >
              Dashboard
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              to="/employer/assessments"
              className="nav-link text-white"
              onClick={closeSidebar}
            >
              Assessments
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              to="/employer/candidates"
              className="nav-link text-white"
              onClick={closeSidebar}
            >
              Candidates
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              to="/employer/results"
              className="nav-link text-white"
              onClick={closeSidebar}
            >
              Results
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              to="/employer/profile"
              className="nav-link text-white"
              onClick={closeSidebar}
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        style={{
          marginLeft: isMobile
            ? "0"
            : "260px",
          minHeight: "100vh",
        }}
      >
        {/* Mobile Header */}
        {isMobile && (
          <div className="bg-white shadow-sm p-3 d-flex align-items-center">
            <button
              className="btn btn-dark"
              onClick={() =>
                setSidebarOpen(true)
              }
            >
              <FaBars />
            </button>

            <h4 className="ms-3 mb-0 fw-bold">
              Employer Panel
            </h4>
          </div>
        )}

        <div className="p-3 p-md-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default EmployerLayout;