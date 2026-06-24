import AdminLayout from "../../layouts/AdminLayout";
import {
  FaUsers,
  FaUserTie,
  FaClipboardList,
  FaChartBar,
} from "react-icons/fa";

function AdminDashboard() {
  const stats = [
    {
      title: "Total Candidates",
      value: "2,450",
      icon: <FaUsers size={30} />,
      color: "primary",
    },
    {
      title: "Employers",
      value: "185",
      icon: <FaUserTie size={30} />,
      color: "success",
    },
    {
      title: "Assessments",
      value: "320",
      icon: <FaClipboardList size={30} />,
      color: "warning",
    },
    {
      title: "Results Generated",
      value: "1,920",
      icon: <FaChartBar size={30} />,
      color: "danger",
    },
  ];

  return (
    <AdminLayout>
      <div className="container-fluid">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">Admin Dashboard</h2>
            <p className="text-muted mb-0">
              Welcome back, Administrator 👋
            </p>
          </div>

          <button className="btn btn-dark">
            Generate Report
          </button>
        </div>

        {/* Stats Cards */}
        <div className="row g-4 mb-5">
          {stats.map((item, index) => (
            <div className="col-md-3" key={index}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h6 className="text-muted">{item.title}</h6>
                    <h3 className="fw-bold">{item.value}</h3>
                  </div>

                  <div
                    className={`bg-${item.color} text-white rounded-circle d-flex align-items-center justify-content-center`}
                    style={{
                      width: "60px",
                      height: "60px",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tables Section */}
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white">
                <h5 className="mb-0">Recent Employers</h5>
              </div>

              <div className="card-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Company</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>Infosys</td>
                      <td>
                        <span className="badge bg-success">
                          Approved
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>TCS</td>
                      <td>
                        <span className="badge bg-warning">
                          Pending
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Wipro</td>
                      <td>
                        <span className="badge bg-success">
                          Approved
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-header bg-white">
                <h5 className="mb-0">Recent Activities</h5>
              </div>

              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    New employer registered.
                  </li>
                  <li className="list-group-item">
                    Assessment created for Java.
                  </li>
                  <li className="list-group-item">
                    120 candidates completed test.
                  </li>
                  <li className="list-group-item">
                    Results published.
                  </li>
                  <li className="list-group-item">
                    New candidate account created.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-white">
            <h5 className="mb-0">Quick Actions</h5>
          </div>

          <div className="card-body">
            <div className="d-flex gap-3 flex-wrap">
              <button className="btn btn-primary">
                Add Employer
              </button>

              <button className="btn btn-success">
                Add Assessment
              </button>

              <button className="btn btn-warning">
                View Results
              </button>

              <button className="btn btn-danger">
                Manage Users
              </button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default AdminDashboard;