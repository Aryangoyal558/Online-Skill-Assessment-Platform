import "./TestimonialSection.css";

export default function TestimonialSection() {
  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <span className="course-badge">Course List</span>

            <h1 className="title">
              What They Say
              <br />
              About us
            </h1>

            <p className="description">
              Construction is a general term meaning the art and science to
              
            </p>

            <button className="explore-btn">
              Explore More →
            </button>
          </div>

          {/* Testimonial 1 */}
          <div className="col-lg-4 mb-4">
            <div className="testimonial-card">
              <div className="quote-icon">❝</div>

              <div className="speech-box">
                <p>
                  The other hand we denounce righteous indignation men who are
                  
                </p>
              </div>

              <div className="user-info">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt=""
                />

                <div>
                  <h4>Robind Jon</h4>
                  <span>Designer TechBoot</span>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="col-lg-4">
            <div className="testimonial-card">
              <div className="quote-icon">❝</div>

              <div className="speech-box">
                <p>
                  The other hand we denounce righteous indignation men who are
                  
                </p>
              </div>

              <div className="user-info">
                <img
                  src="https://randomuser.me/api/portraits/men/33.jpg"
                  alt=""
                />

                <div>
                  <h4>Robind Jon</h4>
                  <span>Designer TechBoot</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}