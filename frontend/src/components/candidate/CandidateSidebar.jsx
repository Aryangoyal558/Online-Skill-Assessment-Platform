import { Link } from "react-router-dom";

function CandidateSidebar() {
  return (
    <div
      className="bg-dark text-white p-3"
      style={{
        width: "250px",
        minHeight: "100vh"
      }}
    >
      <h3 className="mb-4">Candidate</h3>

      <ul className="list-unstyled">

        <li className="mb-3">
          <Link
            className="text-white text-decoration-none"
            to="/candidate/dashboard"
          >
            Dashboard
          </Link>
        </li>

        <li className="mb-3">
          <Link
            className="text-white text-decoration-none"
            to="/candidate/tests"
          >
            Available Tests
          </Link>
        </li>

        <li className="mb-3">
          <Link
            className="text-white text-decoration-none"
            to="/candidate/results"
          >
            Results
          </Link>
        </li>

        <li className="mb-3">
          <Link
            className="text-white text-decoration-none"
            to="/candidate/certificates"
          >
            Certificates
          </Link>
        </li>

        <li className="mb-3">
          <Link
            className="text-white text-decoration-none"
            to="/candidate/profile"
          >
            Profile
          </Link>
        </li>

      </ul>
    </div>
  );
}

export default CandidateSidebar;