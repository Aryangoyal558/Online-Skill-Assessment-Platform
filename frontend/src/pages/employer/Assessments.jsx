import { useState } from "react";
import EmployerLayout from "../../layouts/EmployerLayout";
import {
  FaSearch,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function Assessments() {
  const [selectedAssessment, setSelectedAssessment] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const assessments = [
    {
      id: 1,
      title: "Java Developer Assessment",
      subject: "Java",
      candidates: 120,
      duration: "60 mins",
      status: "Active",
      createdOn: "20 Jun 2026",
    },
    {
      id: 2,
      title: "React JS Screening",
      subject: "React JS",
      candidates: 85,
      duration: "45 mins",
      status: "Draft",
      createdOn: "18 Jun 2026",
    },
    {
      id: 3,
      title: "Python Assessment",
      subject: "Python",
      candidates: 210,
      duration: "90 mins",
      status: "Active",
      createdOn: "15 Jun 2026",
    },
    {
      id: 4,
      title: "SQL Fundamentals Test",
      subject: "SQL",
      candidates: 65,
      duration: "30 mins",
      status: "Closed",
      createdOn: "10 Jun 2026",
    },
  ];

return (
  <EmployerLayout>
    <div className="container-fluid px-2 px-md-4">

      {/* Header */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
        <h2 className="fw-bold mb-0">My Assessments</h2>

        <button className="btn btn-primary">
          + Create Assessment
        </button>
      </div>

      {/* Summary Cards */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <h6 className="text-muted">
                Total Assessments
              </h6>

              <h2 className="fw-bold text-primary">
                {assessments.length}
              </h2>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <h6 className="text-muted">
                Active Assessments
              </h6>

              <h2 className="fw-bold text-success">
                {
                  assessments.filter(
                    (a) => a.status === "Active"
                  ).length
                }
              </h2>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body text-center">
              <h6 className="text-muted">
                Total Candidates
              </h6>

              <h2 className="fw-bold text-warning">
                {assessments.reduce(
                  (sum, a) => sum + a.candidates,
                  0
                )}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>

            <input
              type="text"
              className="form-control"
              placeholder="Search assessments..."
            />
          </div>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="card border-0 shadow-sm d-none d-lg-block">
        <div className="card-header bg-white">
          <h5 className="mb-0">
            Assessment List
          </h5>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Assessment</th>
                  <th>Subject</th>
                  <th>Duration</th>
                  <th>Candidates</th>
                  <th>Created On</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {assessments.map((assessment) => (
                  <tr key={assessment.id}>
                    <td className="fw-semibold">
                      {assessment.title}
                    </td>

                    <td>{assessment.subject}</td>

                    <td>{assessment.duration}</td>

                    <td>{assessment.candidates}</td>

                    <td>{assessment.createdOn}</td>

                    <td>
                      <span
                        className={`badge ${
                          assessment.status === "Active"
                            ? "bg-success"
                            : assessment.status === "Draft"
                            ? "bg-warning text-dark"
                            : "bg-secondary"
                        }`}
                      >
                        {assessment.status}
                      </span>
                    </td>

                    <td>
                      <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-primary">
                          <FaEye />
                        </button>

                        <button
                          className="btn btn-sm btn-warning text-white"
                          onClick={() => {
                            setSelectedAssessment(
                              assessment
                            );
                            setShowEditModal(true);
                          }}
                        >
                          <FaEdit />
                        </button>

                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => {
                            setSelectedAssessment(
                              assessment
                            );
                            setShowDeleteModal(true);
                          }}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="d-lg-none">
        {assessments.map((assessment) => (
          <div
            key={assessment.id}
            className="card border-0 shadow-sm mb-3"
          >
            <div className="card-body">
              <h5 className="fw-bold">
                {assessment.title}
              </h5>

              <p className="mb-1">
                <strong>Subject:</strong>{" "}
                {assessment.subject}
              </p>

              <p className="mb-1">
                <strong>Duration:</strong>{" "}
                {assessment.duration}
              </p>

              <p className="mb-1">
                <strong>Candidates:</strong>{" "}
                {assessment.candidates}
              </p>

              <p className="mb-1">
                <strong>Created:</strong>{" "}
                {assessment.createdOn}
              </p>

              <p>
                <span
                  className={`badge ${
                    assessment.status === "Active"
                      ? "bg-success"
                      : assessment.status === "Draft"
                      ? "bg-warning text-dark"
                      : "bg-secondary"
                  }`}
                >
                  {assessment.status}
                </span>
              </p>

              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-primary btn-sm">
                  <FaEye />
                </button>

                <button
                  className="btn btn-warning btn-sm text-white"
                  onClick={() => {
                    setSelectedAssessment(
                      assessment
                    );
                    setShowEditModal(true);
                  }}
                >
                  <FaEdit />
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => {
                    setSelectedAssessment(
                      assessment
                    );
                    setShowDeleteModal(true);
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Your existing Edit Modal remains unchanged */}

      {/* Your existing Delete Modal remains unchanged */}

    </div>
  </EmployerLayout>
);
}

export default Assessments;