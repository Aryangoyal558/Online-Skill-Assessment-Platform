import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import axios from "axios";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "",
    role_org: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      console.log(import.meta.env.VITE_SERVER_SIGNUP_URL);
      await axios.post(import.meta.env.VITE_SERVER_SIGNUP_URL, formData);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        role: "",
        role_org: "",
        password: "",
        confirmPassword: "",
      });
      alert("Registration Successful!");
      navigate("/login");
    } catch (error) {
      console.log("FULL ERROR:", error);
      console.log("MESSAGE:", error.message);
      console.log("RESPONSE:", error.response);
      console.log("REQUEST:", error.request);

      alert(error.response?.data?.message || error.message);
      alert(error.response?.data?.message || error.message);
    }
  };

  return (
    <MainLayout>
      <div className="register-page">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <div className="register-card">
                <h2 className="register-title">Create Your Account ✨</h2>

                <p className="register-subtitle">
                  Fill in the details to get started
                </p>

                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control mb-3"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />

                  <input
                    type="email"
                    name="email"
                    className="form-control mb-3"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    name="phone"
                    className="form-control mb-3"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    name="role_org"
                    className="form-control mb-3"
                    placeholder="Organization"
                    value={formData.role_org}
                    onChange={handleChange}
                  />

                  <div className="mb-3">
                    <label className="text-light d-block mb-2">Role</label>

                    <div className="d-flex gap-2">
                      <button
                        type="button"
                        className={`btn ${
                          formData.role === "Candidate"
                            ? "btn-primary"
                            : "btn-outline-light"
                        }`}
                        onClick={() =>
                          setFormData({ ...formData, role: "candidate" })
                        }
                      >
                        Candidate
                      </button>

                      <button
                        type="button"
                        className={`btn ${
                          formData.role === "Examiner"
                            ? "btn-primary"
                            : "btn-outline-light"
                        }`}
                        onClick={() =>
                          setFormData({ ...formData, role: "examiner" })
                        }
                      >
                        Examiner
                      </button>

                      <button
                        type="button"
                        className={`btn ${
                          formData.role === "admin"
                            ? "btn-primary"
                            : "btn-outline-light"
                        }`}
                        onClick={() =>
                          setFormData({ ...formData, role: "admin" })
                        }
                      >
                        Admin
                      </button>
                    </div>
                  </div>

                  <div className="input-group mb-3">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                    />

                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>

                  <div className="input-group mb-3">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />

                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Create Account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Register;
