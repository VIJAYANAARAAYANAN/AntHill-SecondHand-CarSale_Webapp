import "./css/Contact.css";
import map from "../assets/icons/map.svg";
import mail from "../assets/icons/phone.svg";
import call from "../assets/icons/email.svg";
import social from '../assets/icons/Social Icon.svg'
const Contact = () => {
  return (
    <footer className="contact-footer">
      <div className="footer-container">
        <div className="footer-header">
          <h2>
            Do you have Something
            <br />
            to Sell through Us?
          </h2>
          <button className="sell-button">Sell your car today</button>
        </div>

        <div className="footer-content">
          <div className="footer-links">
            <div className="link-area">
              <div className="links-column">
                <h3>Overview</h3>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Cars</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">FAQ's</a>
                  </li>
                </ul>
              </div>

              <div className="links-column">
                <h3>Explore</h3>
                <ul>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">Press mentions</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="contact-info">
              <div className="info-item">
                <img src={map} alt="map" />
                <p>7th b main Btm 1st stage Bangalore Karnataka 560029</p>
              </div>
              <div className="info-item">
                <img src={mail} alt="map" />
                <a href="mailto:hello@email.com">hello@email.com</a>
              </div>
              <div className="info-item">
                <img src={call} alt="map" />
                <a href="tel:+918310955920">+91 8310955920</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="legal-links">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="social-links">
                <img src={social} alt="social icons" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
