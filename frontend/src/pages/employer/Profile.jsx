import EmployerLayout from "../../layouts/EmployerLayout";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";

function Profile() {
  const employer = {
    name: "John Smith",
    email: "john@technova.com",
    phone: "+91 9876543210",
    company: "TechNova Solutions",
    designation: "HR Manager",
    location: "Bangalore, India",
    about:
      "Responsible for talent acquisition, candidate assessment, and recruitment operations.",
  };

  return (
    <EmployerLayout>
      <div className="container-fluid py-4">

        <div className="card border-0 shadow-lg">
          <div className="card-body p-5">

            <div className="row align-items-center">

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

              <div className="col-md-9">

                <h2 className="fw-bold">{employer.name}</h2>

                <p className="text-muted fs-5">
                  {employer.designation}
                </p>

                <div className="row mt-4">

                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <FaEnvelope className="me-3 text-primary" />
                      <span>{employer.email}</span>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <FaPhone className="me-3 text-success" />
                      <span>{employer.phone}</span>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <FaBuilding className="me-3 text-warning" />
                      <span>{employer.company}</span>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <div className="d-flex align-items-center">
                      <FaMapMarkerAlt className="me-3 text-danger" />
                      <span>{employer.location}</span>
                    </div>
                  </div>

                </div>

                <hr />

                <h5 className="fw-bold">About</h5>

                <p className="text-muted">
                  {employer.about}
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