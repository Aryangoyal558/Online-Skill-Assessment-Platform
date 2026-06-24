import { useState } from "react";
import EmployerLayout from "../../layouts/EmployerLayout";
import {
  FaUsers,
  FaClipboardList,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function EmployerDashboard() {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Assessment Created Successfully!");
  };

  return (
    <EmployerLayout>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Employer Dashboard</h2>

        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? "Close Form" : "+ Create Assessment"}
        </button>
      </div>

      {/* Create Assessment Form */}
      {showForm && (
        <div
          className="card border-0 shadow-lg mb-4"
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            background: "#fff",
          }}
        >
          <div
            className="card-header py-3"
            style={{
              background: "linear-gradient(135deg,#2563eb,#7c3aed)",
              color: "#fff",
            }}
          >
            <h4 className="mb-0 fw-bold">Create New Assessment</h4>
          </div>

          <div className="card-body p-4">
            <form onSubmit={handleSubmit}>
              <div className="row g-4">
                {/* Assessment Title */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold text-dark">
                    Assessment Title
                  </label>

                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="Java Developer Assessment"
                    required
                    style={{
                      backgroundColor: "#fff",
                      color: "#212529",
                      padding: "12px",
                    }}
                  />
                </div>

                {/* Subject */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold text-dark">
                    Subject
                  </label>

                  <select
                    className="form-select rounded-3"
                    required
                    style={{
                      backgroundColor: "#fff",
                      color: "#212529",
                      padding: "12px",
                    }}
                  >
                    <option value="">Select Subject</option>
                    <option>Java</option>
                    <option>React JS</option>
                    <option>Python</option>
                    <option>SQL</option>
                    <option>Aptitude</option>
                    <option>JavaScript</option>
                    <option>Data Structures</option>
                  </select>
                </div>

                {/* Duration */}
                <div className="col-md-4">
                  <label className="form-label fw-semibold text-dark">
                    Duration (Minutes)
                  </label>

                  <input
                    type="number"
                    className="form-control rounded-3"
                    placeholder="60"
                    required
                    style={{
                      backgroundColor: "#fff",
                      color: "#212529",
                      padding: "12px",
                    }}
                  />
                </div>

                {/* Total Marks */}
                <div className="col-md-4">
                  <label className="form-label fw-semibold text-dark">
                    Total Marks
                  </label>

                  <input
                    type="number"
                    className="form-control rounded-3"
                    placeholder="100"
                    required
                    style={{
                      backgroundColor: "#fff",
                      color: "#212529",
                      padding: "12px",
                    }}
                  />
                </div>

                {/* Passing Marks */}
                <div className="col-md-4">
                  <label className="form-label fw-semibold text-dark">
                    Passing Marks
                  </label>

                  <input
                    type="number"
                    className="form-control rounded-3"
                    placeholder="40"
                    required
                    style={{
                      backgroundColor: "#fff",
                      color: "#212529",
                      padding: "12px",
                    }}
                  />
                </div>

                {/* Start Date */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold text-dark">
                    Start Date & Time
                  </label>

                  <input
                    type="datetime-local"
                    className="form-control rounded-3"
                    required
                    style={{
                      backgroundColor: "#fff",
                      color: "#212529",
                      padding: "12px",
                    }}
                  />
                </div>

                {/* End Date */}
                <div className="col-md-6">
                  <label className="form-label fw-semibold text-dark">
                    End Date & Time
                  </label>

                  <input
                    type="datetime-local"
                    className="form-control rounded-3"
                    required
                    style={{
                      backgroundColor: "#fff",
                      color: "#212529",
                      padding: "12px",
                    }}
                  />
                </div>

                {/* Upload File */}
                <div className="col-12">
                  <label className="form-label fw-semibold text-dark">
                    Upload Question File
                  </label>

                  <input
                    type="file"
                    className="form-control rounded-3"
                    accept=".pdf,.doc,.docx,.xlsx,.csv"
                    required
                    style={{
                      backgroundColor: "#fff",
                      color: "#212529",
                      padding: "12px",
                    }}
                  />

                  <small className="text-muted">
                    Upload PDF, DOCX, Excel or CSV file.
                  </small>
                </div>

                {/* Instructions */}
                <div className="col-12">
                  <label className="form-label fw-semibold text-dark">
                    Instructions
                  </label>

                  <textarea
                    className="form-control rounded-3"
                    rows="5"
                    placeholder="Enter assessment instructions..."
                    style={{
                      backgroundColor: "#fff",
                      color: "#212529",
                      padding: "12px",
                    }}
                  ></textarea>
                </div>

                {/* Buttons */}
                <div className="col-12 d-flex flex-wrap gap-3">
                  <button type="submit" className="btn btn-success px-4 py-2">
                    Create Assessment
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary px-4 py-2"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Statistics Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="bg-primary text-white p-3 rounded me-3">
                <FaClipboardList size={25} />
              </div>

              <div>
                <h6 className="text-muted mb-1">Total Assessments</h6>
                <h3 className="mb-0">24</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="bg-success text-white p-3 rounded me-3">
                <FaUsers size={25} />
              </div>

              <div>
                <h6 className="text-muted mb-1">Candidates</h6>
                <h3 className="mb-0">1,245</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="bg-warning text-white p-3 rounded me-3">
                <FaBriefcase size={25} />
              </div>

              <div>
                <h6 className="text-muted mb-1">Active Jobs</h6>
                <h3 className="mb-0">15</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body d-flex align-items-center">
              <div className="bg-danger text-white p-3 rounded me-3">
                <FaChartLine size={25} />
              </div>

              <div>
                <h6 className="text-muted mb-1">Avg Score</h6>
                <h3 className="mb-0">78%</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Assessments */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-header bg-white">
          <h5 className="mb-0">Recent Assessments</h5>
        </div>

        <div className="card-body">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Assessment</th>
                <th>Subject</th>
                <th>Candidates</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>React Developer Test</td>
                <td>React JS</td>
                <td>120</td>
                <td>
                  <span className="badge bg-success">Active</span>
                </td>
              </tr>

              <tr>
                <td>Java Assessment</td>
                <td>Java</td>
                <td>95</td>
                <td>
                  <span className="badge bg-warning text-dark">Draft</span>
                </td>
              </tr>

              <tr>
                <td>Python Screening</td>
                <td>Python</td>
                <td>210</td>
                <td>
                  <span className="badge bg-success">Active</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white">
          <h5 className="mb-0">Quick Actions</h5>
        </div>

        <div className="card-body">
          <div className="d-flex gap-3 flex-wrap">
            <Link to="/employer/candidates" className="btn btn-success">
              View Candidates
            </Link>

            <Link to="/employer/jobs" className="btn btn-warning">
              Manage Jobs
            </Link>

            <Link to="/employer/results" className="btn btn-info text-white">
              Download Reports
            </Link>
          </div>
        </div>
      </div>
    </EmployerLayout>
  );
}

export default EmployerDashboard;
