import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com") {
      login({
        role: "admin",
        email,
      });
      navigate("/admin/dashboard");
    } else if (email === "employer@gmail.com") {
      login({
        role: "employer",
        email,
      });
      navigate("/employer/dashboard");
    } else {
      login({
        role: "candidate",
        email,
      });
      navigate("/candidate/dashboard");
    }
  };

  return (
    <MainLayout>
      <div className="login-page">
        <div className="container">
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-lg-5 col-md-7 col-sm-10">
              <div className="login-card">

                <h2 className="welcome-title">
                  Welcome Back! 👋
                </h2>

                <p className="welcome-text">
                  Login to continue your journey
                </p>

                <form onSubmit={handleSubmit}>
                  <label className="form-label text-light">
                    Email Address
                  </label>

                  <div className="input-group mb-3">
                    <span className="input-group-text custom-icon">
                      <i className="bi bi-envelope"></i>
                    </span>

                    <input
                      type="email"
                      className="form-control custom-input"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                    />
                  </div>

                  <label className="form-label text-light">
                    Password
                  </label>

                  <div className="input-group mb-3">
                    <span className="input-group-text custom-icon">
                      <i className="bi bi-lock"></i>
                    </span>

                    <input
                      type="password"
                      className="form-control custom-input"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) =>
                        setPassword(e.target.value)
                      }
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember"
                      />

                      <label
                        className="form-check-label text-light"
                        htmlFor="remember"
                      >
                        Remember me
                      </label>
                    </div>

                    <a href="/" className="forgot-link">
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn login-btn w-100"
                  >
                    Login
                    <i className="bi bi-arrow-right ms-2"></i>
                  </button>
                </form>

                <div className="divider">
                  <span>or continue with</span>
                </div>

                <div className="row g-3 mt-2">

                  <div className="col-6">
                    <button
                      type="button"
                      className="btn social-btn w-100"
                    >
                      <img
                        className="social-icon"
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google"
                      />
                      <span className="social-text">
                        Google
                      </span>
                    </button>
                  </div>

                  <div className="col-6">
                    <button
                      type="button"
                      className="btn social-btn w-100"
                    >
                      <img
                        className="social-icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                        alt="Microsoft"
                      />
                      <span className="social-text">
                        Microsoft
                      </span>
                    </button>
                  </div>

                </div>

                <p className="signup-text">
                  Don't have an account?
                  <a href="/Register" className="signup-link">
                    Sign Up
                  </a>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Login;