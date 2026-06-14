import CandidateSidebar from "../components/candidate/CandidateSidebar";

function CandidateLayout({ children }) {
  return (
    <div className="d-flex">

      <CandidateSidebar />

      <div
        className="p-4"
        style={{
          width: "100%"
        }}
      >
        {children}
      </div>

    </div>
  );
}

export default CandidateLayout;