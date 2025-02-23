import { Building2, User, Users } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import hall from "../assets/icons/hall.svg";
import user from "../assets/icons/blueuser.svg";
import "../PagesCss/Dashboard.css";

const bookingsData = [
  { name: "J", value: 90 },
  { name: "F", value: 70 },
  { name: "M", value: 110 },
  { name: "A", value: 110 },
  { name: "M", value: 35 },
  { name: "J", value: 80 },
  { name: "J", value: 40 },
  { name: "A", value: 0 },
];

const responsesData = [
  { name: "Jan", value: 60 },
  { name: "Feb", value: 55 },
  { name: "Mar", value: 35 },
  { name: "Apr", value: 35 },
  { name: "May", value: 50 },
  { name: "Jun", value: 35 },
  { name: "Jul", value: 35 },
  { name: "Aug", value: 65 },
  { name: "Sept", value: 65 },
  { name: "Oct", value: 35 },
];

const recentBookings = [
  {
    id: 1,
    name: "Amelia Tuner",
    time: "10h ago",
    avatar:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Amelia Tuner",
    time: "10h ago",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="stats-grid">
        <div className="static-charts">
          <div className="stat-card">
            <div className="stat-icon">
              <img src={hall} alt="user" />
            </div>
            <div className="stat-content">
              <div className="stat-value">
                <h3>Total Cars</h3>
                <p>4,098</p>
              </div>
              <div className="stat-description">
                43 more to break last month record
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <img src={user} alt="user" />
            </div>
            <div className="stat-content">
              <div className="stat-value">
                <h3>Total Users</h3>
                <p>1,098</p>
              </div>
              <div className="stat-description">
                43 more to break last month record
              </div>
            </div>
          </div>
        </div>
        <div className="bookings-card">
          <div className="bookings-header">
            <h3>Total Bookings</h3>
            <div className="bookings-stats">
              <div className="bookstat-value">
                <span className="bookings-value">42,098</span>
                <span className="bookings-comparison">Last month 5,222</span>
              </div>
              <span className="bookings-percentage">2%</span>
            </div>
          </div>
          <div className="bookings-chart">
            <BarChart
              width={500}
              height={170}
              data={bookingsData}
              barCategoryGap={40}
            >
              <CartesianGrid
                horizontal={true}
                vertical={false}
                strokeDasharray="3 3"
                stroke="#e0e0e0"
              />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Bar
                dataKey="value"
                fill="#85F4FA"
                radius={[5, 5, 5, 5]}
                barSize={10}
              />
            </BarChart>
          </div>
        </div>
      </div>

      {/* <div className="charts-grid">
        <div className="chart-card responses-chart">
          <h3>Overview (Responses)</h3>
          <BarChart
            width={600}
            height={300}
            data={responsesData}
            barCategoryGap={20}
          >
=            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#DDD"
            />

            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />

            <Bar
              dataKey="value"
              fill="#AE8FF7"
              radius={[5, 5, 0, 0]}
              barSize={10}
            />
          </BarChart>
        </div>

        <div className="chart-card recent-bookings">
          <h3>Recent Bookings</h3>
          <div className="bookings-list">
            {recentBookings.map((booking) => (
              <div key={booking.id} className="booking-item">
                <img
                  src={booking.avatar}
                  alt={booking.name}
                  className="booking-avatar"
                />
                <div className="booking-details">
                  <h4>{booking.name}</h4>
                  <p>{booking.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Dashboard;
