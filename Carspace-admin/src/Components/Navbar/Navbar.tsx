import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import "./Navbar.css";
import arrow from "../../assets/icons/Downarrow.svg";
import bell from "../../assets/icons/Bell.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user") || "null");
  });

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle login success
  const handleLoginSuccess = (credentialResponse) => {
    if (credentialResponse?.credential) {
      try {
        const decoded = jwtDecode(credentialResponse.credential);
        const userData = {
          name: decoded.name,
          email: decoded.email,
          picture: decoded.picture,
        };

        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
      } catch (error) {
        console.error("Error decoding JWT:", error);
      }
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    googleLogout();
    localStorage.removeItem("user");
    setUser(null);
  };

  // **Dynamic Title Mapping**
  const titleMap: { [key: string]: string } = {
    "/": "Dashboard",
    "/users": "Users",
    "/responses": "Responses",
    "/listings": "Manage Listing",
    "/bookings": "Bookings",
    "/faqs": "FAQs",
    "/blogs": "Blogs",
  };

  // Get the dynamic title based on the route
  const currentTitle = titleMap[location.pathname] || "Dashboard";

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="navbar-title">
          <h1>{currentTitle}</h1>
          {/* Show different text based on the page */}
          <p>{currentTitle === "Dashboard" ? "Welcome Carspace Admin!" : `List of ${currentTitle}`}</p>
        </div>
        <div className="navbar-actions">
          <button className="notification-btn">
            <img src={bell} alt="bell" />
          </button>
          <div className="admin-profile">
            {user ? (
              <div className="user-profile">
                <img src={user.picture} alt="User Avatar" className="avatar" />
                <p>{user.name}</p>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <GoogleLogin
                onSuccess={handleLoginSuccess}
                onError={() => console.log("Login Failed")}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
