import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/SideNavigation/SideBar";
import Navbar from "./Components/Navbar/Navbar";
import Dashboard from "./Pages/Dashboard";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import ManageListing from "./Pages/Listings";

function App() {
  return (
    <>
      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          var credResponseDecoded = jwtDecode(credentialResponse.credential);
          console.log(credResponseDecoded);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      /> */}

      <Router>
        <div className="app">
          <Sidebar />
          <div className="main-content">
            <Navbar/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/listings" element={<ManageListing/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
