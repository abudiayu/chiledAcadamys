import axiosInstance from "./Axios";

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const fetchKidsMovies = async () => {
  const response = await axiosInstance.get("/search", {
    params: {
      part: "snippet",
      q: "kids cartoon movie",
      type: "video",
      videoDuration: "long",
      safeSearch: "strict",
      maxResults: 50,
      key: API_KEY,
    },
  });

  return response.data.items;
};


