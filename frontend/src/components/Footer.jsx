import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
function Footer() {
  return (
    <div className="container ">
      <div className="row border-bottom mb-45">
        <div className="col-md-6 py-5">
          <h6 className="bold text-white">Join our newsletter</h6>
          <h6 className="text-white">
            We'll send you a nice letter once per week. No spam.
          </h6>
        </div>
        <div className="col-md-6 py-3">
          <form>
            <div class="align-items-center">
              <label class="sr-only text-white" for="inlineFormInputGroup">
                Username
              </label>
              <div class="input-group">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                />
                <button type="submit" class="btn btn-primary ">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="row g-4  py-5 border-bottom">
        <div className="col-6 col-md-3 text-center">
          <h5 className="text-white fw-bold mb-4">Product</h5>

          <div className="d-flex flex-column gap-2">
            <a href="#" className="footer-link">
              Overview
            </a>
            <a href="#" className="footer-link">
              Features
            </a>
            <a href="#" className="footer-link">
              Solutions
            </a>
            <a href="#" className="footer-link">
              Tutorials
            </a>
            
          </div>
        </div>

        <div className="col-6 col-md-3 text-center">
          <h5 className="text-white fw-bold mb-4">Company</h5>

          <div className="d-flex flex-column gap-2">
            <a href="#" className="footer-link">
              About
            </a>
            <a href="#" className="footer-link">
              Careers
            </a>
            <a href="#" className="footer-link">
              Blog
            </a>
           
            <a href="#" className="footer-link">
              Partners
            </a>
          </div>
        </div>

        <div className="col-6 col-md-3 text-center">
          <h5 className="text-white fw-bold mb-4">Resources</h5>

          <div className="d-flex flex-column gap-2">
            <a href="#" className="footer-link">
              Docs
            </a>
            <a href="#" className="footer-link">
              Community
            </a>
            <a href="#" className="footer-link">
              Help Center
            </a>
           
            <a href="#" className="footer-link">
              API
            </a>
          </div>
        </div>

        <div className="col-6 col-md-3 text-center">
          <h5 className="text-white fw-bold mb-4">Legal</h5>

          <div className="d-flex flex-column gap-2">
            <a href="#" className="footer-link">
              Privacy
            </a>
            <a href="#" className="footer-link">
              Terms
            </a>
            <a href="#" className="footer-link">
              Security
            </a>
            <a href="#" className="footer-link">
              Cookies
            </a>
          </div>
        </div>

        {/* <div className="col-md-4">
          <h5 className="text-white fw-bold mb-4">Stay Updated</h5>

          <p className="text-secondary">
            Subscribe to get the latest updates and offers.
          </p>

          <div className="input-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div> */}

      </div>
      <div className="row">
        <div className="col-md-6 text-center text-white">
            <p>@copyright-SkillCert(2026)</p>
        </div>
        <div className="col-md-6 text-center text-white text-start">
            <h1 style={{float:"left"}}><FaGithub/></h1>
            <h1 style={{float:"left"}}><FaSquareTwitter /></h1>
            <h1 style={{float:"left"}}> <FaInstagramSquare /></h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
