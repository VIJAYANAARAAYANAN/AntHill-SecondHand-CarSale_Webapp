import "../PageCss/About.css";
import speed from "../assets/images/Speedometer.svg";
import star from "../assets/icons/star.svg";
import union from "../assets/icons/Union.svg";
import client from "../assets/icons/client.svg";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-banner">
        <div className="background-overlay"></div>
      </div>

      <div className="about-content-wrapper">
        <div className="about-title">
          <h1>Our Journey</h1>
        </div>

        <div className="about-hero">
          <div className="hero-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="stats-container">
              <div className="stat-item">
                <h3>200+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat-item">
                <h3>10k+</h3>
                <p>Properties For Clients</p>
              </div>
              <div className="stat-item">
                <h3>16+</h3>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img src={speed} alt="Car Dashboard" />
          </div>
        </div>
      </div>

      <div className="values-section">
        <div className="values-content">
          <div className="values-title">
            <h2>Our Values</h2>
          </div>
          <div className="value-main">
            <div className="values-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="values-grid">
              <div className="value-item">
                <div className="value-title">
                  <div className="value-icon">
                    <img src={star} alt="star" />
                  </div>
                  <h3>Trust</h3>
                </div>
                <p>
                  Trust is the cornerstone of every successful real estate
                  transaction.
                </p>
              </div>

              <div className="value-item">
                <div className="value-title">
                  <div className="value-icon">
                    <img src={union} alt="star" />
                  </div>
                  <h3>Excellence</h3>
                </div>
                <p>
                  We set the bar high for ourselves. From the properties we list
                  to the services we provide.
                </p>
              </div>

              <div className="value-item">
                <div className="value-title">
                  <div className="value-icon">
                    <img src={client} alt="star" />
                  </div>
                  <h3>Client-Centric</h3>
                </div>
                <p>
                  Your dreams and needs are at the center of our universe. We
                  listen, understand.
                </p>
              </div>
              <div className="value-item">
                <div className="value-title">
                  <div className="value-icon">
                    <img src={star} alt="star" />
                  </div>
                  <h3>Our Commitment</h3>
                </div>

                <p>
                  We are dedicated to providing you with the highest level of
                  service, professionalism.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
