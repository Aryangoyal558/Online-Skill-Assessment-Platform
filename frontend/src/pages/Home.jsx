import MainLayout from "../layouts/MainLayout";
import DarkVeil from "../components/DarkVeil";
import img2 from "../assets/img2.png";
import "./Home.css";

import TeamSection from "../components/TeamSection";
import GlowingCards from "../components/GlowingCards";
import OfferCard from "../components/OfferCard";
import PopularSubject from "../components/PopularSubject";
import Footer from "../components/Footer";
import about_1 from "../assets/about_1.png";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.jpg";
import CourseCard from "../components/card/CourseCard";
import TestimonialSection from "../components/card/TestimonialSection";
import PopularLanguages from "../components/card/PopularLanguages";
import AboutSection from "../components/card/AboutSection";

function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="hero-section py-5">
        <DarkVeil />

        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>

        <div className="container position-relative">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="hero-badge ">
                  ✨ AI Powered Assessment Platform
                </div>

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

                <div className="hero-buttons">
                  <button className="hero-btn">Get Started →</button>

                  <button className="hero-btn-outline">Learn More</button>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src={about_1}
                alt="Assessment Platform"
                className="hero-image"
                width="50%"
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#190d5e" }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 py-5">
              <button className="btn btn-primary my-3">Explore Now</button>
              <h1 className="text-white my-3">
                Provide It & Technol Subject For You
              </h1>
              <p className="text-white mt-3">
                Construction is a general term meaning the art and science to
                form systems organizations, and comes from Latin Construction is
              </p>

              <div className="border-start border-danger border-5 rounded-1 py-2 my-3">
                <p className="text-white px-3">
                  {" "}
                  Construction is a general term meaning the art and science to
                  form systems organizations, and comes from Latin Construction
                  is a organizations, and comes from Latin construction and Old
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="container">
                <div className="row g-4 py-5">
                  <div className="col-md-6 col-6">
                    <div className="neo-subject-card">
                      <img src={c3} alt="" className="neo-subject-icon" />
                      <div>
                        <h2>Business Studies</h2>
                        <p>
                          Construction is a general term the art and science to
                          form
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-6">
                    <div className="neo-subject-card">
                      <img src={c3} alt="" className="neo-subject-icon" />
                      <div>
                        <h2>Business Studies</h2>
                        <p>
                          Construction is a general term the art and science to
                          form
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-6">
                    <div className="neo-subject-card">
                      <img src={c3} alt="" className="neo-subject-icon" />
                      <div>
                        <h2>Business Studies</h2>
                        <p>
                          Construction is a general term the art and science to
                          form
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-6">
                    <div className="neo-subject-card">
                      <img src={c3} alt="" className="neo-subject-icon" />
                      <div>
                        <h2>Business Studies</h2>
                        <p>
                          Construction is a general term the art and science to
                          form
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}

      <div className="container-fluid">
        <div className="row g-4 py-5">
          <div className="col-md-3 col-6">
            <div className="stats-card">
              <img src={c1} alt="" className="stats-icon" />
              <div>
                <h2 className="stats-number">1+</h2>
                <p className="stats-text">Achievements</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="stats-card">
              <img src={c2} alt="" className="stats-icon" />
              <div>
                <h2 className="stats-number">50+</h2>
                <p className="stats-text">Assessments</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="stats-card">
              <img src={c3} alt="" className="stats-icon" />
              <div>
                <h2 className="stats-number">100+</h2>
                <p className="stats-text">Certificates</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-6">
            <div className="stats-card">
              <img src={c4} alt="" className="stats-icon" />
              <div>
                <h2 className="stats-number">24/7</h2>
                <p className="stats-text">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mx-3 my-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 py-5 px-3" style={{ color: "white" }}>
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "800",
                  lineHeight: "1.1",
                  marginBottom: "20px",
                  background: "linear-gradient(90deg,#00ffff,#7c3aed,#00ffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
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

              <button className="hero-btn">Contact Us</button>
            </div>

            <div className="col-md-6 py-3">
              {/* <OfferCard
                icon="🚀"
                title="Skill Assessment"
                description="Evaluate real-world skills using AI-powered assessments and advanced analytics."
                color="#00ffff"
              /> */}
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                {/* Indicators */}
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>

                {/* Slides */}
                <div className="carousel-inner rounded-4 overflow-hidden">
                  <div className="carousel-item active">
                    <img
                      src={s1}
                      className="d-block w-100"
                      alt="Slide 1"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src={s2}
                      className="d-block w-100"
                      alt="Slide 2"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>

                  <div className="carousel-item">
                    <img
                      src={s3}
                      className="d-block w-100 my-4"
                      alt="Slide 3"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>
                </div>

                {/* Previous Button */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                {/* Next Button */}
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <AboutSection/>
      </section>

      <section style={{background:"#190d5e"}} className="py-5">
        <TestimonialSection/>
      </section>
      <section className="mt-5">
        <PopularLanguages/>
      </section>

      {/* Features */}
      {/* <section className="my-5">
        <div className="container glass-section py-5">
          <h2 className="section-heading">Why Choose Us</h2>

          <GlowingCards />
        </div>
      </section> */}

      
      
      

        {/* Subjects */}
      <section className="my-5 " >
        
        <div className="row mb-4 mx-5 my-5">
                  <div className="col-md-4">
                    <button className="btn btn-outline-primary rounded-3">Course List</button>
                  </div>

                  <div className="col-md-4 text-center">
                       <h6 className="text-white">Forging relationships between multi 
                        to national governments and global NGOs begins</h6>
                  </div>
                  <div className="col-md-4 text-end">
                       <button className="btn btn-primary rounded-pill ">Explore Subjects</button>
                  </div>
             </div>

        {/* <PopularSubject /> */}
         <CourseCard/>
      </section>

      {/* Team */}
      <section className="py-3" style={{background:"#190d5e"}}>
        <div className="container">
          <TeamSection />
        </div>
      </section>

    

      {/* Footer */}
      <footer
        style={{
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
        
        }}
      >
        <Footer />
      </footer>
    </MainLayout>
  );
}

export default Home;
