import CandidateLayout from "../../layouts/CandidateLayout";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function TestDetails() {

  const { id } = useParams();

  const test = {
    id,
    title: "JavaScript Fundamentals",
    duration: 30,
    questions: 25,
    passingMarks: 60,
    description:
      "Test your JavaScript knowledge."
  };

  return (
    <CandidateLayout>

      <div className="card shadow">

        <div className="card-body">

          <h2>{test.title}</h2>

          <hr />

          <p>
            <strong>Duration:</strong>
            {" "}
            {test.duration} mins
          </p>

          <p>
            <strong>Questions:</strong>
            {" "}
            {test.questions}
          </p>

          <p>
            <strong>Passing Marks:</strong>
            {" "}
            {test.passingMarks}%
          </p>

          <p>
            <strong>Description:</strong>
            {" "}
            {test.description}
          </p>

          <Link
            className="btn btn-success"
            to={`/candidate/mcq-test/${id}`}
          >
            Start Test
          </Link>

        </div>

      </div>

    </CandidateLayout>
  );
}

export default TestDetails;