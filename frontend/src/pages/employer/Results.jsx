import EmployerLayout from "../../layouts/EmployerLayout";
import {
  FaSearch,
  FaEye,
  FaDownload,
  FaChartLine,
} from "react-icons/fa";

function Results() {
  const results = [
    {
      id: 1,
      candidate: "Pragya Yadav",
      assessment: "React Assessment",
      score: 92,
      status: "Pass",
      date: "24 Jun 2026",
    },
    {
      id: 2,
      candidate: "Rahul Sharma",
      assessment: "Java Assessment",
      score: 84,
      status: "Pass",
      date: "23 Jun 2026",
    },
    {
      id: 3,
      candidate: "Anjali Singh",
      assessment: "Python Assessment",
      score: 58,
      status: "Fail",
      date: "22 Jun 2026",
    },
    {
      id: 4,
      candidate: "Rohit Kumar",
      assessment: "Node.js Assessment",
      score: 76,
      status: "Pass",
      date: "21 Jun 2026",
    },
  ];

  return (
    <EmployerLayout>
      <div className="container-fluid">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">Assessment Results</h2>
            <p className="text-muted mb-0">
              Analyze candidate performance and assessment outcomes
            </p>
          </div>

          <button className="btn btn-primary">
            <FaDownload className="me-2" />
            Export Results
          </button>
        </div>

        {/* Statistics */}
        <div className="row g-4 mb-4">

          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h6 className="text-muted">Total Results</h6>
                <h2 className="fw-bold">248</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h6 className="text-muted">Average Score</h6>
                <h2 className="fw-bold text-primary">78%</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h6 className="text-muted">Passed</h6>
                <h2 className="fw-bold text-success">180</h2>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h6 className="text-muted">Failed</h6>
                <h2 className="fw-bold text-danger">68</h2>
              </div>
            </div>
          </div>

        </div>

        {/* Search */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <FaSearch />
              </span>

              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search candidate or assessment..."
              />
            </div>
          </div>
        </div>

        {/* Results Table */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white">
            <h5 className="mb-0">
              <FaChartLine className="me-2 text-primary" />
              Candidate Results
            </h5>
          </div>

          <div className="card-body">
            <div className="table-responsive">

              <table className="table table-hover align-middle">

                <thead>
                  <tr>
                    <th>Candidate</th>
                    <th>Assessment</th>
                    <th>Score</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {results.map((result) => (
                    <tr key={result.id}>
                      <td>{result.candidate}</td>

                      <td>{result.assessment}</td>

                      <td>
                        <div
                          className="progress"
                          style={{ height: "8px" }}
                        >
                          <div
                            className={`progress-bar ${
                              result.score >= 60
                                ? "bg-success"
                                : "bg-danger"
                            }`}
                            style={{
                              width: `${result.score}%`,
                            }}
                          ></div>
                        </div>

                        <small className="fw-semibold">
                          {result.score}%
                        </small>
                      </td>

                      <td>
                        <span
                          className={`badge ${
                            result.status === "Pass"
                              ? "bg-success"
                              : "bg-danger"
                          }`}
                        >
                          {result.status}
                        </span>
                      </td>

                      <td>{result.date}</td>

                      <td>
                        <button className="btn btn-outline-primary btn-sm">
                          <FaEye className="me-1" />
                          View Report
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>
          </div>
        </div>

      </div>
    </EmployerLayout>
  );
}

export default Results;