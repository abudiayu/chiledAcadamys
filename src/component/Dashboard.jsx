import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import Banner from "./Banner"; 
const Dashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [youtubeVideos, setYoutubeVideos] = useState([]);
 
  useEffect(() => {
    if (!user || !localStorage.getItem("token")) {
      navigate("/login");
    }
  }, 
  [navigate, user]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAzJvGLZSS_aY0YCEYEIONwCGmT0iJz5Bo&channelId=UCiqsylWBHLh32nnMnBaiZRQ&part=snippet,id&order=date&maxResults=10"
    )
      .then((res) => res.json())
      .then((data) => setYoutubeVideos(data.items || []))
      .catch(console.error);
  }, []);
  if (!user) return null;
  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <div className="logo">MyDashboard</div>
        <nav className="nav-links">
          <span>Home</span>
          <span>Profile</span>
          <span>Videos</span>
        </nav>
        <button onClick={handleLogout} className="logout-btn">
          Logout
        </button>
      </header>
      <Banner />
      <div className="dashboard-container">
        <div className="user-details">
          <h2>Welcome, {user.fullName}!</h2>
          <p><strong>Email:</strong> {user.email}</p>
        </div>

        <h3 className="videos-title">Latest YouTube Videos</h3>

        <div className="videos-grid">
          {youtubeVideos.map((video, index) => {
            const vidId = video.id.videoId;
            const link = `https://www.youtube.com/watch?v=${vidId}`;

            return (
              <div key={index} className="video-card">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <img
                    className="video-thumb"
                    src={video.snippet.thumbnails.high.url}
                    alt="thumbnail"
                  />
                </a>

                <div className="video-info">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-title"
                  >
                    {video.snippet.title}
                  </a>
                  <p className="video-desc">{video.snippet.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer className="dashboard-footer">
        © {new Date().getFullYear()} MyDashboard — All Rights Reserved
      </footer>
    </div>
  );
};

export default Dashboard;
