import { NavLink } from "react-router-dom";
import {
  Home,
  Users,
  BookOpen,
  Car,
  MessageSquare,
  FileText,
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    { icon: Home, text: "Home", path: "/" },
    { icon: Users, text: "Users", path: "/users" },
    { icon: BookOpen, text: "Responses", path: "/responses" },
    { icon: Car, text: "Manage listing", path: "/listings" },
    { icon: MessageSquare, text: "Bookings", path: "/bookings" },
    { icon: MessageSquare, text: "FAQs", path: "/faqs" },
    { icon: FileText, text: "Blogs", path: "/blogs" },
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        <h1 className="logo">Carspace</h1>
      </div>
      <nav className="nav-menu">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <item.icon size={24} className="nav-icon" />
            <span>{item.text}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
