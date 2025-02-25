import { useState } from "react";
import { Plus } from "lucide-react";
import "../PagesCss/ManageListing.css";
import {useNavigate } from "react-router-dom";

interface PriceRange {
  min: number;
  max: number;
}

const Listings = () => {
  const navigate  = useNavigate();
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

  const [selectedType, setSelectedType] = useState<"new" | "used">("new");
  const [priceRange, setPriceRange] = useState<PriceRange>({
    min: 1000,
    max: 5000,
  });
  const [filters, setFilters] = useState({
    make: "",
    model: "",
    body: "",
  });

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: parseInt(value),
    }));
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    // Implement search functionality
    console.log("Searching with filters:", {
      selectedType,
      priceRange,
      filters,
    });
  };
  const handleaddcars = () => {
    navigate('/addcars');
  }

  return (
    <div className="listings">
      <div className="listings-header">
        <button className="add-car-btn" onClick={handleaddcars}>Add Car</button>
      </div>

      <div className="listings-content">
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

        <div className="filters-section">
          <div className="filters-grid">
            <input type="text" placeholder="Make" className="input-field" />
            <input type="text" placeholder="Models" className="input-field" />
            <input type="text" placeholder="Body" className="input-field" />
          </div>

          <div className="car-filter-part">
            <div className="rangearea">
              <p>Set price range</p>
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
            </div>
            <div className="search-area">
              <button className="search-btn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
