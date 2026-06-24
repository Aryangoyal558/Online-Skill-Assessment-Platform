import EmployerLayout from "../../layouts/EmployerLayout";
import {
  FaSearch,
  FaEye,
  FaDownload,
  FaUserGraduate,
} from "react-icons/fa";

function Candidates() {
  const candidates = [
    {
      id: 1,
      name: "Pragya Yadav",
      email: "pragya@gmail.com",
      skill: "React JS",
      score: "92%",
      status: "Qualified",
    },
    {
      id: 2,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      skill: "Java",
      score: "84%",
      status: "Qualified",
    },
    {
      id: 3,
      name: "Anjali Singh",
      email: "anjali@gmail.com",
      skill: "Python",
      score: "58%",
      status: "Rejected",
    },
    {
      id: 4,
      name: "Rohit Kumar",
      email: "rohit@gmail.com",
      skill: "Node.js",
      score: "76%",
      status: "Qualified",
    },
  ];

  return (
    <EmployerLayout>
      <div className="container-fluid">

        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">Candidates</h2>
            <p className="text-muted mb-0">
              Manage and review candidate assessments
            </p>
          </div>

          <button className="btn btn-primary">
            <FaDownload className="me-2" />
            Export
          </button>
        </div>

        {/* Stats */}
        <div className="row g-4 mb-4">

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h6 className="text-muted">Total Candidates</h6>
                <h2 className="fw-bold">248</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h6 className="text-muted">Qualified</h6>
                <h2 className="fw-bold text-success">180</h2>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h6 className="text-muted">Rejected</h6>
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
                placeholder="Search candidate..."
              />
            </div>
          </div>
        </div>

        {/* Candidates Table */}
        <div className="card border-0 shadow-sm">
          <div className="card-body">

            <div className="table-responsive">
              <table className="table align-middle">

                <thead>
                  <tr>
                    <th>Candidate</th>
                    <th>Email</th>
                    <th>Skill</th>
                    <th>Score</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {candidates.map((candidate) => (
                    <tr key={candidate.id}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center me-3"
                            style={{
                              width: "40px",
                              height: "40px",
                            }}
                          >
                            <FaUserGraduate />
                          </div>

                          <span>{candidate.name}</span>
                        </div>
                      </td>

                      <td>{candidate.email}</td>

                      <td>{candidate.skill}</td>

                      <td>
                        <span className="fw-semibold">
                          {candidate.score}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`badge ${
                            candidate.status === "Qualified"
                              ? "bg-success"
                              : "bg-danger"
                          }`}
                        >
                          {candidate.status}
                        </span>
                      </td>

                      <td>
                        <button className="btn btn-outline-primary btn-sm">
                          <FaEye className="me-1" />
                          View
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

export default Candidates;