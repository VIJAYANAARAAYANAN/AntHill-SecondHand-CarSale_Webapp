import "../PageCss/Home.css";
import backgroundImage from "../assets/CarHomebanner.svg";
import React, { useState } from "react";
import FeatureListing from "../components/FeatureListing.tsx";
import Explore from "../components/Explore.tsx";
import GetInTouch from "../components/GetinTouch.tsx";
import Roadmap from "../components/RoadMap.tsx";
import Contact from "../components/Contact.tsx";
import Latest from "../components/Latest.tsx";
const Home = () => {
  const [minValue, setMinValue] = useState(1000);
  const [maxValue, setMaxValue] = useState(5000);
  const [activeTab, setActiveTab] = useState("New cars");

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - 100);
    setMinValue(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + 100);
    setMaxValue(value);
  };

  const minPos = ((minValue - 1000) / (5000 - 1000)) * 100;
  const maxPos = ((maxValue - 1000) / (5000 - 1000)) * 100 - 2;

  return (
    <>
      <div className="home-container">
        <div className="background-overlay"></div>
        <div className="content">
          <div className="left-content">
            <h1>
              Find Quality-Assured Cars Tailored to Your Budget and Preferences
            </h1>
            <p>
              Browse a Wide Range of Certified Used Cars from Trusted Dealers
              and Private Sellers
            </p>
            <div className="button-rating">
              <button className="book-btn">Book My Car</button>
              <div className="rating">
                ⭐⭐⭐⭐⭐ <span>Working with 50+ Happy members</span>
              </div>
            </div>
          </div>
          <div className="right-content">
            <div className="car-filter">
              <div className="tabs">
                <button
                  className={activeTab === "New cars" ? "active" : ""}
                  onClick={() => setActiveTab("New cars")}
                >
                  New cars
                </button>
                <button
                  className={activeTab === "Used cars" ? "active" : ""}
                  onClick={() => setActiveTab("Used cars")}
                >
                  Used cars
                </button>
              </div>
              <input type="text" placeholder="Make" className="input-field" />
              <input type="text" placeholder="Models" className="input-field" />

              <div className="dual-range-slider">
                <div className="slider-track"></div>
                <div
                  className="slider-range"
                  style={{
                    left: `${minPos}%`,
                    right: `${100 - maxPos}%`,
                  }}
                ></div>
                <div className="thumb-group">
                  <input
                    type="range"
                    min="1000"
                    max="5000"
                    value={minValue}
                    onChange={handleMinChange}
                    className="thumb thumb-left"
                  />
                  <span
                    className="thumb-value"
                    style={{ left: `calc(${minPos}% + 8px)` }}
                  >
                    {minValue.toLocaleString()}
                  </span>
                </div>
                <div className="thumb-group">
                  <input
                    type="range"
                    min="1000"
                    max="5000"
                    value={maxValue}
                    onChange={handleMaxChange}
                    className="thumb thumb-right"
                  />
                  <span className="thumb-value" style={{ left: `${maxPos}%` }}>
                    {maxValue.toLocaleString()}
                  </span>
                </div>
              </div>

              <input type="text" placeholder="Body" className="input-field" />
              <button className="search-btn">2334 Cars</button>
            </div>
          </div>
        </div>
        <div className="Welcome-text">
          <p>Welcome</p>
        </div>
      </div>
      <Explore />
      <FeatureListing />
      <GetInTouch />
      <Roadmap/>
      <Latest/>
      <Contact/>
    </>
  );
};

export default Home;
