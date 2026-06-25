import EmployerLayout from "../../layouts/EmployerLayout";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();

  // ✅ get user from login navigation
const user = location.state?.user || JSON.parse(localStorage.getItem("user"));
console.log("PROFILE USER:", user);
  // ❗ safety check
  if (!user) {
    return (
      <EmployerLayout>
        <div className="container py-5">
          <h4>No user data found. Please login again.</h4>
        </div>
      </EmployerLayout>
    );
  }

  return (
    <EmployerLayout>
      <div className="container-fluid py-4">

        <div className="card border-0 shadow-lg">
          <div className="card-body p-5">

            <div className="row align-items-center">

              {/* LEFT SIDE */}
              <div className="col-md-3 text-center">
                <img
                  src="https://i.pravatar.cc/200"
                  alt="profile"
                  className="rounded-circle img-fluid shadow"
                  style={{
                    width: "180px",
                    height: "180px",
                    objectFit: "cover",
                  }}
                />

                <button className="btn btn-primary mt-3 w-100">
                  Change Photo
                </button>
              </div>

              {/* RIGHT SIDE */}
              <div className="col-md-9">

                {/* ✅ FIXED */}
                <h2 className="fw-bold">{user.fullName}</h2>

                <p className="text-muted fs-5">
                  {user.designation || user.role}
                </p>

                <div className="row mt-4">

                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <FaEnvelope className="me-3 text-primary" />
                      <span>{user.email}</span>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <FaPhone className="me-3 text-success" />
                      <span>{user.phone}</span>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <FaBuilding className="me-3 text-warning" />
                      <span>{user.role}</span>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <FaMapMarkerAlt className="me-3 text-danger" />
                      <span>{user.location}</span>
                    </div>
                  </div>

                </div>

                <hr />

                <h5 className="fw-bold">About</h5>

                <p className="text-muted">
                  {user.about || "No description available"}
                </p>

                <button className="btn btn-outline-primary px-4">
                  Edit Profile
                </button>

              </div>

            </div>

          </div>
        </div>

      </div>
    </EmployerLayout>
  );
}

export default Profile;