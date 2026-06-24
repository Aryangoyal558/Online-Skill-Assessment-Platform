import CandidateLayout from "../../layouts/CandidateLayout";

function Certificates() {
  const certificates = [
    {
      id: 1,
      name: "Java Full Stack Certificate",
      issuer: "CDAC",
      date: "15 June 2026",
    },
    {
      id: 2,
      name: "React Development Certificate",
      issuer: "Udemy",
      date: "10 May 2026",
    },
    {
      id: 3,
      name: "Database Management Certificate",
      issuer: "Coursera",
      date: "20 April 2026",
    },
  ];

  return (
    <CandidateLayout>
      <div className="container-fluid p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">My Certificates</h2>

          <button className="btn btn-primary">
            <i className="bi bi-plus-circle me-2"></i>
            Upload Certificate
          </button>
        </div>

        <div className="card shadow border-0">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Certificate Name</th>
                    <th>Issued By</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {certificates.map((certificate, index) => (
                    <tr key={certificate.id}>
                      <td>{index + 1}</td>
                      <td>{certificate.name}</td>
                      <td>{certificate.issuer}</td>
                      <td>{certificate.date}</td>

                      <td>
                        <button className="btn btn-sm btn-success me-2">
                          Download
                        </button>

                        <button className="btn btn-sm btn-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Upload Form */}
        <div className="card shadow border-0 mt-4">
          <div className="card-body">
            <h4 className="mb-3">Upload New Certificate</h4>

            <form>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <label className="form-label">
                    Certificate Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter certificate name"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">
                    Issued By
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Organization Name"
                  />
                </div>

                <div className="col-md-4 mb-3">
                  <label className="form-label">
                    Issue Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                  />
                </div>

                <div className="col-md-12 mb-3">
                  <label className="form-label">
                    Upload Certificate
                  </label>
                  <input
                    type="file"
                    className="form-control"
                  />
                </div>

                <div className="col-md-12">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Save Certificate
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </CandidateLayout>
  );
}

export default Certificates;