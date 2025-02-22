import React, { useState } from 'react';
import './css/getintouch.css';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="get-in-touch">
      <div className="get-in-touch-container">
        <div className="form-section">
          <h2>Get in Touch</h2>
          <p>
            We're here to help! Whether you're interested in booking a tour, learning
            more about our memberships, or have general inquiries, feel free to reach
            out. We'll get back to you as soon as possible.
          </p>
          
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
            
            <button type="submit" className="submit-button">
              Send My Inquiry
            </button>
          </form>
        </div>
        
        <div className="image-section">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200"
            alt="Customer service workspace"
          />
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;