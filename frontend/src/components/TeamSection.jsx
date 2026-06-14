import TeamCard from "../components/TeamCard";
// import member1 from "../assets/member1.jpg";
// import member2 from "../assets/member2.jpg";
// import member3 from "../assets/member3.jpg";

function TeamSection() {
  return (
    <div className="container py-5">
      <h2 className="team-section-title" style={ {
         textAlign: "center",
    marginBottom: "60px",
    fontSize: "3rem",
    fontWeight: "800",
    letterSpacing: "1px",
    color: "#ffffff",
    textShadow:
      "0 0 10px rgba(255,255,255,0.25), 0 0 20px rgba(124,58,237,0.25), 0 0 35px rgba(236,72,153,0.15)",
      }}
  >Meet Our Team</h2>

      <div className="row g-4 justify-content-center">
        <div className="col-md-4">
          <TeamCard
            image=""
            name="Arjun Mehta"
            role="Full Stack Developer"
            description="Designing and building scalable AI-powered web platforms with modern React, Node.js, and cloud architecture. Focused on performance"
          />
        </div>

        <div className="col-md-4">
          <TeamCard
            image=""
            name="Sneha Kapoor"
            role="UI/UX Designer"
            description="Crafting immersive digital experiences with neon-inspired interfaces, motion design systems, and user-first interaction patterns for next-gen applications."
          />
        </div>

        <div className="col-md-4">
          <TeamCard
            image=""
            name="Rohan Verma"
            role="AI Engineer"
            description="Building intelligent assessment systems powered by machine learning, natural language processing, and predictive analytics for smarter decision-making."
          />
        </div>
      </div>
    </div>
  );
}

export default TeamSection;