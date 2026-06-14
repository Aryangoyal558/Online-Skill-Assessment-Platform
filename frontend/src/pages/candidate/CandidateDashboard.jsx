import CandidateLayout from "../../layouts/CandidateLayout";

function CandidateDashboard() {
  return (
    <CandidateLayout>

      <h1 className="mb-4">
        Candidate Dashboard
      </h1>

      <div className="row">

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Total Tests</h5>
              <h2>12</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Completed</h5>
              <h2>8</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Certificates</h5>
              <h2>5</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Average Score</h5>
              <h2>82%</h2>
            </div>
          </div>
        </div>

      </div>

    </CandidateLayout>
  );
}

export default CandidateDashboard;