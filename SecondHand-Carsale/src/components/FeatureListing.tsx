import React from "react";
import petrol from "../assets/icons/Vector.svg";
import speed from "../assets/icons/gauge.svg";
import { ArrowRight } from "lucide-react";
import automation from "../assets/icons/cog-outline.svg";
import "./css/FeatureListing.css";
import heart from "../assets/icons/heart.svg";
import cars from '../assets/images/cars.svg';
import redcar from "../assets/images/Redcar.svg";
interface CarListing {
  id: number;
  title: string;
  model: string;
  price: number;
  image: string;
  fuelType: string;
  mileage: string;
  transmission: string;
  year: number;
  engineSize: string;
  color: string;
}

const carListings: CarListing[] = [
  {
    id: 1,
    title: "Mini Cooper S",
    model: "Chevrolet Suburban",
    price: 27000,
    image:
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
    fuelType: "Petrol",
    mileage: "50,000 km",
    transmission: "Automatic",
    year: 2021,
    engineSize: "2.0L",
    color: "Midnight Black",
  },
  {
    id: 2,
    title: "Aston Martin Vanquish",
    model: "Aston V12 Coupe",
    price: 185000,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=800",
    fuelType: "Petrol",
    mileage: "15,000 km",
    transmission: "Automatic",
    year: 2022,
    engineSize: "5.9L V12",
    color: "Silver",
  },
  {
    id: 3,
    title: "Ford Mustang",
    model: "Ford GT Premium",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=800",
    fuelType: "Petrol",
    mileage: "25,000 km",
    transmission: "Manual",
    year: 2023,
    engineSize: "5.0L V8",
    color: "Race Red",
  },
  {
    id: 4,
    title: "Tesla Model S",
    model: "Tesla E Plaid",
    price: 135000,
    image:
      "https://images.unsplash.com/photo-1536700503339-1e4b06520771?auto=format&fit=crop&q=80&w=800",
    fuelType: "Electric",
    mileage: "10,000 km",
    transmission: "Automatic",
    year: 2023,
    engineSize: "Electric",
    color: "Pearl White",
  },
  {
    id: 5,
    title: "Porsche 911",
    model: "Carrera S",
    price: 165000,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    fuelType: "Petrol",
    mileage: "5,000 km",
    transmission: "PDK",
    year: 2023,
    engineSize: "3.0L Twin-Turbo",
    color: "Guards Red",
  },
  {
    id: 6,
    title: "Range Rover",
    model: "Sport HSE",
    price: 95000,
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800",
    fuelType: "Diesel",
    mileage: "20,000 km",
    transmission: "Automatic",
    year: 2022,
    engineSize: "3.0L V6",
    color: "Santorini Black",
  },
];

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="header-content">
          <h1 className="header-title">Feature listing</h1>
          <div className="filter-buttons">
            <button className="filter-button active">All</button>
            <button className="filter-button inactive">New cars</button>
            <button className="filter-button inactive">Used cars</button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="car-grid">
          {carListings.map((car) => (
            <div key={car.id} className="car-card">
              <div className="car-image-container">
                <img src={car.image} alt={car.model} className="car-image" />
                <span className="featured-tag">Featured</span>
              </div>
              <div className="car-details">
                <div className="car-title">{car.title}</div>
                <h3 className="car-model">
                  {car.model} {car.year}
                </h3>
                <div className="car-price">₹ {car.price.toLocaleString()}</div>

                <div className="car-specs">
                  <div className="spec-item">
                    <img src={petrol} alt="Fuel Type" className="spec-icon" />
                    <div className="icon-info">
                      <p>Fuel type</p>
                      <span className="spec-text">{car.fuelType}</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <img src={speed} alt="Mileage" className="spec-icon" />
                    <div className="icon-info">
                      <p>Milage</p>
                      <span className="spec-text">{car.mileage}</span>
                    </div>
                  </div>
                  <div className="spec-item">
                    <img
                      src={automation}
                      alt="Transmission"
                      className="spec-icon"
                    />
                    <div className="icon-info">
                      <p>Transmission</p>
                      <span className="spec-text">{car.transmission}</span>
                    </div>
                  </div>
                </div>

                <div className="card-actions">
                  <div className="view-part">
                    <button className="view-details"> View details </button>
                    <ArrowRight className="arrow-icon" />
                  </div>
                  <img src={heart} alt="heart" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="load-more">
          <button className="load-more-button">Load more</button>
        </div>
        
        <div className="inventory-section">
          <div className="inventory-cards">
            <div className="inventory-card">
              <div className="inventory-content">
                <div className="inventory-label">CAR INVENTORY</div>
                <h2 className="inventory-title">Search Over 13000+ Used Vehicles</h2>
                <button className="inventory-button">
                  View Inventory
                  <ArrowRight className="arrow-icon" />
                </button>
              </div>
              <img 
                src={redcar}
                alt="Red SUV" 
                className="inventory-image"
              />
            </div>
            <div className="inventory-card">
              <div className="inventory-content">
                <div className="inventory-label">CAR INVENTORY</div>
                <h2 className="inventory-title">Looking to sell your Used brand car?</h2>
                <button className="inventory-button">
                  View Inventory
                  <ArrowRight className="arrow-icon" />
                </button>
              </div>
              <img 
                src={cars} 
                alt="Multiple Cars" 
                className="inventory-image multiple-cars"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
