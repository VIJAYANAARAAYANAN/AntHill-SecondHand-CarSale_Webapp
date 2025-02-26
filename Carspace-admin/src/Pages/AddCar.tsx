import { useState, useRef } from "react";
import { Upload } from "lucide-react";
import "../PagesCss/AddCar.css";

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://eilnzicwovojyqjabuze.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpbG56aWN3b3ZvanlxamFidXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzNzUwODAsImV4cCI6MjA1NTk1MTA4MH0.pVtMG6LDV3z0XG1-R5s5QPR8KzKfJBo-eaboxYsaSOE"
);

interface CarFormData {
  carName: string;
  ownerName: string;
  price: string;
  year: string;
  engineSize: string;
  mileage: string;
  driverType: string;
  cylinders: string;
  seats: string;
  fuelType: string;
  doors: string;
  colour: string;
  description: string;
  cityMPG: string;
  highwayMPG: string;
  address: string;
  addressLink: string;
  video: string;
  features: string[];
  image?: File | null;
}

const featureOptions = [
  "A/C: Front",
  "CCTV",
  "Leather",
  "Navigation system",
  "Rain sensing wipe",
  "Sun roof",
  "Central locking",
  "Sports package",
  "Front fog light",
  "Rear Spoilers",
  "Power steering",
];

const AddCar = () => {
  const [formData, setFormData] = useState<CarFormData>({
    carName: "",
    ownerName: "",
    price: "",
    year: "",
    engineSize: "",
    mileage: "",
    driverType: "",
    cylinders: "",
    seats: "",
    fuelType: "",
    doors: "",
    colour: "",
    description: "",
    cityMPG: "",
    highwayMPG: "",
    address: "",
    addressLink: "",
    video: "",
    features: [],
    image: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFeatureChange = (feature: string) => {
    setFormData((prev) => {
      const updatedFeatures = prev.features.includes(feature)
        ? prev.features.filter((f) => f !== feature)
        : [...prev.features, feature];
      return { ...prev, features: updatedFeatures };
    });
  };

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      console.log("Selected file:", file);

      setFormData((prev) => ({
        ...prev,
        image: file,
      }));
    }
  };

  const uploadImageToSupabase = async (imageFile: File, userEmail: string) => {
    const fileName = `${userEmail}_${Date.now()}.jpg`; 

    const { data: uploadData, error } = await supabase.storage
      .from("car_images")
      .upload(fileName, imageFile, {
        cacheControl: "3600",
        upsert: false,
        contentType: "image/jpeg",
      });

    if (error) {
      console.error("Image Upload Error:", error);
      return null;
    }

    const { data } = supabase.storage.from("car_images").getPublicUrl(fileName);
    return data.publicUrl;  
};


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const userDataString = localStorage.getItem("user");
    if (!userDataString) {
      alert("User not logged in!");
      return;
    }

    const userData = JSON.parse(userDataString);
    const userEmail = userData.email;

    let imageUrl = null;
    if (formData.image) {
      imageUrl = await uploadImageToSupabase(formData.image, userEmail);
      if (formData.image && !imageUrl) {
        alert("Image upload failed!");
        return;
      }
      
    }

    const newListing = {
      ...formData,
      image: imageUrl,
    };
    let { data, error } = await supabase
      .from("CarSpace_ManageListing")
      .select("listingData")
      .eq("userEmail", userEmail)
      .single();

    let updatedListings = data?.listingData
      ? [...data.listingData, newListing]
      : [newListing];

    const { error: upsertError } = await supabase
      .from("CarSpace_ManageListing")
      .upsert([
        {
          userEmail: userEmail,
          listingData: updatedListings, 
        },
      ]);

    if (upsertError) {
      console.error("Error saving listing:", upsertError);
      alert("Failed to save car listing.");
    } else {
      alert("Car listing added successfully!");
      handleClear();
    }
  };
  const handleClear = () => {
    setFormData({
      carName: "",
      ownerName: "",
      price: "",
      year: "",
      engineSize: "",
      mileage: "",
      driverType: "",
      cylinders: "",
      seats: "",
      fuelType: "",
      doors: "",
      colour: "",
      description: "",
      cityMPG: "",
      highwayMPG: "",
      address: "",
      addressLink: "",
      video: "",
      features: [],
      image: null,
    });
  };

  return (
    <div className="add-car-wrapper">
      <div className="add-car-container">
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Car name</label>
              <input
                type="text"
                name="carName"
                value={formData.carName}
                onChange={handleInputChange}
                className="input-field"
                // placeholder="Enter car name"
              />
            </div>

            <div className="form-group">
              <label>Owner name</label>
              <input
                type="text"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Year</label>
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Engine Size</label>
              <input
                type="text"
                name="engineSize"
                value={formData.engineSize}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Mileage</label>
              <input
                type="text"
                name="mileage"
                value={formData.mileage}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Driver Type</label>
              <input
                type="text"
                name="driverType"
                value={formData.driverType}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Cylinders</label>
              <input
                type="text"
                name="cylinders"
                value={formData.cylinders}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Seats</label>
              <input
                type="text"
                name="seats"
                value={formData.seats}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Fuel type</label>
              <input
                type="text"
                name="fuelType"
                value={formData.fuelType}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Doors</label>
              <input
                type="text"
                name="doors"
                value={formData.doors}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Colour</label>
              <input
                type="text"
                name="colour"
                value={formData.colour}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
          </div>

          <div className="descrition-group">
            <div className="main-description">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="input-field"
                rows={4}
              />
            </div>
            <div className="description-part">
              <div className="desform-group">
                <label>City MPG</label>
                <input
                  type="text"
                  name="cityMPG"
                  value={formData.cityMPG}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>

              <div className="desform-group">
                <label>Highway MPG</label>
                <input
                  type="text"
                  name="highwayMPG"
                  value={formData.highwayMPG}
                  onChange={handleInputChange}
                  className="input-field"
                />
              </div>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label>Address Link (Google Maps)</label>
              <input
                type="text"
                name="addressLink"
                value={formData.addressLink}
                onChange={handleInputChange}
                className="input-field"
              />
            </div>
          </div>

          {/* Media Upload */}
          <div className="form-group">
            <label>Media Upload</label>
            <div
              className="media-upload-area"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload size={24} />
              <p>Drop files here or click to upload.</p>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="file-input"
                style={{ display: "none" }}
              />
            </div>

            {formData.image && (
              <div className="image-preview">
                <p>Selected Image:</p>
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Uploaded"
                  className="preview-image"
                />
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Video (mp4)</label>
            <input
              type="text"
              name="video"
              value={formData.video}
              onChange={handleInputChange}
              className="input-field"
            />
          </div>
          <div className="form-group full-width">
            <label>Features</label>
            <div className="checkbox-container">
              {featureOptions.map((feature) => (
                <label key={feature} className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.features.includes(feature)}
                    onChange={() => handleFeatureChange(feature)}
                  />
                  {feature}
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Add Car
          </button>
          <button type="button" className="clear-btn" onClick={handleClear}>
            Clear
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
