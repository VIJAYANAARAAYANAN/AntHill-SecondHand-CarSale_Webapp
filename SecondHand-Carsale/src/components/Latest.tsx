import React from "react";
import "./css/Latest.css";
import { Link } from "react-router-dom";
import usedCarsImage from "../assets/images/latest.svg";
import carKeysImage from "../assets/images/latnews.svg";
import newCarsImage from "../assets/images/news.svg";

const Latest: React.FC = () => {
  const newsArticles = [
    {
      id: 1,
      image: usedCarsImage,
      name: "John Doe",
      date: "22 Feb 2025",
      title: "How the maruti Invicto is a lesson In brand building........",
    },
    {
      id: 2,
      image: carKeysImage,
      name: "Jane Smith",
      date: "21 Feb 2025",
      title: "How the maruti Invicto is a lesson In brand building........",
    },
    {
      id: 3,
      image: newCarsImage,
      name: "Mike Johnson",
      date: "20 Feb 2025",
      title: "How the maruti Invicto is a lesson In brand building........",
    },
  ];

  return (
    <div className="latest-container">
      <div className="latest-header">
        <h1>Latest News & Articles from the Blog</h1>
        <p>
          Frequently asked questions ordered by popularity. Remember that if the
          visitor has not committed to the call to action, they may still have
          questions (doubts) that can be answered.
        </p>
      </div>

      <div className="news-grid">
        {newsArticles.map((article) => (
          <div
            key={article.id}
            className="news-card"
            style={{ backgroundImage: `url(${article.image})` }}
          >
            <div className="news-content">
              <div className="news-metadata">
                <span className="author">{article.name}</span>
                <span className="date">{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <Link to="#" className="read-more">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
