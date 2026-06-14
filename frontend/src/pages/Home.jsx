import MainLayout from "../layouts/MainLayout";
import DarkVeil from "../components/DarkVeil";
import img2 from "../assets/img2.png";
import "./Home.css";
import TeamCard from "../components/TeamCard";
import TeamSection from "../components/TeamSection";
import GlowingCards from "../components/GlowingCards";
import OfferCard from "../components/OfferCard";
function Home() {
  return (
    <MainLayout>
      {/* Background Animation */}
      <div className="background-container">
        <DarkVeil />
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="blue-text">Online Skill</span>
              <br />
              <span className="purple-text">Assessment Platform</span>
            </h1>

            <p className="hero-description">
              Transform the way you evaluate talent with AI-powered skill
              assessments, real-time analytics, and intelligent reporting.
              Identify top performers, streamline recruitment, and make
              data-driven decisions with confidence.
            </p>

            <button className="hero-btn">Get Ready →</button>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="row">
            <div
            className="col-md-6 py-5 px-3"
            style={{
              color: "white",
              
            }}
          >
            <h1
              style={{
                fontSize: "2rem",
                fontWeight: "800",
                lineHeight: "1.1",
                marginBottom: "20px",
                background: "linear-gradient(90deg, #00ffff, #7c3aed, #00ffff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 20px rgba(0,255,255,0.3)",
              }}
            >
              Unlock Your True Potential
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "rgba(255,255,255,0.8)",
                lineHeight: "1.8",
                marginBottom: "30px",
               
              }}
            >
              Empower your journey with AI-powered skill assessments,
              industry-recognized certifications, and real-time performance
              insights. Showcase your expertise and stand out in a competitive
              digital world.
            </p>

            <button
              style={{
                padding: "12px 30px",
                borderRadius: "50px",
                background: "linear-gradient(135deg, #00ffff, #7c3aed)",
                border: "none",
                color: "white",
                fontWeight: "600",
                boxShadow: "0 0 25px rgba(0,255,255,0.35)",
                cursor: "pointer",
              }}
            >
              Contact Us
            </button>
          </div>
          <div className="col-md-6 py-3">
            <OfferCard
              icon="🚀"
              title="Skill Assessment"
              description="Evaluate real-world skills using AI-powered assessments and advanced analytics."
              color="#00ffff"
            />
          </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <GlowingCards />
            </div>
          </div>
        </div>
      </section>
      <section className="my-2">
        <div className="container ">
          <div className="row">
            <div className="col-md-6">
              <img src={img2} alt="" width="100%" />
            </div>
            <div className="col-md-6 py-5">
              <h2 className="offer-title text-white">
                Transform Skills Into
                <span className="text-white"> Verified Achievements</span>
              </h2>

              <p className="offer-text text-white py-3">
                Our platform empowers learners, institutions, and organizations
                to measure skills with confidence. Through intelligent
                assessments and secure digital certifications, we help
                individuals showcase their expertise and stand out in a
                competitive world.
              </p>

              <button className="btn started-btn mt-3">
                Explore Assessments
              </button>
            </div>
          </div>
        </div>
      </section>

      

      <section>
        <TeamSection />
      </section>
      

      
    </MainLayout>
  );
}

export default Home;
