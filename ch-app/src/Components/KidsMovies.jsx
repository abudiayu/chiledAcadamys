import React, { useEffect, useState } from "react";
import { fetchKidsMovies } from "../Api/YoutubeApi";
import { formatVideos } from "../Utils/Response";

function KidsMovies() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchKidsMovies().then((items) => {
      setVideos(formatVideos(items));
    });
  }, []);

  return (
    <div>
      <h2>Kids Movies</h2>

      {videos.map((video) => (
        <iframe
          key={video.id}
          width="300"
          height="200"
          src={video.embedUrl}
          title={video.title}
          allowFullScreen
        />
      ))}
    </div>
  );
}

export default KidsMovies;
