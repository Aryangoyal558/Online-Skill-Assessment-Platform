import { Link } from "react-router-dom";

function AdminLayout({ children }) {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="bg-dark text-white p-3"
        style={{
          width: "260px",
          minHeight: "100vh",
        }}
      >
        <h3 className="fw-bold mb-4">
          Admin Panel
        </h3>

        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link
              to="/admin/dashboard"
              className="nav-link text-white"
            >
              Dashboard
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              to="/admin/candidates"
              className="nav-link text-white"
            >
              Candidates
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              to="/admin/employers"
              className="nav-link text-white"
            >
              Employers
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              to="/admin/assessments"
              className="nav-link text-white"
            >
              Assessments
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              to="/admin/results"
              className="nav-link text-white"
            >
              Results
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              to="/admin/reports"
              className="nav-link text-white"
            >
              Reports
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              to="/admin/settings"
              className="nav-link text-white"
            >
              Settings
            </Link>
          </li>

          <li className="nav-item mb-2">
            <Link
              to="/admin/profile"
              className="nav-link text-white"
            >
              Profile
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div
        className="flex-grow-1 p-4"
        style={{
          background: "#f5f7fb",
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;