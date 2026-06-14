import CandidateLayout from "../../layouts/CandidateLayout";
import { Link } from "react-router-dom";

function AvailableTests() {

  const tests = [
    {
      id: 1,
      title: "JavaScript Fundamentals",
      duration: 30,
      questions: 25
    },
    {
      id: 2,
      title: "React Assessment",
      duration: 45,
      questions: 30
    },
    {
      id: 3,
      title: "C# Programming",
      duration: 60,
      questions: 40
    }
  ];

  return (
    <CandidateLayout>

      <h1 className="mb-4">
        Available Tests
      </h1>

      <div className="row">

        {tests.map((test) => (

          <div
            className="col-md-4 mb-4"
            key={test.id}
          >
            <div className="card shadow-sm">

              <div className="card-body">

                <h4>{test.title}</h4>

                <p>
                  Duration :
                  {test.duration} mins
                </p>

                <p>
                  Questions :
                  {test.questions}
                </p>

                <Link
                  to={`/candidate/test/${test.id}`}
                  className="btn btn-primary"
                >
                  View Details
                </Link>

              </div>

            </div>
          </div>

        ))}

      </div>

    </CandidateLayout>
  );
}

export default AvailableTests;